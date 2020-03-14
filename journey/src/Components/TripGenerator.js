import React, { useState } from 'react'
import LocationForm from './LocationForm'

function TripGenerator() {
	const [tripTitle] = useState("")
	const [locationsValue] = useState("")
	const [startDate] = useState(new Date().getDate())

	const handleSubmit = (event)=> {
		const params = {trip: {title: tripTitle, loctions: locationsValue, start_date: startDate}}
			fetch(`http://localhost:3020/trips.json`, {
				method: "POST",
				body: JSON.stringify(params),
				headers: {
				'Content-Type': 'application/json'
			},
			}).then((res)=> console.log(res))
			.catch((err)=> console.log("Oops", err))
		}

 return (
		<div>
		<input placeholder="Name Your Trip"/><br />
		<label> Date: </label> <input type="date" defaultValue={startDate}/><br />
		<LocationForm />	
		<button type="submit" onClick={handleSubmit}>Submit</button>
	</div>
 )}
export default TripGenerator