import { createKysely } from '@vercel/postgres-kysely';
import { Generated } from 'kysely';

interface ServiceTable {
    id: Generated<number>;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

interface Database {
    Services: ServiceTable;
}


export async function GET(request: Request) {

    const db = createKysely<Database>();
    const person = await db
        .selectFrom("Services")
        .selectAll().execute();
    console.log(person)
    return Response.json({ person })
}