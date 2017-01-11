import { connect } from 'react-redux'
import { removeContact } from '../../actions/contacts'
import ContactList from '../../components/contacts/ContactList'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (id) => {
      dispatch(removeContact(id))
    }
  }
}

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default ContactListContainer