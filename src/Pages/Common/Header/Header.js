import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const naviage = useNavigate();

    const goToLoginPage = () => {
        // naviage('/home', { replace: true }) // not to store the previous route/page
        naviage('/login', { replace: true }) // not to store the previous route/page
    }

    return (
        <>
            <header>
                <ul>
                    <li>
                        {/* <a href="/home">Home</a> */}
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        {/* <a href="/about">About</a> */}
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <button onClick={goToLoginPage}>Login</button>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header