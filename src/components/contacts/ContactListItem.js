import React from 'react';
import { Link } from 'react-router'
import { Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardLink } from 'reactstrap';

function ContactListItem(props) {
  return (
    <Card className="mb-3">
      <CardImg top width="100%" src="https://www.gravatar.com/avatar/00000000000000000000000000000000?s=256" alt="Photo" />
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