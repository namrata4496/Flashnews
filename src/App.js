
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
 pageSize=10
 apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        < Route exact path="/"  element={ <News key="general" country="in" apiKey={this.apiKey}  pageSize={this.pageSize} category=""/>}/>
       < Route exact path="/business"  element={ <News key="business" country="in" apiKey={this.apiKey}  pageSize={this.pageSize} category="business"/>}/>
       < Route exact path="/entertainment"  element={ <News key="entertainment" country="in" apiKey={this.apiKey}  pageSize={this.pageSize} category="entertainment"/>}/>
       < Route exact path="/general"  element={ <News key="general" country="in" apiKey={this.apiKey}  pageSize={this.pageSize} category="general"/>}/>
       < Route exact path="/health"  element={ <News key="health" country="in" apiKey={this.apiKey}  pageSize={this.pageSize} category="health"/>}/>
       < Route exact path="/science" element={ <News  key="science" country="in" apiKey={this.apiKey}  pageSize={this.pageSize} category="science"/>}/>
       < Route exact path="/sports"  element={ <News key="sports" country="in" apiKey={this.apiKey}  pageSize={this.pageSize} category="sports"/>}/>
       < Route exact path="/technology"  element={ <News key="technology" country="in" apiKey={this.apiKey}  pageSize={this.pageSize} category="technology"/>}/>
       


       </Routes>
        </Router>
      </div>
    )
  }
}
