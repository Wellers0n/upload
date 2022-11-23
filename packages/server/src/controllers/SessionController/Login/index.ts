import { Request, Response } from 'express'
import SessionServices from "../../../services/SessionServices"



const Login = async (request: Request, response: Response) => {
    const { email, password } = request.body

    if (!email || !password) {
        return response.status(400).json({ error: true, message: "Email and password is required" })
    }

    const { error, message, token, status } = await SessionServices.Login({ email, password })

    return response.status(status).json({ error, message, token })
}

export default Login
