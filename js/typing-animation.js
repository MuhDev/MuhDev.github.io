class TypingAnimation {
    constructor(element) {
        this.textElement = element;
        this.roles = JSON.parse(this.textElement.dataset.roles);
        this.roleIndex = 0;
        this.isDeleting = false;
        this.currentText = '';
        this.typeSpeed = 100;
        this.deleteSpeed = 50;
        this.pauseDelay = 2000;
        this.cursorVisible = true;
        this.init();
    }

    init() {
        // Start cursor blink animation
        setInterval(() => {
            this.cursorVisible = !this.cursorVisible;
            this.updateText();
        }, 400);
        
        requestAnimationFrame(() => this.tick());
    }

    updateText() {
        this.textElement.textContent = this.currentText + (this.cursorVisible ? '_' : ' ');
    }

    tick() {
        const currentRole = this.roles[this.roleIndex];
        let delay = this.typeSpeed;

        if (this.isDeleting) {
            this.currentText = currentRole.substring(0, this.currentText.length - 1);
            delay = this.deleteSpeed;
        } else {
            this.currentText = currentRole.substring(0, this.currentText.length + 1);
        }

        this.updateText();

        if (!this.isDeleting && this.currentText === currentRole) {
            delay = this.pauseDelay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.roleIndex = (this.roleIndex + 1) % this.roles.length;
            delay = 500;
        }

        requestAnimationFrame(() => setTimeout(() => this.tick(), delay));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        new TypingAnimation(typingElement);
    }
});
