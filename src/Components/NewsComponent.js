import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PreviousButton from "./Previous_Button";
import NextButton from "./Next_Button";
export class NewsComponent extends Component {
  constructor() {
    super();
    this.state = {
      URL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=1`,
      News: [],
      Page_No: 1,
      total_Results: 100,
    };
    this.Fetch_News = this.Fetch_News.bind(this);
    this.Next_Click = this.Next_Click.bind(this);
    this.Previous_Click = this.Previous_Click.bind(this);
  }
  async Fetch_News() {
    let Response = await fetch(this.state.URL);
    let JSON = await Response.json();
    this.setState({
      News: JSON.articles,
      total_Results: JSON.totalResults,
    });
  }
  async Next_Click() {
    if (this.state.Page_No < Math.ceil(this.state.total_Results / 20)) {
      await this.setState({
        Page_No: this.state.Page_No + 1,
      });
      await this.setState({
        URL: `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.Category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.Page_No}`,
      });
      await this.Fetch_News();
    } else {
      alert("No Extra Page Exists");
    }
  }
  async Previous_Click() {
    if (this.state.Page_No === 1) {
      alert("This Is The First Page");
    } else {
      await this.setState({
        Page_No: this.state.Page_No - 1,
      });
      await this.setState({
        URL: `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.Category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.Page_No}`,
      });
      await this.Fetch_News();
    }
  }
  async componentDidMount() {
    await this.setState({
      URL: `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.Category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.Page_No}`,
    });
    await this.Fetch_News();
  }
  Capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }
  render() {
    let { Color, BackGround_Color } = this.props;
    return (
      <>
        <div className="container">
          <h1>Top Headlines On {this.Capitalize(this.props.Category)}</h1>
          <div className="my-5 Custom-Design">
            {this.state.News.map((element) => {
              if (element.urlToImage != null) {
                return (
                  <NewsItem
                    COLOR={Color}
                    Bg_Color={BackGround_Color}
                    key={element.title}
                    Title={element.title}
                    Description={element.description}
                    ImageURL={element.urlToImage}
                    NewsURL={element.url}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="container Buttons" id="buttons">
          <PreviousButton Click={this.Previous_Click} />
          <NextButton Click={this.Next_Click} />
        </div>
      </>
    );
  }
}
export default NewsComponent;
