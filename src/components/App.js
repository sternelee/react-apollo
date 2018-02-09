import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Login from './Login';
import Search from './Search';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="center w85">
          <Header />
          <div className='ph3 pv1 background-gray'>
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/new/1' />} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/create' component={CreateLink} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/top' component={LinkList} />
              <Route exact path='/new/:page' component={LinkList} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
