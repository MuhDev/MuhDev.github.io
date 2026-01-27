// Wait for sections to be loaded before initializing
// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle (Basic)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle hamburger icon
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Function to render projects dynamically
    function renderProjects() {
        const projectsContainer = document.querySelector('.projects-grid');
        if (!projectsContainer) return;

        if (typeof projectsData === 'undefined') {
            console.error('projectsData is not defined. Make sure projects.js is loaded.');
            return;
        }

        projectsContainer.innerHTML = ''; // Clear existing content

        projectsData.forEach((project, index) => {
            const buttonsHtml = project.buttons.map(btn => createProjectButton(btn)).join('');

            const projectCard = `
            <article class="project-card animate-on-scroll ${index === 0 ? 'delay-100' : ''}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <div class="project-content">
                    <div class="project-text">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                    </div>
                    <div class="project-buttons">
                        ${buttonsHtml}
                    </div>
                </div>
            </article>
        `;
            projectsContainer.insertAdjacentHTML('beforeend', projectCard);
        });
    }

    function createProjectButton(buttonData) {
        const buttonTypes = {
            'Google': { subtitle: 'GET IT ON', title: 'Google Play', icon: 'assets/svg/google-play.svg' },
            'AppStore': { subtitle: 'Download on the', title: 'App Store', icon: 'assets/svg/app-store.svg' },
            'github': { subtitle: 'View project on', title: 'GitHub', icon: 'assets/svg/github-svgrepo-com.svg' },
            'Uptodown': { subtitle: 'Download from', title: 'Uptodown', icon: 'assets/svg/uptodown.svg' }
        };

        const buttonInfo = buttonTypes[buttonData.type] || { subtitle: 'Visit', title: 'Link', icon: '' };

        return `
        <a href="${buttonData.path}" class="custom-button" data-type="${buttonData.type}" target="_blank">
            <img class="button-icon" src="${buttonInfo.icon}" data-type="${buttonData.type}" alt="${buttonInfo.title} Icon">
            <div class="button-text">
                <span class="button-subtitle">${buttonInfo.subtitle}</span>
                <span class="button-title">${buttonInfo.title}</span>
            </div>
        </a>
    `;
    }

    // Render projects first
    renderProjects();

    // Scroll Animations (IntersectionObserver)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Contact Form Handling (AJAX)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const form = e.target;
            const button = form.querySelector('button[type="submit"]');
            const originalButtonText = button.innerHTML;

            // Set loading state
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جارٍ الإرسال...';
            button.style.opacity = '0.7';

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success
                    button.innerHTML = '<i class="fas fa-check"></i> تم الإرسال بنجاح';
                    button.style.backgroundColor = '#10B981'; // Green color for success
                    button.style.borderColor = '#10B981';

                    form.reset();

                    setTimeout(() => {
                        button.innerHTML = originalButtonText;
                        button.disabled = false;
                        button.style.opacity = '1';
                        button.style.backgroundColor = ''; // Reset to default CSS
                        button.style.borderColor = '';
                    }, 3000);
                } else {
                    // Error
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "))
                    } else {
                        throw new Error('Form submission failed');
                    }
                    // Reset button on error state too so user can retry
                    button.innerHTML = '<i class="fas fa-exclamation-triangle"></i> حدث خطأ';
                    button.style.backgroundColor = '#EF4444'; // Red color for error
                    setTimeout(() => {
                        button.innerHTML = originalButtonText;
                        button.disabled = false;
                        button.style.opacity = '1';
                        button.style.backgroundColor = '';
                    }, 3000);
                }
            } catch (error) {
                // Network error or other
                button.innerHTML = '<i class="fas fa-exclamation-circle"></i> خطأ في الاتصال';
                console.error('Error:', error);

                setTimeout(() => {
                    button.innerHTML = originalButtonText;
                    button.disabled = false;
                    button.style.opacity = '1';
                }, 3000);
            }
        });
    }


    // --- Typewriter Effect ---
    class TxtRotate {
        constructor(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        }

        tick() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = this.txt || '&nbsp;'; // Keep height even if empty

            var that = this;
            var delta = (200 - Math.random() * 100) / 1.5;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
                this.el.classList.add('waiting');
                this.el.classList.remove('typing');
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
                this.el.classList.remove('waiting');
                this.el.classList.add('typing');
            } else {
                this.el.classList.add('typing');
                this.el.classList.remove('waiting');
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        }
    }

    // Initialize Typewriter
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
});
