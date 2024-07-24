import { Prisma } from "@prisma/client"
import { prisma } from "../libs/prisma"

export const createUser = async (user : Prisma.UserCreateInput) => {
    const result = await prisma.user.upsert({
        where: {
            email: user.email
        },
        update: {
            role: 'ADMIN'
        },
        create: user
    })
    return result
    }

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
    try {
        return await prisma.user.createMany({
            data: users,
            skipDuplicates: true
        })
    } catch (error) {
        return false
    }
}

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({
      
    })
    return users
}

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
        select: {
            id: true,
            name: true
        }
    })
    return user
}

export const updateUser = async () => {
    const updatedUser = await prisma.user.updateMany({
        data: {
            status: true
        }
    })
    return updatedUser
}

export const deleteUser = async () => {
    const deletedUser = await prisma.user.delete({
        where: {
            email: 'ciclano@hotmail.com',
        }
    })
    return deletedUser
}