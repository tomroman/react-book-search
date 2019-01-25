const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Route for '/api/google'
router.route("/").get(googleController.findAll);

module.exports = router;