import React, { useState } from 'react'


function LocationForm() {
	return (
	<div>
		<label>From:</label>
		<input placeholder="City"/> <input id="inpstate" maxlength="2" placeholder="State" /><br />
		<label>To:</label>
		<input placeholder="City"/> <input id="inpstate" maxlength="2" placeholder="State" /><br />
		<input placeholder="DestinationLandmark"/><br />  
	</div>
	)}

export default LocationForm
