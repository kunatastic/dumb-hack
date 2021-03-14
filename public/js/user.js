const socket = io();

const body = document.getElementById("body");

const path = window.location.pathname;
var room = "";
var done = false;
for (var i = 0; i < path.length; i++) {
  if (path[i] == "/") {
    done = !done;
  } else if (done) {
    room += path[i];
  }
}
console.log(room);

socket.emit("join room", room);

socket.on("party", (color) => {
  console.log(color);
  body.style.backgroundColor = color;
});
