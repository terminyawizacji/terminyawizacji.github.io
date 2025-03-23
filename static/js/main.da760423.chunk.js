(this["webpackJsonpnotice-date"]=this["webpackJsonpnotice-date"]||[]).push([[0],{209:function(e,t,a){},211:function(e){e.exports=JSON.parse('{"name":"notice-date","homepage":"https://terminyawizacji.github.io/","version":"0.1.2","private":true,"dependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","bootstrap":"^4.5.0","react":"^16.13.1","react-app-polyfill":"^1.0.6","react-bootstrap":"^1.0.1","react-dom":"^16.13.1","react-router-dom":"^5.2.0","react-scripts":"3.4.1","serve":"^11.3.1"},"scripts":{"git-info-local":"echo export default \\"{\\\\\\"logMessage\\\\\\": \\\\\\"$(git rev-parse --short HEAD)\\\\\\"}\\"  > src/_git_commit.js","git-info-heroku":"echo export default \\"{\\\\\\"logMessage\\\\\\": \\\\\\"$(echo $SOURCE_VERSION | cut -c1-7)\\\\\\"}\\"  > src/_git_commit_heroku.js","git-info":"npm run git-info-local; npm run git-info-heroku","dev":"npm run git-info; react-scripts start","start":"serve -s build","build":"npm run git-info; react-scripts build","test":"react-scripts test","eject":"react-scripts eject","heroku-postbuild":"npm run build","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":["ie >= 9",">0.2%","not dead","not op_mini all"],"development":["ie >= 9","last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^4.0.0"}}')},221:function(e,t,a){e.exports=a(470)},460:function(e,t,a){},468:function(e,t,a){},469:function(e,t,a){},470:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(19),i=a(36),s=a(35),l=(a(222),a(162),a(272),a(0)),o=a.n(l),u=a(52),c=a.n(u),h=a(31),d=a(22),y=(a(459),a(460),a(211)),f="6fd2cda",m="1234567";var v=function(){return o.a.createElement("footer",{className:"footer mt-auto py-3"},o.a.createElement("div",{className:"container"},o.a.createElement("span",{className:"text-muted"},function(){var e=(new Date).getFullYear();return 2020===e?e:"2020 - "+e}()," | na licencji: ",o.a.createElement("a",{href:"https://unlicense.org/"},"Unlicense")," | autor: S\u0142awomir W\xf3jcicki | version: ",y.version," build: ",f||m)))},g=a(29),p=["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"],D=["nd","pn","wt","\u015br","cz","pt","so"],b=["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017a","lis","gru"];var k=function(e){var t=[];e.wholeYear&&t.push(o.a.createElement("option",{value:""},"ca\u0142y rok"));for(var a=0;a<12;a++)t.push(o.a.createElement("option",{value:a},p[a]));return o.a.createElement("select",{class:"form-control custom-select d-block mr-sm-2",style:{textAlignLast:"center"},value:e.selected,onChange:e.onChange},t)},E=a(475),O=a(476);a(209);var j=function(e){var t=Object(l.useRef)(null);return o.a.createElement("div",null,o.a.createElement("input",{class:"form-control mr-sm-2",type:"text",value:e.value,onChange:e.onChange,placeholder:"Rok","aria-label":"Rok",style:{textAlign:"center"},size:"3",maxlength:"4",ref:t}),o.a.createElement(E.a,{show:!e.validation,target:t.current,placement:"bottom"},o.a.createElement(O.a,{id:"popover-contained",className:"popover-danger"},o.a.createElement(O.a.Content,null,"Rok musi by\u0107 liczb\u0105 mi\u0119dzy 2000 a 3000."))))},w=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;Object(n.a)(this,a),r=t.call(this,e);var i=new Date;return r.state={year:i.getFullYear(),month:i.getMonth(),valid:!0},r.handleYearChange=r.handleYearChange.bind(Object(g.a)(r)),r.handleMonthChange=r.handleMonthChange.bind(Object(g.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(g.a)(r)),r}return Object(r.a)(a,[{key:"handleYearChange",value:function(e){this.setState({year:e.target.value})}},{key:"handleMonthChange",value:function(e){this.setState({month:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({valid:!0}),this.validate(this.state.year)?this.props.onSubmit(this.state):this.setState({valid:!1}),e.preventDefault()}},{key:"validate",value:function(e){return"number"===typeof(e=parseInt(e,10))&&e>=2e3&&e<=3e3}},{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("nav",{class:"navbar navbar-expand navbar-dark fixed-top bg-dark"},o.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Terminy awizacji list\xf3w poleconych"),o.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarCollapse"},o.a.createElement("ul",{class:"navbar-nav mr-auto"},o.a.createElement("li",{class:"nav-item"},o.a.createElement(h.b,{className:"nav-link",to:"/zdnia"},"Z dnia"))),o.a.createElement("form",{class:"form-inline mt-2 mt-md-0",onSubmit:this.handleSubmit},o.a.createElement(k,{selected:this.state.month,onChange:this.handleMonthChange,wholeYear:!0}),o.a.createElement(j,{value:this.state.year,onChange:this.handleYearChange,validation:this.state.valid}),o.a.createElement("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Wybierz")))))}}]),a}(o.a.Component),S=a(55),C=a(37),W=function(){function e(t){Object(n.a)(this,e),this.update(t)}return Object(r.a)(e,[{key:"update",value:function(e){this.date=e}},{key:"isSunday",value:function(){return 0===this.date.getDay()}},{key:"isSaturday",value:function(){return 6===this.date.getDay()}},{key:"isWeekend",value:function(){return this.isSaturday()||this.isSunday()}},{key:"isDayOff",value:function(){return this.isWeekend()||this.isAnotherDayOff()}},{key:"isDayOffNoFreeSaturday",value:function(){return this.isSunday()||this.isAnotherDayOff()}},{key:"isAnotherDayOff",value:function(){return!1}},{key:"firstWorkingDayBefore",value:function(){return this.firstWorkingDayBeforeDO(e.of(this.date))}},{key:"firstWorkingDayAfter",value:function(){return this.firstWorkingDayAfterDO(e.of(this.date))}},{key:"firstWorkingDayBeforeDO",value:function(e){for(;e.isDayOff();){var t=new Date(e.date.getTime());t.setDate(t.getDate()-1),e.update(t)}return e.date}},{key:"firstWorkingDayAfterDO",value:function(e){for(;e.isDayOff();){var t=new Date(e.date.getTime());t.setDate(t.getDate()+1),e.update(t)}return e.date}},{key:"plusWorkingDays",value:function(t){return this.plusWorkingDaysDO(e.of(this.date),t)}},{key:"plusWorkingDaysDO",value:function(e,t){for(var a=0;a<t;a++){var n=new Date(e.date.getTime());n.setDate(n.getDate()+1),e.update(n),e.update(this.firstWorkingDayAfterDO(e))}return e.date}},{key:"minusWorkingDays",value:function(t){return this.minusWorkingDaysDO(e.of(this.date),t)}},{key:"minusWorkingDaysDO",value:function(e,t){for(var a=0;a<t;a++){var n=new Date(e.date.getTime());n.setDate(n.getDate()-1),e.update(n),e.update(this.firstWorkingDayBeforeDO(e))}return e.date}},{key:"findWorkingDayAfterDays",value:function(t){var a=new Date(this.date.getTime());return a.setDate(a.getDate()+t),this.firstWorkingDayAfterDO(e.of(a))}},{key:"findWorkingDayBeforeDays",value:function(t){var a=new Date(this.date.getTime());return a.setDate(a.getDate()-t),this.firstWorkingDayBeforeDO(e.of(a))}}],[{key:"of",value:function(t){return new e(t)}}]),e}(),M=function(){function e(t){Object(n.a)(this,e),this.year=t,this.easter=this.computeEaster(t)}return Object(r.a)(e,[{key:"computeEaster",value:function(e){if(e<1583)throw new Error("Algorithm invalid before April 1583");var t=e%19+1,a=Math.floor(e/100)+1,n=Math.floor(3*a/4)-12,r=(11*t+20+(Math.floor((8*a+5)/25)-5)-n)%30;(25===r&&t>11||24===r)&&r++;var i=44-r;return i<21&&(i+=30),(i+=7-(Math.floor(5*e/4)-n-10+i)%7)>31?new Date(e,3,i-31):new Date(e,2,i)}},{key:"date",get:function(){return this.easter}}],[{key:"of",value:function(t){return new e(t)}}]),e}(),A=function(){function e(t){Object(n.a)(this,e),this.easterSunday=t.date,this.ashWednesday=new Date(this.easterSunday.getTime()),this.palmSunday=new Date(this.easterSunday.getTime()),this.easterMonday=new Date(this.easterSunday.getTime()),this.misericordiaSunday=new Date(this.easterSunday.getTime()),this.corpusChristi=new Date(this.easterSunday.getTime()),this.ashWednesday.setDate(this.easterSunday.getDate()-46),this.palmSunday.setDate(this.easterSunday.getDate()-7),this.easterMonday.setDate(this.easterSunday.getDate()+1),this.misericordiaSunday.setDate(this.easterSunday.getDate()+7),this.corpusChristi.setDate(this.easterSunday.getDate()+60)}return Object(r.a)(e,[{key:"getAshWednesday",get:function(){return this.ashWednesday}},{key:"getPalmSunday",get:function(){return this.palmSunday}},{key:"getEasterSunday",get:function(){return this.easterSunday}},{key:"getEasterMonday",get:function(){return this.easterMonday}},{key:"getMisericordiaSunday",get:function(){return this.misericordiaSunday}},{key:"getCorpusChristi",get:function(){return this.corpusChristi}}],[{key:"of",value:function(t){if(t&&"object"===typeof t&&t.constructor===M)return new e(t);if("number"===typeof t)return new e(M.of(t));throw new Error("Unsupported constructor parameter type")}}]),e}(),F=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"isLabourDay",value:function(){return 4===this.date.getMonth()&&1===this.date.getDate()}},{key:"isConstitutionDay",value:function(){return 4===this.date.getMonth()&&3===this.date.getDate()}},{key:"isIndependenceDay",value:function(){return 10===this.date.getMonth()&&11===this.date.getDate()}}],[{key:"of",value:function(e){return new a(e)}}]),a}(function(){function e(t){Object(n.a)(this,e),this.date=t,this.moveableFeast=A.of(t.getFullYear())}return Object(r.a)(e,[{key:"isNewYear",value:function(){return 0===this.date.getMonth()&&1===this.date.getDate()}},{key:"isEpiphany",value:function(){return 0===this.date.getMonth()&&6===this.date.getDate()}},{key:"isAshWednesday",value:function(){return this.date.valueOf()===this.moveableFeast.getAshWednesday.valueOf()}},{key:"isPalmSunday",value:function(){return this.date.valueOf()===this.moveableFeast.getPalmSunday.valueOf()}},{key:"isEasterSunday",value:function(){return this.date.valueOf()===this.moveableFeast.getEasterSunday.valueOf()}},{key:"isEasterMonday",value:function(){return this.date.valueOf()===this.moveableFeast.getEasterMonday.valueOf()}},{key:"isCorpusChristi",value:function(){return this.date.valueOf()===this.moveableFeast.getCorpusChristi.valueOf()}},{key:"isAssumptionDay",value:function(){return 7===this.date.getMonth()&&15===this.date.getDate()}},{key:"isAllSaintsDay",value:function(){return 10===this.date.getMonth()&&1===this.date.getDate()}},{key:"isChristmasEve",value:function(){return this.date.getFullYear()>=2025&&11===this.date.getMonth()&&24===this.date.getDate()}},{key:"isChristmasDay",value:function(){return 11===this.date.getMonth()&&25===this.date.getDate()}},{key:"isBoxingDay",value:function(){return 11===this.date.getMonth()&&26===this.date.getDate()}},{key:"isChristmas",value:function(){return this.isChristmasDay()||this.isBoxingDay()}},{key:"isEaster",value:function(){return this.isEasterSunday()||this.isEasterMonday()}}],[{key:"of",value:function(t){return new e(t)}}]),e}()),z=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).update(e),r}return Object(r.a)(a,[{key:"update",value:function(e){this.date=e,this.polishFeast=F.of(e)}},{key:"isDayOff",value:function(){return Object(S.a)(Object(C.a)(a.prototype),"isDayOff",this).call(this)||this.isPolishFeast()}},{key:"isDayOffNoFreeSaturday",value:function(){return Object(S.a)(Object(C.a)(a.prototype),"isDayOff",this).call(this)||this.isPolishFeast()}},{key:"isPolishFeast",value:function(){return this.polishFeast.isNewYear()||this.date.getFullYear()>=2011&&this.polishFeast.isEpiphany()||this.polishFeast.isEaster()||this.polishFeast.isLabourDay()||this.polishFeast.isConstitutionDay()||this.polishFeast.isCorpusChristi()||this.polishFeast.isAssumptionDay()||this.polishFeast.isAllSaintsDay()||this.polishFeast.isIndependenceDay()||this.polishFeast.isChristmasEve()||this.polishFeast.isChristmas()}},{key:"firstWorkingDayBefore",value:function(){return Object(S.a)(Object(C.a)(a.prototype),"firstWorkingDayBeforeDO",this).call(this,a.of(this.date))}},{key:"firstWorkingDayAfter",value:function(){return Object(S.a)(Object(C.a)(a.prototype),"firstWorkingDayAfterDO",this).call(this,a.of(this.date))}},{key:"plusWorkingDays",value:function(e){return Object(S.a)(Object(C.a)(a.prototype),"plusWorkingDays",this).call(this,a.of(this.date),e)}},{key:"minusWorkingDays",value:function(e){return Object(S.a)(Object(C.a)(a.prototype),"minusWorkingDays",this).call(this,a.of(this.date),e)}},{key:"findWorkingDayAfterDays",value:function(e){var t=new Date(this.date.getTime());return t.setDate(t.getDate()+e),Object(S.a)(Object(C.a)(a.prototype),"firstWorkingDayAfterDO",this).call(this,a.of(t))}},{key:"findWorkingDayBeforeDays",value:function(e){var t=new Date(this.date.getTime());return t.setDate(t.getDate()-e),Object(S.a)(Object(C.a)(a.prototype),"firstWorkingDayBeforeDO",this).call(this,a.of(t))}}],[{key:"of",value:function(e){return new a(e)}}]),a}(W);a(468);var Y=function(e){function t(e){return"/zdnia/"+function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)}(e)}function a(e){return D[e.getDay()]+", "+e.getDate()+" "+b[e.getMonth()]+" "+e.getFullYear()}for(var n=[],r=e.year,i=e.month,s=new Date(r,i,1);s.getMonth()===i;){var l=z.of(s);if(!l.isDayOff()){var u=l.findWorkingDayAfterDays(7),c=z.of(u).findWorkingDayAfterDays(1),d=l.findWorkingDayAfterDays(14),y=z.of(d).findWorkingDayAfterDays(1),f=z.of(c).findWorkingDayAfterDays(7),m=z.of(f).findWorkingDayAfterDays(1);n.push(o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(h.b,{to:t(s)},a(s))),o.a.createElement("td",null,o.a.createElement(h.b,{to:t(c)},a(c))),o.a.createElement("td",null,o.a.createElement(h.b,{to:t(d)},a(d))),o.a.createElement("td",null,o.a.createElement(h.b,{to:t(y)},a(y))),o.a.createElement("td",null,o.a.createElement(h.b,{to:t(f)},a(f))),o.a.createElement("td",null,o.a.createElement(h.b,{to:t(m)},a(m)))))}s.setDate(s.getDate()+1)}return o.a.createElement("div",{class:"pagebreak"},o.a.createElement("h2",{class:"mt-5"},function(e){return p[e]}(e.month)," ",e.year),o.a.createElement("div",{class:"table-responsive"},o.a.createElement("table",{class:"table table-striped table-sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{width:"16.6%"}),o.a.createElement("th",{width:"16.6%"},"Wszystkie"),o.a.createElement("th",{colspan:"2",width:"33.3%"},"Administracyjne/Podatkowe/Og\xf3lne"),o.a.createElement("th",{colspan:"2",width:"33.3%"},"Cywilne/Karne")),o.a.createElement("tr",null,o.a.createElement("th",null,"I awizo"),o.a.createElement("th",null,"II awizo"),o.a.createElement("th",null,"Przechowywanie"),o.a.createElement("th",null,"Zwrot"),o.a.createElement("th",null,"Przechowywanie"),o.a.createElement("th",null,"Zwrot"))),o.a.createElement("tbody",null,n))))};var x=function(e){var t=[],a=parseInt(e.year,10),n=parseInt(e.month,10);if(isNaN(n))for(var r=0;r<12;r++)t.push(o.a.createElement(Y,{month:r,year:a}));else t.push(o.a.createElement(Y,{month:n,year:a}));return o.a.createElement("main",{role:"main",class:"flex-shrink-0"},o.a.createElement("div",{class:"container"},t))},N=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;Object(n.a)(this,a),r=t.call(this,e);var i=new Date;return r.state={year:i.getFullYear(),month:i.getMonth()},r.handleSubmit=r.handleSubmit.bind(Object(g.a)(r)),r}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){this.setState({year:e.year,month:e.month})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{onSubmit:this.handleSubmit}),o.a.createElement(x,{year:this.state.year,month:this.state.month}))}}]),a}(o.a.Component);var T=function(e){var t=Object(l.useRef)(null);return o.a.createElement("div",null,o.a.createElement("input",{class:"form-control mr-sm-2",type:"text",value:e.value,onChange:e.onChange,placeholder:"Dzie\u0144","aria-label":"Dzie\u0144",style:{textAlign:"center"},size:"1",maxlength:"2",ref:t}),o.a.createElement(E.a,{show:!e.validation,target:t.current,placement:"bottom"},o.a.createElement(O.a,{id:"popover-contained",className:"popover-danger"},o.a.createElement(O.a.Content,null,"Niepoprawna data."))))},I=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={year:e.date.year,month:e.date.month,day:e.date.day,validYear:!0,validDay:!0},r.handleYearChange=r.handleYearChange.bind(Object(g.a)(r)),r.handleMonthChange=r.handleMonthChange.bind(Object(g.a)(r)),r.handleDayChange=r.handleDayChange.bind(Object(g.a)(r)),r.handleSubmitDay=r.handleSubmitDay.bind(Object(g.a)(r)),r.handleSubmitToday=r.handleSubmitToday.bind(Object(g.a)(r)),r}return Object(r.a)(a,[{key:"handleDayChange",value:function(e){this.setState({day:e.target.value})}},{key:"handleYearChange",value:function(e){this.setState({year:e.target.value})}},{key:"handleMonthChange",value:function(e){this.setState({month:e.target.value})}},{key:"handleSubmitToday",value:function(e){e.preventDefault();var t=new Date;this.setState({year:t.getFullYear(),month:t.getMonth(),day:t.getDate()}),this.props.onSubmit({year:t.getFullYear(),month:t.getMonth(),day:t.getDate()})}},{key:"handleSubmitDay",value:function(e){this.setState({validYear:!0}),this.setState({validDay:!0});var t=!0,a=!0;this.validateYear(this.state.year)||(this.setState({validYear:!1}),t=!1),this.validateDay(this.state.day,this.state.month,this.state.year)||(this.setState({validDay:!1}),a=!1),a&&t&&this.props.onSubmit(this.state),e.preventDefault()}},{key:"validateYear",value:function(e){return"number"===typeof(e=parseInt(e,10))&&e>=2e3&&e<=3e3}},{key:"validateDay",value:function(e,t,a){a=parseInt(a,10),t=parseInt(t,10),e=parseInt(e,10);var n=new Date(a,t,e);return n.getFullYear()===a&&n.getMonth()===t&&n.getDate()===e}},{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("nav",{class:"navbar navbar-expand navbar-dark fixed-top bg-dark"},o.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Terminy awizacji list\xf3w poleconych"),o.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarCollapse"},o.a.createElement("ul",{class:"navbar-nav mr-auto"},o.a.createElement("li",{class:"nav-item active"},o.a.createElement(h.b,{className:"nav-link",to:"/zdnia",onClick:this.handleSubmitToday},"Z dnia"))),o.a.createElement("form",{class:"form-inline mt-2 mt-md-0",onSubmit:this.handleSubmitDay},o.a.createElement(T,{value:this.state.day,onChange:this.handleDayChange,validation:this.state.validDay}),o.a.createElement(k,{selected:this.state.month,onChange:this.handleMonthChange,wholeYear:!1}),o.a.createElement(j,{value:this.state.year,onChange:this.handleYearChange,validation:this.state.validYear}),o.a.createElement("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Wybierz")))))}}]),a}(o.a.Component);a(469);var B=function(e){function t(e){return D[e.getDay()]+", "+e.getDate()+" "+b[e.getMonth()]+" "+e.getFullYear()}var a=[],n=new Date(e.year,e.month,e.day);if(z.of(n).isDayOff())a.push(o.a.createElement("span",null,o.a.createElement("strong",null,t(n))," jest dniem wolnym od pracy."));else{var r=new Date(n.getTime()),i=[],s=[],l=[];for(r.setDate(r.getDate()-30);r.valueOf()!==n.valueOf();){var u=z.of(r);if(!u.isDayOff()){var c=u.findWorkingDayAfterDays(7),h=z.of(c).findWorkingDayAfterDays(1),d=u.findWorkingDayAfterDays(14),y=z.of(d).findWorkingDayAfterDays(1),f=z.of(h).findWorkingDayAfterDays(7),m=z.of(f).findWorkingDayAfterDays(1);h.valueOf()===n.valueOf()&&i.push(o.a.createElement("li",null,t(r))),y.valueOf()===n.valueOf()&&s.push(o.a.createElement("li",null,t(r))),m.valueOf()===n.valueOf()&&l.push(o.a.createElement("li",null,t(r)))}r.setDate(r.getDate()+1)}var v=[];i.length>0&&v.push(o.a.createElement("ul",null,i));var g=[];g.push(o.a.createElement("li",null,"awizujemy powt\xf3rnie",v));var p=[];s.length>0&&p.push(o.a.createElement("ul",null,s));var k=[];k.push(o.a.createElement("li",null,"zwracamy administracyjne/podatkowe/og\xf3lne",p));var E=[];l.length>0&&E.push(o.a.createElement("ul",null,l));var O=[];O.push(o.a.createElement("li",null,"zwracamy cywilne/karne",E)),a.push(o.a.createElement("span",null,"Dnia ",o.a.createElement("strong",null,t(n)))),a.push(o.a.createElement("ul",null,g,o.a.createElement("li",null,k),o.a.createElement("li",null,O)))}return o.a.createElement("main",{role:"main",className:"flex-shrink-0"},o.a.createElement("div",{className:"container fromDay"},a))},P=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;Object(n.a)(this,a),r=t.call(this,e);var i=new Date;return e.match&&e.match.params.date&&(i=new Date(e.match.params.date)),r.state={year:i.getFullYear(),month:i.getMonth(),day:i.getDate()},r.handleSubmitDay=r.handleSubmitDay.bind(Object(g.a)(r)),r}return Object(r.a)(a,[{key:"iso",value:function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)}},{key:"handleSubmitDay",value:function(e){this.setState({year:e.year,month:e.month,day:e.day});var t=new Date(e.year,e.month,e.day);this.props.history.push("/zdnia/"+this.iso(t))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{date:this.state,onSubmit:this.handleSubmitDay}),o.a.createElement(B,{year:this.state.year,month:this.state.month,day:this.state.day}))}}]),a}(o.a.Component),R=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.StrictMode,null,o.a.createElement(h.a,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/"},o.a.createElement(N,null)),o.a.createElement(d.a,{exact:!0,path:"/zdnia",render:function(e){return o.a.createElement(P,e)}}),o.a.createElement(d.a,{path:"/zdnia/:date",render:function(e){return o.a.createElement(P,e)}}))),o.a.createElement(v,null))}}]),a}(o.a.Component);c.a.render(o.a.createElement(R,null),document.getElementById("root"))}},[[221,1,2]]]);
//# sourceMappingURL=main.da760423.chunk.js.map