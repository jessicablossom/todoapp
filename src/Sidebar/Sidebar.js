import React from 'react';
import './Sidebar.css';

const sidebar = (props) => {
    return (
    	<div className="containerForm">
	    	<div className="sidebar">
	        	<h3>Agrega tu tarjeta!</h3>
	            <input placeholder="Title"
	            onChange={(event) => this.handleTitleChange(event.target.value)}/>
	            <input placeholder="Description"
	            onChange={this.handleDescriptionChange}/>
	            <button className="btn" onClick={this.saveCard}>Add Card</button>
	        </div>
        </div>

    )
};

export default sidebar;
