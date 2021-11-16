import express, { Request, Response } from 'express'
import { createConnection, getRepository } from 'typeorm'
import { User } from './entity/User'
import { filterByCity } from './utils/filterUser'
import { unique } from './utils/unique'
import path from 'path'

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const main = async () => {
    const app = express()

    const conn = await createConnection({
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

    if (conn.isConnected) {
        console.log('database connected')
    }

    const userRepository = getRepository(User)

    const users = await userRepository.find()

    app.get('/', (_: Request, res: Response) => {
        res.json({ message: 'Welcome to Super Simple REST API' })
    })

    app.get('/users', (_: Request, res: Response) => {
        // const filter = req.query["filter-city"]
        // if (filter) {
        //     res.json({ data: filterByCity(users, filter as string) })
        //     return
        // }
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










// Dinda:
// - Membuat filter user by city di endpoint /users
// Dani
// - Menambahkan suffix "Kota" di endpoint /users/cities



// Docker build and push
// https://github.com/docker/build-push-action
// SCP action
// https://github.com/appleboy/scp-action
// SSH action
// https://github.com/appleboy/ssh-action
// Example Postgres service in github action
// https://gist.github.com/2color/537f8ef13ecec80059abb007839a6878
// Example Storing folder and file as artifacts
// https://docs.github.com/en/actions/advanced-guides/storing-workflow-data-as-artifacts