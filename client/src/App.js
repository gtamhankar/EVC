import React, { Component } from "react";
import Home from "./components/Home";
import { Route } from 'react-router';
import { Router, Switch  } from 'react-router-dom';
import Admin from "./components/Admin";
import Users from "./components/Users";
import Results from "./components/Results";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound"
import {createBrowserHistory} from 'history';

//const browserHistory = createHashHistory()
//const history = createHashHistory();
const browserHistory = createBrowserHistory();

var io = require('socket.io-client');



class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   endpoint: "http://127.0.0.1:3001",
    //   status: 'disconnected'
    // };
    this.state = {
        status:'disconnected',
        title:'Every Vote Counts',
        member:{},  //from this specific socket
        audience :[],
        administrator: '' ,// same for all sock
        questions:[],
        currentQuestion:false,
		 chartData:{},
		 username: 'test',
		 endpoint: "http://127.0.0.1:3001",
		 
    }
    this.emit = this.emit.bind(this);
  }
  // getInitialState(){
  //   return {
  //       status: 'disconnected',
  //       title:'Poll name',

  //   }
  // }
  //listen for events
  componentWillMount() {
    this.socket = io('http://127.0.0.1:3001')
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect)
    this.socket.on('welcome', this.updateState)
    this.socket.on('joined', this.joined)
    this.socket.on('audience', this.updateAudience);
    this.socket.on('start', this.start);
    this.socket.on('end', this.updateState);
    this.socket.on('ask', this.ask);
    // const { endpoint } = this.state;
    // const socket = socketIOClient(endpoint);
    // socket.on('connect', this.connect);
    // socket.on("FromAPI", data => this.setState({ response: data }));
   
    // socket.on('disconnect', this.disconnect);
    // socket.on('welcome', this.welcome);
  }

  emit=(eventName, dataFromClient) => {
    this.socket.emit(eventName, dataFromClient);
  }
  connect=()=>{
    var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member): null;
    if (member && member.type === 'audience'){
      this.emit('join', member) // automatically join user after refresh
    }else if (member && member.type === 'administrator'){
      this.emit('start', {name: member.name, title:sessionStorage.title});
    }
    this.setState({status: 'connected'})
  }

  disconnect=()=>{
    this.setState({
      status: 'disconnected',
      title: 'disconnected',
      administrator: '' 
  
    });
  }
  updateState=(serverState)=>{
    this.setState(serverState)
  }

  joined=(member)=>{
    sessionStorage.member = JSON.stringify(member)
    this.setState({member:member})
  }

  updateAudience=(newAudience)=>{
    this.setState({audience: newAudience});
  }
  start(){
    // if (this.state.administrator.type === 'administrator'){
    //   sessionStorage.title = poll.title;
    // }
    // this.setState(poll);
  }
  ask=(question)=>{
    this.setState({currentQuestion: question});
  }

  render() {
    // const {response} = this.state;
    return (
      <Router  history={browserHistory}>
        <div style={{ textAlign: "center" }}>
          <Navbar title={this.state.title} username={this.state.username} />	
          <Switch>
            <Route exact path="/" 
              render={(props) => <Home {...props} {...this.state} />} 
            />
            <Route path="/users" 
              render={(props) => <Users  {...props} emit={this.emit} {...this.state} />}
            />
            <Route path="/results" 
              render={(props) => <Results  {...props} {...this.state} />} 
            />
            <Route path="/admin" 
              render={(props) => <Admin  {...props} emit={this.emit} {...this.state} />}
            />
            <Route component={Notfound} />;   
          </Switch>
        
        {/* <Home title={this.state.title} status={this.state.status}/> */}
        
        </div>
      </Router>

    )
  }
}
export default App;