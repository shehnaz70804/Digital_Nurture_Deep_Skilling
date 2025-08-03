import React, { Component } from 'react';
import Guest from './Guest';
import User from './User';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  loginToggle = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  };

  render() {
    const { isLoggedIn } = this.state;
    let content;

    if (isLoggedIn) {
      content = <User />;
    } else {
      content = <Guest />;
    }

    return (
      <div>
        <button onClick={this.loginToggle}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        <hr />
        {content}
      </div>
    );
  }
}

export default Main;
