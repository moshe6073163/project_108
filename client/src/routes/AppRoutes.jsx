import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';

export default function AppRoutes() {
  return (
    <div className='vh-100' style={{backgroundColor:'rgba(0,0,0,.2)'}}>
        <Routes>
         <Route path='/' element={<Dashboard/>}/>
         <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  )
}
