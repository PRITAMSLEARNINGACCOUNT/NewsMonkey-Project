import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Drop_Down extends Component {
  render() {
    let { Style } = this.props;
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          style={{ color: Style }}
        >
          Category
        </button>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/Sports">
            Sports
          </Link>
          <Link className="dropdown-item" to="/Science">
            Science
          </Link>
          <Link className="dropdown-item" to="/Entertainment">
            Entertainment
          </Link>
          <Link className="dropdown-item" to="/Technology">
            Technology
          </Link>
          <Link className="dropdown-item" to="/Business">
          Business
          </Link>
          <Link className="dropdown-item" to="/Health">
          Health
          </Link>
       
        </div>
      </div>
    );
  }
}

export default Drop_Down;
