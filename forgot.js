const forgotForm = document.getElementById('forgot-form');

forgotForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const email = document.getElementById('email').value;

  // Example: Simulate sending the email with a console message
  console.log(`Sent password reset email to ${email}`);

  // TODO: Send the email to a server for processing

  alert('Check your inbox for a password reset link!');
});
