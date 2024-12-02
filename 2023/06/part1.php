<?php

$input = file_get_contents(__DIR__ . '/input.txt');
$inputLines = explode("\n", trim($input));
$times = [];
preg_match_all('/\d+/i', $inputLines[0], $times);
$distances = [];
preg_match_all('/\d+/i', $inputLines[1], $distances);




$result =1;
//
for($i = 0; $i < count($times[0]);$i++){
    $raceTime =  intval($times[0][$i]);
    $raceDistance = intval($distances[0][$i]);
    $subresult= 0;

    for($y = 1; $y < $raceTime; $y++) {

        $duration = $raceTime - $y;

        if(($y*$duration)> $raceDistance){
            $subresult++;
        }
    }

    $result = $result* $subresult;
     
}
    
   









echo json_encode([$result]) . PHP_EOL;

