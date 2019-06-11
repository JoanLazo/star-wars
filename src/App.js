import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import InforCharacter from './components/InfoCharacter';

const App = () => {

  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const result = await axios(
          'https://swapi.co/api/people/',
        );
        console.log(result.data.results);
        setData(result.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  
    return (
      <div className="App color-black justify-content-center">
        <header className="App-header">
          <h1 className="App-title color-white center">STAR WARS</h1>
          <h1 className="App-subtitle color-white center">PERSONAJES</h1>
        </header>
        <Form data={data} /> 
        <InforCharacter data={data} />  
      </div>
    );
  
}


export default App;
