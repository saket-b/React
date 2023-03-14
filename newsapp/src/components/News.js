import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

      static defaultProps={
        country :"in",
        pageSize:8,
        category: "sports",
      }  
      
      PropTypes ={
        country: PropTypes.string,
        page : PropTypes.number,
        category : PropTypes.string
      }



  constructor() {
    super();
    // console.log("I am inside news constructor");
    this.state = {
      articles: [],
      loading: false,
      page :1

    }
  }

  async componentDidMount(){

    let url_api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab1d039580ff49fb96aca13fc6998a05&page=${this.state.page}
    &pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url_api);
    
    let parsedData = await data.json();
    console.log(parsedData.totalResults);
    this.setState({
      articles: parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false

    })
  }

  handleNextPage = async () =>{
    console.log("next = page = ", this.state.page);

  
    {
      
      let url_api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab1d039580ff49fb96aca13fc6998a05&page=
      ${this.state.page +1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url_api);
      
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading :false,
      })
    }

  }
  handlePrevPage = async () =>{
    console.log("prev = page = ", this.state.page);

    let url_api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab1d039580ff49fb96aca13fc6998a05&page=
    ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url_api);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading : false,
    })

  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News Monkey - Top HeadLines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              {/* {console.log("url =",element.urlToImage)} */}
              <NewsItems title={element.title} description={element.description} imageUrl={ element.urlToImage?element.urlToImage:"http://www.nasa.gov/sites/default/files/thumbnails/image/artemis_ii_graphics.jpg"} newsUrl ={ element.url}/>
            </div>

          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled = {this.state.page <= 1} className="btn btn-dark " onClick={this.handlePrevPage} >&larr; Previous</button>
        <button disabled = {this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextPage}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}
