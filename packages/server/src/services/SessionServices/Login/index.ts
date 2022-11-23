import db from '../../../models'
import { generateToken } from "../Auth"
import bcrypt from "bcryptjs";

type LoginType = {
    email: string,
    password: string
}
const Login = async ({ email, password }: LoginType) => {

    const user = await db.Users.findOne({ where: { email: email.toLowerCase() } });

    if (!user) {
        return {
            status: 400,
            error: true,
            token: null,
            message: "Invalid credentials",
        };
    }

    const correctPassword = bcrypt.compareSync(password, user.password);

    if (!correctPassword) {
        return {
            status: 400,
            error: true,
            token: null,
            message: "Invalid credentials",
        };
    }

    return {
        status: 200,
        error: false,
        message: 'Successful login',
        token: generateToken(user),
    }

}

export default Login
