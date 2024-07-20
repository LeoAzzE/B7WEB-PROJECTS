import { prisma } from "../libs/prisma"

type createUser = {
    name: string,
    email: string
}
export const createUser = async ({ name, email } : createUser) => {
    const user = await prisma.user.create({
        data: {name, email}
    })
    return user;
}