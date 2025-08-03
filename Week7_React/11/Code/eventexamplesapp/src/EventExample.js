import React, { Component } from 'react';

class EventExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: '',
      rupees: '',
      euros: ''
    };
  }

  // Function to increment counter
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello();
  };

  // Say Hello with a message
  sayHello = () => {
    alert("Hello! You clicked the increment button!");
  };

  // Function to decrement counter
  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  // Function to say welcome
  sayWelcome = (text) => {
    alert(`Welcome Message: ${text}`);
  };

  // Synthetic event handler
  handleClick = (event) => {
    alert("I was clicked using Synthetic Event!");
  };

  // Currency converter: Rupees to Euros
  handleRupeesChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  convertToEuro = () => {
    const rupees = parseFloat(this.state.rupees);
    if (!isNaN(rupees)) {
      const euros = (rupees * 0.011).toFixed(2); // Example conversion rate
      this.setState({ euros });
    }
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>React Event Handling Example</h1>

        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome('Welcome to React Events!')}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handleClick}>Synthetic Event: OnPress</button>

        <br /><br />

        <h3>Currency Converter (INR → EUR)</h3>
        <input
          type="text"
          placeholder="Enter amount in Rupees"
          value={this.state.rupees}
          onChange={this.handleRupeesChange}
        />
        <button onClick={this.convertToEuro}>Convert</button>
        <p>Converted: € {this.state.euros}</p>
      </div>
    );
  }
}

export default EventExample;
