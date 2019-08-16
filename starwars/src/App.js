import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/components.js';
import './App.scss';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [people, setData] = useState([]);
useEffect(() => {
  axios.get('https://swapi.co/api/people/',{
    params: {}
  })
  .then(res => {
    console.log(res.data.results);
    const people = res.data.results;
    setData(people);
  });
}, [])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map(data =>{
        return(  
        <Card name={data.name} 
            height={data.height}
            eye_color={data.eye_color}
            hair_color={data.hair_color} />
        );
      })
      
      }        
    </div>
  );
}

export default App;
