function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function reset_color() {
  const targetId = window.location.hash.slice(1);
  if (!targetId) return;

  const el = document.getElementById(targetId);
  if (!el) return;

  await sleep(1000);
  window.location.hash = '';
}

window.addEventListener('hashchange', reset_color);

window.addEventListener('load', reset_color);
