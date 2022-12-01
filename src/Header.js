import React from 'react';
import Months from './Months';
import Year from './Year';
import {NavLink} from "react-router-dom";

class Header extends React.Component {

  constructor(props) {
    super(props);
    const d = new Date();
    this.state = {year: d.getFullYear(), month: d.getMonth(), valid: true};
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleYearChange(event) {
    this.setState({year: event.target.value});
  }

  handleMonthChange(event) {
    this.setState({month: event.target.value});
  }

  handleSubmit(event) {
    this.setState({valid: true});
    if (this.validate(this.state.year)) {
      this.props.onSubmit(this.state);
    } else {
      this.setState({valid: false});
    }
    event.preventDefault();
  }

  validate(year) {
    year = parseInt(year, 10);
    if (typeof year === 'number' && year >= 2000 && year <= 3000) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <header>
        <nav class="navbar navbar-expand navbar-dark fixed-top bg-dark">
          <NavLink className="navbar-brand" to="/">Terminy awizacji</NavLink>
          {/*<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          */}
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NavLink className="nav-link" to="/zdnia">Z dnia</NavLink>
              </li>
            </ul>

            <form class="form-inline mt-2 mt-md-0" onSubmit={this.handleSubmit}>
              <Months selected={this.state.month} onChange={this.handleMonthChange}
                      wholeYear={true}/>
              <Year value={this.state.year} onChange={this.handleYearChange}
                validation={this.state.valid}/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Wybierz</button>
            </form>
          </div>
        </nav>
      </header>
      );
  }
}
export default Header;