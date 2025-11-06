const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../utils/db");
const { signAccessToken } = require("../utils/token")

const router = express.Router();

// Registro
router.post("/register", async (req, res) => {
    const {nombre, email, password } = req.body;
    try{
        const hash = await bcrypt.hash(password, 10);
        await pool.query(
            "INSERT INTO usuarios (nombre,email,password_hash) VALUES (?,?,?)",
            [nombre, email, hash]
        );
        res.json({ message: "Usuario registrado :D"});
    } catch (err){
        res.status(500).json({ error: "Error al registrar usuario "});
    }
});

// Login
router.post("/login", async (req,res) => {
    const {email, password} = req.body;
    try{
        const[rows] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email,           
        ]);
        if(!rows.length)
            return res.status(400).json({ error: "Credenciales invalidas" });

        const user = rows[0];
        const valid = await bcrypt.compare(password, user.password_hash);
        if(!valid) return res.status(400).json({error: "Contraseña incorrecta"});

        const token = signAccessToken({
            id: user.id,
            email: user.email,
            role: user.role,
        });
        res.json({token});
    } catch(err){
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
});

module.exports = router;