const express = require("express");

const app = express();

const PORTA = 3000;

// Array que usei no exercicio 1
const usuarios = [
    { id: 1, nome: "Niko" },
    { id: 2, nome: "Isagi" },
    { id: 3, nome: "Nagi" },
    { id: 4, nome: "Shidou" },
];

// Rota principal do localhost
app.get("/", (req, res) => {
    res.send("Parabéns! Nosso primeiro servidor Express está funcionando!");
});

// Nova rota: lista de usuários
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// Inicio do meu localhost
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});