import 'dotenv/config'

import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'


import { routes } from './routes'

import { keys } from './configs/keys'
import { tmpFolder } from "./helpers/tmpFolder";

// @ts-ignore
import swaggerJson from "../swagger.json"

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

const swaggerDocs = swaggerJsdoc(swaggerJson);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
  swaggerOptions: {
    docExpansions: "none",
    persistAuthorization: true
  }
}));

app.listen(port, () => {
  console.log(`We are live on ${port}`)
  console.log(`Environment: ${keys.environment}`)
})
