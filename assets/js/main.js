
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); io.unobserve(entry.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
