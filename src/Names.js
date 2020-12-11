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
    const [pokemonName, setPokemonName] = useState({})

    useEffect ( () => {
        axios
        .get (
            `https://pokeapi.co/api/v2/pokemon`
        )
        .then ( (data) => {
            setPokemonName(data.data)
        })
    }, [])

    return (
        <NamesStyle>
            <p>{pokemonName}</p>
        </NamesStyle>
    )
}

export default Names