import React, {useState} from 'react'
import TripCard from './Components/TripCard'


function Trips(props) {

	const [trips, setTrips] = useState([])

    const tripList = trips.map((trip, i) => (
        <TripCard key={i} title={trip.title} id={trip.id} start_date={trip.start_date} />
))

	return (

        <div>
            {tripList}
        </div>
	)
	
}

export default  TripCard