import React, { Component } from 'react'
import Header from './components/header/Header'
import FormLocation from './components/formLocation/FormLocation'
import { locationService } from './actions/Services'
import LocationResult from './components/results/LocationResult'
import WeatherResult from './components/results/WeatherResult'

class App extends Component {
  render() {
    return (
      <div>
        <Header title="On Sign TV Temperature App"/>
        <FormLocation onSubmit={locationService}/>
        <LocationResult />
        <WeatherResult />
      </div>
    )
  }
}

export default App
