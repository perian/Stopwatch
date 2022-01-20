import React, { Component } from "react";

import "./clock.css"

export default class Clock extends Component {
  render() {
    const time = this.props.time;
    const ms = ("0" + Math.floor((time / 10) % 100)).slice(-2);
    const s = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    const m = ("0" + Math.floor((time / 60000) % 60)).slice(-2);

    return (
      <div className="clock">
         {m} : {s} : {ms}
      </div>
    )
  }
};
