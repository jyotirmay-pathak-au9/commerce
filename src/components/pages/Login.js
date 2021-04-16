import React from 'react';
import './login.css'

function Login() {
    return (
        <div className="login-box">
            <h1>Login</h1>
            <form className="form-cotainer">
                <input type="text" placeholder="Email" name="email"  />
                <input type="password" placeholder="Password" name="password" /><br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
