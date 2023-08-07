import React from 'react';
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {

    const isAuthentication = useSelector(state => state.auth.isAuthentication);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout())
        console.log('jkkjk')
    }

    return (
        <header className='header'>
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    <li>
                        {isAuthentication && <a href='#'>My Products</a>}
                    </li>

                    <li>
                        {isAuthentication && <a href='#'>My Sales</a>}
                    </li>
                    <li>
                        {isAuthentication && <button onClick={logoutHandler}>Logout</button>}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
