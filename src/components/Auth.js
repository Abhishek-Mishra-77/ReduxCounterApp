import React from 'react'
import './Auth.css';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';


const Auth = () => {

    const isAuthentication = useSelector(state => state.auth.isAuthentication);
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    }

    return (
        <main className='auth'>
            <section>
                {!isAuthentication && <form onSubmit={onSubmitHandler}>
                    <div>
                        <div className='control'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' required />
                        </div>
                        <div className='control'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' required />
                        </div>
                        <button>Login</button>
                    </div>
                </form>}
                {isAuthentication && <h1>My User Profile</h1>}
            </section>
        </main>
    );
};

export default Auth;
