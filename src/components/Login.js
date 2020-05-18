import React, { Component } from "react";
import { login } from "../services/auth";


class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    login(this.state.username, this.state.password).then(data => {
      if (data.message) {
        // handle errors
        this.setState({
          error: data.message
        });
      } else {
        // no error
        // lift the data up to the App state
        this.props.setUser(data);
        // redirect to "/projects"
        this.props.history.push("/dashboard");
      }
    });
  };

  render() {
    return (
      <div >
            <h2>Log in</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <label htmlFor="username" className="signup-label">
                  Username:{" "}
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>

              <div >
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              
                <button type="submit">
                  Log in
                </button>
              

              <div>
                {this.state.error && (
                  <alert  variant="danger">
                    {this.state.error}
                  </alert>
                )}
              </div>
            </div>
          </form>
  
      </div>
    );
  }
}

export default Login;
