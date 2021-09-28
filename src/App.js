import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Game from './components/Game';
import NoMatch from './components/NoMatch';

function App() {
  const [name, setName] = useState('');
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/game' component={Game} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;