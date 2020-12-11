
import React, { useState, useEffect } from 'react';
import './App.css';

import styled from 'styled-components'
import axios from 'axios'

const TypeStyle = styled.p`
    border: 1px solid gold;
    max-width: 20%;
    margin-left: 40%;
 `

function Type () {


    const [pokemonType, setPokemonType] = useState([])
    const typeArray = []

    useEffect ( () => {
        axios
        .get (
             `https://pokeapi.co/api/v2/pokemon/1`
        )
        .then ( (data) => {



            // for ( let i = 0; i < data.data.results.length; i++) {

                //  typeArray.push(<p>{data.data.types[0].type.name}</p>)

            // }
  
                 setPokemonType(data.data.types[0].type.name)
                // console.log()
            
        })
    }, [])

        return (
            // <NamesStyle>
                <p>{pokemonType}</p>
        //    </NamesStyle>
        )

}

export default Type