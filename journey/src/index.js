import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Trips from './Trips';
import * as serviceWorker from './serviceWorker';
import TripGenerator from './Components/TripGenerator';
import { Link, Redirect, Switch, Route, Router } from 'react-router-dom'

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/trips">Trips</Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/trips" component={Trips} />
      </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
