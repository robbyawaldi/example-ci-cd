import { User } from "./User";

export const userInJakarta = (users: User[]) => {
    return users.filter(user => /jakarta/.test(user.getCity()))
}