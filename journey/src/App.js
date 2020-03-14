import React, { useState, useEffect } from 'react'
import './App.css';
import TripGenerator from './Components/TripGenerator'



function App() {

  const [trips, setTrips] = useState([])
	const [fav, setFav] = useState(false)
	const handleFav = (event) => { setFav(!fav) }
  const tripList = trips.map((trip, i) => (
    <li className="tripList" key={i}>
      <span>{trip.title} <button onClick={handleFav}>{fav ? "💖" : "♡" }</button></span>
    </li>)
  )
	const [tripTitle, setTripTtitle] = useState("")
	const [locationsValue, setLocationsValue] = useState("")
	const [startDate, setStartDate] = useState(new Date().getDate())
	
	useEffect(() => {
    fetch("http://localhost:3020/trips.json")
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((error) => console.log("Oops", error))
  }, [])

	const handleSubmit = (event)=> {
		const params = {trips: {title: tripTitle, loctions: locationsValue, start_date: startDate}}
			fetch(`http://localhost:3020/trips.json`, {
				method: "POST",
				body: JSON.stringify(params)
			}).then((res)=> console.log(res))
			.catch((err)=> console.log("Oops", err))
		}

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
