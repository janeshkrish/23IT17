import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { NotificationsPage } from './pages/NotificationsPage';
function App(){
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element = {<NotificationsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App(); 