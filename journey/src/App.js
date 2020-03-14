import React, { useState, useEffect } from 'react'
import './App.css';
import TripGenerator from './Components/TripGenerator'



function App() {

  const [trips, setTrips] = useState([])
	const [fav, setFav] = useState(false)
	const handleFav = (event) => { setFav(!fav) }
  const tripList = trips.map((trip, i) => (
    <li key={i}>
      <span>{trip.title} <button onClick={handleFav}>{fav ? "💖" : "♡" }</button></span>
    </li>)
  )


	useEffect(() => {
    fetch("http://localhost:3020/trips.json")
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((error) => console.log("Oops", error))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        {tripList}
				<TripGenerator />
        
			</header>
    </div>
  );
}

export default App;
