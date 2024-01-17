const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example: Display form data in the console
    console.log(email, password);

    // TODO: Send the data to a server for authentication
});
const registerButton = document.getElementById('register-button');

registerButton.addEventListener('click', () => {
  // Redirect to the registration page
  window.location.href = 'registration.html'; // Replace with the correct path to your registration page
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform login validation and processing (your logic here)

  // If login is successful:
  if (loginSuccessful) {
    document.getElementById('success-message').style.display = 'block';
    // Redirect to the appropriate page after a delay (optional)
  } else {
    // If login fails:
    document.getElementById('error-message').style.display = 'block';
  }
});
