import { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Routes/'

function AirQualityApp() {

  return (

    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default AirQualityApp