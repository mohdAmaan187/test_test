document.addEventListener('DOMContentLoaded', () => {
    // Select the buttons, input fields, and containers
    const nextButtonNamemail = document.querySelector('.namemail .next');
    const backButtonPasss = document.querySelector('.passs .back');
    const namemailDiv = document.querySelector('.namemail');
    const passsDiv = document.querySelector('.passs');
    const nameInput = document.querySelector('.namemail input[type="text"]');
    const emailInput = document.querySelector('.namemail input[type="email"]');
    const passwordInput = document.querySelector('.passs input[type="password"]:nth-of-type(1)');
    const confirmPasswordInput = document.querySelector('.passs input[type="password"]:nth-of-type(2)');

    // Initially hide the password section
    passsDiv.classList.add('display-none');

    // Show password section only if name and email are valid
    nextButtonNamemail.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

        if (name && emailRegex.test(email)) {
            namemailDiv.classList.add('display-none');
            passsDiv.classList.remove('display-none');
        } else {
            alert('Please enter a valid name and email.');
        }
    });

    // Show name/email section only if passwords are valid
    backButtonPasss.addEventListener('click', () => {
        passsDiv.classList.add('display-none');
        namemailDiv.classList.remove('display-none');
    });

    const nextButtonPasss = document.querySelector('.passs .next');
    nextButtonPasss.addEventListener('click', () => {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (password && confirmPassword && password === confirmPassword) {
            alert('Registration Successful!');
        } else {
            alert('Passwords do not match or are empty. Please try again.');
        }
    });
});
