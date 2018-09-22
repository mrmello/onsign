import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Notification extends Component {
  render(){
    const { errorMessage } = this.props
    if(!errorMessage) return null
    return (
      <div className="alert alert-danger" role="alert">
        {errorMessage}
      </div>
    )
  }
}

Notification.propTypes = {
  errorMessage: PropTypes.string
}


function mapStateToProps(state) {
  return {
    errorMessage: state.notification.message
  }
}
export default connect(mapStateToProps, null)(Notification)