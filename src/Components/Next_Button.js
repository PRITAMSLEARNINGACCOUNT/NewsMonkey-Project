import React, { Component } from "react";
export class Next_Button extends Component {
  render() {
    let { Click } = this.props;
    return (
      <div className="Container">
        <div className="circle" onClick={Click}>
          <img
            src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-rounded.svg"
            alt="arrow-right-01"
          />
        </div>
      </div>
    );
  }
}

export default Next_Button;
