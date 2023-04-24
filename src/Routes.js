import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import Contact from './components/contact'
import Header from './components/Header'
import { Container } from 'react-bootstrap';
import Post from './components/Post';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/posts/:id' element={<Post />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default AppRoutes;