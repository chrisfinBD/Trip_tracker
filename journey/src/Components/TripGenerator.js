import React from 'react'
import LocationForm from './LocationForm'

function TripGenerator(props) {
	return (
	<div>
		<input placeholder="Name Your Trip"/><br />

		{props}
		<p>WEREWWERE</p>
		<LocationForm />
	</div>
	)}

export default TripGenerator

