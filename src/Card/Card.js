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
                <button className="btn" onClick={props.handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
};

export default card;
