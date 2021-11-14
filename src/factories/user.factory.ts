import { define } from "typeorm-seeding";
import { User } from "../entity/User";
import Faker from 'faker'

define(User, (faker: typeof Faker) => {
    const city = faker.address.city()
    const user = new User()
    user.setName(faker.name.findName())
    user.setCity(city)
    return user
})