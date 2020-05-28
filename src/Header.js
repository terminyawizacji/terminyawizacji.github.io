import React from 'react';
import Months from './Months';

class Header extends React.Component {

  constructor(props) {
    super(props);
    var d = new Date();
    this.state = {year: d.getFullYear(), month: d.getMonth()};
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
    if (this.validate(this.state.year)) {
      this.props.onSubmit(this.state);
    }
    event.preventDefault();
  }

  validate(year) {
    year = parseInt(year, 10);
    if(typeof year === 'number' && year >= 2000 && year <= 3000) {
      return true;
    }
    alert('Rok musi być liczbą między 2000 a 3000');
    return false;
  }

  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="#">Terminy awizacji</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
          {/*
              <li class="nav-item">
                <a class="nav-link" href="#">Zgłoś błąd</a>
              </li>
          */}
            </ul>

            <form class="form-inline mt-2 mt-md-0" onSubmit={this.handleSubmit}>
              <Months selected={this.state.month} onChange={this.handleMonthChange}/>
              <input class="form-control mr-sm-2" type="text" value={this.state.year} onChange={this.handleYearChange}
              placeholder="Rok" aria-label="Rok" style={{width: '50px'}} maxlength="4" required=""/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Wybierz</button>
            </form>
          </div>
        </nav>
      </header>
      );
  }
}
export default Header;