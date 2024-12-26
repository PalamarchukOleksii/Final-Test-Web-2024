function getRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function getContrastYIQ(hexcolor) {
  const r = parseInt(hexcolor.substring(1, 3), 16);
  const g = parseInt(hexcolor.substring(3, 5), 16);
  const b = parseInt(hexcolor.substring(5, 7), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

function changeBackgroundColor() {
  const bgColor = getRandomColor();
  document.body.style.backgroundColor = bgColor;

  const buttonColor = getRandomColor();
  document.querySelector(".my-button").style.backgroundColor = buttonColor;

  document.querySelector(".my-button").style.color =
    getContrastYIQ(buttonColor);
}
