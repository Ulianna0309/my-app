import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './../homework/homework.css';

class HomeworkApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: this.props.counter,
      }
    }
  
    Plus = () => {
        if(this.state.counter < 50) {
        this.setState(state => ({
            counter: state.counter + 1
        }))
      }
    }

    Minus = () => {
        if(this.state.counter > -50) {
        this.setState(state => ({
            counter: state.counter - 1
        }))
      }
    }

    Random = () => {
        this.setState({
            counter: +(Math.random() * (50 - -50) + -50).toFixed(0)
        })
    }

    Reset = () => {
        this.setState({
            counter: this.props.counter
        })
    }
    
    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке
    
    render() {
      const {counter} = this.state;
      return (
        <div class="app">
          <div class="counter">{counter}</div>
          <div class="controls">
            <button onClick={this.Plus}>INC</button>
            <button onClick={this.Minus}>DEC</button>
            <button onClick={this.Random}>RND</button>
            <button onClick={this.Reset}>RESET</button>
          </div>
        </div>
      )
    }
  }
  

  export default HomeworkApp;
