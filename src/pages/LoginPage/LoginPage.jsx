import { LoggedInComponent } from 'components/Login/LoggedIn';
import { LoginForm } from 'components/Login/LoginForm';
import React from 'react';
import { useSelector } from "react-redux";

export const LoginPage = () => {

    const token = useSelector((state) => state.auth.token)
    const isSingedIn = token !== '';
    console.log(isSingedIn);



    return (
    <>
        {isSingedIn ? (
            <LoggedInComponent/>
            ):
                <LoginForm/>
            }
    </>
    )
}