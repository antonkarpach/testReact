import React from 'react';
import logo from './logo.svg';
import './App.css';
import News from "./components/News";
import Comments from "./components/Comments";
import BigTest from "./components/BigTest";



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"f
    //     >
    //       Learn React
    //     </a>
    //
    //   </header>
    //
    // </div>
    <div>
        <News/>
        <Comments className={'red'}/>
        <BigTest data={'123445'}/>
    </div>
  );
}

export default App;
