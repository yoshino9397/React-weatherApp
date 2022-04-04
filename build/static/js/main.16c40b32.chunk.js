(this["webpackJsonpweather-geocoding"]=this["webpackJsonpweather-geocoding"]||[]).push([[0],{20:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),c=e(11),o=e.n(c),i=(e(20),e(5)),u=e.n(i),s=e(6),p=e(4),b=e(2),h=e(3);function d(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 150px 15px 15px;\n\n  & input {\n    width: 100%;\n    max-width: 280px;\n    padding: 10px 15px;\n    border: none;\n    outline: none;\n    background-color: rgba(255, 255, 255, 0.3);\n    border-radius: 16px 0px 16px 0px;\n    border-bottom: 3px solid rgba(0, 0, 0, 0.3);\n\n    color: #313131;\n    font-size: 20px;\n    transition: all 0.3s ease-out;\n    &:focus {\n      background-color: rgba(255, 255, 255, 0.6);\n      border-color: rgba(0, 0, 0, 0.6);\n    }\n  }\n"]);return d=function(){return n},n}var f=h.a.div(d()),l=function(n){var t=n.handleInput,e=n.handleSubmit;return Object(r.jsx)(f,{children:Object(r.jsx)("form",{onSubmit:function(n){e(n)},children:Object(r.jsx)("input",{type:"text",onChange:function(n){t(n)},autoComplete:"off",placeholder:"Search for a city..."})})})};function x(){var n=Object(b.a)(["\n  color: #fff;\n\n  h1 {\n    color: #fff;\n    font-size: 2.5rem;\n    font-weight: 500;\n    margin-bottom: 5px;\n  }\n\n  h3 {\n    font-size: 1.3rem;\n  }\n"]);return x=function(){return n},n}var j=h.a.div(x()),m=function(n){var t=n.location,e=n.currentDate;return Object(r.jsxs)(j,{children:[Object(r.jsxs)("h1",{children:[" ",t.city," "]}),Object(r.jsxs)("h1",{children:[t.state,", ",t.country," "]}),Object(r.jsxs)("h3",{children:[" ",e," "]})]})};function g(){var n=Object(b.a)(["\n  color: #fff;\n\n  h1 {\n    font-size: 6.5rem;\n    font-weight: 900;\n    margin: 30px 0px;\n    text-shadow: 4px 10px rgba(0, 0, 0, 0.6);\n    & span {\n      font-size: 5rem;\n      font-weight: 500;\n    }\n  }\n\n  h2 {\n    font-size: 2rem;\n    font-weight: 700;\n    font-style: italic;\n    margin-bottom: 15px;\n    text-shadow: 0px 4px rgba(0, 0, 0, 0.6);\n  }\n\n  h3 {\n    font-size: 1.5rem;\n    font-weight: 500;\n    text-shadow: 0px 4px rgba(0, 0, 0, 0.6);\n    margin-bottom: 10px;\n  }\n"]);return g=function(){return n},n}var v=h.a.div(g()),O=function(n){var t=n.weather,e=t.currentTemp,a=t.weatherMain,c=t.tempMax,o=t.tempMin;return Object(r.jsxs)(v,{children:[Object(r.jsxs)("h1",{children:[Math.round(e),Object(r.jsx)("span",{children:"\xbaC"})]}),Object(r.jsx)("h2",{children:a}),Object(r.jsxs)("h3",{children:[Math.round(o),"\xbaC / ",Math.round(c),"\xbaC"]})]})};function y(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100vw;\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgba( 0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));\n"]);return y=function(){return n},n}var w=h.a.div(y()),M=function(n){var t=n.handleInput,e=n.handleSubmit,a=n.states;return Object(r.jsxs)(w,{children:[Object(r.jsx)(l,{handleInput:t,handleSubmit:e}),Object(r.jsx)(m,{location:a.location,currentDate:a.currentDate}),Object(r.jsx)(O,{weather:a.weather})]})},S=function(){var n=Object(s.a)(u.a.mark((function n(t){var e,r,a,c,o,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat("https://api.mapbox.com/geocoding/v5/mapbox.places/").concat(t,".json?types=place&access_token=").concat("pk.eyJ1IjoieW9zaGlubzkzOTciLCJhIjoiY2wwbHJ6MXl1MHZpMTNrbGFuOHBma3Q1eSJ9.HMSUYkXGctP2EMxtTfQ3dA"),n.next=3,fetch(e).then((function(n){return n.json()})).then((function(n){return n.features}));case 3:return r=n.sent,a=r[0].center,c=r[0].matching_text?r[0].matching_text:r[0].text,o=r[0].context[0].text,i=r[0].context[1].text,n.abrupt("return",{coordinates:a,placeName:c,state:o,country:i});case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),k=function(){var n=Object(s.a)(u.a.mark((function n(t){var e,r,a,c,o,i,s,b,h,d,f,l;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S(t);case 2:return e=n.sent,r=Object(p.a)(e.coordinates,2),a=r[0],c=r[1],o={city:e.placeName.split(/\b\s[Ss]hi\b/)[0],state:e.state,country:e.country},i="".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat(c,"&lon=").concat(a,"&exclude=minutely,hourly,alerts&units=metric&appid=").concat("8ef8a649d5345c98c9377eb478877977"),n.next=8,fetch(i).then((function(n){return n.json()})).then((function(n){return n}));case 8:return s=n.sent,b=s.current.temp,h=s.daily[0],d=h.weather[0].main,f=h.temp.max,l=h.temp.min,n.abrupt("return",[{currentTemp:b,weatherMain:d,tempMax:f,tempMin:l},o]);case 15:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),z=e.p+"static/media/blue.610f9b44.jpg",D=e.p+"static/media/green.a361963b.jpg",I=e.p+"static/media/orange.839534d3.jpg";function J(){var n=Object(b.a)(["\n  background-image: url(\n    ","\n  );\n  background-size: cover;\n  background-position: top center;\n"]);return J=function(){return n},n}var T=h.a.div(J(),(function(n){return"blue"===n.bgImage?z:"green"===n.bgImage?D:"orange"===n.bgImage?I:void 0})),C=function(){var n=Object(a.useState)("Canada"),t=Object(p.a)(n,2),e=t[0],c=t[1],o=Object(a.useState)(""),i=Object(p.a)(o,2),b=i[0],h=i[1],d=Object(a.useState)({city:"",state:"",country:""}),f=Object(p.a)(d,2),l=f[0],x=f[1],j=Object(a.useState)({currentTemp:0,weatherMain:"",tempMax:0,tempMin:0}),m=Object(p.a)(j,2),g=m[0],v=m[1];function O(n){return y.apply(this,arguments)}function y(){return(y=Object(s.a)(u.a.mark((function n(t){var e,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new Date,h(w(e)),n.next=4,k(t);case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(a.useEffect)((function(){O("Vancouver").then((function(n){var t=Object(p.a)(n,2),e=t[0],r=t[1];v(e),x(r)}))}),[]);var w=function(n){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()],e=n.getDate(),r=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],a=n.getFullYear();return"".concat(t," ").concat(e," ").concat(r," ").concat(a)};return Object(r.jsx)(T,{bgImage:function(){var n=(new Date).getHours();return n<=7||n>18?"blue":n>7&&n<=15?"green":"orange"}(),children:Object(r.jsx)(M,{states:{location:l,currentDate:b,weather:g},handleInput:function(n){n.preventDefault(),c(n.target.value)},handleSubmit:function(n){n.preventDefault(),O(e).then((function(n){var t=Object(p.a)(n,2),e=t[0],r=t[1];v(e),x(r)}))}})})};var H=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(C,{})})};o.a.render(Object(r.jsx)(H,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.16c40b32.chunk.js.map