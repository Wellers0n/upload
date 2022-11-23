import 'dotenv/config'

import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import morgan from 'morgan'

import { routes } from './routes'

import { keys } from './configs/keys'
import {tmpFolder} from "./helpers/tmpFolder";
import './models'

const port = keys.port || 3001

const app = express()

import * as dotenv from 'dotenv'

dotenv.config()

app.use(cors())
app.use(express.json({}))
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use('/tmp', express.static(`${tmpFolder}`))


app.listen(port, () => {
    console.log(`We are live on ${port}`)
    console.log(`Environment: ${keys.environment}`)
})
