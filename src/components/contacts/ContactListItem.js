import React from 'react';
import { Link } from 'react-router'
import { Card, CardBlock, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import Gravatar from 'react-gravatar'

function ContactListItem(props) {
  return (
    <Card className="mb-3">
      <Gravatar className="card-img-top" width="100%" email={props.email} size={256}/>
      <CardBlock>
        <CardTitle>{props.firstName} {props.lastName}</CardTitle>
        <CardSubtitle>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </CardSubtitle>
        <hr/>
        <Link className="mr-3" to={`/contact/${props.id}`}>Edit</Link>
        <CardLink className="text-danger" href="#" onClick={() => props.onRemove(props.id)}>Remove</CardLink>
      </CardBlock>
    </Card>
  );
}

export default ContactListItem;