import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sticky-footer-navbar.css';
import Header from './Header';
import HeaderDay from './fromday/HeaderDay';
import MainDay from './fromday/MainDay';
import Main from './Main';
import Footer from './Footer';

class Page extends React.Component {

  constructor(props) {
    super(props);
    let d = new Date();
    const url = window.location.href;
    const lastPart = url.substr(url.lastIndexOf('/') + 1);
    const lastPartArray = lastPart.split("#");
    if (lastPartArray.length > 1) {
      d = new Date(lastPartArray[1]);
    }
    this.state = {year: d.getFullYear(), month: d.getMonth(), day: d.getDate()};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDay = this.handleSubmitDay.bind(this);
  }

  handleSubmitDay(state) {
    this.setState({year: state.year, month: state.month, day: state.day});
  }

  handleSubmit(state) {
    this.setState({year: state.year, month: state.month});
  }

  render() {
    if (this.props.table) {
      return <>
        <Header onSubmit={this.handleSubmit}/>
        <Main year={this.state.year} month={this.state.month}/>
      </>;
    } else {
      return <>
        <HeaderDay date={this.state} onSubmit={this.handleSubmitDay}/>
        <MainDay year={this.state.year} month={this.state.month} day={this.state.day}/>
      </>;
    }
  }
}

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isTable: true, initDate: null};
    const url = window.location.href;
    const lastPart = url.substr(url.lastIndexOf('/') + 1);
    const lastPartArray = lastPart.split("#");
    if (lastPartArray[0] === "zdnia") {
      this.state = {isTable: false};
    } else {
      this.state = {isTable: true};
    }
  }

  render() {
    return <React.StrictMode>
      <Page table={this.state.isTable}/>
      <Footer/>
    </React.StrictMode>;
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('root'));