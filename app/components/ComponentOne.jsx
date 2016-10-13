import React from 'react';

// minimal react component only requires a render method
var ComponentOne = React.createClass({
  // set initial state
  getInitialState: function () {
    return { count: this.props.count };
  },
  getDefaultProps: function () {
    return { count: 11 }
  },
  propTypes: {
    count: React.PropTypes.number.isRequired
  },
  handleClick: function () {
    // autobinding of events in a React component
    this.setState({ count: this.state.count + 1 });
  },
  render: function () {
    return (
      <div>
        <h3>Component One Using React.createClass</h3>
        <p>Current count: { this.state.count }</p>
        <button className="button" onClick={ this.handleClick }>Button One</button>
      </div>
    );
  }
});

export default ComponentOne;
