import path from "path";
import { Router } from "express";

const router = Router();


router.get("/variaveis", (req, res) => {
    let v = "Topo tudo";
    res.send(v);    
});

router.get("/number", (req, res) => {
    let num = 1989;
    res.json(num);
});

router.get("/obj", (req, res) => {
    const obj = [
        {nome: "Tiago", email: "tiaguinho@gmail", iadade: 35},
        {nome: "Maria", email: "tiaguinho@gmail", iadade: 35},
        {nome: "Natasha", email: "tiaguinho@gmail", iadade: 35},
        {nome: "Duda", email: "tiaguinho@gmail", iadade: 35}
    ]
    res.send(obj);
})

router.get("/pdf", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "assets", "test.pdf"))
})

export default router;