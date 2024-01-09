import { Button, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import React from 'react';
import { Link } from "react-router-dom";

export const LoginPage = () => {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)



    return (
    <>
        <Heading as='h1' size='xl'>Log in</Heading>
        <Input  isInvalid='false'
                errorBorderColor='red.300'
                placeholder='Enter your email' />
        <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button >
            </InputRightElement>
            </InputGroup>
            <p>Or <Link to="/register"> register
            </Link> if you don't have an account</p>
    </>
    )
}