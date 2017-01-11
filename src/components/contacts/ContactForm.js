import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { email as emailValidator, firstName as firstNameValidator, lastName as lastNameValidator } from '../../utilities/validation'

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  const status = ((touched && (error ? 'danger' : 'success')) || '')

  return (<FormGroup color={status}>
    <Label>{label}</Label>
    <Input {...input} placeholder={label} type={type} state={status}/>
    {touched && ((error && <FormText color="danger">{error}.</FormText>))}
  </FormGroup>)
}

let ContactForm = (props) => {
  const { handleSubmit, submitting } = props
  return (
    <div>
      <h1>Contact</h1>
      <hr/>
      <Form onSubmit={handleSubmit}>
        <Field name="firstName" type="text" component={renderField} label="First Name" validate={firstNameValidator}/>
        <Field name="lastName" type="text" component={renderField} label="Last Name" validate={lastNameValidator}/>
        <Field name="email" type="email" component={renderField} label="Email" validate={emailValidator}/>
        <div className="text-right">
          <Button color="success" type="submit" disabled={submitting}>Save</Button>
        </div>
      </Form>
    </div>
  )
}

ContactForm = reduxForm({
  form: 'contact-form'
})(ContactForm)

export default ContactForm