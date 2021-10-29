const { Router } = require("express");
const { createIndex } = require("../controllers/elastic");

const router = Router();

// Crear index
router.post('/index', createIndex);

module.exports = router;