import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './layout/NavBar'
import Home from './pages/Home';
import AllUser from './pages/AllUser';
import NewUser from './pages/NewUser';
import SingleUser from './pages/SingleUser';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path='/AllUser' element={<AllUser/>}/>
      <Route path='/NewUser' element={<NewUser/>}/>
      <Route path='/SingleUser/:userId' element={<SingleUser/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
