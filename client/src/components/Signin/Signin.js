import React, {useState} from 'react';
import './Signin.css';
import { withRouter, useHistory } from "react-router-dom";

const Signin = () => {
    const [state, setState] = useState({
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
        email: state.email,
        password: state.password,
      };
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
        const userData = await user.json();
        if(userData.name && userData.email) {
            history.push(`/news?name=${userData.name}&email=${userData.email}`);
       }
    };

    return (
        <div className="login-form">
            <div className="container">
                <div className="row">
                    <div className="form-box offset-md-3 col-md-6">
                        <h2>Login</h2>
                        <form method="post">
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text" name="email" placeholder="Email" value={state.email} className="form-control" onChange={handleValueChange}/>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" placeholder="Password" value={state.password} className="form-control" onChange={handleValueChange}/>
                            </div>
                            <div className="button">
                                <input type="submit" className="submit btn btn-primary" value="Login" onClick={handleSubmit} />
                                <p className="p-login">Not Signed Up Yet? <a href="/" className="p-a">Signup</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Signin);
