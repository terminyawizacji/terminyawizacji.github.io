import React from 'react';
import PolishDayOff from './utils/PolishDayOff.js';
import {daysOfWeek, monthNames, monthShortNames} from './Const.js';
import './css/table.css';
import {NavLink} from "react-router-dom";

function Table(props) {

  function longName(month) {
    return monthNames[month];
  }

  function link(date) {
    return "/zdnia/" + iso(date);
  }

  function iso(date) {
    return date.getFullYear() + '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
      ('0' + date.getDate()).slice(-2);
  }

  function format(date) {
    return daysOfWeek[date.getDay()] + ", "
      + date.getDate() + " "
      + monthShortNames[date.getMonth()] + " "
      + date.getFullYear();
  }

  const rows = [];
  const year = props.year;
  const month = props.month;
  let date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    const pdo = PolishDayOff.of(date);
    if (!pdo.isDayOff()) {
      const secondNotice = pdo.findWorkingDayAfterDays(7);
      const secondNoticeR = PolishDayOff.of(secondNotice).findWorkingDayAfterDays(1);
      // var secondNoticeR = pdo.findWorkingDayAfterDays(8);
      const admStorage = pdo.findWorkingDayAfterDays(14);
      const admReturn = PolishDayOff.of(admStorage).findWorkingDayAfterDays(1);
      const courtStorage = PolishDayOff.of(secondNoticeR).findWorkingDayAfterDays(7);
      const courtReturn = PolishDayOff.of(courtStorage).findWorkingDayAfterDays(1);
      rows.push(<tr>
        <td><NavLink to={link(date)}>{format(date)}</NavLink></td>
        <td><NavLink to={link(secondNoticeR)}>{format(secondNoticeR)}</NavLink></td>
        <td><NavLink to={link(admStorage)}>{format(admStorage)}</NavLink></td>
        <td><NavLink to={link(admReturn)}>{format(admReturn)}</NavLink></td>
        <td><NavLink to={link((courtStorage))}>{format(courtStorage)}</NavLink></td>
        <td><NavLink to={link(courtReturn)}>{format(courtReturn)}</NavLink></td>
      </tr>);
    }
    date.setDate(date.getDate() + 1);
  }

  return (
    <div class="pagebreak">
      <h2 class="mt-5">{longName(props.month)} {props.year}</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
          <tr>
            <th width="16.6%"></th>
            <th width="16.6%">Wszystkie</th>
            <th colspan="2" width="33.3%">Administracyjne/Podatkowe/Ogólne</th>
            <th colspan="2" width="33.3%">Cywilne/Karne</th>
          </tr>
          <tr>
            <th>I awizo</th>
            <th>II awizo</th>
            <th>Przechowywanie</th>
            <th>Zwrot</th>
            <th>Przechowywanie</th>
            <th>Zwrot</th>
          </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
