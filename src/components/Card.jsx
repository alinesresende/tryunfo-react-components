import PropTypes from 'prop-types';
import React from 'react';
import '../index.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      removeCard,
    } = this.props;

    return (
      <main>
        <p data-testid="name-card">
          { cardName }
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <section>
          <p data-testid="attr1-card">
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            { cardAttr3 }
          </p>
        </section>
        <section data-testid="rare-card">
          { cardRare }
        </section>
        <section>
          { cardTrunfo && <p data-testid="trunfo-card"> Super Trunfo</p>}
        </section>
        <section>
          {removeCard
          && (
            <button
              className="button-style"
              data-testid="delete-button"
              onClick={ () => removeCard(cardName) }
            >
              Excluir
            </button>
          )}
        </section>
      </main>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  removeCard: PropTypes.string.isRequired,
};

export default Card;
