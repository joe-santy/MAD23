import React from 'react';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitUserInfo = this.submitUserInfo.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitUserInfo(event) {
    alert('Your username and password are: ' + '\n' + this.state.username + '\n' + this.state.password);
    event.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username : this.state.username,
          password : this.state.password
        })
    };
    fetch('/api/users/', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ user : data.user }));
  }

  render() {
    return (
      <form className="input-group">
        <div className="Auth row">
          <div className="col-12 col-md-4 offset-md-4">
            <input
              className="form-control"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="Auth row">
          <div className="col-12 col-md-4 offset-md-4">
            <input
              className="form-control"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="Auth row">
          <div className="col-12 col-md-4 offset-md-4">
            <button
              className="btn"
              onClick={this.submitUserInfo}>Login</button>
          </div>
        </div>
      </form>

    );
  }
}

export default Auth;
