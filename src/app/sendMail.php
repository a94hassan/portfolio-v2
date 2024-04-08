<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
    
            $recipient = 'contact@hassan-ammar.com';  
            $subject = "Contact From <$email>";
            $message = "From:" . $name . "<br>" . $message ;
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            // Additional headers
            $headers[] = "From: contact@hassan-ammar.com";

            mail($recipient, $subject, $message, implode("\r\n", $headers));

            // Hinzugefügt: Send autoresponder
            $autoresponderSubject = "Thank you for contacting me";
            $autoresponderMessage = "Dear $name,<br><br>Thank you for contacting me. I have received your message and will get back to you as soon as possible.<br><br>Best regards,<br>Hassan Ammar";
            $autoresponderHeaders   = array();
            $autoresponderHeaders[] = 'MIME-Version: 1.0';
            $autoresponderHeaders[] = 'Content-type: text/html; charset=utf-8';
            $autoresponderHeaders[] = "From: contact@hassan-ammar.com";

            // Send autoresponder email to sender
            mail($email, $autoresponderSubject, $autoresponderMessage, implode("\r\n", $autoresponderHeaders));
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    } 
