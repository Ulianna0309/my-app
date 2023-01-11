import React, {Component, StrictMode, Fragment} from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import './App.css';
import { Button} from 'react-bootstrap';
import Form from './Form';
import NewForm from './NewForm';



const Header = () => {
  return <h2>Hello world</h2>
}

const Field = () => {
  const holder = "Enter here";
  const styledField = {
    width: '300px'
  };
  return <input 
          placeholder={holder} 
          type="text" 
          style={styledField}/>
}

class Field2 extends Component{
  render(){
    const holder = "Enter here";
    const styledField = {
      width: '300px'
    };
    return <input 
            placeholder={holder} 
            type="text" 
            style={styledField}/>
  }
}


function Btn() {
  const text = "Log in";
  const logged = false;
  return <button>{logged ? 'Enter': text}</button>
}

class WhoAmI extends Component {
  constructor(props){
    super(props);
    this.state = {
      years: 27,
      text: '+++', 
      position: ''
    }

    this.nextYear = this.nextYear.bind(this);
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }


  commitInputChanges = (e, color) => {
    console.log(color)
    this.setState({
      position: e.target.value
    })
  }


  render(){
      const{name, surname, link} = this.props;
      const {position, years} = this.state;
      return(
        <EmpItem>
          <Button onClick={this.nextYear}>{this.state.text}</Button>
          <Header2>My name is {name}, surname - {surname}, 
          age - {years}, 
          position - {position}</Header2>
          <a href={link}>My profile</a>
          <form>
            <span>Введите должность</span>
            <input type='text' onChange={(e) => this.commitInputChanges(e, 'some color')} />
          </form>
          </EmpItem>
      )
    }
  }


const EmpItem = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`
const Header2 = styled.h2`
  font-size: 20px;
`

// const Button = styled.button`
// background: #10C85D;
// box-shadow: 0px 34px 57px rgb(4 8 73 / 11%);
// border-radius: 15px;
// text-transform: capitalize;
// transition: all .3s easy;
// cursor: pointer;
// margin-top: 30px;
// padding: 20px 30px;
// font-weight: 700;
// font-size: 16px;
// line-height: 19px;
// border: 1px solid #10c85d;
// color: #ffffff;
// display: inline-block;
// text-decoration: none;
// `



const Wrapper = styled.div`
   max-width: 1000px;
   margin: 40px auto;
`


export const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  `

const Greating = (props) => {
  return(
    <div className={'mb-3 p-3 border border-' + props.color}>
        {
          React.Children.map(props.children, child => {
            return React.cloneElement(child,{className: 'shadow p-3 m-3 border rounded'} )
          })
        }
    </div>
  )
}


const HelloGreatings = () => {
  return (
    <div style={{'width': '600px', 'margin': '0 auto'}}>
      <Greating color={'primary'}>
          <h2>HelloGreatings</h2>
      </Greating>
    </div>
  )
}

const Message = (props) => {
  return(
    <h2>The counter is {props.counter}</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render(){
    return(
      <>
        <button className={'btn btn-primary'}
        onClick={this.changeCounter}>Cick me</button>
        {this.props.render(this.state.counter)}
        {this.props.render(this.state.counter)}
      </>
    )
  }
}

function App() {
  return (
    <Wrapper>

      <Counter render={counter => (
        <Message counter={counter}/>
      )}/>

      <HelloGreatings/>
      
      <StrictMode>
        <Header/>
      </StrictMode>
        <Field/>
        <Btn/>
        <Field2/>

        <BootstrapTest 
          left = {
            <Greating color={'primary'}>
              <h2>props.children</h2>
              <h2>React.cloneElement</h2>
            </Greating>
            }
            right = {
              <>
              <WhoAmI name='Jon' surname="Smoth" link="gmail.com"/>
              <WhoAmI name='Alex' surname="Smith" link="gmail.ua"/>
              </>

            }/>

       <Form/>
       <NewForm/>
    </Wrapper>
   
    
  );
}


export {Header};
export default App;
