import React, { Component } from 'react';
import Users from '../../components/users';
import GenericPoll from '../../components/genericpoll';
import GetPollTemplate from '../../components/getpolltemplate';

class App extends Component {
  render() {
    return (
	<div>
  	  <div><br /><br /></div>
      <div>
        <GetPollTemplate />
      </div>	  
	 
      <div>
        <Users />
      </div>
	  <div><br /><br /></div>
	  
      <div>
        <GenericPoll />
      </div>	  
	 </div>
    );
  }
}

export default App;
