
// Typing effect

const phrases = [
    'Web Developer',
    'Frontend Developer',

    'RPL Student At SMK Negeri 2 Sukabumi',
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-text');



function type() {
    const word = phrases[pi];
    if (!deleting) {
        el.textContent = word.slice(0, ++ci);
        if (ci === word.length) {
            deleting = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        el.textContent = word.slice(0, --ci);
        if (ci === 0) {
            deleting = false;
            pi = (pi + 1) % phrases.length;
        }
    }
    setTimeout(type, deleting ? 60 : 90);
}
type();

// Scroll reveal
const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));