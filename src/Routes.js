import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import Contact from './components/contact'
import Header from './components/Header'

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;