import React from 'react';
import {PersonEditor} from '../components/PersonEditor';

import './scss/person.scss';

const Person = props => {
    console.log('MEMBER')

    const [person, setPerson] = React.useState({
        id: undefined,
        f: 'Иванов',
        i: 'Сергей',
        o: 'Петрович',
        bM: 3,
        bD: 11,
        bY: 1984,
        photo: undefined,

    });

    const data = {person, setPerson}

    return (
        <div className="person-wrapper">
            <PersonEditor {...data} title="Персона" />
            <PersonEditor {...data} title="Отец" />
            <PersonEditor {...data} title="Мать" />
        </div>
    )
}

export default Person;