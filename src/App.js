import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Signup from './components/Signup'

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
<Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/signup"
            render={props => <Signup {...props} setUser={this.setUser} />}
          />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

