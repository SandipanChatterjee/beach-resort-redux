import React from 'react';
// import './App.css';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms'
import Error from './pages/Error'
import {Route,Switch} from 'react-router-dom'
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={Rooms}/>
          <Route path="/single-room" exact component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </div>
    );  
  }
  
}

export default App;
