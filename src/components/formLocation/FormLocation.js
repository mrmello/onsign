import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

const FormLocation = (props) => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component="input"
        type="text"
        name="location"/>
      <button
        type="submit"
        disabled={pristine || submitting}>
          Show Temperature
      </button>
    </form>
  )
}

FormLocation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
}
let InitializeFormLocation = reduxForm({
  form: 'formLocation',
  enableReinitialize: true,
  destroyOnUnmount: false
})(FormLocation)

  export default InitializeFormLocation