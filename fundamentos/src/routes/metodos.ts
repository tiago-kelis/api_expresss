import { Router } from "express";

const router = Router();

const pessoas = [
    {nome: "Tiago", idade: 35},
    {nome: "Maria", idade: 35},
    {nome: "Natasha", idade: 35},
    {nome: "Duda", idade: 35}
]

router.get("/", (req, res) => {
    res.status(200).send(pessoas);  
});

router.get("/:id", (req, res) => {
    const id = +req.params.id;
    if(id <= 0 && id < pessoas.length) {
        res.status(200).send(pessoas[id]);
    }else {
        res.status(204).send("Objeto vazio");
    }       
});

export default router;