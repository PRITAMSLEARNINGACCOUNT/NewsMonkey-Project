import React, { Component } from "react";

export class Previous_Button extends Component {
  render() {
    let { Click } = this.props;
    return (
      <div className="Container" onClick={Click}>
        <div className="circle">
          <img
            src="https://cdn.hugeicons.com/icons/arrow-left-01-stroke-rounded.svg"
            alt="arrow-left-01"
          />
        </div>
      </div>
    );
  }
}

export default Previous_Button;
