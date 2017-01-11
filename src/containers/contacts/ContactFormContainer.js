import { addContact, updateContact } from '../../actions/contacts'
import ContactForm from '../../components/contacts/ContactForm'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.params.id, 10)
  return {
    initialValues: state.contacts.find((contact) => (contact.id === id))
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (values) => {
      const id = parseInt(ownProps.params.id, 10)

      if(id) {
        dispatch(updateContact(id, values.firstName, values.lastName, values.email))
      } else {
        dispatch(addContact(values.firstName, values.lastName, values.email))
      }

      browserHistory.push('/');
    }
  }
}

let ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm)

export default ContactFormContainer