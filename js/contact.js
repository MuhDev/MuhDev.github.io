async function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        message: form.querySelector('#message').value
    };

    // Email validation
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegExp.test(formData.email)) {
        alert('الرجاء إدخال بريد إلكتروني صحيح');
        return false;
    }

    // Here you would typically send the data to your email service
    // For this example, we'll just log it
    console.log('Form submitted:', formData);
    
    // Clear form
    form.reset();
    return false;
}

// Add hover effects to contact cards
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.background = 'transparent';
        card.style.border = '1px solid #324499';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = '#202f61';
        card.style.border = 'none';
    });
});
