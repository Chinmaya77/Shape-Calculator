function goto_Step1() {
  window.location.reload();
}

function goto_Step2() {
  selectedShapeValue = document.querySelector('input[name="shape"]:checked')
    .value;
  console.log(selectedShapeValue);

  document.getElementById("heading1").innerHTML = "Step 2 : Insert your values";
  document.getElementById("subheading1").innerHTML =
    "You have selected a  " +
    selectedShapeValue +
    ", please input the required value";
  document.getElementById("radio-btn-container").style.display = "none";
  document.getElementById("page1").style.display = "none";
  document.getElementById("page1Cancel").style.display = "none";
  document.getElementById("page2").style.display = "block";
  document.getElementById("page2Cancel").style.display = "block";
  document.getElementById(selectedShapeValue.toLowerCase()).style.display =
    "block";
}

function goto_Step3() {
  console.log(selectedShapeValue);

  document.getElementById("heading1").innerHTML = "Step 3 : Your results";
  document.getElementById("subheading1").innerHTML =
    "You have calculated the area of  " +
    selectedShapeValue +
    ". Below is your result";
  document.getElementById(selectedShapeValue.toLowerCase()).style.display =
    "none";

  document.getElementById("page2").style.display = "none";
  document.getElementById("page2Cancel").style.display = "none";
  document.getElementById("page3").style.display = "block";

  var shapeValue1;
  var shapeValue2;
  var area;

  if (selectedShapeValue.toLowerCase() === "rectangle") {
    shapeValue1 = document.getElementById("rectanglelength").value;
    shapeValue2 = document.getElementById("rectanglewidth").value;
    document.getElementById("subheading1").innerHTML =
      "You have calculated the area of  " +
      selectedShapeValue +
      " with a length and width of " +
      shapeValue1 +
      " and " +
      shapeValue2 +
      ". Below is your result";
    area = shapeValue1 * shapeValue2;
  } else if (selectedShapeValue.toLowerCase() === "circle") {
    shapeValue1 = document.getElementById("circlediameter").value;
    document.getElementById("subheading1").innerHTML =
      "You have calculated the area of  " +
      selectedShapeValue +
      " with a diameter of " +
      shapeValue1 +
      ". Below is your result";
    area = (Math.PI * shapeValue1).toFixed(2);
  } else if (selectedShapeValue.toLowerCase() === "square") {
    shapeValue1 = document.getElementById("squareside").value;
    document.getElementById("subheading1").innerHTML =
      "You have calculated the area of  " +
      selectedShapeValue +
      " with a side of " +
      shapeValue1 +
      ". Below is your result";
    area = shapeValue1 * shapeValue1;
  } else if (selectedShapeValue.toLowerCase() === "ellipse") {
    shapeValue1 = document.getElementById("ellipsemajoraxis").value;
    shapeValue2 = document.getElementById("ellipseminoraxis").value;
    document.getElementById("subheading1").innerHTML =
      "You have calculated the area of  " +
      selectedShapeValue +
      " with a Major and Minor Axis of " +
      shapeValue1 +
      " and " +
      shapeValue2 +
      ". Below is your result";

    area = (Math.PI * shapeValue1 * shapeValue2).toFixed(2);
  } else {
    shapeValue1 = 0;
    shapeValue2 = 0;
  }

  console.log(shapeValue1, shapeValue2, area);
  document.getElementById("result").style.display = "block";

  document.getElementById("result").innerHTML = "The Area is " + area + ".";
}
