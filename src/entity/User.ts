import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    private id: number

    @Column()
    private name: string

    @Column()
    private city: string

    setName(name: string) {
        this.name = name
        return this
    }

    setCity(city: string) {
        this.city = city
        return this
    }

    getName() {
        return this.name
    }

    getCity() {
        return "Kota " + this.city
    }
}