import React, { Component } from "react";

import "./controls.css";

export default class Controls extends Component {
  render() {
    const {
      isActive,
      onMainBtnClick,
      onWaitBtnClick,
      onResetBtnClick,
    } = this.props;

    return(
      <div className="controls">
        <button 
          className="button"
          type="button"
          id="main-button"
          onClick={onMainBtnClick}
        >
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button 
          className="button"
          type="button"
          id="wait-button"
          onClick={onWaitBtnClick}
        >
          Wait
        </button>
        <button 
          className="button"
          type="button"
          id="reset-button"
          onClick={onResetBtnClick}
        >
          Reset
        </button>
      </div>
    );
  };
};
