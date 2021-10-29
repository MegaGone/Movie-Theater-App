const { Router } = require("express");
const { check } = require("express-validator");

// Helpers
const { validateSpaces } = require("../helpers/validations");

// Controller
const { createIndex, deleteIndex } = require("../controllers/elastic");

// Middlewares
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

/*
** CREATE INDEX
*/
router.post('/index', 
[
    check('name', 'Index names required').not().isEmpty(),
    check('name', 'Name must at least 4 characters').isLength({ min: 4}),
    check('name').custom(validateSpaces),
    validateFields
]
,createIndex);

/*
** DELETE INDEX
*/
router.delete('/index', 
[
    check('name', 'Index name required').not().isEmpty(),
    check('name', 'Name must at least 4 characters').isLength({ min: 4}),
    check('name').custom(validateSpaces),
    validateFields
]
,deleteIndex)

module.exports = router;