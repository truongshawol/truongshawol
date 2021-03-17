import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import CardPage from './Pages/CardPage'

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/card" component={CardPage} />
    </Router>
  );
}

export default App;
