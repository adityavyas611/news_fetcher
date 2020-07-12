import React, { useState } from 'react';
import './Signup.css';
import { withRouter, useHistory } from "react-router-dom";

const Signup = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    });
    
    let history = useHistory();

    const handleValueChange = (e) => {
        const { name, value } = e.target;
        setState(() => ({
            ...state,
            [name]: value
        }));
    };

    const formData = {
        name: state.name,
        email: state.email,
        password: state.password,
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const signupSuccess = await fetch('http://localhost:5000/user/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
        
        if(signupSuccess) {
           history.push('/signin');
        }
    };

    return (
        <div className="login-form">
            <div className="container">
                <div className="row">
                    <div className="form-box offset-md-3 col-md-6">
                        <h2>Signup</h2>
                        <form method="post">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" name="name" placeholder="Name" value={state.name} className="form-control" onChange={handleValueChange}/>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text" name="email" placeholder="Email" value={state.email} className="form-control" onChange={handleValueChange}/>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" placeholder="Password" value={state.password} className="form-control" onChange={handleValueChange}/>
                            </div>
                            <div className="button">
                                <input type="submit" className="submit btn btn-primary" value="Signup" onClick={handleSubmit}/>
                                <p className="p-login">Aleady Signed Up? <a href="/signin" className="p-a">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Signup);
