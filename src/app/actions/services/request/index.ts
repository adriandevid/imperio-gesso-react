"use server";

import { PrismaClient } from "@prisma/client";

export  async function createRequest(prevState: any, form: FormData) {
    const prisma = new PrismaClient();

    const requestCreated = await prisma.requests.create({
        data: {
            name_people: `${form.get("name_people")?.valueOf()}`,
            email: `${form.get("email")?.valueOf()}`,
            service_id: parseInt(`${form.get("serviceId")?.valueOf()}`),
            phone: `${form.get("phone")?.valueOf()}`
        },
        
    });

    return requestCreated
}