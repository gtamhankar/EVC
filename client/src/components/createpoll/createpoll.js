import React, { Component } from 'react';

export default class GetPollTemplate extends Component {
  constructor(props) {
      super(props)
      // console.log(props)
      this.state = {
        getPollTemplate: []
      }
      this.logChange = this.logChange.bind(this);
  }
  componentDidMount() {
    let self = this;
    fetch('/polltemplates/getpoll?PollID=1')
      .then(res => { res.json(); console.log(res);})
      .then(getPollTemplate => self.setState({ getPollTemplate: getPollTemplate }));
  }
  logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
  render() {
    return (
        <div className="Current Poll">
          <h1>Create Poll</h1>
          <table className="table">
          <thead>
            <tr>
			  <th>Question#</th>
              <th>Question</th>
              <th>Option A</th>             
			  <th>Option B</th>      		
			  <th>Option C</th>      						 
            </tr>
          </thead>
          <tbody>
              {this.state.getPollTemplate.map(gp =>
                <tr key={gp.PollID}>
                  <td>{gp.QNumber}</td>
                  <td>{gp.QDescription}</td>
                  <td>{gp.Option1}</td>
                  <td>{gp.Option2}</td>
                  <td>{gp.Option3}</td>                
                </tr>
              )}
          </tbody>
          </table>
        </div>
    );
  }
}
