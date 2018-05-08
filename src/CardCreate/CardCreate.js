import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './CardCreate.css'

class CardCreate extends Component {

    titleInput;
    descriptionInput;
    cardId;

    state = {
        titleInput: '',
        descriptionInput: '',
        cardId: null
    };

    constructor(props) {
        super(props)

        let cardId = props.match.params.cardId

        if(cardId) {

            axios.get(`http://localhost:4000/cards/${cardId}`)
                .then(result => {

                    const {data} = result

                    console.log(data.title, data.description)

                    this.setState({

                        cardId: data.id,
                        titleInput: data.title,
                        descriptionInput: data.description

                    })

                })
        }
    }

    handleTitleChange = (value) => {
        this.setState({
            titleInput: value
        })
    };

    handleDescriptionChange = (event) => {
        const value = event.target.value;
        this.setState({
            descriptionInput: value
        });
    };

    saveCard = () => {
        const {titleInput, descriptionInput} = this.state;

        axios.post('http://localhost:4000/cards', {
            title: titleInput,
            description: descriptionInput
        }).then((response) => {

            this.props.history.push("/")
        })
    };

    updateCard = () => {
        const {cardId, titleInput, descriptionInput} = this.state;

        axios.put(`http://localhost:4000/cards/${cardId}`, {
            title: titleInput,
            description: descriptionInput
        }).then((response) => {

            this.props.history.push("/")
        })
    };

    buttonHandler = () => {

        if(!this.state.cardId) {

            this.saveCard()
        } else {

            this.updateCard()
        }
    }

    render () {

        return (
            <div className="content">
                <div className="form">
                    <input placeholder="Title"
                            onChange={(event) => this.handleTitleChange(event.target.value)} value={this.state.titleInput}/>
                    <input placeholder="Description"
                            onChange={this.handleDescriptionChange} value={this.state.descriptionInput}/>
                    <button className="btn green "onClick={this.buttonHandler}>Save Card</button>
                </div>
            </div>
        )
    }
}

export default CardCreate