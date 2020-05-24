import React from 'react';
import './item-list.css';
import Headline from '../headline';

const ItemList = ({ skills, headlines }) => {

    const list = skills.map((skill, idx) => {
        return <li className="list__item" key={ skill + idx }>{ skill }</li>;
    });

    return (
        <div className="list">
            <Headline headlines={ headlines } />
            <ul className="list__list">
                { list }
            </ul>
        </div>
    );
};

export default ItemList;