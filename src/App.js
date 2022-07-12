import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddApi from './Pages/Dashboard/AddApi/AddApi';
import LoadApi from './Pages/Dashboard/LoadApi/LoadApi';

function App() {
  return (
    <div >
      <Routes>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route path='addApi' element={<AddApi></AddApi>}></Route>
          <Route path='loadApi' element={<LoadApi></LoadApi>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
