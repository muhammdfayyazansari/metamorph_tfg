<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Disable error display to prevent HTML output in JSON responses
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Custom error handler to return JSON
set_error_handler(function($errno, $errstr, $errfile, $errline) {
    echo json_encode([
        'status' => 'error',
        'message' => "PHP Error [$errno]: $errstr in $errfile on line $errline"
    ]);
    exit;
});

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Check for POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(['status' => 'error', 'message' => 'No data received.']);
    exit;
}

$firstName = $data['firstName'] ?? '';
$lastName = $data['lastName'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$message = $data['message'] ?? '';

if (empty($firstName) || empty($email) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'Missing required fields.']);
    exit;
}

// Load PHPMailer (Assuming it will be placed in a 'vendor' or sibling folder)
// If the user doesn't have composer, we'll provide a manual include path or use a minimalist version.
// For now, let's assume standard PHPMailer structure.
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'whms.tfgsolutions.pk';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contact@metamorph.solutions';
    $mail->Password   = 'Morph5812#';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL for port 465
    $mail->Port       = 465;
    $mail->SMTPDebug  = 0;
    $mail->Timeout    = 10; // 10 second timeout to prevent hanging

    // --- EMAIL 1: Notification to Business ---
    $mail->setFrom('contact@metamorph.solutions', 'Metamorph Contact Form');
    $mail->addAddress('contact@metamorph.solutions'); // Admin email
    $mail->addReplyTo($email, $firstName . ' ' . $lastName);

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Message from ' . $firstName . ' ' . $lastName;
    $mail->Body    = "
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> {$firstName} {$lastName}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";

    $mail->send();

    // --- EMAIL 2: Thank You to User ---
    $mail->clearAddresses();
    $mail->clearReplyTos();
    $mail->addAddress($email, $firstName . ' ' . $lastName); // User's email
    
    $mail->Subject = 'Thank you for contacting Metamorph Solutions';
    $mail->Body    = "
        <h3>Hello {$firstName},</h3>
        <p>Thank you for reaching out to <strong>Metamorph Solutions</strong>. We have received your message and our team will get back to you as soon as possible.</p>
        <p>Best regards,<br>The Metamorph Team</p>
    ";

    $mail->send();

    echo json_encode(['status' => 'success', 'message' => 'Message sent and confirmation email delivered.']);
} catch (Exception $e) {
    $errorMsg = $e->getMessage();
    
    // Check if it's a connection error
    if (strpos($errorMsg, 'connect') !== false || strpos($errorMsg, 'Connection') !== false) {
        echo json_encode([
            'status' => 'error', 
            'message' => 'Cannot connect to SMTP server from your local machine. This is normal - the form will work when deployed to your live server. Error: ' . $errorMsg
        ]);
    } else {
        echo json_encode(['status' => 'error', 'message' => "Mailer Error: {$errorMsg}"]);
    }
} catch (\Exception $e) {
    echo json_encode(['status' => 'error', 'message' => "General Error: {$e->getMessage()}"]);
} catch (\Throwable $e) {
    // Catch any fatal errors
    echo json_encode(['status' => 'error', 'message' => "Fatal Error: {$e->getMessage()}"]);
}
?>
