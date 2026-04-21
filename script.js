document.getElementById('leaveForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('leaveEmail').value;
    const msg = document.getElementById('leaveMsg');
    msg.innerText = "Application submitted successfully for " + email;
    msg.style.color = "green";
    this.reset();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const num1 = parseInt(document.getElementById('num1').innerText);
    const num2 = parseInt(document.getElementById('num2').innerText);
    const captchaInput = parseInt(document.getElementById('captchaInput').value);
    const errorMsg = document.getElementById('captchaError');
    const loginMsg = document.getElementById('loginMsg');

    if (captchaInput === (num1 + num2)) {
        loginMsg.innerText = "Login Successful!";
        loginMsg.style.color = "green";
        errorMsg.innerText = "";
    } else {
        errorMsg.innerText = "Incorrect Captcha. Please try again.";
        errorMsg.style.color = "red";
        generateCaptcha();
    }
});

function generateCaptcha() {
    document.getElementById('num1').innerText = Math.floor(Math.random() * 20);
    document.getElementById('num2').innerText = Math.floor(Math.random() * 10);
}

window.onload = generateCaptcha;

function toggleTextbox(show) {
    const otherText = document.getElementById('otherText');
    otherText.style.display = show ? "block" : "none";
    if(show) otherText.setAttribute('required', 'true');
    else otherText.removeAttribute('required');
}