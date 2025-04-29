import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from 'react'
import Fetch from './fetch';
import Mousemove from './Mousemove';
import Docupdater from './updateDOC';

function App() {
  return (
    <div className="App">
      <Mousemove/>
      <Docupdater/>
      <Fetch/>
    </div>
  );
}

export default App;
