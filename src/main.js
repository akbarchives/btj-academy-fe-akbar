// Rotate Image
$(document).ready(() => {
  let degree = 0;
  $('#brandImage').click(function () {
    degree += 360;
    $(this).css('transform', `rotate(${degree}deg)`);
  });
});

// show/hide password
$('#showPassword').on('change', function () {
  $('#password').attr('type', $(this).prop('checked') ? 'text' : 'password');
});

// show Capslock status
$('#password').on('keyup', function (e) {
  if (e.originalEvent.getModifierState('CapsLock')) {
    $('#capsLockWarning').css('visibility', 'visible');
  } else {
    $('#capsLockWarning').css('visibility', 'hidden');
  }
});

// username validation
function usernameValidation() {
  if ($('#username').val() == '') {
    $('#usernameError').css('visibility', 'visible');
  } else {
    $('#usernameError').css('visibility', 'hidden');
  }
}

// password validation
function passwordValidation() {
  // disable symbol
  // var symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var numberRegex = /[0-9]/;
  var lowercaseRegex = /[a-z]/;
  var uppercaseRegex = /[A-Z]/;

  $('#password').on('keyup', function () {
    arrErrors = [];
    if (!numberRegex.test($(this).val())) {
      arrErrors.push('1 Number');
    }
    if (!lowercaseRegex.test($(this).val())) {
      arrErrors.push('1 uppercase');
    }
    if (!uppercaseRegex.test($(this).val())) {
      arrErrors.push('1 lowercase');
    }

    totalError = arrErrors.join(', ');

    if (arrErrors.length != 0) {
      $('#passwordError').css('visibility', 'visible');
      $('#passwordError').text(`Password must contain ${totalError}`);
    } else if (arrErrors.length == 0) {
      $('#passwordError').css('visibility', 'hidden');
    }

    if ($('#password').value == '') {
      $('#passwordError').css('visibility', 'visible');
      $('#passwordError').text('please fill password');
    }
  });
}

const arrr = [30, 21];

// form validation
function validateForm(e) {
  e.preventDefault();
  usernameValidation();
  passwordValidation();

  if (
    $('#usernameError').css('visibility') == 'hidden' &&
    $('#passwordError').css('visibility') == 'hidden'
  ) {
    const username = $('#username').val();
    const password = $('#password').val();

    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        // console.log(data.users[1]);
        const users = data.users;
        console.log(users);

        // Simulating a login process (replace this with your actual login process)
        function loginUser(username, password) {
          const foundUser = users.find(
            user => user.username === username && user.password === password
          );

          if (foundUser) {
            console.log('Login successful!');
            window.location.href = 'about.html';

            // Perform actions for successful login
          } else {
            console.log('Invalid username or password');
            // Handle unsuccessful login
          }
        }

        // Example login
        loginUser(username, password);
      });
  }
}

fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(console.log);
