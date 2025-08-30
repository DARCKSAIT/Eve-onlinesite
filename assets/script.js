async function loadPosts() {
  const basePath = window.location.pathname.includes('/posts/') ? '../assets/' : 'assets/';
  const response = await fetch(basePath + 'posts.json');
  return await response.json();
}

function createPostLink(post) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = post.url;
  a.textContent = post.title;
  li.appendChild(a);
  return li;
}

function groupByCategory(posts) {
  const groups = {};
  posts.forEach(p => {
    if (!groups[p.category]) {
      groups[p.category] = { label: p.category_label, posts: [] };
    }
    groups[p.category].posts.push(p);
  });
  return groups;
}

function renderArchive(posts) {
  const search = document.getElementById('search');
  const list = document.getElementById('archive-list');
  if (!search || !list) return;

  function display(items) {
    list.innerHTML = '';
    items.forEach(p => {
      const li = createPostLink(p);
      list.appendChild(li);
    });
  }

  display(posts);

  search.addEventListener('input', () => {
    const q = search.value.toLowerCase();
    const filtered = posts.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.category_label.toLowerCase().includes(q) ||
      p.sources.some(s => s.toLowerCase().includes(q))
    );
    display(filtered);
  });
}

function renderIndex(posts) {
  const latest = document.getElementById('latest');
  const catSections = document.getElementById('category-sections');
  if (!latest || !catSections) return;

  const latestList = latest.querySelector('ul');
  posts.slice(0, 5).forEach(p => {
    latestList.appendChild(createPostLink(p));
  });

  const groups = groupByCategory(posts);
  Object.keys(groups).forEach(key => {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = groups[key].label;
    section.appendChild(h2);
    const ul = document.createElement('ul');
    groups[key].posts.forEach(p => ul.appendChild(createPostLink(p)));
    section.appendChild(ul);
    catSections.appendChild(section);
  });
}

function renderCategory(posts) {
  const container = document.getElementById('category-list');
  if (!container) return;
  const cat = container.dataset.category;
  const filtered = posts.filter(p => p.category === cat);
  filtered.forEach(p => container.appendChild(createPostLink(p)));
}

 codex/set-up-nova-vox-interstellar-static-site-3r16vt
 codex/set-up-nova-vox-interstellar-static-site-g0i3pj
 main
function highlightNav() {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
}

 codex/set-up-nova-vox-interstellar-static-site-3r16vt
 main
 main
document.addEventListener('DOMContentLoaded', async () => {
  let posts = await loadPosts();
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  renderIndex(posts);
  renderCategory(posts);
  renderArchive(posts);
 codex/set-up-nova-vox-interstellar-static-site-3r16vt
  highlightNav();
 codex/set-up-nova-vox-interstellar-static-site-g0i3pj
  highlightNav();
 main
 main
});
