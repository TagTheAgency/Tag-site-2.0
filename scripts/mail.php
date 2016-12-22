<?php

if($_POST){
    $name = $_POST['form_name'];
    $email = $_POST['form_email'];
    $phone = $_POST['form_phone'];
    $message = $_POST['form_msg'];
    $headers = "From: " .$email;

//send email
    mail("ira@tagtheagency.com", "Contact Page Enquiry From " .$email, $message, $headers);
}
?>