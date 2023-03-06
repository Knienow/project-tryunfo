import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  // constructor() {
  //   super();

  // this.state = {
  //   cardName: '',
  //   cardDescription: '',
  //   cardAttr1: '',
  //   cardAttr2: '',
  //   cardAttr3: '',
  //   cardImage: '',
  //   cardRare: '',
  //   cardTrunfo: '',
  //   isSaveButtonDisabled: '',
  // };
  // Função handleChange genérica para componentes controlados pelo estado
  // sem checkbox - armazenar o valor de cada input no estado do componente
  // handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // com checkbox -O valor relevante do checkbox que precisamos armazenar é um booleano que está na propriedade checked, não no value.
  // handleChange({ target }) {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;

  //   this.setState({
  //     [name]: value,
  //   });
  // }
  // }

  // onInputChange = (event) => {
  //   console.log(event.target.value);
  // };

  // onSaveButtonClick = (event) => {
  //   console.log(event.target.value);
  // };

  render() {
    const { onInputChange, onSaveButtonClick } = this.props;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled /* hasTrunfo */ } = this.props;
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

Form.defaultProps = {
  cardName: [],
  cardDescription: [],
  cardAttr1: [],
  cardAttr2: [],
  cardAttr3: [],
  cardImage: [],
  cardRare: [],
  cardTrunfo: [],
  // hasTrunfo: [],
  isSaveButtonDisabled: [],
  onInputChange: [],
  onSaveButtonClick: [],
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
