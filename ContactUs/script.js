const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('formMessage');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name && email && message) {
        messageDiv.textContent = "Thank you for reaching out! We'll get back to you soon.";
        form.reset();
    } else {
        messageDiv.textContent = "Please fill out all fields.";
        messageDiv.style.color = 'red';
    }
});