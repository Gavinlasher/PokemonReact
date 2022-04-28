import React from 'react'






const Pokemon = ({ name, url, pokeNumber }) => {
  return (
    <div className="col-md-3 selectable d-flex ">
      <div className="bg-light shadow rounded p-2 mt-2 ">

        <h1 className="text-dark">{name}</h1>
        <img className="img-fluid p-3 pimg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeNumber}.svg`} alt='' />
      </div>
    </div>
  )

}
export default Pokemon
