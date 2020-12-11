// eslint-disable-next-line
import React from 'react';
import './App.css';

// import Styled from 'styled-components'
// import axios from 'axios'

// eslint-disable-next-line
import Names from './Names'
import Number from './Number'
import Type from './Type'

const App = () => {
  

  return ( 
    <div className="App">
      <h1 className="Header">Pokemon</h1>
      
      <Names />,
      <Number />,
      <Type />

    </div>
  )
}

export default App;
