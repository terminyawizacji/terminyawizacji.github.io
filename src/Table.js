import React from 'react';
import PolishDayOff from './utils/PolishDayOff.js';
import {monthNames, daysOfWeek, monthShortNames} from './Const.js';
import './css/table.css';

function Table(props) {

  function longName(month) {
    return monthNames[month];
  }

  function format(date){
    return daysOfWeek[date.getDay()] + ", "
      + date.getDate() + " "
      + monthShortNames[date.getMonth()] + " "
      + date.getFullYear();
  }

  const rows = [];
  var year = props.year;
  var month = props.month;
  var date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    var pdo = PolishDayOff.of(date);
    if(!pdo.isDayOff()) {
      var secondNotice = pdo.findWorkingDayAfterDays(7);
      var secondNoticeR = PolishDayOff.of(secondNotice).findWorkingDayAfterDays(1);
      var admStorage = pdo.findWorkingDayAfterDays(14);
      var admReturn = PolishDayOff.of(admStorage).findWorkingDayAfterDays(1);
      var courtStorage = PolishDayOff.of(secondNoticeR).findWorkingDayAfterDays(7);
      var courtReturn = PolishDayOff.of(courtStorage).findWorkingDayAfterDays(1);
      rows.push(<tr>
        <td>{format(date)}</td>
        <td>{format(secondNoticeR)}</td>
        <td>{format(admStorage)}</td>
        <td>{format(admReturn)}</td>
        <td>{format(courtStorage)}</td>
        <td>{format(courtReturn)}</td>
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
              <th colspan="2" width="33.3%">Administracyjne/Podatkowe/Pozostałe</th>
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
