import React from "react";
import {Input} from "antd";
import {MyLabel} from "./";

import './scss/my-input.scss';

const MyInput = props => {
    const {ph, addr, mayBeEmpty, label, classes = '', onChange} = props;

    const [value, setValue] = React.useState(addr.current);

    const change = e => {
        const val = e.target.value;
        setValue(val);
        addr.current = val;
        if(onChange) onChange();
    }

    return (
        <div className={`my-input ${classes}`}>
            <MyLabel label={label}/>
            <Input
                placeholder={ph}
                onChange={change}
                value={value}
                status={value || mayBeEmpty ? '' : 'error'}
            />
        </div>
    )
}

export default MyInput;