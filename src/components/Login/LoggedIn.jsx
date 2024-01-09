import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export const LoggedInComponent = () => {
    const userName = useSelector((state)=> state.auth.user.name)
    return (
        <div>
            <h1>Welcome back, {userName}!</h1>
            <p>You've logged in successfully. You can now see your <Link to='/contacts'>phonebook</Link></p>
        </div>
    )
}