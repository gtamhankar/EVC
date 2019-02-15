import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Router, Route } from 'react-router';
import Members from './members';
import GenericPoll from './genericpoll';
import GetPollTemplate from './getpolltemplate';
export class Home extends Component {
   
  
    getDefaultProps(){
        return {
            status: 'disconnected'
        }
    }
    render() {
    return (
      <div>
        <header className="row">
            <div className="col-xs-10">
                {/* <h1> Every Vote Counts</h1> */}
                {/* <p> An Easy way to create your own poll </p> */}
            </div>
            <div className="col-xs-2">
                <span id="connection-status" className={this.props.status}></span>
            </div>
        </header>
		<div>
  	  <div><br /><br /></div>
      <div>
        <GetPollTemplate />
      </div>	  
	 
      <div>
        <Members />
      </div>
	  <div><br /><br /></div>
	  
      <div>
        <GenericPoll />
      </div>	  
	 </div>
      </div>
    )
  }
}

Home.propTypes= {
    title: PropTypes.string.isRequired
}

export default Home
