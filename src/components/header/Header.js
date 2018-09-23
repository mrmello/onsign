import React from 'react'
import PropTypes from 'prop-types'

/**
 * Header component is responsible for showing the header bar of the application.
 * It receives the title from the parent component, which is App
 */
const Header = ({ title }) => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <p className="h4 text-light">{title}</p>
    </div>
  )
}
Header.propTypes = {
  /**
   * The string value to be shown in the header
   */
  title: PropTypes.string.isRequired
}
export default Header