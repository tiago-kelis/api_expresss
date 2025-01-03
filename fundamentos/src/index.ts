
import express from "express";
import RotasBase from "./routes/basico";
import RotasDiferentes from "./routes/diferentes"

const app = express();
const porta = 8080;

///midlleware
// app.use((req, res, next) => {
//     console.log(`Data: ${Date.now()}`);
//     next()    
// })

app.use(RotasBase);
app.use(RotasDiferentes);

app.listen(porta, () => {
    console.log("Estou rodando no express");    
});



