import React from 'react'
import { Col, Card } from 'react-bootstrap'


function TripCard(props) {

	return (
		<Col>
		<Card>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				Trip Date - {props.start_date}
				<Card.Link href={`/trips/${props.id}/edit`}>Edit</Card.Link>
				</Card.Body>
				</Card>
				</Col>
	)

	
}

export default  TripCard