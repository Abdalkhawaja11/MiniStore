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

// الحصول على معلومات المستخدم من الصفحة HTML باستخدام النموذج
$email = $_POST["email"];
$password = $_POST["password"];
$cpassword = $_POST["cpassword"];

// تحقق من معلومات المستخدم من قاعدة البيانات
$stmt = $conn->prepare("SELECT email, pass, cpass FROM user1 WHERE email = ? AND pass = ? AND cpass = ?");
$stmt->bind_param("sss", $email, $password, $cpassword);
$stmt->execute();
$result = $stmt->get_result();

// تحقق مما إذا كان اسم المستخدم وكلمة المرور متطابقين في قاعدة البيانات
if ($result->num_rows > 0) {
    session_start();
    header("Location: index.html");
    exit();
} else {
    echo '<script>alert("Wrong Username or Password");
    window.location.href = "login.html";
    </script>';
    
    
}


// إغلاق الاتصال
$stmt->close();
$conn->close();
?>
