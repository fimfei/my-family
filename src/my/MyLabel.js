import React from "react";
import {Typography} from "antd";

import './scss/my-label.scss';

const MyLabel = props => {
    const {label} = props;

    return (
        <div className="my-label">
            <Typography.Title level={5}>{label}</Typography.Title>
        </div>
    )
}

export default MyLabel;