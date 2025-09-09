console.log("JS is running"); 


const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
    console.log("Toggle button clicked"); 
    document.body.classList.toggle('dark-mode');
});


let count = 0;
const incrementBtn = document.getElementById('incrementBtn');
const clickCount = document.getElementById('clickCount');

incrementBtn.addEventListener('click', () => {
    count++;
    console.log("Button clicked, count:", count); 
    clickCount.textContent = count;
});


const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form submitted"); 

    let isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    formSuccess.textContent = '';

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    }

    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    if (isValid) {
        formSuccess.textContent = 'Form submitted successfully!';
        signupForm.reset();
        count = 0;
        clickCount.textContent = count;
    }
});
