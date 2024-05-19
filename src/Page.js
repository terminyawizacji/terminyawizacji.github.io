import React from "react";
import Header from "./Header";
import Main from "./Main";
import HeaderDay from "./fromday/HeaderDay";
import MainDay from "./fromday/MainDay";

/**
 * @deprecated
 */
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

export default Page;