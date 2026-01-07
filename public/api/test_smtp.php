<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'mail.metamorph.solutions';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contact@metamorph.solutions';
    $mail->Password   = 'Morph5812#';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->SMTPDebug  = 2; // Verbose debug output
    
    $mail->setFrom('contact@metamorph.solutions', 'Test');
    $mail->addAddress('contact@metamorph.solutions');
    $mail->Subject = 'SMTP Test';
    $mail->Body    = 'This is a test email.';
    
    $mail->send();
    echo "SUCCESS: Email sent!\n";
} catch (Exception $e) {
    echo "ERROR: {$e->getMessage()}\n";
    echo "Mailer Error: {$mail->ErrorInfo}\n";
}
?>
