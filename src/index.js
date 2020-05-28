import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sticky-footer-navbar.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    var d = new Date();
    this.state = {year: d.getFullYear(), month: d.getMonth()};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(state) {
    this.setState({year: state.year, month: state.month});
  }

  render() {
    return <React.StrictMode>
      <Header onSubmit={this.handleSubmit}/>
      <Main year={this.state.year} month={this.state.month}/>
      <Footer />
    </React.StrictMode>;
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('root'));