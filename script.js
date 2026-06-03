// script.js

// TYPING ANIMATION
const typed = new Typed(".multiple-text", {

    strings: [
        "Java Full Stack Developer",
        "Frontend Developer",
        "React Developer",
        "Java Developer"
    ],

    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|"

});


// CONTACT FORM MAIL FUNCTION
function sendMail() {

    let name = document.querySelector('input[name="name"]').value;

    let email = document.querySelector('input[name="email"]').value;

    let phone = document.querySelector('input[name="phone"]').value;

    let message = document.querySelector('textarea[name="message"]').value;

    let gmailLink =
        `https://mail.google.com/mail/?view=cm&fs=1&to=pandasuman959@gmail.com&su=Portfolio Contact&body=
        Name: ${name}%0D%0A
        Email: ${email}%0D%0A
        Phone: ${phone}%0D%0A
        Message: ${message}`;

    window.open(gmailLink, '_blank');
}