import React, {Component} from 'react';
import axios from 'axios';

import Card from '../Card/Card';

import './Grid.css';



const guid = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

class grid extends Component {
	state = {
        error: null,
        titleInput: '',
        descriptionInput: '',
        cards: [],
    };

    constructor(props) {
        super(props);
        axios.get('http://localhost:4000/cards')
            .then(response => {
                // const data = response.data;
                const { data } = response;
                this.setState({
                    cards: data
                });
            })
    }

    deleteElement = (id) => {
        axios.delete(`http://localhost:4000/cards/${id}`)
            .then(() => {
                const newCards = this.state.cards.filter((card) => {
                    return card.id !== id;
                });

                this.setState({
                    cards: newCards
                });
            })
            .catch(error => {
                this.setState({
                    error: error.message
                });
            });
    };

    getCardsWithIdLowerOrEqualsThan = () => {
        return this.state.cards
            .map((card) => {
                return (
                    <Card key={card.id}
                          title={card.title}
                          handleDeleteClick={() => this.deleteElement(card.id)}
                    >
                        {card.description}
                    </Card>
                );
            })
    };

    updateCard = (id) => {
        axios.put(`http://localhost:400/cards/${id}`, {
            title: this.titleInput,
            description: this.descriptionInput
        }).then().error
    }

    saveCard = () => {
        const {cards, titleInput, descriptionInput} = this.state;
        // const cards = [...this.state.cards];

        // cards.push({
        //     id: guid(),
        //     title: titleInput,
        //     description: descriptionInput
        // });
        //
        // this.setState({cards});

        axios.post('http://localhost:4000/cards/', {
            title: titleInput,
            description: descriptionInput
        })

        const newCards = [
            ...cards, {
                id: guid(),
                title: titleInput,
                description: descriptionInput
            }
        ];

        this.setState({
            cards: newCards
        })
    };

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

    render() {

        const error = (<div>{this.state.error}</div>);
        const cards = this.getCardsWithIdLowerOrEqualsThan(this.state.filter);

    
    return (
    	<div className="containerGrid">
    		<div className="content">
        	{this.state.error ? error : cards}
        	</div>
        </div>
    	);
	}
}
export default grid;
