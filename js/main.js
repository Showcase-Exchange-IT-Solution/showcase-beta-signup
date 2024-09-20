// Validate Captcha and Terms & Contitions

let generatedCaptcha;

function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }
    document.getElementById('captcha').textContent = captcha;
    generatedCaptcha = captcha;
    document.getElementById('message').style.display = 'none';
}

function validateCaptcha(event) {
    event.preventDefault();

    const userCaptcha = document.getElementById('captchaInput').value;
    const messageElement = document.getElementById('message');

    messageElement.style.display = 'none';

    if (userCaptcha !== generatedCaptcha) {
        messageElement.textContent = "Incorrect CAPTCHA. Please try again.";
        messageElement.style.color = 'red';
        messageElement.style.display = 'block';
        return;
    }

    validateTermsAndConditions();
}

function validateTermsAndConditions() {
    const termsCheck = document.getElementById('termsCheck');
    const messageTermsElement = document.getElementById('messageTerms');

    messageTermsElement.style.display = 'none';

    if (!termsCheck.checked) {
        messageTermsElement.textContent = "You must agree to the Terms and Conditions.";
        messageTermsElement.style.color = 'red';
        messageTermsElement.style.display = 'block';
        return;
    }
}

// Popup Script

window.onload = function() {
    generateCaptcha();
    document.getElementById('captchaForm').addEventListener('submit', validateCaptcha);
};

document.getElementById('termsLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popupCard').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popupCard').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('popupCard').style.display = 'none';
});