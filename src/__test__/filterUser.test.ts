import { createConnection, getRepository } from "typeorm"
import { User } from "../entity/User"
import { filterByCity } from "../utils/filterUser"

describe('Filter User', () => {

    it('filter users in jakarta', async () => {

        await createConnection()

        const userRepository = getRepository(User)

        // get all users
        const users = await userRepository.find()

        const data = filterByCity(users, "Jakarta")

        if (data.length !== 2) {
            throw new Error("Waduh jadi error")
        }
    })
})