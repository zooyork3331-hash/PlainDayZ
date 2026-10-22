/* PLAIN DAYZ | Website renderer. Most edits go in config.js, not here. */
(() => {
  'use strict';
  const config = window.PLAIN_DAYZ_CONFIG;
  if (!config) {
    console.error('PLAIN DAYZ: config.js is missing or has a syntax error.');
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const byId = (id) => document.getElementById(id);
  const safeText = (value) => String(value == null ? '' : value);
  const txt = (id, value) => { const el = byId(id); if(el) el.textContent = safeText(value); };
  const node = (tag, className, content) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content != null) el.textContent = safeText(content);
    return el;
  };
  const httpsUrl = (url) => {
    try {
      const parsed = new URL(String(url || '').trim());
      return parsed.protocol === 'https:' ? parsed.href : null;
    } catch { return null; }
  };
  function setupLink(id, url, label, fallbackLabel) {
    const el = byId(id);
    if (!el) return;
    const safe = httpsUrl(url);
    if (safe) {
      el.href = safe;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
      el.removeAttribute('aria-disabled');
      el.classList.remove('missing-link');
      if (label) el.innerHTML = label;
    } else {
      // Leave a working on-page destination rather than a broken external link.
      el.href = ['nav-discord', 'events-discord'].includes(id) ? '#community' : '#support';
      el.removeAttribute('target');
      el.removeAttribute('rel');
      el.classList.add('missing-link');
      if (fallbackLabel) el.textContent = fallbackLabel;
      el.title = 'Add this URL in config.js';
    }
  }

  if (config.site) {
    txt('site-eyebrow', config.site.eyebrow);
    txt('hero-first', config.site.headlineFirst);
    // Heading text is entered as text, never as untrusted HTML.
    byId('hero-title').replaceChildren(node('span', '', config.site.headlineAccent));
    txt('hero-tagline', config.site.tagline);
    txt('footer-description', config.site.footerText);
    document.title = `${config.site.name || 'PLAIN DAYZ'} | The Community Survives`;
  }
  txt('year', new Date().getFullYear());
  const links = config.links || {};
  setupLink('nav-discord', links.discord, 'JOIN DISCORD <span aria-hidden="true">↗</span>', 'DISCORD SOON ↗');
  setupLink('events-discord', links.discord, 'OPEN DISCORD <span aria-hidden="true">↗</span>', 'DISCORD LINK SOON ↗');
  setupLink('community-discord', links.discord, 'JOIN OUR DISCORD <span aria-hidden="true">↗</span>', 'DISCORD LINK SOON ↗');
  setupLink('support-link', links.support, 'CONTACT SUPPORT <span aria-hidden="true">↗</span>', 'SUPPORT LINK SOON ↗');

  const servers = Array.isArray(config.servers) ? config.servers : [];
  const serverList = byId('server-list');
  servers.forEach((server, index) => {
    const card = node('article', 'server-card');
    const visual = node('div', 'server-visual');
    visual.append(node('span', 'server-number', String(index + 1).padStart(2, '0')),
                  node('span', 'server-badge', server.status || 'DETAILS SOON'));
    const content = node('div', 'server-content');
    content.append(node('div', 'server-subtitle', server.subtitle),node('h3', '', server.name));
    const specs = node('div', 'server-specs');
    [server.map, server.playstyle].filter(Boolean).forEach(item => specs.append(node('span', '', item)));
    content.append(specs, node('p', 'server-description', server.description));
    const features = node('div', 'feature-list');
    (Array.isArray(server.features) ? server.features : []).forEach(item => features.append(node('span', '', item)));
    content.append(features);
    const footer = node('div', 'server-card-footer');
    const ip = node('div', 'server-address');
    ip.append(node('strong', '', 'SERVER ADDRESS'));
    const validAddress = String(server.address || '').trim();
    const validPort = String(server.port || '').trim();
    const connection = validAddress ? validAddress + (validPort ? ':' + validPort : '') : '';
    ip.append(node('span', '', connection || 'COMING SOON'));
    const copy = node('button', 'copy-ip', connection ? 'COPY ADDRESS' : 'ADDRESS PENDING');
    copy.type = 'button';
    copy.disabled = !connection;
    copy.title = connection ? 'Copy the server address to your clipboard' : 'Set address and port in config.js';
    copy.addEventListener('click', async () => {
      try {
        if(navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(connection);
        else {
          const text = document.createElement('textarea'); text.value = connection;
          text.setAttribute('readonly',''); text.style.position = 'fixed'; text.style.opacity = '0';
          document.body.append(text); text.select();
          if (!document.execCommand('copy')) throw new Error('Copy unavailable');
          text.remove();
        }
        copy.textContent = 'COPIED ✓';
      } catch(e) {
        copy.textContent = 'SELECT ADDRESS ABOVE';
      }
    });
    footer.append(ip, copy);
    content.append(footer);
    card.append(visual, content);
    serverList.append(card);
  });
  if (!servers.length) serverList.append(node('p', '', 'Server details are coming soon.'));

  const eventList = byId('event-list');
  (Array.isArray(config.events) ? config.events : []).forEach(event => {
    const item = node('article', 'event-row');
    const date = node('div', 'event-date');
    date.append(node('strong', '', event.day),node('small', '', event.month));
    const body = node('div', 'event-body');
    body.append(node('span', 'event-type', event.type),node('h3', '', event.title),node('p', '', event.description));
    item.append(date, body, node('span', 'event-arrow', '↗'));
    eventList.append(item);
  });
  if (!eventList.children.length) eventList.append(node('p', '', 'New events will be announced soon.'));

  const staffList = byId('staff-list');
  (Array.isArray(config.staff) ? config.staff : []).forEach(person => {
    const card = node('article', 'staff-card');
    card.append(node('div', 'staff-avatar', person.initials || 'PD'),node('span', 'staff-role', person.role),node('h3', '', person.name),node('p', '', person.bio));
    staffList.append(card);
  });
  if (!staffList.children.length) staffList.append(node('p', '', 'Staff information coming soon.'));

  const menuToggle = $('.menu-toggle');
  const nav = byId('primary-nav');
  function closeMenu() {nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');}
  menuToggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open',open);
    menuToggle.setAttribute('aria-expanded',String(open));
    menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {if(e.key === 'Escape') closeMenu();});

  // Atmospheric decoration; decorative only, reduced when the user prefers less motion.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const emberContainer = byId('embers');
    const rand = (seed) => { const x = Math.sin(seed * 78.233) * 43758.5453; return x - Math.floor(x); };
    for(let i=0;i<19;i++) {
      const ember = node('i', 'ember');
      const size = 1 + rand(i+5)*3;
      ember.style.cssText = `width:${size}px;height:${size}px;top:${25+rand(i+19)*70}%;left:${47+rand(i+53)*51}%;animation-delay:${-(rand(i+43)*13)}s;animation-duration:${5+rand(i+31)*8}s`;
      emberContainer.append(ember);
    }
  }
})();
