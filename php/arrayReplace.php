<?php 
    function arrayReplace($inputArray, $elementReplace, $subtractionElement)
    {
        foreach ($inputArray as $key => &$element) {
           if ($element === $elementReplace ) {
            $element = $subtractionElement;
           }
        }
        return $inputArray;
    }
    $inputArray = [1, 2, 1];
    $elementReplace = 1;
    $subtractionElement = 3;
    $resultArray = arrayReplace($inputArray, $elementReplace, $subtractionElement);
    print_r($resultArray);
?>