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
    const [pokemonName, setPokemonName] = useState("")
    const nameArray = []

    const [pokedexNumber, setPokedexNumber] = useState(null)
    const numberArray = []

    const [pokemonType, setPokemonType] = useState("")
    const typeArray = []

    useEffect ( () => {
        axios
        .get (
             `https://pokeapi.co/api/v2/pokemon/1`
        )
        .then ( (data) => {
            console.log(data.data.name)
            console.log(data.data.order)
            console.log(data.data.types[0].type.name)


            // for ( let i = 0; i < data.data.results.length; i++) {
                //  nameArray.push(<p>{data.data.name}</p>)
                //  numberArray.push(<p>{data.data.order}</p>)
                //  typeArray.push(<p>{data.data.types[0].type.name}</p>)

            // }
                 setPokemonName(data.data.name)
                 setPokedexNumber(data.data.order)
                 setPokemonType(data.data.types[0].type.name)
                // console.log()
            
        })
    }, [])

        return (
            // <NamesStyle>
                <p>pokemonName</p>,
                <p>pokedexNumber</p>,
                <p>pokemonType</p>
        //    </NamesStyle>
        )

}

export default Names