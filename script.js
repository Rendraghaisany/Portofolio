// SKILL BARS — force reflow agar transition jalan
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    bar.style.transform = 'scaleX(0)';
    bar.getBoundingClientRect(); // force reflow
    bar.style.transition = 'transform 1s ease';
    bar.style.transform = `scaleX(${bar.dataset.w || 0.8})`;
  });
});

// MODAL
function openModal(name, issuer, date, seal) {
  document.getElementById('modalSeal').textContent = seal;
  document.getElementById('modalImgTitle').textContent = name;
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalMeta').textContent = issuer + '  ·  ' + date;
  document.getElementById('modalOverlay').classList.add('active');
}
function closeModal(e) {
  if (!e || e.target === document.getElementById('modalOverlay') || e.currentTarget.classList.contains('modal-close')) {
    document.getElementById('modalOverlay').classList.remove('active');
  }
}

// SEND BUTTON
function handleSend(btn) {
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Sent! ✅';
    btn.style.background = '#16a34a';
  }, 1500);
}