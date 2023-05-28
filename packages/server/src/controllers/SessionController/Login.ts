import { Request, Response } from 'express'
import LoginServices from "../../services/SessionServices/Login"



const Login = async (request: Request, response: Response) => {
    const { email, password } = request.body

    if (!email || !password) {
        return response.status(400).json({ message: "Email e senha são obrigatórios" })
    }

    const { message, token, status } = await LoginServices({ email, password })

    return response.status(status).json({ message, token })
}

export default Login
