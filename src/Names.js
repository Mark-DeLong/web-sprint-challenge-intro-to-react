
import React, { useState, useEffect } from 'react';
import './App.css';

import styled from 'styled-components'
import axios from 'axios'

const NamesStyle = styled.p`
    border: 1px solid gold;
    max-width: 20%;
    margin-left: 40%;
    background-color: black;
    color: white;
 `

function Names () {
    const [pokemonName, setPokemonName] = useState([])
    const nameArray = []



    useEffect ( () => {
        axios
        .get (
             `https://pokeapi.co/api/v2/pokemon/1`
        )
        .then ( (data) => {
            console.log(data.data.name)
            


            // for ( let i = 0; i < data.data.results.length; i++) {
                //  nameArray.push(<p>{data.data.name}</p>)
                 

            // }
                 setPokemonName(data.data.name)
                 
                // console.log()
            
        })
    }, [])

        return (
             <NamesStyle>
                <p>Name: {pokemonName}</p>
             </NamesStyle>
        )

}

export default Names