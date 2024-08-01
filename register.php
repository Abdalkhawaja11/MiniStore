<?php 
$servername = "localhost";
$username = "root";
$password = "12345678";
$dbname = "ecommerce";

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// فحص الاتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully<br>";

$fname = $_POST["fn"];
$email = $_POST["email"];
$password = $_POST["pass"];
$cpassword = $_POST["cpass"];

// التحقق من تطابق كلمات المرور
if ($password != $cpassword) {
    die("Passwords do not match.");
}

// تحضير الجملة وإدخال البيانات
$stmt = $conn->prepare("INSERT INTO user1 (name, email, pass, cpass) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $fname, $email, $password, $cpassword);

// تنفيذ الجملة
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// إغلاق البيان والاتصال
$stmt->close();
$conn->close();

// بدء الجلسة
session_start();
header("Location: login.html");
exit();
?>
