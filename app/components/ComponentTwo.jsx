import React from 'react';

var isAdmin = true;

// First way to create a higher order component
// function equivalent to connect, pass a component to it,
// inject the properties passed in and return a higher order component back
// add this functionality to any other component
// var adminComponent = (Component) => {
//   return class Admin extends React.Component {
//     render () {
//       if (isAdmin) {
//         return (
//           <div className="callout secondary">
//             <p className="alert label">Private admin information</p>
//             <Component { ...this.props } />
//           </div>
//         );
//       } else {
//         return null;
//       }
//     }
//   };
// };

// Second way to create a higher order component is to extend a component passed in
// Can do more than just tap into the rendering of the component
// Also able to listen to life cycle methods
var adminComponent = (Component) => {
  // extend the Component passed in, instead of React.Component
  return class Admin extends Component {
    componentDidUpdate () {
      console.log('Admin component did update');

      if (super.componentDidUpdate) {
        super.componentDidUpdate();
      }
    }

    render () {
      if (isAdmin) {
        return (
          <div className="callout secondary">
            <p className="alert label">Private admin information</p>
            {/* instead of rendering the component, call super to have it render the component */}
            { super.render() }
          </div>
        );
      } else {
        return null;
      }
    }
  };
};

// class name is the component name
// extend the class from React.Component to inherit the methods
// Only methods can be defined within the class, not values
class ComponentTwo extends React.Component {
  componentDidUpdate () {
    console.log('ComponentTwo did update');
  }

  // Set the initial state
  constructor (props) {
    // override the React.Component constructor
    super(props);
    this.state = { count: props.count };

    // 3) bind the event handler to an instance of the component
    // doing it this way means you don't need to bind every time the component renders
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    // autobinding of event listeners with ES6 syntax
   this.setState({ count: this.state.count + 1 });
  }

  render () {
    return (
      <div>
        <h3>Component Two Using React.Component</h3>
        <p>Current count: { this.state.count }</p>

        {/* 1) the event handler needs to be bound to the component to access the state */}
        {/* 3) as an alternative to binding this in the onClick event below add it to the constructor */}
        {/* <button className="button" onClick={ this.handleClick }>Button Two</button> */}

        {/* 2) bind this to the event handler so that the component state is available */}
        {/* <button className="button" onClick={ this.handleClick.bind(this)}>Button Two</button> */}

        {/* bind is only a problem when referencing a method defined outside the render method  */}
        {/* 4) define an arrow function directly on the onClick event handler */}
        <button className="button" onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}>Button Two</button>
      </div>
    );
  }
}

// Define values on an instance of ComponentTwo after it's created
// Define the default values
ComponentTwo.defaultProps = { count: 50 };

// Define the required value type for the props
ComponentTwo.propTypes = { count: React.PropTypes.number.isRequired };

// export default ComponentTwo;
// export the higher order component instead
export default adminComponent(ComponentTwo);
