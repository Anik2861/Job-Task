import logo from './logo.svg';
import Header from './Pages/Header/Header';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        {/* <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
