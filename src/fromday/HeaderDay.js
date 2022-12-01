import React from 'react';
import Months from './../Months';
import Year from './../Year';
import Day from './Day';
import {NavLink} from "react-router-dom";

class HeaderDay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      year: props.date.year,
      month: props.date.month,
      day: props.date.day,
      updateFromProps: true,
      validYear: true,
      validDay: true
    };
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleSubmitDay = this.handleSubmitDay.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    this.update();
  }

  update() {
    if (this.props.date && this.state.updateFromProps) {
      if (this.props.date.year !== this.state.year
        || this.props.date.month !== this.state.month
        || this.props.date.day !== this.state.day) {
        this.setState({year: this.props.date.year, month: this.props.date.month, day: this.props.date.day})
      }
    }
  }

  handleDayChange(event) {
    this.setState({day: event.target.value, updateFromProps: false});
  }

  handleYearChange(event) {
    this.setState({year: event.target.value, updateFromProps: false});
  }

  handleMonthChange(event) {
    this.setState({month: event.target.value, updateFromProps: false});
  }

  handleSubmitDay(event) {
    this.setState({validYear: true});
    this.setState({validDay: true});
    let validY = true;
    let validD = true;
    if (!this.validateYear(this.state.year)) {
      this.setState({validYear: false});
      validY = false;
    }
    if (!this.validateDay(this.state.day, this.state.month, this.state.year)) {
      this.setState({validDay: false});
      validD = false;
    }
    if (validD && validY) {
      this.props.onSubmit(this.state);
    }
    this.setState({updateFromProps: true});
    event.preventDefault();
  }

  validateYear(year) {
    year = parseInt(year, 10);
    if (typeof year === 'number' && year >= 2000 && year <= 3000) {
      return true;
    }
    return false;
  }

  validateDay(day, month, year) {
    year = parseInt(year, 10);
    month = parseInt(month, 10);
    day = parseInt(day, 10);
    const d = new Date(year, month, day);
    return d.getFullYear() === year && d.getMonth() === month && d.getDate() === day;
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
              <li class="nav-item active">
                <NavLink className="nav-link" to="/zdnia">Z dnia</NavLink>
              </li>
            </ul>

            <form class="form-inline mt-2 mt-md-0" onSubmit={this.handleSubmitDay}>
              <Day value={this.state.day} onChange={this.handleDayChange}
                   validation={this.state.validDay}/>
              <Months selected={this.state.month} onChange={this.handleMonthChange}
                      wholeYear={false}/>
              <Year value={this.state.year} onChange={this.handleYearChange}
                    validation={this.state.validYear}/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Wybierz</button>
            </form>
          </div>
        </nav>
      </header>
    );
  }

}

export default HeaderDay;