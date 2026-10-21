/* Apps & Tools · DAW 1
   Lee window.SITE y window.SUBJECTS (carpeta data/) y pinta la web.
   No hay nada de contenido aquí: para añadir cosas, edita los archivos de data/. */
(() => {
  'use strict';

  const SITE = window.SITE || {};
  const REPO = SITE.repo || '';
  const PLATFORMS = { windows: 'Windows', macos: 'macOS', linux: 'Linux', web: 'Web' };
  const OS_KEYS = ['windows', 'macos', 'linux'];
  const STATUS = {
    completo: { label: 'Completa', cls: 'ok' },
    'en-progreso': { label: 'En construcción', cls: 'wip' },
    pendiente: { label: 'Pendiente', cls: 'todo' }
  };

  /* ---------- utilidades ---------- */
  const $ = (sel) => document.querySelector(sel);

  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      el.append(kid.nodeType ? kid : document.createTextNode(kid));
    }
    return el;
  }

  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  const norm = (t) => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  /* ---------- datos ---------- */
  const subjects = (window.SUBJECTS || [])
    .map((s, i) => ({ ...s, _order: s.order ?? 1000 + i }))
    .sort((a, b) => a._order - b._order);

  const sectionsOf = (s) => s.sections || [];
  const toolsOf = (s) => sectionsOf(s).flatMap((sec) => sec.tools || []);
  const statusOf = (s) => s.status || (toolsOf(s).length ? 'en-progreso' : 'pendiente');
  const groups = () => {
    const map = new Map();
    subjects.forEach((s) => {
      const g = s.group || 'Asignaturas';
      if (!map.has(g)) map.set(g, []);
      map.get(g).push(s);
    });
    return [...map];
  };

  const state = { os: null, q: '' };

  const matchesOS = (t) =>
    !state.os || !t.platforms || t.platforms.includes(state.os) || t.platforms.includes('web');

  const haystack = (t, s, sec) =>
    norm(
      [
        s.name, sec.title, t.name, t.description, t.license,
        ...(t.badges || []), ...(t.notes || []),
        ...Object.values(t.os || {}).flatMap((o) => [o.pros, o.cons])
      ].join(' ')
    );

  const route = () => decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  const issueUrl = REPO ? `${REPO}/issues/new` : null;

  /* ---------- tema ---------- */
  const THEME_KEY = 'theme';
  let userTheme = null; // elección explícita del usuario en esta sesión

  const readTheme = () => {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  };
  const writeTheme = (t) => {
    try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* sin almacenamiento */ }
  };
  const currentTheme = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    const label = t === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';
    document.querySelectorAll('[data-theme-toggle]').forEach((b) => {
      b.setAttribute('aria-label', label);
      b.setAttribute('title', label);
    });
  }

  function toggleTheme() {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    userTheme = next;
    applyTheme(next);
    writeTheme(next);
  }

  /* ---------- piezas ---------- */
  function statusChip(s) {
    const st = STATUS[statusOf(s)] || STATUS.pendiente;
    return h('span', { class: 'chip' }, h('span', { class: `dot ${st.cls}`, 'aria-hidden': 'true' }), st.label);
  }

  function renderTool(t, crumb) {
    const name = t.url ? h('a', { href: t.url, target: '_blank', rel: 'noopener' }, t.name) : t.name;

    const osKeys = OS_KEYS.filter((k) => t.os && t.os[k]);
    const shown = state.os ? osKeys.filter((k) => k === state.os) : osKeys;
    const osBlock = shown.length
      ? h(
          'details',
          { class: 'os', open: state.os ? true : null },
          h('summary', {}, state.os ? `Ventajas y desventajas en ${PLATFORMS[state.os]}` : 'Ventajas y desventajas por sistema'),
          h(
            'div',
            { class: 'os-grid' },
            shown.map((k) =>
              h(
                'section',
                { class: 'os-col' },
                h('h4', {}, PLATFORMS[k]),
                h('p', {}, h('strong', {}, 'Ventajas. '), t.os[k].pros),
                h('p', {}, h('strong', {}, 'Desventajas. '), t.os[k].cons)
              )
            )
          )
        )
      : null;

    return h(
      'article',
      { class: 'tool' },
      crumb && h('p', { class: 'crumb' }, crumb),
      h(
        'div',
        { class: 'tool-head' },
        h('h3', {}, name),
        h(
          'div',
          { class: 'tags' },
          (t.platforms || []).map((p) => h('span', { class: 'plat' + (state.os === p ? ' is-on' : '') }, PLATFORMS[p] || p)),
          (t.badges || []).map((b) => h('span', { class: 'badge' }, b))
        )
      ),
      t.description && h('p', { class: 'tool-desc' }, t.description),
      t.license && h('p', { class: 'tool-extra' }, h('strong', {}, 'Licencia. '), t.license),
      t.notes && t.notes.length && h('ul', { class: 'notes' }, t.notes.map((n) => h('li', {}, n))),
      osBlock
    );
  }

  const suggestLink = (text) =>
    issueUrl ? h('a', { href: issueUrl, target: '_blank', rel: 'noopener' }, text) : text;

  /* ---------- vistas ---------- */
  function viewHome() {
    const total = subjects.reduce((n, s) => n + toolsOf(s).length, 0);
    const withContent = subjects.filter((s) => toolsOf(s).length).length;

    const tile = (s) => {
      const n = toolsOf(s).length;
      const secs = sectionsOf(s).length;
      const pending = statusOf(s) === 'pendiente';
      return h(
        'a',
        { class: 'tile' + (pending ? ' is-pending' : ''), href: `#/${s.id}` },
        h('span', { class: 'tile-name' }, s.name),
        statusChip(s),
        h('span', { class: 'tile-meta' }, n ? `${plural(secs, 'categoría', 'categorías')} · ${plural(n, 'herramienta', 'herramientas')}` : 'Todavía sin herramientas')
      );
    };

    return h(
      'div',
      {},
      h('h1', {}, 'Herramientas y alternativas para DAW\u00A01'),
      h('p', { class: 'lede' }, SITE.intro),
      SITE.notice && h('p', { class: 'notice' }, SITE.notice),

      h(
        'section',
        { class: 'home-block' },
        h('h2', {}, 'Asignaturas'),
        h('p', { class: 'lede', style: 'margin:-.5rem 0 1.25rem;font-size:1rem' },
          `${plural(withContent, 'asignatura tiene', 'asignaturas tienen')} contenido de ${subjects.length}; ${plural(total, 'herramienta recopilada', 'herramientas recopiladas')} hasta ahora.`),
        groups().map(([g, list]) => [h('h3', { class: 'group-title' }, g), h('div', { class: 'tiles' }, list.map(tile))])
      ),

      h(
        'section',
        { class: 'home-block' },
        h('h2', {}, 'Cómo está pensada'),
        h(
          'dl',
          { class: 'how' },
          h('div', {}, h('dt', {}, 'Con alternativas'), h('dd', {}, 'Cada herramienta del curso viene con equivalentes para quien prefiera usar otro software.')),
          h('div', {}, h('dt', {}, 'Para tu sistema'), h('dd', {}, 'Filtra por Windows, macOS o Linux. Se priorizan las herramientas multiplataforma.')),
          h('div', {}, h('dt', {}, 'Siempre en obras'), h('dd', {}, 'Se amplía y reorganiza durante el curso 2026–2027 con nuevas asignaturas y herramientas.'))
        )
      ),

      h(
        'section',
        { class: 'home-block' },
        h('h2', {}, '¿Falta algo?'),
        h('p', { class: 'lede', style: 'margin-top:0;font-size:1rem' }, 'Las contribuciones, correcciones y sugerencias son bienvenidas para mantener la guía útil y actualizada.'),
        h(
          'div',
          { class: 'cta-row' },
          issueUrl && h('a', { class: 'btn primary', href: issueUrl, target: '_blank', rel: 'noopener' }, 'Proponer una herramienta'),
          REPO && h('a', { class: 'btn', href: REPO, target: '_blank', rel: 'noopener' }, 'Ver el repositorio')
        )
      )
    );
  }

  function viewSubject(s) {
    const page = h(
      'div',
      {},
      h('div', { class: 'page-head' }, statusChip(s), h('h1', {}, s.name), s.description && h('p', { class: 'lede' }, s.description))
    );

    if (!toolsOf(s).length) {
      page.append(
        h('div', { class: 'empty' },
          h('h2', {}, 'Esta asignatura todavía no tiene herramientas'),
          h('p', {}, 'Aún no se ha recopilado nada aquí. Si sabes qué software se usa, ', suggestLink('propón una herramienta'), '.')
        )
      );
      return page;
    }

    let visible = 0;
    sectionsOf(s).forEach((sec) => {
      const tools = (sec.tools || []).filter(matchesOS);
      if (!tools.length) return;
      visible += tools.length;
      page.append(
        h('section', { class: 'sec' },
          h('h2', {}, sec.title),
          sec.description && h('p', { class: 'sec-desc' }, sec.description),
          h('div', { class: 'tools' }, tools.map((t) => renderTool(t))),
          sec.note && h('p', { class: 'sec-note' }, sec.note)
        )
      );
    });

    if (!visible) {
      page.append(
        h('div', { class: 'empty' },
          h('h2', {}, `Nada para ${PLATFORMS[state.os]} todavía`),
          h('p', {}, 'Ninguna herramienta de esta asignatura está marcada como compatible con ese sistema. Quita el filtro para ver todas, o ', suggestLink('sugiere una alternativa'), '.')
        )
      );
    }
    return page;
  }

  function viewResults() {
    const terms = norm(state.q).split(/\s+/).filter(Boolean);
    const found = [];
    subjects.forEach((s) =>
      sectionsOf(s).forEach((sec) =>
        (sec.tools || []).forEach((t) => {
          if (!matchesOS(t)) return;
          const hs = haystack(t, s, sec);
          if (terms.every((w) => hs.includes(w))) found.push({ s, sec, t });
        })
      )
    );

    const osNote = state.os ? ` para ${PLATFORMS[state.os]}` : '';
    const wrap = h('div', {}, h('p', { class: 'results-title', role: 'status' },
      found.length ? `${plural(found.length, 'resultado', 'resultados')} para «${state.q}»${osNote}` : `Sin resultados para «${state.q}»${osNote}`));

    if (!found.length) {
      wrap.append(h('div', { class: 'empty' },
        h('h2', {}, 'No hay nada con ese nombre… todavía'),
        h('p', {}, 'La guía está en construcción. Prueba con otra palabra o ', suggestLink('propón la herramienta que echas en falta'), '.')
      ));
      return wrap;
    }

    const bySubject = new Map();
    found.forEach((r) => {
      if (!bySubject.has(r.s)) bySubject.set(r.s, []);
      bySubject.get(r.s).push(r);
    });
    bySubject.forEach((list, s) =>
      wrap.append(
        h('section', { class: 'results-group' },
          h('h2', {}, h('a', { href: `#/${s.id}` }, s.name)),
          h('div', { class: 'tools' }, list.map((r) => renderTool(r.t, r.sec.title)))
        )
      )
    );
    return wrap;
  }

  function viewNotFound() {
    return h('div', { class: 'empty' },
      h('h2', {}, 'Esa página no existe'),
      h('p', {}, 'Puede que la asignatura se haya renombrado. ', h('a', { href: '#/' }, 'Volver al inicio'), '.')
    );
  }

  /* ---------- render ---------- */
  function renderNav() {
    const current = route();
    const link = (href, label, s, active) =>
      h('a', { href, class: s && statusOf(s) === 'pendiente' ? 'is-pending' : null, 'aria-current': active ? 'page' : null },
        s && h('span', { class: `dot ${(STATUS[statusOf(s)] || STATUS.pendiente).cls}`, 'aria-hidden': 'true' }),
        label);

    const nav = $('#nav');
    nav.replaceChildren(
      h('li', {}, link('#/', 'Inicio', null, current === '' && !state.q)),
      ...groups().map(([g, list]) =>
        h('li', {}, h('span', { class: 'nav-label' }, g),
          h('ul', {}, list.map((s) => h('li', {}, link(`#/${s.id}`, s.name, s, current === s.id && !state.q)))))
      )
    );
  }

  function renderMain() {
    const id = route();
    let view, title = SITE.title || 'Apps & Tools';
    if (state.q) {
      view = viewResults();
      title = `Búsqueda · ${title}`;
    } else if (!id) {
      view = viewHome();
    } else {
      const s = subjects.find((x) => x.id === id);
      view = s ? viewSubject(s) : viewNotFound();
      if (s) title = `${s.name} · ${title}`;
    }
    $('#app').replaceChildren(view);
    document.title = title;
    renderNav();
  }

  /* ---------- menú móvil ---------- */
  const setNav = (open) => {
    document.body.classList.toggle('nav-open', open);
    $('#navToggle').setAttribute('aria-expanded', String(open));
  };

  /* ---------- arranque ---------- */
  function init() {
    $('#brandSub').textContent = SITE.course || '';
    document.querySelectorAll('[data-repo]').forEach((a) => {
      if (REPO) a.href = REPO + a.dataset.repo;
      else a.remove();
    });

    /* tema: se arranca con lo guardado o, si no hay, con la preferencia del sistema */
    applyTheme(currentTheme());
    document.querySelectorAll('[data-theme-toggle]').forEach((b) => b.addEventListener('click', toggleTheme));
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!readTheme() && !userTheme) applyTheme(e.matches ? 'dark' : 'light');
    });

    const osWrap = $('#os');
    const osBtns = [['', 'Todos'], ...OS_KEYS.map((k) => [k, PLATFORMS[k]])].map(([k, label]) =>
      h('button', { type: 'button', 'data-os': k, 'aria-pressed': String(!k) }, label)
    );
    osWrap.append(...osBtns);
    osWrap.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      state.os = b.dataset.os || null;
      osBtns.forEach((x) => x.setAttribute('aria-pressed', String((x.dataset.os || null) === state.os)));
      renderMain();
    });

    const q = $('#q');
    q.addEventListener('input', () => { state.q = q.value.trim(); renderMain(); });

    window.addEventListener('hashchange', () => {
      if (state.q) { state.q = ''; q.value = ''; }
      setNav(false);
      renderMain();
      window.scrollTo(0, 0);
      $('#app').focus({ preventScroll: true });
    });

    $('#navToggle').addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
    $('#scrim').addEventListener('click', () => setNav(false));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setNav(false);
      if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) { e.preventDefault(); q.focus(); }
    });

    renderMain();
  }

  init();
})();
