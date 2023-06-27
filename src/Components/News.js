import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: `in`,
    category: `general`,
    pageSize: 10,
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }

  capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `Flash News - ${this.capitalizeFirstLetter(this.props.category)}`
  }

  async updateNews(){
    this.props.setProgress(10)
    let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(20)
    this.setState({loading: true});
    let data = await fetch(api);
    this.props.setProgress(40)
    let parsedData = await data.json();
    this.props.setProgress(80)
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews();
  }
  
  handlePrevClick = async () => {
    this.setState({page: this.state.page - 1})
    this.updateNews();
  }
  
  handleNextClick = async () => {
    this.setState({page: this.state.page + 1})
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((e) => {
            return (
              <div className="col-md-4" key={e.url}>
                 <NewsItem
                  title={e.title}
                  description={e.description}
                  imageUrl={
                    e.urlToImage
                  }
                  newsUrl={e.url}
                  author={e.author}
                  date={e.publishedAt}
                  source={e.source}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-around">
          <button disabled={this.state.page<=1} type='button' className="btn btn-primary" onClick={this.handlePrevClick}>&lArr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className="btn btn-primary" onClick={this.handleNextClick}>Next &rArr;</button>
        </div>
      </div>
    );
  }
}

export default News;
