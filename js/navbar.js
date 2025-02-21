let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('hidden')) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else if (currentScroll < lastScroll && navbar.classList.contains('hidden')) {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

function toggleLanguage() {
    // Simple toggle between English and Arabic
    const html = document.documentElement;
    if (html.lang === 'ar') {
        html.lang = 'en';
        html.dir = 'ltr';
    } else {
        html.lang = 'ar';
        html.dir = 'rtl';
    }
}

function downloadCV() {
    window.open('https://drive.google.com/uc?export=download&id=1bXrCri2Nr0QgKqhTowNRns1UVlb2-0jd');
}
