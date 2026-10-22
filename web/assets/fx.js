/* Efectos visuales (opcionales). Si este archivo falla o el navegador no soporta algo,
   la web sigue funcionando igual: app.js solo llama a FX si existe. */
(() => {
  'use strict';
  const root = document.documentElement;
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = () => mq.matches;
  const $ = (s) => document.querySelector(s);
  const T = (n) => n.toFixed(1);

  /* ---------- 1) Cambio de tema: iris en forma de flor que florece desde el botón ---------- */
  function flowerFrames(cx, cy, R, spin) {
    const STEPS = 20, N = 84, PETALS = 7, out = [];
    for (let s = 0; s <= STEPS; s++) {
      const t = s / STEPS, rad = R * (1 - Math.pow(1 - t, 3));
      const amp = 0.42 * Math.pow(1 - t, 1.4), rot = spin * t, pts = [];
      for (let i = 0; i < N; i++) {
        const th = (Math.PI * 2 * i) / N, r = rad * (1 + amp * Math.cos(PETALS * th + rot));
        pts.push(`${T(cx + r * Math.cos(th + rot / PETALS))}px ${T(cy + r * Math.sin(th + rot / PETALS))}px`);
      }
      out.push({ clipPath: `polygon(${pts.join(',')})`, offset: t });
    }
    return out;
  }

  function theme(run, ev) {
    const btn = ev && ev.currentTarget && ev.currentTarget.getBoundingClientRect ? ev.currentTarget : null;
    if (btn) { btn.classList.remove('spin'); void btn.offsetWidth; btn.classList.add('spin'); setTimeout(() => btn.classList.remove('spin'), 800); }
    if (reduced()) return run();

    const r = btn ? btn.getBoundingClientRect() : { left: innerWidth / 2, top: 0, width: 0, height: 0 };
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const R = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy)) * 1.08;
    const spin = (Math.random() < 0.5 ? -1 : 1) * 2.2, DUR = 950;

    try {
      if (document.startViewTransition) {
        root.classList.add('vt-theme');
        const vt = document.startViewTransition(run);
        vt.ready.then(() => {
          root.animate({ clipPath: flowerFrames(cx, cy, R, spin).map((f) => f.clipPath) },
            { duration: DUR, easing: 'linear', pseudoElement: '::view-transition-new(root)' });
          root.animate({ filter: ['brightness(1.35) saturate(1.6) hue-rotate(25deg)', 'none'] },
            { duration: DUR, easing: 'ease-out', pseudoElement: '::view-transition-new(root)' });
        }).catch(() => {});
        vt.finished.finally(() => root.classList.remove('vt-theme'));
        return;
      }
      /* Alternativa: una flor de color del nuevo tema que se expande y se retira. */
      const next = root.dataset.theme === 'dark' ? '#f6f7fb' : '#0b0d14';
      const ov = document.createElement('div');
      ov.className = 'fx-iris'; ov.setAttribute('aria-hidden', 'true'); ov.style.background = next;
      document.body.append(ov);
      const a = ov.animate(flowerFrames(cx, cy, R, spin), { duration: DUR - 250, easing: 'linear', fill: 'forwards' });
      a.onfinish = () => { run(); ov.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250 }).onfinish = () => ov.remove(); };
    } catch (e) { run(); }
  }

  /* ---------- 2) Cambio de página: salida suave + barrido de luz ---------- */
  let routeBar;
  function page(go) {
    const app = $('#app');
    if (reduced() || !app || !app.animate) return go();
    if (!routeBar) { routeBar = document.createElement('div'); routeBar.className = 'fx-route'; routeBar.setAttribute('aria-hidden', 'true'); document.body.append(routeBar); }
    routeBar.animate([{ transform: 'scaleX(0)', opacity: 1 }, { transform: 'scaleX(1)', opacity: 1, offset: .6 }, { transform: 'scaleX(1)', opacity: 0 }], { duration: 700, easing: 'ease-out' });
    app.classList.add('leaving');
    setTimeout(() => { go(); app.classList.remove('leaving'); }, 160);
  }

  window.FX = { theme, page };

  /* ---------- 3) Micro-efectos ---------- */
  /* Foco de luz que sigue al cursor + ligera inclinación en las tarjetas de inicio. */
  document.addEventListener('pointermove', (e) => {
    if (!fine.matches || reduced() || !e.target.closest) return;
    const c = e.target.closest('.tile, .tool');
    if (!c) return;
    const b = c.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
    c.style.setProperty('--mx', T(x) + 'px'); c.style.setProperty('--my', T(y) + 'px');
    if (c.classList.contains('tile')) {
      c.style.setProperty('--rx', T((0.5 - y / b.height) * 7) + 'deg');
      c.style.setProperty('--ry', T((x / b.width - 0.5) * 9) + 'deg');
    }
  }, { passive: true });
  document.addEventListener('pointerout', (e) => {
    const c = e.target.closest && e.target.closest('.tile');
    if (c && !c.contains(e.relatedTarget)) { c.style.removeProperty('--rx'); c.style.removeProperty('--ry'); }
  });

  /* Onda al pulsar botones. */
  document.addEventListener('pointerdown', (e) => {
    if (reduced() || !e.target.closest) return;
    const b = e.target.closest('.btn, .seg button, .btn-theme, .btn-menu, .tile');
    if (!b) return;
    const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2, s = document.createElement('span');
    s.className = 'ripple'; s.setAttribute('aria-hidden', 'true');
    s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
    b.append(s); s.addEventListener('animationend', () => s.remove());
  });

  /* Al escribir en el buscador no se repiten las animaciones de entrada (evita parpadeos). */
  document.addEventListener('input', (e) => {
    if (e.target.id !== 'q') return;
    root.classList.add('no-enter'); clearTimeout(root._ne); root._ne = setTimeout(() => root.classList.remove('no-enter'), 450);
  }, true);

  /* Aparición de las herramientas al hacer scroll. Sin IntersectionObserver se ven todas directamente. */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      let i = 0;
      es.forEach((en) => { if (en.isIntersecting) { en.target.style.animationDelay = (i++ * 70) + 'ms'; en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -6% 0px' });
    const scan = () => document.querySelectorAll('#app .tool:not(.in)').forEach((el) => io.observe(el));
    root.classList.add('fx');
    const app = $('#app');
    if (app) new MutationObserver(scan).observe(app, { childList: true });
    scan();
  }

  /* Barra de progreso de lectura. */
  const prog = document.createElement('div'); prog.className = 'fx-progress'; prog.setAttribute('aria-hidden', 'true'); document.body.append(prog);
  let tick = false;
  addEventListener('scroll', () => {
    if (tick) return; tick = true;
    requestAnimationFrame(() => { const m = root.scrollHeight - innerHeight; prog.style.transform = `scaleX(${m > 0 ? Math.min(1, scrollY / m) : 0})`; tick = false; });
  }, { passive: true });

  /* ---------- 4) Fondo de nodos conectados (ligero; se pausa si la pestaña no está visible) ---------- */
  function net() {
    if (reduced() || !window.requestAnimationFrame) return;
    const cv = document.createElement('canvas'), ctx = cv.getContext && cv.getContext('2d');
    if (!ctx) return;
    cv.className = 'fx-net'; cv.setAttribute('aria-hidden', 'true'); document.body.prepend(cv);
    let w, h, dpr, nodes = [], mx = -999, my = -999, rgb = '150,130,255', raf = 0;
    const hex = () => {
      const v = getComputedStyle(root).getPropertyValue('--accent').trim().replace('#', '');
      if (v.length === 6) rgb = [0, 2, 4].map((i) => parseInt(v.substr(i, 2), 16)).join(',');
    };
    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5); w = innerWidth; h = innerHeight;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(w < 700 ? 22 : 48, Math.round((w * h) / 24000));
      nodes = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28 }));
    };
    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (reduced()) { ctx.clearRect(0, 0, w, h); return; }
      ctx.clearRect(0, 0, w, h);
      for (const p of nodes) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
        if (d < 120 && d > 0) { p.x += (dx / d) * .6; p.y += (dy / d) * .6; }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.strokeStyle = `rgba(${rgb},${(1 - d / 130) * .5})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const dm = Math.hypot(a.x - mx, a.y - my);
        if (dm < 160) { ctx.strokeStyle = `rgba(${rgb},${(1 - dm / 160) * .7})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke(); }
        ctx.fillStyle = `rgba(${rgb},.85)`; ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, 6.283); ctx.fill();
      }
    };
    const start = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };
    hex(); size(); start();
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(size, 200); });
    addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
    document.addEventListener('pointerleave', () => { mx = my = -999; });
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    new MutationObserver(hex).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  }
  net();
})();
