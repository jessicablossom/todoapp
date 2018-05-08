import React from 'react';

import './Card.css';

const card = (props) => {
    return (
        <div className="Card">
            <div className="title">
                <span>{props.title}</span>
            </div>
            <div className="container">
                {props.children}
            </div>
            <div className="actions">
                <button className="danger" onClick={props.handleDeleteClick}>DELETE</button>
                <button className="update" onClick={props.handleUpdateClick}>EDITION</button>
            </div>
        </div>
    );
};

export default card;
