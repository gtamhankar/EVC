import React, { Component } from 'react';

export default class AllGenericPolls extends Component {
  constructor(props) {
      super(props)
      // console.log(props)
      this.state = {
        genericpoll: []
      }
      this.logChange = this.logChange.bind(this);
  }
  componentDidMount() {
    let self = this;
    fetch('/genericpoll')
      .then(res => res.json())
      .then(genericpoll => self.setState({ genericpoll: genericpoll }));
  }
  logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
  render() {
    return (
        <div className="Trending Now">
          <h1>Generic Poll</h1>
          <table className="table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Option A</th>
              <th>Option A - Votes </th>
			        <th>Option B</th>
      			  <th>Option B - Votes </th>
      			  <th>Option C</th>
      			  <th>Option C - Votes </th>			  
            </tr>
          </thead>
          <tbody>
		  
              {this.state.genericpoll.map(gp =>
                <tr key={gp.ID}>
                  <td>{gp.PollQuestion}</td>
                  <td>{gp.Option1Desc}</td>
                  <td>{gp.Option1Count}</td>
                  <td>{gp.Option2Desc}</td>
                  <td>{gp.Option2Count}</td>
                  <td>{gp.Option3Desc}</td>
                  <td>{gp.Option3Count}</td>
                </tr>
              )}
          </tbody>
          </table>
        </div>
    );
  }
}
