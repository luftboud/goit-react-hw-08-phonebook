import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({element: Element, redirectTo='/'}) => {
    const token = useSelector((state) => state.auth.token)
    const isLoggedIn = token !== '';
    return isLoggedIn ? (
      <Navigate to={redirectTo} replace />
    ) : (
      Element
    );
  };