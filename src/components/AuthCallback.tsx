import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../constants";

export function AuthCallback() {
    const navigate = useNavigate();

    useEffect(() => {
            navigate(appRoutes.home);
    }, []);

    return <div>Processing SignIn...</div>;
}