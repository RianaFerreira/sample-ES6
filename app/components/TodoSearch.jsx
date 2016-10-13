var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
  render: function () {
    var { dispatch, showCompleted, searchText } = this.props;

    return (
      <div className="container__header">
        <input type="search" ref="searchInput" placeholder="Search todos" value={ searchText } onChange={ () => {
            dispatch(actions.setSearchText(this.refs.searchInput.value));
          } } />
        <label>
          <input type="checkbox" ref="showCompletedInput" checked={ showCompleted } onChange={ () => {
            dispatch(actions.toggleShowCompleted());
          } } />
          Show completed todos 
        </label>
      </div>
    );
  }
});

// grab values from state
export default connect(
  (state) => {
    return { 
      showCompleted: state.showCompleted, 
      searchText: state.searchText
    };
  })(TodoSearch);