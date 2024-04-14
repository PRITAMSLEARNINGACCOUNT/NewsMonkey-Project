import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import NewsComponent from "./Components/NewsComponent";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      Color: "black",
      Dark_Mode_Text: "Enable Dark Mode",
      BackGround_Color: "white",
      navbar_bg_color: "light",
    };

    this.Dark_Mode = this.Dark_Mode.bind(this);
  }

  async Dark_Mode() {
    if (this.state.Dark_Mode_Text === "Enable Dark Mode") {
      await this.setState({
        BackGround_Color: "#4b3e3e",
        Color: "white",
        Dark_Mode_Text: "Enable Light Mode",
        navbar_bg_color: "dark",
      });
      document.body.style.backgroundColor = this.state.BackGround_Color;
      document.body.style.color = this.state.Color;
    } else {
      await this.setState({
        BackGround_Color: "white",
        Color: "black",
        Dark_Mode_Text: "Enable Dark Mode",
        navbar_bg_color: "light",
      });
      document.body.style.backgroundColor = this.state.BackGround_Color;
      document.body.style.color = this.state.Color;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <NavBar
            Dark_Mode={this.Dark_Mode}
            Dark_Mode_Text={this.state.Dark_Mode_Text}
            Color={this.state.Color}
            BackGround_Color={this.state.BackGround_Color}
            navbar_bg_color={this.state.navbar_bg_color}
            News_Fetching={this.Fetch_News}
          />
          <Routes>
            <Route
              path="/Technology"
              element={
                <NewsComponent
                  key={"Technology"}
                  Category={"technology"}
                  Color={this.state.Color}
                  BackGround_Color={this.state.BackGround_Color}
                />
              }
            />
            <Route
              path="/Health"
              element={
                <NewsComponent
                  key={"Health"}
                  Category={"health"}
                  Color={this.state.Color}
                  BackGround_Color={this.state.BackGround_Color}
                />
              }
            />
            <Route
              path="/"
              element={
                <NewsComponent
                  key={"general"}
                  Category={"general"}
                  Color={this.state.Color}
                  BackGround_Color={this.state.BackGround_Color}
                />
              }
            />
            <Route
              path="/Business"
              element={
                <NewsComponent
                  key={"Business"}
                  Category={"business"}
                  Color={this.state.Color}
                  BackGround_Color={this.state.BackGround_Color}
                />
              }
            />
            <Route
              path="/Sports"
              element={
                <NewsComponent
                  key={"Sports"}
                  Category={"sports"}
                  Color={this.state.Color}
                  BackGround_Color={this.state.BackGround_Color}
                />
              }
            />
            <Route
              path="/Science"
              element={
                <NewsComponent
                  key={"Science"}
                  Category={"science"}
                  Color={this.state.Color}
                  BackGround_Color={this.state.BackGround_Color}
                />
              }
            />
            <Route
              path="/Entertainment"
              element={
                <NewsComponent
                  key={"Entertainment"}
                  Category={"entertainment"}
                  Color={this.state.Color}
                  BackGround_Color={this.state.BackGround_Color}
                />
              }
            />
          </Routes>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
