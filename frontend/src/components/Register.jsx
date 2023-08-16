import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import NavBar from "./subComponents/Navbar";


const Register = () => {
    const [username, usernamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [cPassword, cPasswordchange] = useState("");
    const [email, emailchange] = useState("");
   
    const navigate = useNavigate();
    const isValidate = () => {
        let isProceed = true;
        let errormessage = 'Please enter the value in';
        if (username === null || username === "") {
            isProceed = false;
            errormessage += ' Username';
        }
      
        if (password === null || password === "") {
            isProceed = false;
            errormessage += ' password';
        }
        if (password !== cPassword) { 
            isProceed = false;
            errormessage += ' Passwords do not match';
        }
        if (email === null || email === "") {
            isProceed = false;
            errormessage += ' Email';
        }
 
        if (!isProceed) {
            toast.warning(errormessage);
        } else {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {

            } else {
                isProceed = false;
                toast.warning('Please enter the valid Email');
            }
            //validation for password

            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(password)) {

            } else {
                isProceed = false;
                toast.warning('Please enter the valid password atleast 8digit and one uppercase and one lowercase');
            }
     
        }
        return isProceed;
    }

    const handlesubmit = async (e) => {

        e.preventDefault();
        let regobj = { username, password, email,cPassword };
        if (isValidate()) {
           console.log(regobj);
            try {
                const res = await fetch('http://localhost:5000/register', {
                    method: "POST",
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(regobj)
                });
                if (res.ok) {
                    toast.success('Registered Successfully.');
                    navigate('/login');
                } else {
                    const errorMessage = await res.text();
                    toast.error('Failed: ' + errorMessage);
                }
            } catch (err) {
                toast.error('Failed: ' + err.message);
            }
        }
    }
    return (
        <>
        <NavBar></NavBar>
            <div className="offset-lg-3 col-lg-6 register mt-1 ">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label >User Name<span className="errmsg">*</span></label>
                                        <input placeholder="Enter UserName" value={username} onChange={e => usernamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label >Password<span className="errmsg">*</span></label>
                                        <input placeholder="Enter Your password" required value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6 mt-3">
                                    <div className="form-group">
                                        <label >Confirm Password<span className="errmsg">*</span></label>
                                        <input placeholder="Confirm password" required value={cPassword} onChange={e => cPasswordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                        <label >Email<span className="errmsg">*</span></label>
                                        <input placeholder="Enter Your E-mail" value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                {/* <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                        <label >Profile Picture</label>
                                        <input type="file" value={profile_picture} onChange={e => profile_picturechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-12">
                                    <div className="form-group mt-3">
                                        <label >Write Your Bio</label>
                                        <textarea value={bio} onChange={e => biochange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div> */}
                            </div>
                            <div className="card-footer mt-3">
                                <button type="submit" className="btn btn-primary">Register</button>
                                <Link className="btn btn-danger ms-2" to={'/login'}>Back</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Register;