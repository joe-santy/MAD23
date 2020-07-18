import React from 'react';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitInfo(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };

    fetch('/api/admin', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({}));
  }

  render() {
    return (
      <div className="Admin row">
        <p>Admin</p>
      </div>
    );
  }
}

export default Admin;
