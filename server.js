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

// Middlewares
app.use(morgan("common"));
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "public")));

// Logic for Socket
io.on("connection", (socket) => {
  console.log("user connected");

  socket.emit("message", "yellow");
});

// routes
app.get("/", (req, res) => {
  res.render("welcome.html");
});

app.get("/admin", (req, res) => {
  res.render("admin.html");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
