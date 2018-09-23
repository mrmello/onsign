import React, { Component } from 'react'
import Header from './components/header/Header'
import FormLocation from './components/formLocation/FormLocation'
import { locationSubmitter } from './actions/Submitters'
import LocationResults from './components/locationResults/LocationResults'
import WeatherResults from './components/weatherResults/WeatherResults'
import Notification from './components/notification/Notification'

/**
 * The most parent component. Composed by the Header, FormLocation, LocationResult,
 * WeatherResult and Notification components.
 */
class App extends Component {
  render() {
    return (
      <div >
        <Header title="On Sign TV Temperature App"/>
        <div className="container">
          <div className="card mt-5">
            <FormLocation onSubmit={locationSubmitter}/>
            <LocationResults />
            <WeatherResults />
          </div>
          <Notification />
        </div>
      </div>
    )
  }
}

export default App
