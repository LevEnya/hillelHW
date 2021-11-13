import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import MyForm from './components/MyForm';
import Main from './components/Main';

function App() {

  const [autUser, changeUserStatus] = useState(false);
  const [testPost, getPostParams] = useState([]);

  function setAutUser(){
    fetch('http://www.mocky.io/v2/5944e07213000038025b6f30').then(result=>result.json()).then(
      data=>{
        getPostParams(data)
        changeUserStatus(true)
      }
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

       { autUser ? <Main testPost={testPost}/> : <MyForm setAutUser={setAutUser} /> }
      {/*<AllSite /> */}

    </div>
  );
}

export default App;
