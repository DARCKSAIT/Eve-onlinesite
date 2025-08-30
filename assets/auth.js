const ASSET_BASE = window.location.pathname.includes('/posts/') ? '../assets/' : 'assets/';
const EXEMPT = ['login.html', 'premium-isk.html'];

function requireLogin() {
  const path = window.location.pathname.split('/').pop();
  if (EXEMPT.includes(path)) return;
  const token = localStorage.getItem('access_token');
  const expiry = parseInt(localStorage.getItem('token_expires') || '0', 10);
  if (!token || Date.now() > expiry) {
    const target = ASSET_BASE === '../assets/' ? '../login.html' : 'login.html';
    window.location.href = target;
  }
}

async function verifyToken(token) {
  const res = await fetch('https://login.eveonline.com/oauth/verify', {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('verify failed');
  return await res.json();
}

async function loadUserStatus() {
  const token = localStorage.getItem('access_token');
  if (!token) return null;
  try {
    const data = await verifyToken(token);
    localStorage.setItem('character_id', data.CharacterID);
    localStorage.setItem('character_name', data.CharacterName);
    const res = await fetch(ASSET_BASE + 'users.json');
    const users = await res.json();
    const record = users.find(u => u.character_id === data.CharacterID);
    const premium = record ? record.premium : false;
    localStorage.setItem('is_premium', premium ? 'true' : 'false');
    return { ...data, premium };
  } catch (e) {
    console.error(e);
    return null;
  }
}

requireLogin();
if (!EXEMPT.includes(window.location.pathname.split("/").pop())) {
  loadUserStatus();
}
