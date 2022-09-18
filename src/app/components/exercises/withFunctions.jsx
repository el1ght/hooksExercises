import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");

    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
                isAuth={isLogin}
            />
        </CardWrapper>
    );
};

export default withFunctions;
