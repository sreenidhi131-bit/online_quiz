<?php

$conn = new mysqli("localhost", "root", "", "quiz_db");

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database Error"
    ]);
    exit();
}

$username = trim($_POST["username"] ?? "");
$password = trim($_POST["password"] ?? "");

if (empty($username) || empty($password)) {
    echo json_encode([
        "success" => false,
        "message" => "Enter Username and Password"
    ]);
    exit();
}

$stmt = $conn->prepare(
    "SELECT id, username, password FROM users WHERE username=?"
);

$stmt->bind_param("s", $username);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows == 0) {
    echo json_encode([
        "success" => false,
        "message" => "User Not Found"
    ]);
    exit();
}

$user = $result->fetch_assoc();

if (password_verify($password, $user["password"])) {

    // Optional Session
    session_start();
    $_SESSION["username"] = $user["username"];

    echo json_encode([
        "success" => true,
        "message" => "Login Successful",
		"username" => $user["username"]
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Wrong Password"
    ]);

}

$stmt->close();
$conn->close();

?>