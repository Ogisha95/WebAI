  function combineString(arrayOfStrings) {
    let result = "";

    for (let i = 0; i < arrayOfStrings.length; i++) {
      result = result + arrayOfStrings[i];

      if (i < arrayOfStrings.length - 1) {
        result = result + " ";
      }
    }

    return result;
  }

  console.log(combineString(["Hello", "there", "students", "of", "AvengaAcademy!"]));
  console.log(combineString(["Hello", "my", "name", "is", "Oleg"]));