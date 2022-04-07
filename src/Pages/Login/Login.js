import React, { useState } from 'react';

const Login = () => {

    // const [userName, setUserName] = useState("");
    // const [userPassword, setUserPassword] = useState("");

    const [userObj, setUserObj] = useState({
        useremail: '',
        userPassword: ''
    });

    const [errorObj, setErrorObj] = useState({
        emailErr: '',
        passwordErr: ''
    })


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

    return (
        <main className="form-signin row justify-content-center">
            <form className='col-sm-6'>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
        </main>

    )
}

export default Login