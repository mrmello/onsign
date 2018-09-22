import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class WeatherResults extends Component {

  render() {
    if(!this.props.lastWeather) return null
    const {lastWeather, searchedTerm } = this.props
    return (
      <div className="card-body text-center">
        {`The Temperature at ${searchedTerm} is `}
        <span className="h5">{`${lastWeather.main.temp} °C`}</span>
      </div>
    )
  }
}

WeatherResults.propTypes = {
  lastWeather: PropTypes.object,
  searchedTerm: PropTypes.string
}

function mapStateToProps(state) {
  return {
    lastWeather: state.weather.lastWeather,
    searchedTerm: state.location.searchedTerm.location
  }
}
export default connect(mapStateToProps, null)(WeatherResults)