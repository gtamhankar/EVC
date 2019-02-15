// src/routes.js
import React from 'react';
//import {  Route } from 'react-router';
import {  Router,  Route,  Link,  Switch,  Redirect} from 'react-router-dom';
// import { Link, BrowserRouter as Router, Switch } from 'react-router-dom';
//import gApp from './components/gapp';
import About from './components/about';
//import NotFound from './components/notfound';
import members from './components/members';
import EditUsers from './components/members/edit.js';
import GenericPoll from './components/genericpoll';
import CreatePoll from './components/createpoll';
import { createStore } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import Admin from "./components/Admin";
import Users from "./components/Users";
import Results from "./components/Results";
import App from './App';
import Notfound from './components/Notfound';
//import history from './history';
//import { createHashHistory } from 'history';
import {createBrowserHistory} from 'history';

//const browserHistory = createHashHistory()
//const history = createHashHistory();
const browserHistory = createBrowserHistory();

let store = createStore(todoApp)
console.log(store.getState())


const Routes = (props) => (

<Provider store={store}>
  <Router history={browserHistory} {...props} >
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
        </ul>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/users" component={Users} />
            <Route path="/results" component={Results} />
            <Route path="/admin" component={Admin} />
            <Route component={Notfound} />;   
            <Route path="*" component={Notfound} />	                    
            {/* <Route path="/users" component={Users} /> */}
            {/* <Route path="/edituser/:id" component={EditUsers} /> */}
            {/* <Route path="/genericpoll" component={GenericPoll} /> */}
            {/* <Route path="/createpoll" component={CreatePoll} /> */}    
        </Switch>        
      </div>
    </Router>  
</Provider>

);
 
export default Routes;