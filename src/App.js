import {Component, StrictMode, Fragment} from 'react';
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
        <>
          <button onClick={this.nextYear}>{this.state.text}</button>
          <h1>My name is {name}, surname - {surname}, 
          age - {years}, 
          position - {position}</h1>
          <a href={link}>My profile</a>
          <form>
            <span>Введите должность</span>
            <input type='text' onChange={(e) => this.commitInputChanges(e, 'some color')} />
          </form>
          </>
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
