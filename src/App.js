import React, { Component } from 'react';
import logo from './logo.svg';
import tick from './img/tick-inside-circle.svg';


import './App.css';
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem : '',
        currentFilter: 'all', // 3 status : all/active/complete
      todoItems: [
        {title: "Mua bim bim", isComplete: true},
        {title: "Di choi", isComplete: true},
        {title: "Di hoc"}
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
            ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
            ...todoItems.slice(index + 1)
        ]
      })
    }

  }

  onKeyUp(event){
    if(event.keyCode === 13){
      let text = event.target.value;
      if (!text) {
        return;
      }
      this.setState({
        newItem : "",
        todoItems: [
          {title: text, isComplete: false},
            ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem:event.target.value
    })
  }

  render() {
    const {todoItems, newItem} = this.state;
    if (todoItems.length) {
      return (
          <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="Header">
              <img src={tick} width={32} height={32} />
              <input type="text"
                     placeholder="Add new item"
                     onKeyUp={this.onKeyUp}
                     value={newItem}
                     onChange={this.onChange}
              />
            </div>
            {
              todoItems.length > 0 && todoItems.map((item, index) =>
                  <TodoItem
                      key={index}
                      item={item}
                      onClick={this.onItemClicked(item)}/>
              )
            }
          </div>
      );
    }

  }
}
export default App;
