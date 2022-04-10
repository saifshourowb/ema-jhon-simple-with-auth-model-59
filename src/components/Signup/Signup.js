import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [confirmPassword,setConfirmPassword] =useState('');
    const [error, setError] = useState('');
    const Navigate= useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)


    // eigula holo event handelar 
    const handelEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handelPasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handelConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }

    if(user){
        Navigate('/shop');

    }

    const handelCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('your two password did not match');
            return;
        }
        if(password.length<6){
            setError('password must 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    };



    return (
    <div className="form-container">
     <div>
        <h2 className="form-title">Sign up</h2>
         <form onSubmit={handelCreateUser}>
         <div className="input-grop">
         <label htmlFor="email">Email</label>
         <input onBlur={handelEmailBlur} type="email" name="email" id="" required/>
        </div>
            <div className="input-grop">
                <label htmlFor="password">password</label>
                <input onBlur={handelPasswordBlur} type="password" name="password" id="" required/>
            </div>
                <div className="input-grop">
                <label htmlFor="confirm-password">Confirm password</label>
                <input onBlur={handelConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
            </div>
            <p style={{color: 'red'}}>{error}</p>
            {/* <p style={{color: 'red'}}>{hookerror}</p> */}
            <input className="form-submit" type="submit" value="Sign up"></input>
        </form>
            <p className="p-title">
            All rady have an acount?<Link className="form-link" to ="/login">Login</Link>
         </p>                                       
        </div>           
    </div>
        
        
    );
};

export default Signup;