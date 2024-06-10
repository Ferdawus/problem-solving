<?php 
   function TowSum($param1, $param2) : int {
     return $param1 + $param2;
   }

   echo TowSum(1,2);
   
   echo PHP_EOL;
   function TotalSum(...$param) : int {
    $total =0;
    foreach ($param as $key => &$value) {

        $total+=$value;
    }
    return $total;
   }
   echo TotalSum(1,2,3,4);


?>