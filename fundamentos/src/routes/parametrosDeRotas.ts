import { Router } from "express";

const router = Router();

router.get("/frutas/:id", (req, res) => {
    const frutas = ["Maçã", "Banana", "Uva", "Melância"];
    const id = +req.params.id; 
    
    if(id >= 0 && id < 4) {
        res.status(200).send(frutas[id]);
    }
    res.status(204).send("deus errado");
});

router.get("/pessoa/:nome/:cor", (req, res) => {
    const novaPessoa = {nome: req.params.nome, cor: req.params.cor};
    res.status(201).send(`A cor Preferida ${novaPessoa.nome} è ${novaPessoa.cor}`)
})

export default router;