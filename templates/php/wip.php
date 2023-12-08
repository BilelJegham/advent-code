<?php

$input = file_get_contents(__DIR__ . '/input.txt');
$inputLines = explode("\n", trim($input));

$result = 0;
echo json_encode(['result' => $result]) . PHP_EOL;

