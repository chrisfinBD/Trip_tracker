import React, {useState, useEffect} from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import TripGenerator from './Components/TripGenerator'

const Content = ()=> {
  
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
     
      <Route exact path="/trips">
        <Trips />
      </Route>
      <Route path="/trips/:tripId">
        <Trip />
      </Route>
      <Route path="/trips/:tripId/edit">
        <TripGenerator id={tripId}/>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Content



