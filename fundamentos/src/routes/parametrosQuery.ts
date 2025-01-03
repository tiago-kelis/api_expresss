import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    const cores = ["Azul", "Vermelho", "Amarelo", "Branco"];
    res.status(200).send(cores);
});

//ainda não implementado