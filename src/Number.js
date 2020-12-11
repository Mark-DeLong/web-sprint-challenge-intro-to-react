import React, { useState, useEffect } from 'react';
import './App.css';

import styled from 'styled-components'
import axios from 'axios'

const NumberStyle = styled.p`
    border: 1px solid gold;
    max-width: 20%;
    margin-left: 40%;
    background-color: black;
    color: white;
 `

function Number () {
  

    const [pokedexNumber, setPokedexNumber] = useState("")
    const numberArray = []



    useEffect ( () => {
        axios
        .get (
             `https://pokeapi.co/api/v2/pokemon/1`
        )
        .then ( (data) => {
           



            // for ( let i = 0; i < data.data.results.length; i++) {
     
                //  numberArray.push(<p>{data.data.order}</p>)

            // }
            
                 setPokedexNumber(data.data.order)
            
        })
    }, [])

        return (
            <NumberStyle>
                <p>Pokedex Number: {pokedexNumber}</p>
            </NumberStyle>
        )

}

export default Number