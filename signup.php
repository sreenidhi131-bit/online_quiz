<?php

$conn = new mysqli("localhost", "root", "", "quiz_db");

if ($conn->connect_error) {
    die("Database Connection Failed");
}

$username = trim($_POST['username'] ?? '');
$password = trim($_POST['password'] ?? '');

if ($username == '' || $password == '') {
    echo "Enter username and password";
    exit;
}

$check = $conn->prepare("SELECT id FROM users WHERE username=?");
$check->bind_param("s", $username);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo "Username already exists";
    exit;
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare(
    "INSERT INTO users(username,password) VALUES(?,?)"
);

$stmt->bind_param(
    "ss",
    $username,
    $hashedPassword
);

if ($stmt->execute()) {
    echo "Signup Successful";
} else {
    echo "Signup Failed";
}

$stmt->close();
$conn->close();

?>