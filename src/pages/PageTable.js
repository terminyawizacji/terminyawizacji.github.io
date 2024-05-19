import React from "react";
import Header from "../Header";
import Main from "../Main";

class PageTable extends React.Component {

  constructor(props) {
    super(props);
    let d = new Date();
    this.state = {year: d.getFullYear(), month: d.getMonth()};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(state) {
    this.setState({year: state.year, month: state.month});
  }

  render() {
    return <>
      <Header onSubmit={this.handleSubmit}/>
      <Main year={this.state.year} month={this.state.month}/>
    </>;
  }
}

export default PageTable;