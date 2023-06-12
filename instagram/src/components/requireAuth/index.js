import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function RequiredAuth() {
    const [hasToken] = useState(localStorage.getItem("access_token"))
    return(
        (hasToken && hasToken !== "" && hasToken !== null) ? <Outlet/> : <Navigate to="/login" />
    )
}
export default RequiredAuth;