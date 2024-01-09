import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({element: Element, redirectTo='/'}) => {
    const token = useSelector((state) => state.auth.token)
    const isLoggedIn = token !== '';
    return isLoggedIn ? (
      Element
    ) : (
      <Navigate to={redirectTo} replace />
    );
  };