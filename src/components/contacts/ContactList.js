import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import { Row, Col } from 'reactstrap';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onRemove }) => (
  <div>
    <Row>
      <Col xs="6">
        <h1>Contacts</h1>
      </Col>
      <Col xs="6" className="text-right">
        <Link className="btn btn-success" to={`/contact/`}>Add Contact</Link>
      </Col>
    </Row>
    <hr/>
    {contacts.length > 0 ? (
      <Row>
        {contacts.map(contact =>
          <Col key={contact.id} xs="12" sm="6" md="4" lg="3">
            <ContactListItem {...contact} onRemove={onRemove}/>
          </Col>
        )}
      </Row>
    ) : (
      <p>Your contacts list is empty.</p>
    )}
  </div>
)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onRemove: PropTypes.func.isRequired
}

export default ContactList