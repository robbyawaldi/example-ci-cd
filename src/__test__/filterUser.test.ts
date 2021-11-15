import { createConnection, getRepository } from "typeorm"
import { User } from "../entity/User"
import { filterByCity } from "../utils/filterUser"
import path from 'path'

describe('Filter User', () => {

    it('filter User By City', async () => {

        await createConnection({
            type: "postgres",
            host: process.env.HOST,
            port: 5432,
            username: "postgres",
            password: "zxcasd",
            database: "postgres",
            logging: false,
            synchronize: false,
            migrations: [path.join(__dirname, "./migrations/*")],
            entities: [User],
        })

        const userRepository = getRepository(User)

        // get all users
        const users = await userRepository.find()

        const data = filterByCity(users, "jakarta")

        if (data.length !== 2) {
            throw new Error("Waduh jadi error")
        }
    })
})