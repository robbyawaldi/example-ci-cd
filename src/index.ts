import express, { Request, Response } from 'express'
import { User } from './User'
import { userInJakarta } from './filterUser'

const users = [
    new User("Riza", "depok"),
    new User("Afrizal", "jakarta barat"),
    new User("Lisna", "bandung"),
    new User("Rama", "jakarta timur"),
]

const main = () => {
    const app = express()

    app.get('/', (_: Request, res: Response) => {
        res.json({ message: 'Welcome to Super Simple REST API' })
    })

    app.get('/users', (_: Request, res: Response) => {
        res.json({ data: users })
    })

    app.get('/users/cities', (_: Request, res: Response) => {
        res.json({ data: users.map(user => user.getCity()) })
    })

    app.listen(8080, () => {
        console.log("server started on port 8080")
    })
}

main()


// Dinda:
// - Buat Endpoint user list yang berada di jakarta 
// Dani
// - Merubah daftar kota menjadi huruf capital di endpoint /users/cities