import { userInJakarta } from "../filterUser"
import { User } from "../User"

describe('Filter User', () => {
    it('filter users in jakarta', () => {
        const users = [
            new User("Riza", "depok"),
            new User("Afrizal", "jakarta"),
            new User("Lisna", "bandung"),
            new User("Rama", "jakarta"),
        ]

        const data = userInJakarta(users)

        if (data.length !== 2) {
            throw new Error("Waduh jadi error")
        }
    })
})