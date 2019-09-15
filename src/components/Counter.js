import React, { Component } from 'react';
import Count from './Count';
import PickLuckyNo from './PickLuckyNo';

class Counter extends Component {
  state = {
    counts: [30, 40, 50],
    luckyNo: null
  };

  generateHandler = () => {
    this.setState({
      counts: this.state.counts.map(() => Math.floor(Math.random() * 100) + 1)
    });
  };

  luckyNoHandler = () => {
    this.setState({
      luckyNo: this.state.counts[
        Math.floor(Math.random() * this.state.counts.length)
      ]
    });
  };

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          {this.state.counts.map((count, index) => (
            <Count key={index} count={count} />
          ))}

          <div className="col-md-12 text-center">
            <button className="btn btn-success" onClick={this.generateHandler}>
              Generate
            </button>
          </div>

          <div className="col-md-12 text-center">
            <PickLuckyNo
              luckyNo={this.state.luckyNo}
              luckyNoHandler={this.luckyNoHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
