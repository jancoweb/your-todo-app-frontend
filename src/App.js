import './App.css';
import Main from './Components/Main';
import { Route, Routes, Outlet, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { getLocalItem } from './services/functions';


export default function App() {

  function ProtectedRoutes({ redirectTo }) {
    const auth = getLocalItem('token');

    return auth ? <Outlet /> : <Navigate to={redirectTo} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoutes redirectTo={'/'} />}>
          <Route path='/Main' element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}