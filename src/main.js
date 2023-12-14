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
        const users = data.users;

        function loginUser(username, password) {
          const foundUser = users.find(
            user => user.username === username && user.password === password
          );

          if (foundUser) {
            console.log('Login successful!');
            window.location.href = 'about.html';
          } else {
            alert('wrong username or password');
          }
        }

        // Example login
        loginUser(username, password);
      });
  }
}

// add animation with jquery effects
function applyHoverEffect(element) {
  $(element).hover(
    function () {
      $(this).css({
        'background-color': '#fff',
        'background-image': `linear-gradient(135deg, var(--third) 25%, transparent 25%), linear-gradient(225deg, var(--third) 25%, transparent 25%), linear-gradient(45deg, var(--third) 25%, transparent 25%), linear-gradient(315deg, var(--third) 25%, #fff 25%)`,
        'background-position': '40px 0, 40px 0, 0 0, 0 0',
        'background-size': '80px 80px',
        'background-repeat': 'repeat',
        transition: '800ms ease',
      });
    },
    function () {
      $(this).css({
        'background-color': 'white',
        'background-image': 'none',
        'background-position': '0%',
        'background-size': '0',
        'background-repeat': 'no-repeat',
        transition: '800ms ease',
      });
    }
  );
}

let themeActive = 0;
const theme = [
  {
    theme: '0',
    primary: '#2b3499',
    secondary: '#ff6c22',
    third: '#FFE0D0',
  },
  {
    theme: '1',
    primary: '#08D9D6',
    secondary: '#252A34',
    third: '#B4B4B4',
  },
  {
    theme: '2',
    primary: '#2C2955',
    secondary: '#4C5FB1',
    third: '#B3C1FF',
  },
  {
    theme: '3',
    primary: '#231A31',
    secondary: '#E42F45',
    third: '#FFC0C7',
  },
  {
    theme: '4',
    primary: '#230444',
    secondary: '#90303D',
    third: '#FFC3CB',
  },
  {
    theme: '5',
    primary: '#0C056D',
    secondary: '#590D82',
    third: '#E3AFFF',
  },
];

function changeTheme() {
  $('#changeTheme').on('click', function () {
    if (themeActive == theme.length - 1) {
      themeActive = 0;
    } else {
      themeActive += 1;
    }
    $('body').css({
      '--primary': `${theme[themeActive].primary}`,
      '--secondary': `${theme[themeActive].secondary}`,
      '--third': `${theme[themeActive].third}`,
    });
  });
  applyHoverEffect('.about');
  applyHoverEffect('.education');
  applyHoverEffect('.work');
}
$(document).ready(function () {
  changeTheme();
});
