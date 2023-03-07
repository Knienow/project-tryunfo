import React from 'react';
import PropTypes from 'prop-types';
// import Card from './Card';

class Form extends React.Component {
  // constructor() {
  //   super();

  //   this.onInputChange = this.onInputChange.bind(this);
  //   this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  // }

  // // componentes controlados pelo estado
  // onInputChange = ({ target }) => {
  //   const { name } = target;
  //   const value = (target.type === 'checkbox') ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // onSaveButtonClick = ({ event }) => {
  //   console.log(event.target.value);
  // };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, /* hasTrunfo, */
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <>
        <label htmlFor="name">
          <input
            type="text"
            // value={ this.state.cardName }
            value={ cardName }
            data-testid="name-input"
            id="name"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          <input
            type="textarea"
            value={ cardDescription }
            data-testid="description-input"
            id="description"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          <input
            type="number"
            value={ cardAttr1 }
            data-testid="attr1-input"
            id="attr1"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          <input
            type="number"
            value={ cardAttr2 }
            data-testid="attr2-input"
            id="attr2"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          <input
            type="number"
            value={ cardAttr3 }
            data-testid="attr3-input"
            id="attr3"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          <input
            type="text"
            value={ cardImage }
            data-testid="image-input"
            id="image"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="select">
          <select
            type="select"
            data-testid="rare-input"
            id="select"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
