const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Collect form data (including phone number validation)
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const password = document.getElementById('password').value;

  // Ensure phone number is an integer and unique (replace with your actual logic)
  if (!/^\d+$/.test(phoneNumber)) {
    alert('Please enter a valid phone number (integers only)');
    return;
  }
  // TODO: Check if the phone number is unique in your database

  // Example: Display form data in the console
  console.log(firstName, lastName, email, phoneNumber, password);

  // TODO: Send the data to a server for processing
});
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
    // Redirect to the login page
    window.location.href = 'login.html'; // Replace with the correct path to your login page
});
document.getElementById('success-message').style.display = 'block';
setTimeout(() => {
    document.getElementById('success-message').style.display = 'none';
  }, 5000); // Hide after 5 seconds

  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Validation and processing of registration data (your logic here)
  
    // If registration is successful:
    document.getElementById('success-message').style.display = 'block'; // Show the message
  
    // Optionally, hide the message after a delay:
    setTimeout(() => {
      document.getElementById('success-message').style.display = 'none';
    }, 5000); // Hide after 5 seconds
  });
    