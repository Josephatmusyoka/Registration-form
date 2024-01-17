<?php
// Connect to the database
$servername = "localhost";
$username = "root";  // Replace with your XAMPP MySQL username
$password = "";  // Replace with your XAMPP MySQL password
$dbname = "registration_data";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// Retrieve form data
$firstName = $_POST['first_name'];
$lastName = $_POST['last_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];  // Assuming a field for phone number
$password = $_POST['password'];

// Sanitize data (using prepared statements)
$stmt = $conn->prepare("INSERT INTO users (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $firstName, $lastName, $email, $phone, $password);
$stmt->execute();

// Redirect or display success message
if ($stmt->affected_rows > 0) {
    header("Location: success.php"); // Redirect to success page
} else {
    echo "Registration failed.";
}

$stmt->close();
$conn->close();
?>
