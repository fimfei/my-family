import React from 'react';
import {Typography, DatePicker} from "antd";
import {MyInput} from "../../my";

import locale from 'antd/es/date-picker/locale/ru_RU';

import './scss/person-editor.scss';

const PersonEditor = props => {
    const {title: _title} = props;
    console.log('PersonEditor')


    const [title, setTitle] = React.useState(_title);
    const f = React.useRef('');
    const i = React.useRef('');
    const o = React.useRef('');

    const changeFIO = () => {
        setTitle(`${f.current} ${i.current} ${o.current}`);
    }

    return (
        <div className="person-editor">
            <Typography.Title level={2}>{title}</Typography.Title>
            <MyInput addr={f} ph="Иванов"   label="Фамилия"    classes="fio" onChange={changeFIO} />
            <MyInput addr={i} ph="Иван"     label="Имя"        classes="fio" onChange={changeFIO} />
            <MyInput addr={o} ph="Иванович" label="Отечество"  classes="fio" onChange={changeFIO} />
            <DatePicker onChange={() => {}} locale={locale} format="DD/MM/YYYY"/>
        </div>
    )
}

export default PersonEditor;