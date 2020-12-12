import React, { Component } from 'react';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Todo from './components/Todo';
import MarkdownEditor from './components/MarkdownEditor';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="menu">
            <ul>
              <li> <Link to="/todo">Todo</Link> </li>
              <li> <Link to="/markdowneditor">Markdown Editor</Link> </li>
              <li> <Link to="/game">Game</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/todo"  component={Todo} />
            <Route path="/game" component={Game} />
            <Route path="/markdowneditor" component={MarkdownEditor} />
            <Redirect to="/todo" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
