const socket = io();

const body = document.getElementById("color");

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
const num = 100;

const task = () => {
  var color_info = {
    room: room,
    color: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
  };
  socket.emit("color", color_info);

  console.log(color_info);
  body.style.backgroundColor = color_info.color;
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const init = async () => {
  for (let i = 1; i < 20; i++) {
    await sleep(Math.random() * (3000 - 1000) + 1000);
    // document.write(i + " " + "Welcome to tutorix" + " " + "</br>");
    task();
  }
};
