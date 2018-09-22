import React from 'react'
import PropTypes from 'prop-types'
import { Navbar } from 'reactstrap'

const Header = ({ title }) => {
  return (
    <Navbar color="light" light expand="md">
      {title}
    </Navbar>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header