import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';
import Header from '../Page/Shared/Header/Header';
import LeftSideNav from '../Page/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Page/Shared/RightsideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header/>
            <Component>
                <col lg='2'>
                    <LeftSideNav/>
                </col>
                <col lg='7'>
                    <Outlet/>
                </col>
                <col lg='3'>
                    <RightSideNav/>
                </col>
            </Component>
            <Footer/>
        </div>
    );
};

export default Main;