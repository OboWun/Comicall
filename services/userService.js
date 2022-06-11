import axios from "axios"
import { CONNECTION_HOST, CONNECTION_PORT } from "../constants"

const CONNECTION = CONNECTION_HOST + ':' + CONNECTION_PORT

export const UserService = {
    signIn: async (username, password) => await axios.post(
        `${CONNECTION}/api/auth/signing`,
        {
            username: username,
            password: password
        }
    ),

    signUp: async (username, password) => await axios.post(
        `${CONNECTION}/api/auth/signupUser`,
        {
            username: username,
            password: password
        }
    )
}