import React from 'react';
import { Route,Routes } from 'react-router-dom';
import About from '../features/about/about';
import SignIn from '../features/auth/signin-page';
import Signup from '../features/auth/signup-page';
import HomePage from '../features/home/home-page';
import SiteLayout from '../layouts/site-layout';

const RootRouter = () => {
    return (
        <Routes>
            {/* site layout */}
            <Route path='/' element={<SiteLayout />} >
                <Route index element={<HomePage />} />  
                <Route path='about' element={<About />} />
                <Route path='signup' element={<Signup />} />
                <Route path='signin' element={<SignIn />} />
            </Route>
        </Routes>
    );
};

export default RootRouter;