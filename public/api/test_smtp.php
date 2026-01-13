<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../private/smtp_config.php';
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = (SMTP_PORT === 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = SMTP_PORT;
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
