import { Router } from "express";

const router = Router();

//tipos e formas de fazer requisições com status

router.get("/ok", (req, res) => {
    res.sendStatus(200);
});

router.get("/create", (req, res) => {
    res.status(201).send("criado");
});

router.get("/encontrado", (req, res) => {
    res.status(404).send("não encontrado");
});

export default router;