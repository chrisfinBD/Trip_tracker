import React from 'react'

function LocationForm(props) {
	return (
	<div>
		<label>From:</label>
		<input type="text" placeholder="City, State" defaultValue={props.title}/><br />
		<label>To:</label>
		<input type="text" placeholder="City, State"/><br />
		<input type="text" placeholder="DestinationLandmark"/><br />  
	</div>
	)}

export default LocationForm
