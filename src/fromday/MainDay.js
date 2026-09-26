import React from 'react';
import PolishDayOff from './../utils/PolishDayOff.js';
import {daysOfWeek, monthShortNames} from '../Const';
import './../css/from-day.css';
import {NavLink} from "react-router-dom";

function MainDay(props) {

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

  const content = [];
  // const year = parseInt(props.year, 10);
  // const month = parseInt(props.month, 10);
  const end = new Date(props.year, props.month, props.day);
  if (PolishDayOff.of(end).isDayOff()) {
    content.push(<span><strong>{format(end)}</strong> jest dniem wolnym od pracy.</span>)
  } else {
    let start = new Date(end.getTime());
    const secondNoticeLi = [];
    const returnAdmLi = [];
    const returnCourtLi = [];
    start.setDate(start.getDate() - 30);
    while (start.valueOf() !== end.valueOf()) {
      const pdo = PolishDayOff.of(start);
      if (!pdo.isDayOff()) {
        const secondNotice = pdo.findWorkingDayAfterDays(7);
        const secondNoticeR = PolishDayOff.of(secondNotice).findWorkingDayAfterDays(1);
        const admStorage = pdo.findWorkingDayAfterDays(14);
        const admReturn = PolishDayOff.of(admStorage).findWorkingDayAfterDays(1);
        const courtStorage = PolishDayOff.of(secondNoticeR).findWorkingDayAfterDays(7);
        const courtReturn = PolishDayOff.of(courtStorage).findWorkingDayAfterDays(1);
        if (secondNoticeR.valueOf() === end.valueOf()) {
          secondNoticeLi.push(<li>{format(start)}</li>);
        }
        if (admReturn.valueOf() === end.valueOf()) {
          returnAdmLi.push(<li>{format(start)}</li>);
        }
        if (courtReturn.valueOf() === end.valueOf()) {
          returnCourtLi.push(<li>{format(start)}</li>);
        }
      }
      start.setDate(start.getDate() + 1);
    }
    const secondNoticeUl = [];
    if (secondNoticeLi.length > 0) {
      secondNoticeUl.push(<ul>{secondNoticeLi}</ul>);
    }
    const secondNoticeBody = [];
    secondNoticeBody.push(<li>awizujemy
      powtórnie {secondNoticeLi.length > 1 ? 'z dni' : 'z dnia'}:{secondNoticeUl}</li>);

    const returnAdmUl = [];
    if (returnAdmLi.length > 0) {
      returnAdmUl.push(<ul>{returnAdmLi}</ul>);
    }
    const returnAdmBody = [];
    returnAdmBody.push(<li>zwracamy
      administracyjne/podatkowe/ogólne {returnAdmLi.length > 1 ? 'z dni' : 'z dnia'}:{returnAdmUl}</li>);

    const returnCourtUl = [];
    if (returnCourtLi.length > 0) {
      returnCourtUl.push(<ul>{returnCourtLi}</ul>);
    }
    const returnCourtBody = [];
    returnCourtBody.push(<li>zwracamy
      cywilne/karne {returnCourtLi.length > 1 ? 'z dni' : 'z dnia'}:{returnCourtUl}</li>);
    content.push(<span>Dnia <strong>{format(end)}</strong></span>);
    content.push(<ul>{secondNoticeBody}
      <li>{returnAdmBody}</li>
      <li>{returnCourtBody}</li>
    </ul>);
  }

  const table = [];
  const s = new Date(props.year, props.month, props.day);
  s.setDate(s.getDate() - 14);
  const e = new Date(props.year, props.month, props.day);
  e.setDate(e.getDate() + 14);
  while (s.valueOf() !== e.valueOf()) {
    const pdoTable = PolishDayOff.of(s);
    if (pdoTable.isDayOff()) {
      s.setDate(s.getDate() + 1);
      continue;
    }
    table.push(<tr>
      <td className={s.valueOf() === end.valueOf() ? 'active-day' : ''}><NavLink to={link(s)}>{format(s)}</NavLink></td>
    </tr>);
    s.setDate(s.getDate() + 1);
  }

  return (
    <main role="main" className="flex-shrink-0">
      <div className="container fromDay">
        <table>
          <tr>
            <td valign={"top"}>
              <table className={"table table-striped table-sm"}>
                <thead>
                <tr>
                  <th>Wybierz dzień:</th>
                </tr>
                </thead>
                <tbody>
                {table}
                </tbody>
              </table>
            </td>
            <td width={20}>

            </td>
            <td valign={"top"}>
              {content}
            </td>
          </tr>
        </table>
      </div>
    </main>
  );
}

export default MainDay;
