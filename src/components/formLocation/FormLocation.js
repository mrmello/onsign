import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
/**
 * Form component responsible for receiving the user input and
 * firing a request to the api
 */
const FormLocation = (props) => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <div>
      <div className="card-header">
        Current Temperature For Location
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div >
            <Field
              className="form-control"
              component="input"
              type="text"
              name="location"/>
              <button
              className="btn btn-primary mt-2"
              type="submit"
              disabled={pristine || submitting}>
                Show Temperature
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

FormLocation.propTypes = {
  /**
   * Function passed to redux-form tha will be called when the user submits the form
   */
  handleSubmit: PropTypes.func.isRequired,
  /**
   * Redux-form attribute that informs if the form is pristine
   */
  pristine: PropTypes.bool,
  /**
   * Redux-form attribute that informs if the form is beeing submitted
   */
  submitting: PropTypes.bool
}
let InitializeFormLocation = reduxForm({
  form: 'formLocation',
  enableReinitialize: true,
  destroyOnUnmount: false
})(FormLocation)

  export default InitializeFormLocation