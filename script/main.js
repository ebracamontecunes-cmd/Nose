const sidebar_open = document.getElementById('sidebar-open');
const sidebar_close = document.getElementById('sidebar-close');
const sidebar = document.getElementById('sidebar');

sidebar_open.addEventListener('click', () => { // Changes the width of the sidebar when pressing the menu icon so that it shows/hides, depending on its current state
	sidebar.classList.add('open');
});

sidebar_close.addEventListener('click', () => {
	sidebar.classList.remove('open');
});