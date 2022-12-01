import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
    if (props.match && props.match.params.date) {
      d = new Date(props.match.params.date);
    }
    this.state = {year: d.getFullYear(), month: d.getMonth(), day: d.getDate(), update: true};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDay = this.handleSubmitDay.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    this.update();
  }

  update() {
    if (this.props.match && this.props.match.params.date) {
      let tmp = new Date(this.state.year, this.state.month, this.state.day);
      if (this.props.match.params.date !== this.iso(tmp)) {
        // if (!this.state.year) {
        let d = new Date(this.props.match.params.date);
        this.setState({year: d.getFullYear(), month: d.getMonth(), day: d.getDate(), update: true})
      }
    } else {
      let d = new Date(this.state.year, this.state.month, this.state.day);
      let now = new Date();
      if (this.iso(now) !== this.iso(d) && this.state.update) {
        // if (!this.state.year) {
        this.setState({year: now.getFullYear(), month: now.getMonth(), day: now.getDate()})
      }
    }
  }

  iso(date) {
    return date.getFullYear() + '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
      ('0' + date.getDate()).slice(-2);
  }

  handleSubmitDay(state) {
    this.setState({update: true});
    let d = new Date(state.year, state.month, state.day);
    const {history} = this.props;
    history.push("/zdnia/" + this.iso(d));
  }

  handleSubmit(state) {
    this.setState({year: state.year, month: state.month, update: false});
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

  render() {
    return <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Page table={true}/>
          </Route>
          <Route exact path="/zdnia"
                 render={(props) => (
                   <Page {...props} table={false}/>
                 )}/>
          <Route path="/zdnia/:date"
                 render={(props) => (
                   <Page {...props} table={false}/>
                 )}/>
        </Switch>
      </Router>
      <Footer/>
    </React.StrictMode>;
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('root'));