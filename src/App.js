import React, { Component } from 'react'
import Header from './components/header/Header'
import FormLocation from './components/formLocation/FormLocation'
import { locationSubmitter } from './actions/Submitters'
import LocationResult from './components/results/LocationResult'
import WeatherResult from './components/results/WeatherResult'
import Notification from './components/notification/Notification'

class App extends Component {
  render() {
    return (
      <div >
        <Header title="On Sign TV Temperature App"/>
        <div className="container">
          <div className="card mt-5">
            <FormLocation onSubmit={locationSubmitter}/>
            <LocationResult />
            <WeatherResult />
          </div>
          <Notification />
        </div>
      </div>
    )
  }
}

export default App
