/* PLAIN DAYZ | Renders Banov & Onforin server hub information from config.js */
(() => {
  'use strict';
  const config = window.PLAIN_DAYZ_CONFIG;
  const slug = document.body.dataset.server;
  const servers = config && Array.isArray(config.servers) ? config.servers : [];
  const server = servers.find(item => String(item.slug || '').toLowerCase() === slug);
  const byId = id => document.getElementById(id);
  const asText = value => String(value == null ? '' : value);
  const text = (id, value) => { const el = byId(id); if (el) el.textContent = asText(value); };
  const create = (tag, cls, value) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (value != null) el.textContent = asText(value);
    return el;
  };
  const safeHttps = value => {
    try { const url = new URL(String(value)); return url.protocol === 'https:' ? url.href : null; }
    catch (_) { return null; }
  };
  const empty = (parent, headline, message) => {
    const box = create('div', 'hub-placeholder');
    box.append(create('strong', '', headline), create('p', '', message));
    parent.append(box);
  };
  if (!server) {
    text('server-name', 'SERVER NOT FOUND');
    text('server-lead', 'Return to the homepage and choose an available server.');
    return;
  }

  const title = server.name || slug.toUpperCase();
  text('server-name', title);
  text('crumb-server', title);
  text('server-lead', server.description || 'Explore this PLAIN DAYZ server.');
  text('server-map', server.map || 'MAP DETAILS SOON');
  text('server-style', server.playstyle || 'GAMEPLAY DETAILS SOON');
  text('guide-server-name', title);
  text('mod-server-name', title);
  document.title = title + ' | PLAIN DAYZ';
  text('year', new Date().getFullYear());

  const connection = server.address ? String(server.address).trim() + (server.port ? ':' + String(server.port).trim() : '') : '';
  text('server-address', connection || 'ADDRESS COMING SOON');
  const copy = byId('copy-address');
  if (!connection) copy.disabled = true;
  copy.addEventListener('click', async () => {
    if (!connection) return;
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(connection);
      else {
        const temp = create('textarea');
        temp.value = connection;
        temp.setAttribute('readonly', '');
        temp.style.cssText = 'position:fixed;opacity:0;left:-9999px';
        document.body.append(temp);
        temp.select();
        if (!document.execCommand('copy')) throw new Error('Copy not supported');
        temp.remove();
      }
      copy.textContent = 'COPIED ✓';
    } catch (_) {
      copy.textContent = 'SELECT THE ADDRESS';
    }
  });

  const modsList = byId('mods-list');
  const mods = Array.isArray(server.mods) ? server.mods : [];
  if (!mods.length) {
    empty(modsList, 'MOD LIST COMING SOON', 'The server owner has not published a mod list here yet. Check back for required mods and Workshop links.');
  } else {
    mods.forEach(entry => {
      const row = create('div', 'hub-mod-item');
      const name = typeof entry === 'string' ? entry : entry.name || 'UNNAMED MOD';
      row.append(create('span', '', name));
      const url = typeof entry === 'object' && entry !== null ? safeHttps(entry.url) : null;
      if (url) {
        const link = create('a', '', 'WORKSHOP ↗');
        link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
        row.append(link);
      }
      modsList.append(row);
    });
  }

  const other = servers.find(item => item.slug !== slug && typeof item.page === 'string' && /^[a-z0-9-]+\.html$/i.test(item.page));
  const otherLink = byId('other-server-link');
  if (other) {
    otherLink.href = other.page;
    otherLink.textContent = 'EXPLORE ' + asText(other.name).toUpperCase() + ' →';
  } else otherLink.hidden = true;
})();
