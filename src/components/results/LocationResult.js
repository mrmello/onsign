import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class LocationResults extends Component {

  filterAttributes() {
    const { lastLocation } = this.props
    let location = []
    location.push({attr: "Latitude", value : lastLocation.geometry.location.lat})
    location.push({attr: "Longitude", value : lastLocation.geometry.location.lng})
    Object.keys(lastLocation.address_components).forEach(function(key){
      let component = lastLocation.address_components[key]
      if(component.types.includes('sublocality') || component.types.includes('locality')) {
        location.push({attr: "City", value : component.long_name})
      }
      else if (component.types.includes('administrative_area_level_1')) {
        location.push({attr: "State Name", value : component.short_name})
      }
      else if (component.types.includes('country')) {
        location.push({attr: "Country", value : component.long_name})
      }
    })
    return location
  }

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
    const location = this.filterAttributes()
    return (
      <div>
        {this.renderAttributes(location)}
      </div>
    )
  }
}

LocationResults.propTypes = {
  lastLocation: PropTypes.object
}


function mapStateToProps(state) {
  return {
    lastLocation: state.location.lastLocation
  }
}
export default connect(mapStateToProps, null)(LocationResults)