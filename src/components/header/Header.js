import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <p className="h4 text-light">{title}</p>
    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header