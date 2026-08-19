const menuButton = document.querySelector('#menuButton');
const sidebar = document.querySelector('.sidebar');
const toast = document.querySelector('#toast');
const tipsButton = document.querySelector('#tipsButton');
const tipsModal = document.querySelector('#tipsModal');
const closeTips = document.querySelector('#closeTips');
const gotItButton = document.querySelector('#gotItButton');
const semesterSelect = document.querySelector('#semesterSelect');

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

menuButton?.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    if (window.innerWidth <= 640) {
      sidebar.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
});

tipsButton?.addEventListener('click', () => {
  tipsModal.hidden = false;
  closeTips.focus();
});

function hideTips() {
  tipsModal.hidden = true;
  tipsButton.focus();
}

closeTips?.addEventListener('click', hideTips);
gotItButton?.addEventListener('click', () => {
  hideTips();
  showToast('Nice — your focus session is ready when you are.');
});
tipsModal?.addEventListener('click', (event) => {
  if (event.target === tipsModal) hideTips();
});

semesterSelect?.addEventListener('change', (event) => {
  showToast(`Showing performance for ${event.target.value.toLowerCase()}.`);
});

document.querySelectorAll('.task-arrow').forEach((button) => {
  button.addEventListener('click', () => showToast('Assignment details opened.'));
});

document.querySelector('.notification')?.addEventListener('click', () => {
  showToast('You have 2 new learning reminders.');
});
