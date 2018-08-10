import React from "react";
import axios from "axios";
import "../App.css";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        Authorization: token
      }
    };

    axios
      .get("http://localhost:5000/api/jokes", requestOptions)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(err => {
        console.error("Axios failed");
      });
  }

  logoutHandler = e => {
    localStorage.removeItem("jwt");

    this.props.history.push("/signin");
  };

  handleSignUpPage = e => {
    this.props.history.push("/signup");
  };

  refreshHandler = e => {
      window.location.reload()
  }

  render() {
    return (
      <div className="jokes">
        <h1 className="header-title"> Have some jokes!</h1>
        <button onClick={this.refreshHandler}>Want new jokes?</button>
        <div className='joke-list'>
          {this.state.jokes.map(joke => (
            <div className="joke-card" key={joke.id}>
              <p> What type of joke? {joke.type}</p>
              <p> Setup: {joke.setup}</p>
              <p>Punchline: {joke.punchline}</p>
            </div>
          ))}
        </div>
        <div>
          {localStorage.getItem("jwt") && (
            <div>
              <button onClick={this.logoutHandler}>Logout</button>
              <button onClick={this.handleSignUpPage}>Sign Up Page</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Jokes;
