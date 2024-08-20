import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient()

export async function GET(request: Request) {
    

    const services = await prisma.services.findMany();

    return Response.json(services)
}