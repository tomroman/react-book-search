const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Route for 'api/books'
router.route("/")
.get(bookController.findAll)
.post(bookController.create);

// Route for searching by a specific book's ID
router.route("/:id")
.get(bookController.findById)
.put(bookController.update)
.delete(bookController.remove);

module.exports = router;