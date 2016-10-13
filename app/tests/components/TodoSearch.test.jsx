var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    var action = { type: 'SET_SEARCH_TEXT', searchText: 'cat' };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchInput.value = 'cat';

    TestUtils.Simulate.change(todoSearch.refs.searchInput);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    var action = { type: 'TOGGLE_SHOW_COMPLETED' };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompletedInput.checked = true;

    TestUtils.Simulate.change(todoSearch.refs.showCompletedInput);

    expect(spy).toHaveBeenCalledWith(action);
  });
});