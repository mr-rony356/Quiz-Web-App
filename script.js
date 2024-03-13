// Check if the user is already logged in
if (localStorage.getItem('loggedIn') === 'true') {
    // Hide the login section
    document.getElementById('loginSection').style.display = 'none';

    // Show the main page section
    document.getElementById('mainPageSection').style.display = 'block';
}

function login(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Get the entered username and password
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;

    // Check if the entered credentials match one of the users (for simplicity)
    if ((enteredUsername === 'Rony' && enteredPassword === '2255') ||
        (enteredUsername === 'user2' && enteredPassword === 'password2')) {
        // Set the login status in localStorage
        localStorage.setItem('loggedIn', 'true');

        // Hide the login section
        document.getElementById('loginSection').style.display = 'none';

        // Show the main page section
        document.getElementById('mainPageSection').style.display = 'block';
    } else {
        // Display an error message (you can customize this part)
        alert('Incorrect username or password. Please try again.');
    }
}

