import { SingedUpComponent } from "components/Registration/SingedUpComponent";
import { RegisterForm } from "components/Registration/RegisterForm";
import { useSelector } from "react-redux";

export const RegisterPage = () => {


    const token = useSelector((state) => state.auth.token)
    const isSingedUp = token !== '';
    console.log(isSingedUp);

    return (
    <>
            {isSingedUp ? (
            <SingedUpComponent/>
            ):
                <RegisterForm/>
            }
    </>
    )
}