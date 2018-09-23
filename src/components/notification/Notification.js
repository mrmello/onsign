import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/**
 * Notification component is responsible for showing the notification alert
 * when any error occurs during the api requests
 */
class Notification extends Component {
  render(){
    const { errorMessage } = this.props
    if(!errorMessage) return null
    return (
      <div className="mt-5">
          <div className="alert alert-danger" align="center">
            {errorMessage}
          </div>
      </div>
    )
  }
}

Notification.propTypes = {
  /**
   * String containing the message to be displayed in the alert
   */
  errorMessage: PropTypes.string
}


function mapStateToProps(state) {
  return {
    errorMessage: state.notification.message
  }
}
export default connect(mapStateToProps, null)(Notification)