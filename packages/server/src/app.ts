import 'dotenv/config'

import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

import { routes } from './routes'

import { tmpFolder } from './helpers/tmpFolder'

// @ts-ignore
import swaggerJson from '../swagger.json'

import './models'

const app = express()

import * as dotenv from 'dotenv'

dotenv.config()

app.use(cors())
app.use(express.json({}))
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use('/tmp', express.static(`${tmpFolder}`))

const swaggerDocs = swaggerJsdoc(swaggerJson)

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    swaggerOptions: {
      docExpansions: 'none',
      persistAuthorization: true
    }
  })
)

export default app
