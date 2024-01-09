import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Heading, Input } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { registration } from "store/Authorization/authSlice";


export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const registrateUser = (body) => {
    console.log(body);
    dispatch(registration(body))
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
     if (name === "name") {
      setName(value)
    }
     };
    
    const handleSubmit = (evt, userEmail, userName, userPassword) => {
        if (userEmail === '' || userName === '' || userPassword === '') {
             window.alert('Please, fill all fields.');
            return
        }
        const confirmingPassword = evt.currentTarget.elements[3].value;
        if (userPassword !== confirmingPassword) {
            window.alert('Your passwords do not match!');
            return
        }
        console.log(`email: ${userEmail}, name: ${userName}, password: ${userPassword}`);
        registrateUser({email: userEmail, name: userName, password: userPassword})
        evt.target.reset() 
    };

    return (
        <div>
                    <h1>Create an account</h1>
            <form
                action="submit"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e, email, name, password)
                }}>
                        <input
                            name='email'
                            placeholder='Enter your email'
                            onChange={handleChange}
                        />
                        <input
                            name='name'
                            placeholder='Enter your name'
                            onChange={handleChange}
                        />
                        <input
                            name='password'
                            placeholder='Enter your password'
                            onChange={handleChange}
                        />
                        <input
                            placeholder='Repeat password'
                        />
                        <button type="submit"> submit</button>
                    </form>
                    <p>
                        Or <Link to="/login">log in</Link> if you already have an account
                    </p>
            </div>
    )
}