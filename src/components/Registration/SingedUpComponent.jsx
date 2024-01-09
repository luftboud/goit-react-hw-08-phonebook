import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export const SingedUpComponent = () => {
    const userName = useSelector((state)=> state.auth.user.name)
    return (
        <div>
            <h1>Welcome, {userName}!</h1>
            <p>You've singed up successfully. Go and meet your <Link to='/contacts'>phonebook</Link></p>
        </div>
    )
}