// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './App.css';

import styled from 'styled-components'
import axios from 'axios'

const NamesStyle = styled.p`
    border: 1px solid gold;
    max-width: 20%;
    margin-left: 40%;
 `

function Names () {
    const [pokemonName, setPokemonName] = useState([])
    const nameArray = []

    useEffect ( () => {
        axios
        .get (
            `https://pokeapi.co/api/v2/pokemon`
        )
        .then ( (data) => {
            for ( let i = 0; i < data.data.results.length; i++) {
                nameArray.push(<p>{data.data.results[i].name}</p>)
            }
                setPokemonName(nameArray)
                // console.log()
            
        })
    }, [])

console.log(pokemonName)
// for (let x = 0; x = pokemonName.length; x++) {

    
        return (
//             <NamesStyle>
                pokemonName
//             </NamesStyle>
        )
// }
    
}

export default Names