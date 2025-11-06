const express = require("express");
const {authenticateJWT} = require("../middleware/auth.middleware");
const pool = require("../utils/db");

const router = express.Router();

router.get("/me", authenticateJWT, async (req, res) => {
    const[[user]] = await pool.query(
        "SELECT id, nombre, email, role FROM usuarios WHERE id=?",
        [req.user.id]
    );
    res.json(user);
});

module.exports = router;