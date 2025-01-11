
import express from "express";
import RotasBase from "./routes/basico";
import RotasDiferentes from "./routes/diferentes";
import RotasAninhadas from "./routes/rotasAninhadas";
import RouterStatus from "./routes/status";
import RouterParams from "./routes/parametrosDeRotas";
import RouterMetodo from "./routes/metodos";

const app = express();
const porta = 8080;

///midlleware
// app.use((req, res, next) => {
//     console.log(`Data: ${Date.now()}`);
//     next()    
// })

//midlleware para fazer requisições para o body
app.use(express.urlencoded({extended: true}));

app.use(RotasBase);
app.use(RotasDiferentes);
app.use("/produtos", RotasAninhadas);
app.use(RouterStatus);
app.use("/parametros", RouterParams);
app.use("/metodos", RouterMetodo);

app.listen(porta, () => {
    console.log("Estou rodando no express");    
});



