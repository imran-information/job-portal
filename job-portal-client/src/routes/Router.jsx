import { Route, Routes } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/Register";


const Router = () => {
    return (
        <Routes>
            <Route element={<Main />} >
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    );
};

export default Router;
