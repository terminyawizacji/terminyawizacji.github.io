import React from 'react';
import {monthNames} from './Const.js';

function Months(props) {

  const options = [];

  if (props.wholeYear) {
    options.push(<option value="">cały rok</option>);
  }

  for (let i = 0; i < 12; i++) {
    options.push(<option value={i}>{monthNames[i]}</option>)
  }

  return (
    <select class="form-control custom-select d-block mr-sm-2" style={{textAlignLast: 'center'}}
      value={props.selected} onChange={props.onChange}>
      {options}
    </select>
    );
}

export default Months;