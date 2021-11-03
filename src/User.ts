export class User {
    constructor(private name: string, private city: string) { }

    getName() {
        return this.name
    }

    getCity() {
        return this.city
    }
}