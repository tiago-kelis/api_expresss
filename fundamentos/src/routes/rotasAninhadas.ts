import { Router } from "express";

const router = Router();

router.get("/produtos", (req, res) => {
    res.send("Aqui existe conteúdo");
});

router.get("/cozinha", (req, res) => {
    const cozinha = [
        {nome: "Frigideira", tamanho: "G", preco: 75},
        {nome: "Geladeira", marca: "Brastamp", preco: 1575},
        {nome: "Fogão", bocas: 4, preco: 675},
        {nome: "Mesa", tamanho: "G", preco: 275},
    ]
    res.send(cozinha);
});

router.get("/banheiro", (req, res) => {
    const banheiro = [
        {nome: "chuveoro", eletrico: "trfase", preco: 100},
        {nome: "Pia", tamanho: "1m", preco: 150},
        {nome: "Saboneteira", tamanho: "G", preco: 45}
    ]
    res.send(banheiro);
});

export default router;