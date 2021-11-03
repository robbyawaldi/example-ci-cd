import express, { Request, Response } from 'express'
import { userInJakarta } from './filterUser'
import { User } from './User'

const main = () => {
    const app = express()

    const users = [
        new User("Riza", "depok"),
        new User("Afrizal", "jakarta barat"),
        new User("Lisna", "bandung"),
        new User("Rama", "jakarta timur"),
    ]

    app.get('/', (_: Request, res: Response) => {
        res.json({ message: 'Welcome to Super Simple REST API' })
    })

    app.get('/users', (_: Request, res: Response) => {
        res.json({ data: users })
    })

    app.get('/users/cities', (_: Request, res: Response) => {
        res.json({ data: users.map(user => user.getCity()) })
    })

    app.get('/users/jakarta', (_: Request, res: Response) => {
        res.json({ data: userInJakarta(users) })
    })

    app.listen(8080, () => {
        console.log("server started on port 8080")
    })
}

main()
