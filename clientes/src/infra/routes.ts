import { Router } from "express";
import { CreateClientController } from "../modules/createClients/CreateClientController";

const router = Router()

router.post("/customers", (request, response) => {
    new CreateClientController().handle(request, response)
})


export {
    router
}