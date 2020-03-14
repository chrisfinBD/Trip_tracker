import React, { useState, useEffect } from 'react'
import './App.css';
import TripGenerator from './Components/TripGenerator'
import TripCard from './Components/TripCard'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const [trips, setTrips] = useState([])
	const [fav, setFav] = useState(false)
	const handleFav = (event) => { setFav(!fav) }
  const tripList = trips.map((trip, i) => (
    <li className="tripList" key={i}>
      <span>{trip.title} <button onClick={handleFav}>{fav ? "💖" : "♡" }</button></span>
    </li>
    )
  )
	
	useEffect(() => {
    fetch("http://localhost:3020/trips.json")
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((error) => console.log("Oops", error))
  }, [])

  return (
    <div>
        <h1>Home</h1>
        {tripList}
    </div>
  );
}

export default App;
