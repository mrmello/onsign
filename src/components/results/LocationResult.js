import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class LocationResults extends Component {

  renderAttributes(location) {
    return location.map((loc, i) => {
      return (
        <div key={i}>
          {`${loc.attr}: ${loc.value}`}
        </div>
      )
    })
  }

  render() {
    if(!this.props.lastLocation) return null
    const { lastLocation } = this.props
    return (
      <div className="card-body border-bottom text-center">
        <h5 className="card-title">Geolocation Result</h5>
        {this.renderAttributes(lastLocation)}
      </div>
    )
  }
}

LocationResults.propTypes = {
  lastLocation: PropTypes.array
}


function mapStateToProps(state) {
  return {
    lastLocation: state.location.lastLocation
  }
}
export default connect(mapStateToProps, null)(LocationResults)