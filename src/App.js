import React, { useState } from 'react';
import AnimalShow from './AnimalShow';

import './App.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {

    const [animals, setAnimals] = useState([]);

    const handleclick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    return (
        <div className='app'>
            <button onClick={handleclick} > Add Animal </button>
            <div className='animal-list' >
            { animals.length && animals.map(type => <AnimalShow type={type} />) }
            </div>
        </div>
    )
}

export default App