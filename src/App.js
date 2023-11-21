import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import  AuthenticationForm from './pages/authentication/AuthenticationForm';



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
     <Header />
      <Routes>
          <Route path='/register' element={<AuthenticationForm isRegistration/>} />
          <Route path='/login' element={<AuthenticationForm/>} /> 
     </Routes> 
    </div>
     </BrowserRouter>

  );
}

export default App;

