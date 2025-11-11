import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Login_page = lazy(()=> import('./pages/Login_page'));

const Auth_Routes = ()=>{
    return(
        <Routes>
            <Route element={<Login_page />} path="/"></Route>
        </Routes>
    )
}

export default Auth_Routes