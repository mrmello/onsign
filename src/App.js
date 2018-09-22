import React, { Component } from 'react'
import Header from './components/header/Header'
import FormLocation from './components/formLocation/FormLocation'
import { locationService } from './actions/Services'

class App extends Component {
  render() {
    return (
      <div>
        <Header title="On Sign TV Temperature App"/>
        <FormLocation onSubmit={locationService}/>
      </div>
    )
  }
}

export default App
