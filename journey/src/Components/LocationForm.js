import React from 'react'


function LocationForm() {
	return (
	<div>
		<label>From:</label><br />
		<input placeholder="City"/> <input id="inpstate" maxlength="2" placeholder="State" /><br />
		<label>To:</label><br />
		<input placeholder="City"/> <input id="inpstate" maxlength="2" placeholder="State" /> <button type="submit">Submit</button>
	</div>
	)}

export default LocationForm
