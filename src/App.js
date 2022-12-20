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

function WhoAmI ({name, surname, link}){
  return(
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
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

        <WhoAmI name={() => {return 'Jon'}} surname="Smoth" link="gmail.com"/>
        <WhoAmI name={() => {return 'Alex'}} surname="Smith" link="gmail.ua"/>
    </div>
  );
}


export {Header};
export default App;
