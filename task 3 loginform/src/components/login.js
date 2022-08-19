import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const Navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleUserName = (e) => {
      setUsername(e.target.value)

    }
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }
    const handleSubmit = () => {
        if (username ==="dhara" && password === "123") {
            // alert("login succeed");
            Navigate("/dashboard");
        }else{
            alert("you have entered an incorrect email or password")
        }
    }
    return (<>
        <div className='login-form'>
            <h1>
                Login
            </h1>
            <div className='container'>
                <div className='username'>
                    <label>username:</label>
                    <input onChange={handleUserName} type="text" />
                </div>
                <div className='password'>
                    <label>password:</label>
                    <input onChange={handlePassword} type="password" />
                </div>

                <button onClick={handleSubmit}>
                    Login
                </button>
            </div>

        </div>

    </>)

}

export default Login;