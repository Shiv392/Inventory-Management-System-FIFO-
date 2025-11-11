import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Admin = lazy(()=> import('./pages/Admin_Page'));

const Admin_Routes = ()=>{
return(
    <Routes>
    <Route path='/admin' element={<Admin />}></Route>
    </Routes>
)
}

export default Admin_Routes;