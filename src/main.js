// Rotate Image
let degree = 0;
function rotateImage() {
  let img = document.getElementById('brandImage');

  degree += 360;
  img.style.transform = `rotate(${degree}deg)`;
}

// show/hide password
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');

showPasswordCheckbox.addEventListener('change', function () {
  if (this.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

// show Capslock status
const capslockStatus = document.getElementById('capsLockWarning');

passwordInput.addEventListener('keyup', function (e) {
  if (e.getModifierState('CapsLock')) {
    capslockStatus.style.visibility = 'visible';
  } else {
    capslockStatus.style.visibility = 'hidden';
  }
});

// username validation
function usernameValidation() {
  const usernameInput = document.getElementById('username');
  // field username
  if (usernameInput.value == '') {
    document.getElementById('usernameError').style.visibility = 'visible';
  } else {
    document.getElementById('usernameError').style.visibility = 'hidden';
  }
}
// password validation
function passwordValidation() {
  const passwordError = document.getElementById('passwordError');

  var symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var numberRegex = /[0-9]/;
  var lowercaseRegex = /[a-z]/;
  var uppercaseRegex = /[A-Z]/;

  passwordInput.addEventListener('keyup', function () {
    arrErrors = [];
    if (!symbolRegex.test(passwordInput.value)) {
      arrErrors.push('1 Symbol');
    }
    if (!numberRegex.test(passwordInput.value)) {
      arrErrors.push('1 Number');
    }
    if (!uppercaseRegex.test(passwordInput.value)) {
      arrErrors.push('1 Uppercase');
    }
    if (!lowercaseRegex.test(passwordInput.value)) {
      arrErrors.push('1 Lowercase');
    }

    totalError = arrErrors.join(', ');
    if (arrErrors.length != 0) {
      passwordError.style.visibility = 'visible';
      passwordError.textContent = `Password must contain ${totalError}`;
    } else if (arrErrors.length == 0) {
      passwordError.style.visibility = 'hidden';
    }

    if (passwordInput.value == '') {
      passwordError.style.visibility = 'visible';
      passwordError.textContent = 'please fill password';
    }
  });
}

// form validation
function validateForm(event) {
  event.preventDefault();
  usernameValidation();
  passwordValidation();

  var usernameError = document.getElementById('usernameError').style.visibility;
  var passwordError = document.getElementById('passwordError').style.visibility;

  if (usernameError == 'hidden' && passwordError == 'hidden') {
    window.location.href = 'about.html';
  }
}
