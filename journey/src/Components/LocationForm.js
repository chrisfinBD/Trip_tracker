import React from 'react'


function LocationForm() {
	return (
	<div>
		<label>From:</label><br />
		<input placeholder="City"/> <input id="inpstate" maxlength="2" placeholder="State" /> <button>⊖</button><br />
		<label>To:</label><br />
		<input placeholder="Landmarks?"/><br />  
		<input placeholder="City"/> <input id="inpstate" maxlength="2" placeholder="State" /> <button>⊖</button><br />
		<button type="submit">Submit</button>
	</div>
	)}

export default LocationForm
