const express = require("express");
const router = express.Router();
// routes
router.get("/", (req, res) => {
  res.render("welcome.html");
});

router.get("/admin", (req, res) => {
  res.render("admin.html");
});

router.get("/:id/organizer", (req, res) => {
  console.log(req.params.id);
  res.render("creator.html");
});

router.get("/:id", (req, res) => {
  res.render("user.html");
});

module.exports = router;
