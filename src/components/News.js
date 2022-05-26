import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps={
      country:'in',
      pageSize:10,
      category:""
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
    article= [ ]

      constructor(){
          super();
          this.state={
              article:this.article,
              loading:false,
              page:1,
              totalResults:0
          }
      }

      capital=str=>str.charAt(0).toUpperCase()+str.slice(1);

      fetchMoreData =  () => {
        this.setState({ page: this.state.page + 1 },async()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            article: this.state.article.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
   
      })
    };

      async update(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ article: parsedData.articles,totalResults:parsedData.totalResults })
        document.title="Flashnews - "+this.capital(this.props.category);
      }

    
      async componentDidMount(){
        console.log("didmount"+this.state.page)
        this.update();
    }
  
  render() {
     
    return (
      <>
       
                <h1 className="container" style={{marginTop: '5.3rem'}}>Today's Top {this.capital(this.props.category)} Headlines </h1>
                <InfiniteScroll
          dataLength={this.state.article.length}
         
          next={this.fetchMoreData}
          hasMore={this.state.article.length<this.state.totalResults}
        >        <div className="container ">
                <div className="row my-3">
                    {this.state.article.map((element)=>{
                          return  <div className="col-md-4" key={element.url}>
                              <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}
                               author={element.author} date={element.publishedAt} source={element.source.name}/>
                              </div>
                    })}
        
                </div></div>
         </InfiniteScroll>
        
        </>
    )
  }
}

export default News
