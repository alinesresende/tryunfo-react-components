import PropTypes from 'prop-types';
import React from 'react';
import '../index.css';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const paragraphOrCheckBox = hasTrunfo
      ? <p>Você já tem um Super Trunfo em seu baralho</p>
      : (
        <div>
          <input
            className="input-style"
            id="checkbox"
            name="checkbox"
            type="checkbox"
            checked={ cardTrunfo }
            disabled={ hasTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </div>
      );
    return (
      <div>
        <form className="form-container">
          <label htmlFor="textName">
            Name:
            <input
              className="input-style"
              id="textName"
              type="text"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          <label htmlFor="textArea">
            Description:
            <textarea
              className="input-style"
              id="textArea"
              type="textarea"
              name="descriptionArea"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1">
            Attr01:
            <input
              className="input-style"
              id="attr1"
              type="number"
              name="attr01"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2">
            Attr02:
            <input
              className="input-style"
              id="attr2"
              type="number"
              name="attr02"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3">
            Attr03:
            <input
              className="input-style"
              id="attr3"
              type="number"
              name="attr03"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image">
            Image:
            <input
              className="input-style"
              id="image"
              type="text"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="selectOption">
            Rarity:
            <select
              className="input-style"
              id="selectOption"
              name="selectOption"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label
            htmlFor="checkbox"
          >
            Super Trunfo
            { paragraphOrCheckBox }
          </label>
          <button
            className="button-style"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
