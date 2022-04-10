import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);

    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [address,setAddress] =useState('');
    const [phone, setPhone] =useState('');
    const [error, setError] = useState('');


    // const Navigate= useNavigate()
    const handelNamelBlur = event =>{
        setName(event.target.value);
    };

    const handelPhoneNumberBlur = event =>{
    setName(event.target.value);
    }


    const handelAddressBlur = event =>{
    setAddress(event.target.value)
    }

    const handelCreateUser = event =>{
    event.preventDefault();
    const shipping = {name, email, address, phone};
    console.log(shipping);

    };


    return (
        <div className="form-container">
        <div>
           <h2 className="form-title">Shiping Information</h2>
            <form onSubmit={handelCreateUser}>
            <div className="input-grop">
            <label htmlFor="name">Name</label>
            <input onBlur={handelNamelBlur} type="text" name="name" id="" required/>
           </div>
           <div className="input-grop">
            <label htmlFor=" Email">Email</label>
            <input value={user?.email} readOnly type="email" name="Email" id="" required/>
             </div>
            <div className="input-grop">
                <label htmlFor="Your Address">Address</label>
                 <input onBlur={handelAddressBlur} type="text" name="address" id="" required/>
            </div>
                <div className="input-grop">
                   <label htmlFor="Phone">Phone Number</label>
                   <input onBlur={handelPhoneNumberBlur} type="text" name="phonenumber" id="" required/>
               </div>
               <p style={{color: 'red'}}>{error}</p>
               {/* <p style={{color: 'red'}}>{hookerror}</p> */}
               <input className="form-submit" type="submit" value="Add shipping"></input>
           </form>         
           </div>           
       </div>
           
        
        
    );
};

export default Shipment;