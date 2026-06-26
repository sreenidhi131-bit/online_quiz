<?php
$conn = new mysqli("localhost", "root", "", "quiz_platform");

if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4");

// Your queries go here

// Close connection when done
// $conn->close();
?>
