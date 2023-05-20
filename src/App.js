import React from 'react';
import Card from './components/Card';
import Filter from './components/Filter';
import Form from './components/Form';

// Starting project tryunfo
class App extends React.Component {
  state = {
    name: '',
    descriptionArea: '',
    attr01: '',
    attr02: '',
    attr03: '',
    image: '',
    selectOption: '',
    checkbox: false,
    listCards: [],
    filterName: '',
    filterRarity: 'todas',
    filterCheckBox: false,
  };

  saveCardList = () => {
    const {
      name,
      descriptionArea,
      attr01,
      attr02,
      attr03,
      image,
      selectOption,
      checkbox,
      listCards } = this.state;
    const newCard = {
      name,
      descriptionArea,
      attr01,
      attr02,
      attr03,
      image,
      selectOption,
      checkbox,
    };

    this.setState({
      listCards: [...listCards, newCard],
      name: '',
      descriptionArea: '',
      attr01: 0,
      attr02: 0,
      attr03: 0,
      image: '',
      selectOption: '',
      checkbox: false,
    });
  };

  newCards = () => {
    const { listCards, filterName, filterRarity, filterCheckBox } = this.state;
    const listCardFilter = listCards.filter(
      // se filterName não existir E filterRarity for igual a 'todas', vamos retornar um valor true para a função do filtro
      // lista.filter((card) => true), o que significa que vamos incluir o card em questão no array filtrado (retorno do .filter)
      (card) => (!filterName
      && filterRarity === 'todas')
      // caso a condição acima seja false, vamos seguir olhando essas duas de baixo
      // se card.name incluir filterName OU card.selectOption for igual a filterRarity, se alguma dessas condições forem verdadeiras,
      // vamos incluir o item na lista filtrada (porque estaremos retornando true para a função do filtro)
      // caso contrário, o item não sera incluido
      || (card.name.toLowerCase().includes(filterName.toLowerCase())
      && (filterRarity === 'todas' || card.selectOption === filterRarity)
      ),
    );
    const newListFilterSuperTrunfo = listCardFilter.filter((card) => {
      if (filterCheckBox === false) return true;
      const isSuperTrunfo = card.checkbox === true;
      return isSuperTrunfo;
    });
    return newListFilterSuperTrunfo.map((card) => (<Card
      key={ card.name }
      cardName={ card.name }
      cardDescription={ card.descriptionArea }
      cardAttr1={ card.attr01 }
      cardAttr2={ card.attr02 }
      cardAttr3={ card.attr03 }
      cardImage={ card.image }
      cardRare={ card.selectOption }
      cardTrunfo={ card.checkbox }
      removeCard={ this.removeCard }
    />));
  };

  validationSuperTryunfo = () => {
    const { listCards } = this.state;
    const hasSuperTryunfo = listCards.some((card) => card.checkbox === true);
    return hasSuperTryunfo;
  };

  validationButton = () => {
    const {
      name,
      descriptionArea,
      attr01,
      attr02,
      attr03,
      image,
      selectOption } = this.state;
    const valueMax = 90;
    const sumMax = 210;
    const transformedAttr1 = Number(attr01);
    const transformedAttr2 = Number(attr02);
    const transformedAttr3 = Number(attr03);
    if (name.length === 0
      || descriptionArea.length === 0
      || image.length === 0
      || selectOption.length === 0) {
      return true;
    }

    return transformedAttr1 < 0 || transformedAttr1 > valueMax
      || transformedAttr2 < 0 || transformedAttr2 > valueMax
      || transformedAttr3 < 0 || transformedAttr3 > valueMax
      || transformedAttr1 + transformedAttr2 + transformedAttr3 > sumMax;
  };

  resetFilterState = ({ target }) => {
    this.setState({
      filterCheckBox: target.checked,
      filterName: '',
      filterRarity: 'todas',
    });
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  };

  removeCard = (name) => {
    const { listCards } = this.state;
    // Agora no meu listRemove tem todos os cards criados MENOS o card que cliquei no botão excluir
    const listRemove = listCards.filter((card) => card.name !== name);
    this.setState({
      listCards: listRemove,
    });
  };

  render() {
    const {
      name,
      descriptionArea,
      attr01,
      attr02,
      attr03,
      image,
      selectOption,
      filterName,
      filterRarity,
      filterCheckBox,
      checkbox } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ descriptionArea }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ image }
          cardRare={ selectOption }
          cardTrunfo={ checkbox }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.validationButton() }
          onSaveButtonClick={ this.saveCardList }
          hasTrunfo={ this.validationSuperTryunfo() }
        />
        <Filter
          filterName={ filterName }
          filterRarity={ filterRarity }
          filterCheckBox={ filterCheckBox }
          onInputChange={ this.onInputChange }
          resetFilterState={ this.resetFilterState }
        />
        <Card
          cardName={ name }
          cardDescription={ descriptionArea }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ image }
          cardRare={ selectOption }
          cardTrunfo={ checkbox }
        />
        {this.newCards()}
      </div>
    );
  }
}

export default App;
