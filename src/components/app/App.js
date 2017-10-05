import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './../../store';
import './App.css';
import FeedList from './../../containers/FeedListContainer';
import NewPost from './../../containers/NewPostContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <span>
            <NewPost />
            <FeedList />
          </span>
        </Provider>
      </div>
    );
  }
}

export default App;
