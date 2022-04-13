import Axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    // const [userName, setUserName] = useState("");
    // const [userPassword, setUserPassword] = useState("");

    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);

    const [userObj, setUserObj] = useState({
        useremail: '',
        userPassword: ''
    });

    const [errorObj, setErrorObj] = useState({
        emailErr: '',
        passwordErr: ''
    });

    const navigate = useNavigate();


    const handleChange = (event) => {
        // console.log("sadddddddddddddd", event.target.name, event.target.value);
        // console.dir(event.target);
        const name = event.target.name;
        const value = event.target.value;

        // if (name === 'useremail') {
        //     setUserName(value);            
        // } else if (name === 'userPassword') {
        //     setUserPassword(value);
        // }
        // switch (name) {
        //     case 'useremail':
        //         setUserName(value);
        //         break;
        //     case 'userPassword':
        //         setUserPassword(value);
        //         break;
        //     default:
        //         break;
        // }


        // using object
        // if (name === 'useremail') {
        //     setUserObj({ ...userObj, email: value });
        // } else if (name === 'userPassword') {
        //     setUserObj({ ...userObj, password: value });
        // }

        //===============validations

        if (name === 'userPassword') {
            if (value.length <= 3) {
                // console.log("password sholud more than 3 chars");
                setErrorObj({ ...errorObj, passwordErr: "sholud more than 3 chars" })
            } else if (value.length >= 10) {
                setErrorObj({ ...errorObj, passwordErr: "sholud not ne less than 10 chars" })
                // console.log("password sholud not ne less than 10 chars");
            } else {
                setErrorObj({ ...errorObj, passwordErr: "" })
            }
        }

        setUserObj({ ...userObj, [name]: value })

    }

    // console.log("outside",userName, userPassword);
    console.log("outside", userObj, errorObj);

    const submitForm = (event) => {
        event.preventDefault();

        if (userObj.useremail && userObj.userPassword) {
            // alert("Success")
            const body = {
                "email": userObj.useremail,
                "password": userObj.userPassword
            }
            setIsSuccess(false);
            Axios.post('https://reqres.in/api/login', body).then(res => {
                console.log(res.data);
                // navigate('/home', { replace: true })
                setIsLoginSuccess(true);
                // if (res.data.status ===1) {

                // }
            }).catch(err => {
                console.log("==============error", err.response.data.error);
                if (err.response.data.error) {
                    setIsSuccess(true);
                    setErrorMsg(err.response.data.error)
                }
                // alert(err.response.data.error)
            })
        } else {
            alert("Please enter all inputs")
        }
    }

    const nextPage = () => {
        setIsLoginSuccess(false);
        navigate('/home', { replace: true })
    }


    const closeModal = () => {
        setIsSuccess(false);
    }
    
    return (
        <main className="form-signin row justify-content-center">
            <form className='col-sm-6' onSubmit={submitForm}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                {isSuccess ? <h1 className="h3 mb-3 fw-normal text-danger">{errorMsg}</h1> : null}
                <div className="form-floating">
                    <input
                        type="email"
                        name='useremail'
                        className="form-control"
                        onChange={handleChange}
                        id="floatingInput"
                        placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        name='userPassword'
                        onChange={handleChange}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                    <p className='text-danger small'>{errorObj.passwordErr}</p>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                {/* <p className="mt-5 mb-3 text-muted">© 2017–2021</p> */}
            </form>
            {isLoginSuccess &&
                <div className="custom-modal">
                    <div className="custom-modal-body">
                        <h1>User Successfully loggedin!</h1>
                        <button onClick={nextPage}>Okay!</button>
                    </div>
                </div>}

                {isSuccess &&
                <div className="custom-modal">
                    <div className="custom-modal-body red">
                        <h1>{errorMsg}!</h1>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>}
        </main>

    )
}

export default Login