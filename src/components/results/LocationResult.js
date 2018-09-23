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
    if(!this.props.actualLocation) return null
    const { actualLocation } = this.props
    return (
      <div className="card-body border-bottom text-center">
        <h5 className="card-title">Geolocation Result</h5>
        {this.renderAttributes(actualLocation)}
      </div>
    )
  }
}

LocationResults.propTypes = {
  actualLocation: PropTypes.array
}


function mapStateToProps(state) {
  return {
    actualLocation: state.location.actualLocation
  }
}
export default connect(mapStateToProps, null)(LocationResults)