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

var color_info = {
  room: room,
  color: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
};
socket.emit("color", color_info);

console.log(color_info);
body.style.backgroundColor = color_info.color;
