import React, {Component} from 'react';
import Header from './Header/Header';
import Grid from './Grid/Grid';
import Sidebar from './Sidebar/Sidebar';

import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class App extends Component {
    titleInput;
    descriptionInput;

    render() {
        return (

            <Router>
                <div className="App">
                <Header/>
                <div className="containerApp">
                    <Sidebar/>
                    <Grid/>
                      
                    </div>
                </div>
            </Router>
        );    
    }
}

export default App;