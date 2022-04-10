import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate()
      const location = useLocation()

      const from = location.state?.from?.pathname || "/";


    const handelEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handelPasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, { replace: true });

    }

    const handelUserSignIn = event =>{
        event.preventDefault();
        createUserWithEmailAndPassword(email , password)
    }



    return (
        <div className="form-container">
            <div>
            <h2 className="form-title">login</h2>

            <form onSubmit={handelUserSignIn}>

            <div className="input-grop">
            <label htmlFor="email">Email</label>
            <input onBlur={handelEmailBlur} type="email" name="email" id="" required/>
            </div>

            <div className="input-grop">
                <label htmlFor="password">password</label>
                <input onBlur={handelPasswordBlur} type="password" name="password" id="" required/>
            </div>
            <p style={{color:'red'}}>{error?.message}</p>
            {
                loading && <p>Loading...</p>
            }

            <input className="form-submit" type="submit" value="login"></input>

            </form>
            <p className="p-title">
                New to Ema-john? <Link className="form-link" to ="/signup">Create an acount</Link>
            </p>                                       
            </div>           
        </div>
    );
};

export default Login;