import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardList: [],
  };

  validateTrunfo = () => {
    const { cardList } = this.state;
    const isSuperTrunfo = cardList.some((card) => card.superTrunfo === true);
    if (isSuperTrunfo) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
  };

  validateInputs = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare } = this.state;
    const total = 210;
    const numMax = 90;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    if (!cardName || !cardDescription || !cardImage || !cardRare) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (attr1 + attr2 + attr3 > total) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (attr1 > numMax || attr2 > numMax || attr3 > numMax) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    if (attr1 < 0 || attr2 < 0 || attr3 < 0) {
      return this.setState({ isSaveButtonDisabled: true });
    }
    this.setState({ isSaveButtonDisabled: false });
  };

  onInputChange = ({ target }) => {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(
      {
        [target.name]: value,
      },
      this.validateInputs,
      // this.validateTrunfo();
    );
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.state;
    const cardElement = {
      name: cardName,
      image: cardImage,
      description: cardDescription,
      attribute1: cardAttr1,
      attribute2: cardAttr2,
      attribute3: cardAttr3,
      rare: cardRare,
      superTrunfo: cardTrunfo,
    };
    this.setState(
      (prevState) => ({
        cardList: [...prevState.cardList, cardElement],
        cardName: '',
        cardImage: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
      }),
      this.validateTrunfo,
    );
  };

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
      // cardList,
    } = this.state;
    return (
      <div>
        <form>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
        </form>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {/* requisito 8 - map para percorrer o cardList
        { cardList.map((card, index) => (
          <div key={ index }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          </div>
        ))} */}
      </div>
    );
  }
}

export default App;
