import React from 'react'
import LocationForm from './LocationForm'

function TripGenerator() {
	
 return (
		<div>
		<input placeholder="Name Your Trip"/><br />
		<label> Date: </label> <input type="date" /><br />
		<LocationForm />	
		<button type="submit">Submit</button>
	</div>
 )}
export default TripGenerator

