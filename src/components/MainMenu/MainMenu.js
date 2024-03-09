import React from 'react';
import {Link} from "react-router-dom";
import Icon from "@mdi/react";

import './scss/main-menu.scss';

const MainMenu = props => {
    const {pages, menuIndex, setMenuIndex} = props;

    return (
        <div className="mf-mm">
            <div className="mf-mm-inner">
                {pages.map((page, key) => {
                    const {path, name, icon} = page;
                    const isCurrent = key === menuIndex;
                    console.log(key)

                    return (
                        <Link
                            to={path}
                            key={`page-${key}`}
                            onClick={() => setMenuIndex(key)}
                            className={`${isCurrent ? 'current' : ''}`}
                        >
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