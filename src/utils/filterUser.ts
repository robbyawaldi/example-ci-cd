import { User } from "../entity/User"

export const filterByCity = (users: User[], city: string) => {
    return users.filter(user => new RegExp(city).test(user.getCity()))
}