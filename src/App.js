import React from 'react';
import {mdiAccountCircle, mdiGraph, mdiHome, mdiLogin, mdiHammerWrench} from '@mdi/js';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {MainMenu} from './components/MainMenu';
import {Home, Login, Map, Person, Admin} from './pages';

import './app.scss';
import Icon from "@mdi/react";

const App = () => {
    const pages = [
        {name: 'Главная',                          icon: mdiHome,             path: '/',       Component: Home},
        {name: 'Добавляем и редактируем персону',  icon: mdiAccountCircle,    path: '/member', Component: Person},
        {name: 'Гениологическое дерево',           icon: mdiGraph,            path: '/map',    Component: Map},
        {name: 'Войти или зарегистрироваться',     icon: mdiLogin,            path: '/login',  Component: Login},
        {name: 'Административная панель',          icon: mdiHammerWrench,     path: '/admin',  Component: Admin},
    ]

    const [menuIndex, setMenuIndex] = React.useState(0);
    const [openMainMenu, setOpenMainMenu] = React.useState(false);

    return (
        <BrowserRouter>
            <div
                className="mf-mm-initiator"
                onMouseOver={() => setOpenMainMenu(true)}
            >
                <Icon path={pages[menuIndex].icon} size={1.2}/>
            </div>
            <div className="mf-container">
                <MainMenu
                    pages={pages}
                    menuIndex={menuIndex}
                    setMenuIndex={setMenuIndex}
                    openMainMenu={openMainMenu}
                    setOpenMainMenu={setOpenMainMenu}
                />
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
