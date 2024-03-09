import React from 'react';
import {mdiAccount, mdiAxisArrow, mdiHome, mdiLogin} from '@mdi/js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MainMenu} from './components/MainMenu';
import {Home, Login, Map, Member} from './pages';

import './app.scss';

const App = () => {
    const pages = [
        {name: 'Главная',    icon: mdiHome,      path: '/',       Component: Home},
        {name: 'Член семьи', icon: mdiAccount,   path: '/member', Component: Member},
        {name: 'Карта',      icon: mdiAxisArrow, path: '/map',    Component: Map},
        {name: 'Войти',      icon: mdiLogin,     path: '/login',  Component: Login},
    ]

    return (
        <BrowserRouter>
            <MainMenu pages={pages}/>
            <div className="mf-container">
                <Routes>
                    {pages.map((page, key) => {
                        const {path, Component} = page;
                        return <Route path={path} element={<Component />} key={`route-${key}`} />
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
