import {Component, StrictMode} from 'react';
import './App.css';

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
      text: '+++'
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render(){
      const{name, surname, link} = this.props;
      return(
        <div>
          <button onClick={this.nextYear}>{this.state.text}</button>
          <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
          <a href={link}>My profile</a>
        </div>
      )
    }
  }


function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
        <Field/>
        <Btn/>
        <Field2/>

        <WhoAmI name='Jon' surname="Smoth" link="gmail.com"/>
        <WhoAmI name='Alex' surname="Smith" link="gmail.ua"/>
    </div>
  );
}


export {Header};
export default App;
