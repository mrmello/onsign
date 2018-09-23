import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class WeatherResults extends Component {

  render() {
    if(!this.props.actualWeather) return null
    const { actualWeather } = this.props
    return (
      <div className="card-body text-center">
      <h5 className="card-title">Weather</h5>
        {`The Temperature at ${actualWeather.requestedLocation.lat},
          ${actualWeather.requestedLocation.lng} is `}
        <span className="h5">{`${actualWeather.temp} °C`}</span>
      </div>
    )
  }
}

WeatherResults.propTypes = {
  actualWeather: PropTypes.object
}

function mapStateToProps(state) {
  return {
    actualWeather: state.weather.actualWeather
  }
}
export default connect(mapStateToProps, null)(WeatherResults)