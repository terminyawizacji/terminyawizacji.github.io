import React from 'react';
import PolishDayOff from './../utils/PolishDayOff.js';
import {daysOfWeek, monthShortNames} from '../Const';
import './../css/from-day.css';

function MainDay(props) {

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
    secondNoticeBody.push(<li>awizujemy powtórnie{secondNoticeUl}</li>);

    const returnAdmUl = [];
    if (returnAdmLi.length > 0) {
      returnAdmUl.push(<ul>{returnAdmLi}</ul>);
    }
    const returnAdmBody = [];
    returnAdmBody.push(<li>zwracamy administracyjne/podatkowe/ogólne{returnAdmUl}</li>);

    const returnCourtUl = [];
    if (returnCourtLi.length > 0) {
      returnCourtUl.push(<ul>{returnCourtLi}</ul>);
    }
    const returnCourtBody = [];
    returnCourtBody.push(<li>zwracamy cywilne/karne{returnCourtUl}</li>);
    content.push(<span>Dnia <strong>{format(end)}</strong></span>);
    content.push(<ul>{secondNoticeBody}
      <li>{returnAdmBody}</li>
      <li>{returnCourtBody}</li>
    </ul>);
  }

  return (
    <main role="main" className="flex-shrink-0">
      <div className="container fromDay">
        {content}
      </div>
    </main>
  );
}

export default MainDay;
