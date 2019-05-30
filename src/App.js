import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  state = {
    items: [],
    currentItem: { text: '', key: '' }
  };
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({ currentItem });
    console.log('this is the handleInput method');
  };
  addItem = e => {
    e.preventDefault();
    console.log('this is the addItem method');
  };
  inputElement = React.createRef();

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleINput={this.handleInput}
          currentItem={this.state.currentItem}
        />
      </div>
    );
  }
}
export default App;
