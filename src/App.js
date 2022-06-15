import logo from './logo.svg';
import Header from './Pages/Header/Header';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import RequireAuth from './Pages/Form/RequireAuth/RequireAuth';
import AddApi from './Pages/Dashboard/AddApi/AddApi';
import Login from './Pages/Form/Login/Login';
import Register from './Pages/Form/Register/Register';
import LoadApi from './Pages/Dashboard/LoadApi/LoadApi';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<AddApi></AddApi>}></Route>
          <Route path='loadApi' element={<LoadApi></LoadApi>}></Route>
       
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
