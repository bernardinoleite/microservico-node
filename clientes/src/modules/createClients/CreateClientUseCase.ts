import { prismaClient } from "../../infra/database/PrismaClient"

type CreateClientRequest = {
    name: string,
    password: string
    email: string
    phone: string
}


export class CreateClientUseCase {

    constructor() {

    }
    async execute({ name, email, password, phone }: CreateClientRequest) {

        const customer = await prismaClient.client.findFirst({ where: { email } })

        if (customer) {
            throw new Error("Customer already exists")


        }

        const customerCreate = await prismaClient.client.create({
            data: { name, email, password, phone }
        })

        return customerCreate
    }

}