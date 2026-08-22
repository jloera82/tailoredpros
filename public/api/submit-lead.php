<?php
// Lead-capture proxy for cPanel/shared PHP hosting.
// Forwards the browser's submission server-side to Standard Information,
// since exchange.standardinformation.io has no CORS headers and rejects
// direct browser POSTs. Keeps the vendor Bearer token out of the client
// bundle entirely.

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'denied', 'errors' => 'Method not allowed']);
    exit;
}

$configPath = __DIR__ . '/lead-capture-config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['status' => 'denied', 'errors' => 'Lead capture is not configured']);
    exit;
}

$config = include $configPath;
$apiKey = $config['api_key'] ?? '';
$captureUrl = $config['capture_url'] ?? 'https://exchange.standardinformation.io/capture_test';

if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['status' => 'denied', 'errors' => 'Lead capture is not configured']);
    exit;
}

$body = file_get_contents('php://input');

$ch = curl_init($captureUrl);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $body,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Accept: application/json',
        'Authorization: Bearer ' . $apiKey,
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false) {
    http_response_code(502);
    echo json_encode(['status' => 'denied', 'errors' => 'Failed to reach lead capture service: ' . $curlError]);
    exit;
}

http_response_code($httpCode ?: 502);
echo $response;
