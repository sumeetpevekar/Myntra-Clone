const express = require("express");
const router = express.Router()
const authControllers = require("../controllers/auth-controller");

router.route("/products").get(authControllers.getProducts)


module.exports = router;