import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';


const Register = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("India");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("");

    const navigate = useNavigate();
    const isValidate = () => {
        let isProceed = true;
        let errormessage = 'Please enter the value in';
        if (id === null || id === "") {
            isProceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === "") {
            isProceed = false;
            errormessage += ' FullName';
        }
        if (password === null || password === "") {
            isProceed = false;
            errormessage += ' password';
        }
        if (email === null || email === "") {
            isProceed = false;
            errormessage += ' Email';
        }
        if (phone === null || phone === "") {
            isProceed = false;
            errormessage += ' Phone Number';
        }
        if (country === null || country === "") {
            isProceed = false;
            errormessage += ' Country';
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
            //validation for MobileNumber

            if (/^[0-9]{10}$/.test(phone)) {

            } else {
                isProceed = false;
                toast.warning('Please enter the 10 digit mobile number');
            }

        }
        return isProceed;
    }

    const handlesubmit = async (e) => {

        e.preventDefault();
        let regobj = { id, name, password, email, phone, country, address, gender };
        if (isValidate()) {
            console.log(regobj);
            try {
                const res = await fetch("/register", {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(regobj)
                });
                if (res.ok) {
                    toast.success('Registered Successfully.');
                    navigate('/login');
                } else {
                    const errorMessage = await res.text();
                    toast.error('Failed: ' + err.message);
                }
            } catch (err) {
                toast.error('Failed: ' + err.message);
            }
            // if (isValidate()) {
            //     console.log(regobj);
            //     const res = await fetch("/register", {
            //         method: "POST",
            //         headers: { 'content-type': 'application/json' },
            //         body: JSON.stringify(regobj)
            //     }).then((res) => {
            //         toast.success('Registered Successfully.')
            //         navigate('/login');
            //     }).catch((err) => {
            //         toast.error('Failed:' + err.message);
            //     });
            // }
        }
    }
        return (
            <>
                <div className="offset-lg-3 col-lg-6">
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
                                            <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label >Password<span className="errmsg">*</span></label>
                                            <input required value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label >Full Name<span className="errmsg">*</span></label>
                                            <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label >Email<span className="errmsg">*</span></label>
                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label >Phone Number<span className="errmsg">*</span></label>
                                            <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label >Country<span className="errmsg">*</span></label>
                                            <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
                                                <option value="india">India</option>
                                                <option value="usa">USA</option>
                                                <option value="singapore">UK</option>
                                                <option value="singapore">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Address</label>
                                            <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Gender</label><br></br>
                                            <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check "></input>
                                            <label >Male</label>
                                            <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check ms-3"></input>
                                            <label>Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
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