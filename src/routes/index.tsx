import React from 'react';
import { Route,Routes } from 'react-router-dom';
import About from '../features/about/about';
import HomePage from '../features/home/home-page';
import SiteLayout from '../layouts/site-layout';

const RootRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<SiteLayout />} >
                <Route index element={<HomePage />} />  
                <Route path='about' element={<About />} />  
            </Route>
        </Routes>
    );
};

export default RootRouter;