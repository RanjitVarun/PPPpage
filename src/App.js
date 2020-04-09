import React from 'react';
import './App.css';
import { Route, Router} from 'react-router-dom'
import form from './PPPform'




class App extends React.Component {

    render(){
  return (
    <div className="App">
    <Route path="/" exact component={form}></Route>
    </div>
  );
    }
}

export default App;
