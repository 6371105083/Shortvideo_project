import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "./subComponents/Navbar";


const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    const ProceedLogin = (e) => {
        e.preventDefault();
  
        if (validate()) {
            const regobj={username,password};
            //implementation
           // console.log('proceed');
            fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(regobj)
            })
            .then((res) => res.json())
            .then((resp) => {
                //console.log(resp)
                if (resp.message === 'Your Login Successful.') {
                    const token=resp.token;
                    //const usename=resp.username;
                    toast.success('Success');
                    localStorage.setItem('token',token);
                    localStorage.setItem('username',username)
                    usenavigate('/');
                } else {
                    toast.error('Please Enter valid credentials');
                }
            })
            .catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter User name');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <>
        <NavBar></NavBar>
            <div className="row login">
                <div className="offset-lg-3  col-lg-6">
                    <form onSubmit={ProceedLogin} className="container">
                        <div className="card">
                            <div className="card-header">
                                <h2>User Login</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>User Name<span className="errmsg">*</span></label>
                                    <input type={username} value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Password<span className="errmsg">*</span></label>
                                    <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Login</button>
                                <Link className="btn btn-success ms-2" to={'/register'}>New User</Link>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            
        </>
    )
}
export default Login;