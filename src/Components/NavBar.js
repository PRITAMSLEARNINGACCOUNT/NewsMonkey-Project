import React, { Component } from "react";
import DropDown from "./Drop_Down";
import { Link } from "react-router-dom";
export class NavBar extends Component {
  render() {
    let { Dark_Mode, Dark_Mode_Text, Color, navbar_bg_color, News_Fetching } =
      this.props;
    return (
      <>
        <nav
          className={`navbar navbar-expand-lg fixed-top navbar-${navbar_bg_color} bg-${navbar_bg_color}`}
        >
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link style={{ color: Color }} className="nav-link" to="/">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <DropDown Style={Color} Fetch={News_Fetching} />
              </li>
            </ul>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                onChange={Dark_Mode}
              />
              <label
                className="custom-control-label"
                htmlFor="customSwitch1"
                style={{ color: Color }}
              >
                {Dark_Mode_Text}
              </label>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
