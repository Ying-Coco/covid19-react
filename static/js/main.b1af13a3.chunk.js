(this.webpackJsonpcovid_with_react=this.webpackJsonpcovid_with_react||[]).push([[0],{102:function(e,a,t){e.exports=t(225)},107:function(e,a,t){},114:function(e,a,t){},17:function(e,a,t){e.exports={container:"Cards_container__3ypDN",card:"Cards_card__1z39_",infected:"Cards_infected__3Xcr-",recovered:"Cards_recovered__1Gtyu",deaths:"Cards_deaths__3Wfin",predicted:"Cards_predicted__3mYO9"}},225:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(87),o=t.n(c),l=(t(107),t(60),t(108),t(88)),i=t.n(l),s=t(29);var d=function(){return r.a.createElement("nav",{class:"navbar navbar-expand-sm bg-dark navbar-dark primary-color justify-content-between fixed-top"},r.a.createElement("a",{class:"navbar-logo",href:"#"},"  ",r.a.createElement("img",{src:i.a,alt:"logo",style:{width:"40px",margin:"2px"}}))," ",r.a.createElement("br",null),r.a.createElement("a",{class:"navbar-brand",href:"#"},"COVID-19 Tracker and Map"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2",id:"collapsibleNavbar"},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement(s.b,{class:"nav-link",to:"/Tracker"},r.a.createElement("li",{class:"nav-item"},"Tracker")),r.a.createElement(s.b,{class:"nav-link",to:"/Map"},r.a.createElement("li",{class:"nav-item"},"Map")))),r.a.createElement("div",{class:"navbar-collapse collapse order-3 dual-collapse2",id:"collapsibleNavbar"},r.a.createElement("div",{class:"btn-group"},r.a.createElement("a",{class:"btn btn-info btn-lg btn-outline-default",href:"https://github.com/Ying-Coco/covid_with_react",role:"button",id:"github"},"GitHub"),r.a.createElement("a",{class:"btn btn-info btn-lg btn-outline-default",href:"https://github.com/mathdroid/covid-19-api",role:"button",id:"math"},"Mathdroid"),r.a.createElement("a",{class:"btn btn-info btn-lg btn-outline-default",href:"https://github.com/NovelCOVID/API",role:"button",id:"novel"},"NovelCOVID"))))},u=t(32),m=t(97),p=t(56),v=t.n(p);t(114),t(115);u.accessToken="pk.eyJ1IjoiZG9uZmVuZzk3IiwiYSI6ImNrYTI1aHQ3YjAybmQzaG1zejI2NzF4anEifQ.9fU6UDHJGcBegmFnDwkrSA";var b=function(){var e=Object(n.useRef)(null),a=Object(m.a)("https://corona.lmao.ninja/v2/jhucsse",(function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.map((function(e,a){return{type:"Feature",geometry:{type:"Point",coordinates:[e.coordinates.longitude,e.coordinates.latitude]},properties:{id:a,country:e.country,province:e.province,cases:e.stats.confirmed,deaths:e.stats.deaths}}}))}))})).data;return Object(n.useEffect)((function(){if(a){var t=new u.Map({container:e.current,style:"mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",center:[16,27],zoom:2});t.addControl(new u.NavigationControl),t.once("load",(function(){t.addSource("points",{type:"geojson",data:{type:"FeatureCollection",features:a}}),t.addLayer({id:"circles",source:"points",type:"circle",paint:{"circle-opacity":.75,"circle-stroke-width":["interpolate",["linear"],["get","cases"],1,1,1e5,1.75],"circle-radius":["interpolate",["linear"],["get","cases"],1,4,1e3,8,4e3,10,8e3,14,12e3,18,1e5,40],"circle-color":["interpolate",["linear"],["get","cases"],1,"#ffffb2",5e3,"#fed976",1e4,"#feb24c",25e3,"#fd8d3c",5e4,"#fc4e2a",75e3,"#e31a1c",1e5,"#b10026"]}});var e,n=new u.Popup({closeButton:!1,closeOnClick:!1});t.on("mousemove","circles",(function(a){var r=a.features[0].properties.id;if(r!==e){var c,o;e=r;var l=a.features[0].properties,i=l.cases,s=l.deaths,d=l.country,u=l.province;t.getCanvas().style.cursor="pointer";for(var m=a.features[0].geometry.coordinates.slice(),p=(null===(c=v.a.byCountry(d))||void 0===c?void 0:c.iso2)||(null===(o=v.a.byInternet(d))||void 0===o?void 0:o.iso2),b="null"!==u?"<p>Province: <b>".concat(u,"</b></p>"):"",f=(s/i*100).toFixed(2),E=Boolean(p)?'<img src="https://www.countryflags.io/'.concat(p,'/flat/64.png"></img>'):"",h="<p>Country: <b>".concat(d,"</b></p>\n              ").concat(b,"\n              <p>Cases: <b>").concat(i,"</b></p>\n              <p>Deaths: <b>").concat(s,"</b></p>\n              <p>Mortality Rate: <b>").concat(f,"%</b></p>\n              ").concat(E);Math.abs(a.lngLat.lng-m[0])>180;)m[0]+=a.lngLat.lng>m[0]?360:-360;n.setLngLat(m).setHTML(h).addTo(t)}})),t.on("mouseleave","circles",(function(){e=void 0,t.getCanvas().style.cursor="",n.remove()}))}))}}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"mapContainer"},r.a.createElement("div",{className:"mapBox",ref:e})),r.a.createElement("div",{className:"source"},r.a.createElement("span",{role:"img","aria-label":"computer"},"\ud83d\udda5\ufe0f"),r.a.createElement("a",{href:"https://github.com/alemesa/mapbox-covid19",target:"_blank",rel:"noreferrer noopener"},"Source code")))},f=t(4),E=t.n(f),h=t(10),A=t(42),g=t(43),k=t(99),y=t(98),C=t(242),x=t(246),T=t(243),O=t(244),S=t(33),j=t.n(S),U=t(17),q=t.n(U),w=t(34),I=t.n(w),D=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate;return t?r.a.createElement("div",{className:q.a.container},r.a.createElement(C.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(C.a,{item:!0,component:x.a,xs:12,md:2,className:I()(q.a.card,q.a.infected)},r.a.createElement(T.a,null,r.a.createElement(O.a,{color:"textSecondary",variant:"h4",gutterBottom:!0}," Infected"),r.a.createElement(O.a,{variant:"h3"},r.a.createElement(j.a,{start:0,end:t.value,duration:2.5,separator:","})),r.a.createElement(O.a,{color:"textSecondary",variant:"body1"},new Date(o).toDateString()),r.a.createElement(O.a,{variant:"subtitle1"},"Number of confirmed cases of COVID-19"))),r.a.createElement(C.a,{item:!0,component:x.a,xs:12,md:2,className:I()(q.a.card,q.a.recovered)},r.a.createElement(T.a,null,r.a.createElement(O.a,{color:"textSecondary",variant:"h4",gutterBottom:!0}," Recovered"),r.a.createElement(O.a,{variant:"h3"},r.a.createElement(j.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(O.a,{color:"textSecondary",variant:"body1"},new Date(o).toDateString()),r.a.createElement(O.a,{variant:"body2"},"Number of recovered cases of COVID-19"))),r.a.createElement(C.a,{item:!0,component:x.a,xs:12,md:2,className:I()(q.a.card,q.a.deaths)},r.a.createElement(T.a,null,r.a.createElement(O.a,{color:"textSecondary",variant:"h4",gutterBottom:!0}," Deceased"),r.a.createElement(O.a,{variant:"h3"},r.a.createElement(j.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(O.a,{color:"textSecondary",variant:"body1"},new Date(o).toDateString()),r.a.createElement(O.a,{variant:"body2"},"Number of deceased due to COVID-19"))),r.a.createElement(C.a,{item:!0,component:x.a,xs:12,md:2,className:I()(q.a.card,q.a.predicted)},r.a.createElement(T.a,null,r.a.createElement(O.a,{color:"textSecondary",variant:"h4",gutterBottom:!0},"Predicted Cases"),r.a.createElement(O.a,{variant:"h3"},r.a.createElement(j.a,{start:0,end:10*t.value,duration:2.5,separator:","})),r.a.createElement(O.a,{color:"textSecondary",variant:"body1"},new Date(o).toDateString()),r.a.createElement(O.a,{variant:"body2"},"Number of predicted cases of COVID-19"))))):"Loading...."},H=t(8),R=t(44),X=t.n(R),B="https://covid19.mathdro.id/api",z=function(){var e=Object(h.a)(E.a.mark((function e(a){var t,n,r,c,o,l,i,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B,a&&(t="".concat(B,"/countries/").concat(a)),e.prev=2,e.next=5,X.a.get(t);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,i=r.lastUpdate,s={confirmed:c,recovered:o,deaths:l,lastUpdate:i},e.abrupt("return",s);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(a){return e.apply(this,arguments)}}(),Q=function(){var e=Object(h.a)(E.a.mark((function e(){var a,t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.a.get("".concat(B,"/daily"));case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(h.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.a.get("".concat(B,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=t(58),G=t(94),M=t.n(G),V=function(e){var a=e.data,t=a.confirmed,c=a.recovered,o=a.deaths,l=e.country,i=Object(n.useState)({}),s=Object(H.a)(i,2),d=s[0],u=s[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,Q();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=d[0]?r.a.createElement(N.b,{data:{labels:d.map((function(e){return e.date})),datasets:[{data:d.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgba(255, 173, 51, 1)",backgroundColor:"rgba(255, 173, 51, 0.5)",fill:!0},{data:d.map((function(e){return e.deaths})),label:"Deceased",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,p=t?r.a.createElement(N.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{lablel:"People",backgroundColor:["rgba(255, 163, 26, 0.8)","rgba(153, 187, 255, 0.8)","rgba(255, 0, 0, 0.8)"],data:[t.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in "+l}}}):null;return r.a.createElement("div",{className:M.a.container},l?p:m)},K=t(247),Z=t(245),L=t(95),Y=t.n(L),P=function(e){var a=e.handleCountryChange,t=Object(n.useState)([]),c=Object(H.a)(t,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,J();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(K.a,{className:Y.a.FormControl},r.a.createElement(Z.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},W=t(96),F=t.n(W),_=function(e){Object(k.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var a=Object(h.a)(E.a.mark((function a(t){var n;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,z(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country;return r.a.createElement("div",{className:F.a.container,style:{overflow:"auto"}},r.a.createElement(D,{data:a}),r.a.createElement(P,{handleCountryChange:this.handleCountryChange}),r.a.createElement(V,{data:a,country:t}),r.a.createElement("br",null))}}]),t}(r.a.Component),$=t(6);var ee=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement($.c,null,r.a.createElement($.a,{exact:!0,path:"/covid19-react/Map",component:b}),r.a.createElement($.a,{exact:!0,path:"/covid19-react",component:_}),r.a.createElement($.a,{exact:!0,path:"/covid19-react/Tracker",component:_}))))};o.a.render(r.a.createElement(ee,null),document.getElementById("root"))},60:function(e,a,t){e.exports={App:"App_App__16ZpL","nav-links":"App_nav-links__3wG_h"}},88:function(e,a){e.exports="data:image/png;base64,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"},94:function(e,a,t){e.exports={container:"Chart_container__1Xce-"}},95:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__33iZE"}},96:function(e,a,t){e.exports={container:"Tracker_container__1ElkX"}}},[[102,1,2]]]);
//# sourceMappingURL=main.b1af13a3.chunk.js.map