<?php
$APPS_SCRIPT_URL = 'https://script.google.com/a/starkey.co.il/macros/s/AKfycbxwJg0CGHqykOLtQr_afHCAvrpupsLFG2FyWGsaVFLxOmFnRXM/exec';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $APPS_SCRIPT_URL);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 20);
$content = trim(curl_exec($ch));
curl_close($ch);
~
~
~
~
~
~
