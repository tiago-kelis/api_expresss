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

router.post("/", (req, res) => {
    const novaPessoa = {
        nome: req.body.nome,
        idade: +req.body.idade
    };
    console.log(novaPessoa);
    pessoas.push(novaPessoa);
    res.status(201).send(pessoas);
});

router.get("/:id", (req, res) => {
    const id = +req.params.id;
    if(id >= 0 && id < pessoas.length) {
        res.status(200).send(pessoas[id]);
    }else {
        res.status(204).send("Objeto vazio");
    }       
});

router.delete("/:id", (req, res) => {
    const id = +req.params.id;
    pessoas.splice(id, 1);
    res.status(200).send(pessoas);
});

router.put("/:id", (req, res) => {
    const id = +req.params.id;
    pessoas[id].nome = req.body.nome;
    pessoas[id].idade = req.body.idade;
    res.status(200).send(pessoas);
});

export default router;