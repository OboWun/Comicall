import axios from "axios"

export const UserService = {
    signIn: async (username, password) => await axios.post(
        'http://localhost:8080/api/auth/signing',
        {
            username: username,
            password: password
        }
    ),

    signUp: async (username, password) => await axios.post(
        'http://localhost:8080/api/auth/signupUser',
        {
            username: username,
            password: password
        }
    )
}