import React from "react";
import axios from "axios";
import "../App.css"

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
  };

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/register", this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data);
        this.props.history.push('/jokes')
      })
      .catch(err => {
        console.error("Axios failed");
      });
  };


  render() {
    return (
      <div className="sign-up">
        <h1 className="header-title">Sign up to see jokes</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
            className="input-box"
              name="username"
              value={this.state.username}
              onChange={this.inputChangeHandler}
              type="text"
              placeholder='username...'
            />
          </div>
          <br/>
          <div>
            <input
             className="input-box"
              name="password"
              value={this.state.password}
              onChange={this.inputChangeHandler}
              type="password"
              placeholder='password...'
            />
          </div>
          <br/>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;