import React from 'react';

export class LogInPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log('log in button clicked');
    this.setState(() => { loggedIn: true});
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div>
        <h1>Log In to Expensify</h1>
        <h5>~ enter your username and password to see your expenses ~</h5>
        <form onSubmit={this.onSubmit}>
          <p>
            <input type="text" placeholder="username" autoFocus></input>
          </p>
          <p>
            <input type="password" placeholder="password"></input>
          </p>
          <p>
            <button>LOG IN</button>
          </p>
        </form>
      </div>
    );
  };
};

export default LogInPage;