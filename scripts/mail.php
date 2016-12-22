<?php

// If you are not using Composer (recommended)
require("../sendgrid-php/sendgrid-php.php");

if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

	$from = new SendGrid\Email(null, $email);
	$subject = "Tag Site Enquiry from $name";
	$to = new SendGrid\Email(null, "hello@tagtheagency.com");
	$content = new SendGrid\Content("text/plain", $message);
	$mail = new SendGrid\Mail($from, $subject, $to, $content);

	$apiKey = getenv('SENDGRID_APIKEY');
	$sg = new \SendGrid($apiKey);

	$response = $sg->client->mail()->send()->post($mail);
	echo $response->statusCode();
	echo $response->headers();
	echo $response->body();

}