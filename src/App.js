import React from 'react';
import logo from './logo.svg';
import './App.css';
import News from "./components/News";
import Comments from "./components/Comments";
import BigTest from "./components/BigTest";

const myNews = [
    {
        author: 'Anton',
        text: 'In Saturnday, by Six'
    },
    {
        author: 'Vasia',
        text: 'I think, that $ have cost 35R'
    },
    {
        author: 'Max',
        text: '2 years passed and $ also have not cost 35R'
    },
]

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
        <Comments className={'red'} data={myNews}/>
        <BigTest name={'testName'}/>
    </div>
  );
}

export default App;
