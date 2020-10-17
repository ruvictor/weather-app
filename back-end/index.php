<?php
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'https://www.google.com/search?q=sport+news');
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($curl);
curl_close($curl);
?>