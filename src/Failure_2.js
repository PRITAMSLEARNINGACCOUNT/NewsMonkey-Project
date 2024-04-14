import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import NewsComponent from "./Components/NewsComponent";
import "./App.css";
import PreviousButton from "./Components/Previous_Button";
import NextButton from "./Components/Next_Button";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      URL: "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf7fec402fd1484c9d2561c5a2ac1b94&page=1",
      News: [],
      Page_No: 2,
      Final_Results: 0,
      total_Results: 0,
      News_Shown: 20,
      Extra_News: 0,
      News_Shown_2: 0,
    };
    this.Fetch_News = this.Fetch_News.bind(this);
    this.Next_Click = this.Next_Click.bind(this);
    this.Previous_Click = this.Previous_Click.bind(this);
  }

  // this.state = {
  //   URL: "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf7fec402fd1484c9d2561c5a2ac1b94&page=1",
  //   News: [],
  //   Page_No: 2,
  //   total_Results:  100,
  // };

  async Fetch_News() {
    // console.log(this.state.Page_No);
    let Response = await fetch(this.state.URL);
    let JSON = await Response.json();
    this.setState({
      News: JSON.articles,
      total_Results: JSON.totalResults - this.state.News_Shown,
      Final_Results: JSON.totalResults,
    });
  }
  async Fetch_News_2() {
    // console.log(this.state.Page_No);
    let Response = await fetch(this.state.URL);
    let JSON = await Response.json();
    this.setState({
      News: JSON.articles,
    });
  }

  async Next_Click() {
    if (this.state.total_Results === 0) {
      return;
    }
    if (this.state.total_Results <= 20) {
      this.setState({
        News_Shown: this.state.News_Shown + this.state.total_Results,
        Extra_News: this.state.total_Results,
      });
      await this.setState({
        URL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf7fec402fd1484c9d2561c5a2ac1b94&page=${this.state.Page_No}`,
        Page_No: this.state.Page_No + 1,
      });
      await this.Fetch_News();
    } else if (this.state.total_Results > 20) {
      this.setState({
        News_Shown: this.state.News_Shown + 20,
      });
      await this.setState({
        URL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf7fec402fd1484c9d2561c5a2ac1b94&page=${this.state.Page_No}`,
        Page_No: this.state.Page_No + 1,
      });
      await this.Fetch_News();
    }

    console.log("Next Clicked & News Shown Is - ", this.state.News_Shown);
  }

  async Previous_Click() {
    if (this.state.News_Shown_2 === this.state.Final_Results) {
      return;
    }
    if (this.state.Extra_News !== 0) {
      await this.setState({
        News_Shown_2: this.state.Extra_News,
        total_Results: this.state.total_Results + this.state.Extra_News,
        News_Shown: this.state.News_Shown - this.state.Extra_News,
        Page_No: this.state.Page_No - 1,
        Extra_News: 0,
      });
      await this.setState({
        URL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf7fec402fd1484c9d2561c5a2ac1b94&page=${this.state.Page_No}`,
      });
      await this.Fetch_News_2();
    } else {
      await this.setState({
        News_Shown_2: this.state.News_Shown_2 + 20,
      });
      await this.setState({
        total_Results: this.state.total_Results + this.state.News_Shown_2,
        News_Shown: this.state.News_Shown - this.state.News_Shown_2,
        Page_No: this.state.Page_No - 1,
      });
      await this.setState({
        URL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf7fec402fd1484c9d2561c5a2ac1b94&page=${this.state.Page_No}`,
      });
      await this.Fetch_News_2();
    }
  }

  async componentDidMount() {
    await this.Fetch_News();
  }
  render() {
    return (
      <>
        <NavBar />
        <NewsComponent News={this.state.News} />
        <div className="container Buttons" id="buttons">
          <PreviousButton Click={this.Previous_Click} />
          <NextButton Click={this.Next_Click} />
        </div>
      </>
    );
  }
}

export default App;
