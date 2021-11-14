import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { User } from "../entity/User";
import faker from 'faker'

export default class CreateUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .delete()
            .from(User)
            .execute()

        const fakers = await factory(User)().makeMany(20)
        const user1 = new User().setName(faker.name.findName()).setCity("Jakarta")
        const user2 = new User().setName(faker.name.findName()).setCity("Jakarta")

        await connection
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                ...fakers,
                user1,
                user2
            ])
            .execute()
    }
}