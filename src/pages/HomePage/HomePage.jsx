
import { useDispatch, useSelector } from "react-redux";
import { loggingOut } from "store/Authorization/authSlice";
import { Link } from "react-router-dom";
import css from './HomePage.module.css'

export const HomePage = () => {
    const token = useSelector((state) => state.auth.token)
    const isSingedIn = token !== '';
    const name = useSelector((state) => state.auth.user.name)
    const email = useSelector((state) => state.auth.user.email)
    const contacts = useSelector((state) => state.contacts.items)
    const dispatch = useDispatch();

    const logoutUser = (token) => {
        dispatch(loggingOut(token))
    }
    return (
        <>
            {isSingedIn ? (
                <div className={css.Box}>
                    <h1>Hi there, {name}!</h1>
                    <div>
                        <h2>Name: <span className={css.Span}>{name}</span></h2>
                        <p>Your email: <span className={css.Span}>{email}</span></p>
                        <p>You have <span className={css.Span}>{contacts.length}</span> contacts saved.</p>
                        <button typeof="button" onClick={() => { logoutUser(token) }}>Log out</button>
                    </div>
                </div>) : (<div className={css.Box}>
                    <h1>Welcome!</h1>
                    <p><Link to="/login">Log in</Link> or <Link to="/register">sing up</Link> to use the phonebook ASAP!</p>
                </div>)

            }
    </>
        )
    
}