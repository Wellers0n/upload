import {Request, Response} from 'express'

const HealthController = (request: Request, response: Response) => {
    return response.status(200).json({message: 'ok'})
}

export default HealthController
