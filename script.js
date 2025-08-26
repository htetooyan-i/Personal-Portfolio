import { EMAILJS_CONFIG } from './config.js';

function copyText(element, text) {
    navigator.clipboard.writeText(text).then(() => {
    const tooltip = element.nextElementSibling;
    tooltip.classList.remove("opacity-0");
    tooltip.classList.add("opacity-100");

    setTimeout(() => {
        tooltip.classList.remove("opacity-100");
        tooltip.classList.add("opacity-0");
    }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    emailjs.init(EMAILJS_CONFIG.publicKey);

    document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted:', this);
        emailjs.sendForm(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, this)
        .then(() => {
            alert('Email sent successfully!');
            this.reset();
        }, (error) => {
            alert('Failed to send email. See console.');
            console.error(error);
        });
    });
});

window.projectDetails = (projectName) => {
    window.open(`https://github.com/htetooyan-i/${projectName}`, "_blank");
};