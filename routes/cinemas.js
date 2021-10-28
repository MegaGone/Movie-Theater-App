const { Router } = require("express");
const { helloWorld } = require("../controllers/cinemas");

const router = Router();

router.get('/', helloWorld);

module.exports = router;