function arrayReplace(inputArray, elementReplace, subtractionElement) {
  inputArray.forEach((element, index) => {
    if (element === elementReplace) {
      inputArray[index] = subtractionElement;
    }
  });
  //   console.log(inputArray);
}
arrayReplace([1, 2, 1], 1, 3);

// ......use map function
function arrayReplaceMap(inputArray, elementReplace, subtractionElement) {
  inputArray = inputArray.map((element) => {
    return element === elementReplace ? subtractionElement : element;
  });
  console.log(inputArray);
}
arrayReplaceMap([1, 2, 1], 1, 3);
