const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('is-open');
}
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const ways = {
  give: { label: 'MAKE GENEROSITY A HABIT', title: 'Good things start\nwith people like you.', description: 'Financial gifts help the Red Cross deliver its humanitarian mission. Choose an amount to explore a little generosity.', note: 'Interactive concept only. No payment is collected here.' },
  blood: { label: 'A PART OF YOU. A CHANCE FOR SOMEONE ELSE.', title: 'Some gifts can only\ncome from people.', description: 'Your next blood donation could help someone through surgery, cancer treatment, or an emergency. Explore eligibility and find an appointment through the official Red Cross Blood website.', action: 'Explore blood donation', url: 'https://www.redcrossblood.org/', note: 'Opens the official Red Cross Blood website in a new tab.' },
  time: { label: 'YOUR TIME HAS THE POWER TO HELP', title: 'Bring your heart.\nFind your people.', description: 'Help at a blood drive, support disaster relief, or explore other ways to serve. Discover local and virtual volunteer opportunities that fit your skills and schedule.', action: 'Find volunteer opportunities', url: 'https://www.redcross.org/volunteer/become-a-volunteer.html', note: 'Opens the official American Red Cross website in a new tab.' }
};
let currentWay = 'give';
let amount = 50;
let frequency = 'once';
const tabs = Array.from(document.querySelectorAll('[data-way]'));
const action = document.querySelector('#support-action');
const custom = document.querySelector('#custom-amount');
const dialog = document.querySelector('#gift-dialog');
const formatAmount = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
function updateGift() {
  if (currentWay !== 'give') return;
  action.textContent = `Explore a ${formatAmount(amount)} ${frequency === 'monthly' ? 'monthly ' : ''}gift ↗`;
  action.disabled = !Number.isFinite(amount) || amount < 1 || amount > 1000000;
}
function selectWay(way) {
  currentWay = way;
  const content = ways[way];
  tabs.forEach(tab => {
    const selected = tab.dataset.way === way;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  document.querySelector('#support-panel').setAttribute('aria-labelledby', `tab-${way}`);
  document.querySelector('#support-label').textContent = content.label;
  document.querySelector('#support-title').replaceChildren(...content.title.split('\n').flatMap((line, index) => index ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
  document.querySelector('#support-description').textContent = content.description;
  document.querySelector('#support-note').textContent = content.note;
  document.querySelector('#giving-controls').hidden = way !== 'give';
  action.disabled = false;
  if (way === 'give') updateGift();
  else action.textContent = `${content.action} ↗`;
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectWay(tab.dataset.way));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); tabs[next].focus(); selectWay(tabs[next].dataset.way); }
  });
});
document.querySelectorAll('[data-amount]').forEach(button => button.addEventListener('click', () => {
  amount = Number(button.dataset.amount);
  custom.value = '';
  custom.setCustomValidity('');
  document.querySelectorAll('[data-amount]').forEach(other => {
    const selected = other === button;
    other.classList.toggle('selected', selected);
    other.setAttribute('aria-pressed', String(selected));
  });
  updateGift();
}));
custom.addEventListener('input', () => {
  document.querySelectorAll('[data-amount]').forEach(button => { button.classList.remove('selected'); button.setAttribute('aria-pressed', 'false'); });
  amount = Number(custom.value);
  custom.setCustomValidity(amount >= 1 && amount <= 1000000 ? '' : 'Enter an amount between $1 and $1,000,000.');
  updateGift();
  if (!custom.validity.valid) action.textContent = 'Enter a valid gift amount';
});
document.querySelectorAll('[data-frequency]').forEach(button => button.addEventListener('click', () => {
  frequency = button.dataset.frequency;
  document.querySelectorAll('[data-frequency]').forEach(other => {
    other.classList.toggle('selected', other === button);
    other.setAttribute('aria-pressed', String(other === button));
  });
  updateGift();
}));
action.addEventListener('click', () => {
  if (currentWay !== 'give') { window.open(ways[currentWay].url, '_blank', 'noopener,noreferrer'); return; }
  if (!Number.isFinite(amount) || amount < 1 || amount > 1000000) { custom.reportValidity(); return; }
  document.querySelector('#gift-summary').textContent = `Your selected gift: ${formatAmount(amount)}${frequency === 'monthly' ? ' per month' : ', one time'}.`;
  dialog.showModal();
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-back').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
