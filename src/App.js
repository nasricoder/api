import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Description from './components/Description';
import Home from './components/Home';
import ListUsers from './components/ListUsers';
import NavUsers from './components/NavUsers';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const [auth,setAuth] = useState(false)
  return (
   <div> 
   <NavUsers auth={auth} setAuth={setAuth}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users' element={<PrivateRoute auth={auth}><ListUsers/></PrivateRoute>} />
      <Route path='/users/:id' element={<PrivateRoute auth={auth}><Description/></PrivateRoute>} />
    </Routes>
   </div>
  );
}

export default App;
