import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AuthActionCreators } from "../../store/actions/authActions";
import Main from "../../pages/Main";
import Login from "../../pages/Login";


const AppRouter = () => {
    const { isAuth } = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AuthActionCreators.signIn());
    }, []);

    return (
        <Switch>
            <Route render={() => (isAuth ? <Main /> : <Login />)} />
        </Switch>
    );
};

export default AppRouter;
