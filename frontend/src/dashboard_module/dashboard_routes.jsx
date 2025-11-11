import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Dashboad = lazy(()=> import('./pages/Dashboard_Page'));

const Dashboard_Routes = ()=>{
return(
    <Routes>
        <Route path='/dashboard' element={<Dashboad />}></Route>
    </Routes>
)
}
export default Dashboard_Routes;