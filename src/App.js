import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import FrontPage from "./components/FrontPage"
import Easy from "./components/questions/Easy"
import Medium from "./components/questions/Medium"
import Hard from "./components/questions/Hard"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1><Link to="/" style={{ textDecoration: "none" }}>Quiz App <span role="img" aria-label="rocket emoji">🚀</span></Link></h1>
        <Switch>
          <Route path="/" component={FrontPage} exact />
          <Route path="/easy" component={Easy} />
          <Route path="/medium" component={Medium} />
          <Route path="/hard" component={Hard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
