let numberOfImages = 13;
let imageHolder;
let counter = 1;

for (let i = 1; i <= numberOfImages; i++) {
  imageHolder = document.createElement("img");
  imageHolder.src = "Images/Image" + i + ".jpg";
  imageHolder.style.width = "500px";
  imageHolder.style.height = "625px";
  document.getElementById("pictures").appendChild(imageHolder);
}

document.getElementById("leftButton").addEventListener("click", function () {
  if (counter > 1) {
    document.getElementById("pictures").style.transform +=
      "translateX(" + 500 + "px)";
    counter -= 1;
    document.getElementById("counter").innerHTML = counter + " / 13";
  }
});

document.getElementById("rightButton").addEventListener("click", function () {
  if (counter < numberOfImages) {
    document.getElementById("pictures").style.transform +=
      "translateX(" + -500 + "px)";
    counter += 1;
    document.getElementById("counter").innerHTML = counter + " / 13";
  }
});
