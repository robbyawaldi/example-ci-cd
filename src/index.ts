import express, { Request, Response } from 'express'
import { createConnection, getRepository } from 'typeorm'
import { User } from './entity/User'
import { filterByCity } from './utils/filterUser'
import { unique } from './utils/unique'

const main = async () => {
    const app = express()

    await createConnection()

    const userRepository = getRepository(User)

    const users = await userRepository.find()

    app.get('/', (_: Request, res: Response) => {
        res.json({ message: 'Welcome to Super Simple REST API' })
    })

    app.get('/users', (req: Request, res: Response) => {
        const filter = req.query["filter-city"]
        if (filter) {
            console.log(filter)
            res.json({ data: filterByCity(users, filter as string) })
            return
        }
        res.json({ data: users })
    })

    app.get('/users/cities', (_: Request, res: Response) => {
        res.json({ data: unique(users.map(user => user.getCity())) })
    })

    app.listen(8080, () => {
        console.log("server started on port 8080")
    })
}

main()
