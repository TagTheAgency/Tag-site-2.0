<?php

// If you are not using Composer (recommended)
require("../sendgrid-php/sendgrid-php.php");

if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['text'];

	$request_body = json_decode('{
	  "personalizations": [
	    {
	      "to": [
	        {
	          "email": "ira@tagtheagency.com"
	        }
	      ],
	      "subject": "Hello World from the SendGrid PHP Library!"
	    }
	  ],
	  "from": {
	    "email": "test@example.com"
	  },
	  "content": [
	    {
	      "type": "text/plain",
	      "value": "Hello, Email!"
	    }
	  ]
	}');

	$apiKey = getenv('SENDGRID_APIKEY');
	$sg = new \SendGrid($apiKey);

	$response = $sg->client->mail()->send()->post($request_body);
	echo $response->statusCode();
	echo $response->body();

}