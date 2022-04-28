import React, {useEffect, useState} from "react";
import './App.css';
import Pokemon from "./Pokemon";

function App() {
const APP_ID = '2e269186';
const APP_KEY = '84c174e6863d93a25b2e75e137d559a9'
const example = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`

const [pokemon, setPokemon] = useState([]);


useEffect(()=>{
  getRecipes();
},[])

const getRecipes = async () => {
  const res = await fetch(
   'https://pokeapi.co/api/v2/pokemon'
  )
  const data = await res.json();
  console.log(data.results)
  setPokemon(data.results)
};


  return (
    <div className="App">
{pokemon.map(pokemon => (
<Pokemon name={pokemon.name} key={pokemon.name}/>
))}
    </div>
  );
}

export default App;
// image={pokemon.sprites.other.dream_world.front_default}