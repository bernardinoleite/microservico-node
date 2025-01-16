import express from "express";
import { router } from "./infra/routes";


const app = express()

app.use(express.json())

app.use(router)


app.listen(3003, () => {
    console.log("server pedidio running on port 3003");

})



