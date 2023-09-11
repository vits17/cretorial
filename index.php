<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

   

   
    echo "<p class='thank-you'>Thank you for contacting us!</p>";
}
