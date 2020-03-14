import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import TripGenerator from './Components/TripGenerator'
import TripCard from './Components/TripCard'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const [trips, setTrips] = useState([])

 

  const tripList = trips.map((trip, i) => (
    <li key={i}>

				<TripCard title={trip.title} id={trip.id} start_date={trip.start_date} />
      
    </li>)
  )



  useEffect(() => {
    fetch("http://localhost:3020/trips.json")
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((error) => console.log("Oops", error))
  }, [])


  return (
    <div>
        {tripList}
    </div>
  );
}

export default App;
