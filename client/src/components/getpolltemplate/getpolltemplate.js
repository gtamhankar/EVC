import React, { Component } from 'react';

export default class getpolltemplate extends Component {
  constructor(props) {
      super(props)
      // console.log(props)
      this.state = {		
        PollTemplates: []
      }
      this.logChange = this.logChange.bind(this);
  }
  componentDidMount() {
	console.log ("inside getpolltemplate.js component mount")
    let self = this;
    fetch('/polltemplates/getpoll?PollID=1')
      .then(res => { 
		res.json(); 
		console.log(res);		
		})
      .then(PollTemplates => self.setState({ PollTemplates: PollTemplates }));
  }
  
  logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
  render() {
    return (
        <div className="Current Poll">
          <h1>Submit Vote</h1>
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
              {/* {this.state.PollTemplates.map(pt =>
                <tr key={pt.PollID}>
                  <td>{pt.QNumber}</td>
                  <td>{pt.QDescription}</td>
                  <td>{pt.Option1}</td>
                  <td>{pt.Option2}</td>
                  <td>{pt.Option3}</td>                
                </tr>
              )} */}
          </tbody>
          </table>
        </div>
    );
  }
}
