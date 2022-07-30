import { useMutation } from "@apollo/react-hooks"
import React, { useState } from "react"
import Auth from "../utils/auth"
import { LOGIN } from "../utils/mutations"

function Login() {
    const [formState, setFormState] = useState({ email: "", password: "" })
    const [login, { error }] = useMutation(LOGIN)

    const handleFormSubmit = async event => {
        event.preventDefault()
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            })
            const token = mutationResponse.data.login.token
            Auth.login(token)
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = event => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    return (
        <div className="container my-1">
            <h6 id="newcust">
                New to us?
                <a id="signupbtn" href="/signup">
                    Sign Up.
                </a>
            </h6>

            <h2 id="hlogin">Welcome Back!</h2>
            <form id="loginbox" onSubmit={handleFormSubmit}>
                <div className="flex-row mb-3">
                    <label htmlFor="email">Email address:</label>
                    <input
                        icon="user"
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row my-2">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        icon="lock"
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <div className="flex-row flex-end">
                    <button id="btnlog" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
