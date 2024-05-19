import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sticky-footer-navbar.css';
import Footer from './Footer';
import PageTable from "./pages/PageTable";
import PageFromDay from "./pages/PageFromDay";

class Welcome extends React.Component {

  render() {
    return <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <PageTable/>
          </Route>
          <Route exact path="/zdnia"
                 render={(props) => (
                   <PageFromDay {...props} />
                 )}/>
          <Route path="/zdnia/:date"
                 render={(props) => (
                   <PageFromDay {...props} />
                 )}/>
        </Switch>
      </Router>
      <Footer/>
    </React.StrictMode>;
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('root'));