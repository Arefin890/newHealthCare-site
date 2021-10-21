import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const { isLogin, handleUser, handleEmail, handlePassword, handleIsLogin, googleSignIn, setIsLoading, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home';
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri)

            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div style={{ minHeight: '80vh' }} className="mt-5 py-5 mx-auto">
            <h1>Please {isLogin ? 'Login' : 'Register'}</h1>
            <Form onSubmit={handleUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleIsLogin} type="checkbox" label="Already Registered?" />
                </Form.Group>
                <button className="btn btn-secondary" type="submit">
                    {isLogin ? 'Login' : 'Register'}
                </button>
                <h6>You can also Sign In with:</h6>
                <button onClick={handleGoogleLogIn} className="btn btn-secondary" type="submit">Google</button>
            </Form>
            {/* <h1>{user.email}</h1> */}
        </div>
    );
};

export default Login;