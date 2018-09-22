import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class WeatherResults extends Component {

  render() {
    if(!this.props.lastWeather) return null
    //const weather = this.filterAttributes()
    const {lastWeather, searchedTerm } = this.props
    return (
      <div>
        {`The Temperature at ${searchedTerm} is ${lastWeather.main.temp} °C`}
      </div>
    )
  }
}

WeatherResults.propTypes = {
  lastWeather: PropTypes.object,
  searchedTerm: PropTypes.string
}

function mapStateToProps(state) {
  console.log(state)
  return {
    lastWeather: state.weather.lastWeather,
    searchedTerm: state.location.searchedTerm.location
  }
}
export default connect(mapStateToProps, null)(WeatherResults)