import React from 'react';
import {monthNames} from './Const.js';

function Months(props) {

  const options = [];

  for (var i = 0; i < 12; i++) {
    options.push(<option value={i}>{monthNames[i]}</option>)
  }

  return (
    <select class="form-control custom-select d-block mr-sm-2" value={props.selected} onChange={props.onChange}>
      <option value="">cały rok</option>
      {options}
    </select>
    );
}

export default Months;