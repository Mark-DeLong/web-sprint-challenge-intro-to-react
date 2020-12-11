
import React from 'react';
import './App.css';

import styled from 'styled-components'
// import axios from 'axios'


import Names from './Names'
import Number from './Number'
import Type from './Type'

const AppStyle = styled.div`
    border: 1px solid gold;
 
 `

const App = () => {
  
  return (
    <AppStyle>
      <div className="App">
        <h1 className="Header">Pokemon</h1>
        <div className="Names">
          <Names />
            <div className="Data">
              <Number />
              <Type />
            </div>
        </div>
      </div>
    </AppStyle> 
  )
}

export default App;
