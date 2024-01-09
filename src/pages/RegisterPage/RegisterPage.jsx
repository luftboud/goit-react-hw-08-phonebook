import { RegisterForm } from "components/Registration/RegisterForm";
import { useSelector } from "react-redux";

export const RegisterPage = () => {
    const error = useSelector((state) => state.auth.error)
    const isError = error !== null

    return (
    <>
            { isError ?  <h1>Ooops... something went wrong</h1> : <RegisterForm/>
            }
    </>
    )
}