import React, {useState} from 'react'
import axios from 'axios'

function App() {

  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=miami&appid=6733cc0c086c9effdbdf57b0293ff7a3'

  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Miami</p>
          </div>
          <div className='temp'>
            <h1>65°F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>70°</p>
          </div>
          <div className='humidity'>
            <p>30%</p>
          </div>
          <div className='wind'>
            <p>15 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
