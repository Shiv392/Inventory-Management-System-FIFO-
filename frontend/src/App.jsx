import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import Auth_Routes from './authentication_module/Auth_Routes';
import Dashboard_Routes from './dashboard_module/dashboard_routes';
import Admin_Routes from './admin_module/admin_routes';


function App() {
  return (
     <BrowserRouter>
      <Auth_Routes />
      <Dashboard_Routes />
      <Admin_Routes />
     </BrowserRouter>
  )
}

export default App
