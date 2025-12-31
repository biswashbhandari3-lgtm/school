const handleScroll = () => {
    const header = document.getElementById('header');
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('');

    // On internal pages, we mostly want the scrolled look unless there's a sub-hero
    // However, let's just make it simple: if scroll > 50 or it's NOT the homepage (which has the big hero), add 'scrolled'
    // But wait, internal pages have sub-heros too.
    // Let's check for the existence of a hero or sub-hero section.
    const hasHero = document.querySelector('.hero, .sub-hero');

    if (window.scrollY > 50 || !hasHero) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });
}
