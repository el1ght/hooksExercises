import React from "react";
import { useParams, Redirect } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";

const Users = () => {
    const { userId } = useParams();
    if (!userId) {
        return <Redirect from="/users" to="/users/67rdca3eeb7f6fgeed471815" />;
    }
    return <EditUserPage />;
};

export default Users;
