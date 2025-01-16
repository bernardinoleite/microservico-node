import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";




export class CreateClientController {

    constructor() {

    }

    async handle(request: Request, response: Response) {

        const useCase = new CreateClientUseCase()
        const { name, email, password, phone } = request.body
        try {
            const customer = await useCase.execute({ name, email, password, phone })
            return response.json(customer)

        } catch (error) {
            return response.status(400).json({ message: error })

        }
    }

}