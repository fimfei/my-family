import React from 'react';
import {Link} from "react-router-dom";
import Icon from "@mdi/react";

import './scss/main-menu.scss';

const MainMenu = props => {
    const {pages} = props;

    return (
        <div className="mf-mm">
            <div className="mf-mm-inner">
                {pages.map((page, key) => {
                    const {path, name, icon} = page;

                    return (
                        <Link to={path} key={`page-${key}`}>
                            <div className="mf-mm-icon">
                                <Icon path={icon} size={.8}/>
                            </div>
                            <div className="mf-mm-name">
                                {name}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default MainMenu;