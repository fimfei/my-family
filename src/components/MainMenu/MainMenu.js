import React from 'react';
import {Link} from "react-router-dom";
import {Button, Drawer, theme, Typography} from 'antd';
import Icon from "@mdi/react";

import './scss/main-menu.scss';
import {MyLabel} from "../../my";

const MainMenu = props => {
    const {pages, menuIndex, setMenuIndex, openMainMenu, setOpenMainMenu} = props;


    const onClick = index => () => {
        setMenuIndex(index);
        setOpenMainMenu(false);
    }

    return (
        <React.Fragment>


        <Drawer
            placement="left"
            closable={false}
            open={openMainMenu}
            getContainer={false}
            maskClosable={true}
            ForceRender={true}
            title="МОЯ СЕМЬЯ"
            onMouseLeave={() => setOpenMainMenu(false)}
        >

        <div className="mf-mm">
            <div className="mf-mm-inner">
                {pages.map((page, key) => {
                    const {path, name, icon} = page;
                    const isCurrent = key === menuIndex;

                    return (
                        <Link
                            to={path}
                            key={`page-${key}`}
                            onClick={onClick(key)}
                            className={`${isCurrent ? 'current' : ''}`}
                        >
                            <div className="mf-mm-icon">
                                <Icon path={icon} size={1.2}/>
                            </div>
                            <MyLabel label={name}/>
                        </Link>
                    )
                })}
            </div>
        </div>

        </Drawer>
        </React.Fragment>
    )
}

export default MainMenu;