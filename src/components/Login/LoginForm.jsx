import { Button, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggingIn } from "store/Authorization/authSlice";
import css from '../../pages/LoginPage/LoginPage.module.css'

export const LoginForm = () => {
    const [show, setShow] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //TODO error!!!!!!

    const dispatch = useDispatch();

    const loginUser = (body) => {
    // console.log(body);
    dispatch(loggingIn(body))
    }
    
    const handleChange = evt => {
        const { name } = evt.target;
        const value = evt.target.value;
        if (name === "email") {
            setEmail(value)
        }
        if (name === "password") {
            setPassword(value)
        }
    };
    
    const handleSubmit = (evt, userEmail, userPassword) => {
        if (userEmail === '' || userPassword === '') {
             window.alert('Please, fill all fields.');
            return
        }
        // console.log(`email: ${userEmail}, password: ${userPassword}`);
        loginUser({email: userEmail, password: userPassword})
        evt.target.reset() 
    };

    const handleClick = () => setShow(!show)
    return (
        <div className={css.Box}>
            <Heading as='h1' size='xl'>Log in</Heading>
            <form
                className={css.Form}
                action="submit"
                 onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e, email, password)
                    e.target.reset() 
                }}
            >
                <Input
                    name='email'
                    placeholder='Enter your email'
                    onChange={handleChange}
                />
                <InputGroup size='md'>
                    <Input
                        name='password'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        onChange={handleChange}
                    />
                    <InputRightElement width='4.5rem' className={css.ShowButton}>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button >
                    </InputRightElement>
                </InputGroup>
                <button type="submit" className={css.SubmitButton}>Log In</button>
            </form>
            <p>Or <Link to="/register" className={css.Link}> register
            </Link> if you don't have an account yet!</p>
    </div>
    )
}