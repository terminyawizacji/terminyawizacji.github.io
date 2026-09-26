import React from "react";
import HeaderDay from "../fromday/HeaderDay";
import MainDay from "../fromday/MainDay";

class PageFromDay extends React.Component {

  constructor(props) {
    super(props);
    let d = new Date();
    if (props.match && props.match.params.date) {
      d = new Date(props.match.params.date);
    }
    this.state = {year: d.getFullYear(), month: d.getMonth(), day: d.getDate()};
    this.handleSubmitDay = this.handleSubmitDay.bind(this);
  }

  componentDidUpdate(prevProps) {
    const staraData = prevProps.match && prevProps.match.params.date;
    const nowaData = this.props.match && this.props.match.params.date;

    if (staraData !== nowaData) {
      let d = new Date();
      if (nowaData) {
        d = new Date(nowaData);
      }

      this.setState({
        year: d.getFullYear(),
        month: d.getMonth(),
        day: d.getDate()
      });
    }
  }

  iso(date) {
    return date.getFullYear() + '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
      ('0' + date.getDate()).slice(-2);
  }

  handleSubmitDay(state) {
    this.setState({year: state.year, month: state.month, day: state.day});
    let d = new Date(state.year, state.month, state.day);
    const {history} = this.props;
    history.push("/zdnia/" + this.iso(d));
  }

  render() {
    return <>
      <HeaderDay date={this.state} onSubmit={this.handleSubmitDay}/>
      <MainDay year={this.state.year} month={this.state.month} day={this.state.day}/>
    </>;
  }
}

export default PageFromDay;