const socket = io();

const body = document.getElementById("body");

socket.on("message", (color) => {
  console.log(color);
  body.style.backgroundColor = color;
});
