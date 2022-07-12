import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoadApi from './Pages/Dashboard/LoadApi/LoadApi';
import 'react-toastify/dist/ReactToastify.css';
import AddApi from './Pages/Dashboard/AddApi/AddApi';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<LoadApi></LoadApi>}></Route>
        <Route path='/addUser' element={<AddApi></AddApi>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
