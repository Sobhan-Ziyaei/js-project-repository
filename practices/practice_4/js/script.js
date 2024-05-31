let username = prompt('Enter your username : ');
let password = prompt('Enter your password : ');

if (username.length < 3) {
    alert('Your username must be at least 3 characters long');
} else if (password.length < 8) {
    alert('Your password must be at least 8 characters long');
}
else {
    alert('Welcome ' + username);
}
