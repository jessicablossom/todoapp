import React, {Component} from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import './CardList.css';

class CardList extends Component {

    titleInput;
    descriptionInput;

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

    updateElement = (cardId) => {
        this.props.history.push(`/cardCreate/${cardId}`)
    }

    getCardsWithIdLowerOrEqualsThan = () => {
        return this.state.cards
            .map((card) => {
                return (
                    <Card key={card.id}
                          id={card.id}
                          title={card.title}
                          handleDeleteClick={() => this.deleteElement(card.id)}
                          handleUpdateClick={() => this.updateElement(card.id)}
                    >
                        {card.description}
                    </Card>
                );
            })
    };

    render() {

        const error = (<div>{this.state.error}</div>);
        const cards = this.getCardsWithIdLowerOrEqualsThan();

        return (
            <div className="content">
                    {this.state.error ? error : cards}
            </div>
        );
    }

}

export default CardList