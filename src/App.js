import React, {useEffect, useState} from "react";
import './App.css';
import Pokemon from "./Pokemon";

function App() {
const APP_ID = '2e269186';
const APP_KEY = '84c174e6863d93a25b2e75e137d559a9'
const example = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`

const [pokemon, setPokemon] = useState([]);


useEffect(()=>{
  getPokemon();
},[])

const getPokemon = async () => {
  const res = await fetch(
   'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=120'
  )
  const data = await res.json();
  console.log(data)
  setPokemon(data.results)
};


  return (
  
  
    <div className="row">
      <div className="col-md-12 bg-danger d-flex">
        <img  className="img-fluid pp ms-2 p-2" src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_1280.png" alt="" />
        <h1 className="text-light  mt-3 ms-3 text-center">Pokemon</h1>
      </div>
    
   
<div className="row p-3">

{pokemon.map(pokemon => (
  <Pokemon name={pokemon.name} url={pokemon.url} pokeNumber={pokemon.url.split('/')[pokemon.url.split('/').length-2]} key={pokemon.name}/>
  ))}
  </div>
    
  </div>
     
   
  
  );
}

export default App;
// image={pokemon.sprites.other.dream_world.front_default}

