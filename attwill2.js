const express = require("express");

const app = express();

const PORTA = 3000;

// Rota principal
app.get("/", (req, res) => {
    res.send("Parabéns! Nosso primeiro servidor Express está funcionando!");
});

// Inicia o servidor
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});