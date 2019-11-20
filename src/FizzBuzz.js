import React from 'react';
import logo from './logo.svg';
import './FizzBuzz.css';

class FizzBuzz extends React.Component {

state = {
  fizzBuzz: '',
  counter: 1
}

isFizzBuzz = () => {
  const i = this.state.counter;
  let fb = this.state.fizzBuzz;

  if (i % 3 === 0) {fb += 'Fizz, '}
  if (i % 5 === 0) {fb += 'Buzz, '}
  if (i % 3 && i % 5) {fb += `${i}, `}

  this.setState({
    fizzBuzz: fb
  })
}

increment = () => {
  this.setState(() => ({ counter: this.state.counter + 1 }));
  this.isFizzBuzz();
};

decrement = () => {
  this.setState(() => ({ counter: this.state.counter - 1  }));
  this.isFizzBuzz();
};

  render() {
    return (
      <div className="FizzBuzz">
        <header className="FizzBuzz-header">
          <p>Click on buttons to create FizzBuzz</p>
            <button type='button' onClick={this.increment}>+</button>
            <button type='button' onClick={this.decrement}>-</button>
            {this.state.fizzBuzz}
        </header>
      </div>
    );
  }
}

export default FizzBuzz;
