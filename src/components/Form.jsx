import React from 'react';
import PropTypes from 'prop-types';
// import Card from './Card';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <>
        <label htmlFor="cardName">
          <input
            type="text"
            // value={ this.state.cardName }
            value={ cardName }
            data-testid="name-input"
            name="cardName"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          <input
            type="textarea"
            value={ cardDescription }
            data-testid="description-input"
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr1">
          <input
            type="number"
            value={ cardAttr1 }
            data-testid="attr1-input"
            name="cardAttr1"
            // min={ 0 }
            // max={ 90 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr2">
          <input
            type="number"
            value={ cardAttr2 }
            data-testid="attr2-input"
            name="cardAttr2"
            // min={ 0 }
            // max={ 90 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr3">
          <input
            type="number"
            value={ cardAttr3 }
            data-testid="attr3-input"
            name="cardAttr3"
            // min={ 0 }
            // max={ 90 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardImage">
          <input
            type="text"
            value={ cardImage }
            data-testid="image-input"
            name="cardImage"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardRare">
          <select
            type="select"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          { !hasTrunfo
              && <input
                type="checkbox"
                data-testid="trunfo-input"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />}
          { hasTrunfo && <span>Você já tem um Super Trunfo em seu baralho</span> }
        </label>
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
