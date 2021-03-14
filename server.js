const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const socketio = require("socket.io");
const morgan = require("morgan");
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

//socket Logic

io.on("connection", (socket) => {
  socket.on("join room", (roomName) => {
    socket.join(roomName);
    console.log(`${socket.id} joined ${roomName}`);
  });
  socket.on("color", ({ room, color }) => {
    console.log(room, color);
    socket.to(room).emit("party", color);
  });
});

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "/public")));
app.use("/", require("./routes/homeRoute"));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
