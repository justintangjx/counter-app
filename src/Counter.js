import React, { Component } from "react";
import "./Counter.css";
import DownvoteButton from "./Downvote";
import UpvoteButton from "./Upvote";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  render() {
    return (
      <div id="main-counter">
        <DownvoteButton subtract={this.decreaseCount} />
        {this.state.count}
        <UpvoteButton add={this.increaseCount}>+</UpvoteButton>
      </div>
    );
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseCount() {
    this.setState({ count: this.state.count - 1 });
  }
}

export default Counter;
