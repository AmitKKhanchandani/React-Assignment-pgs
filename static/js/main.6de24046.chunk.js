(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(48)},36:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(13),o=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(5),l=a(6),s=a(9),u=a(7),m=a(8),d=a(14),p=a(3),h=(a(36),a(10)),v=a(24),b=a(26),g=a(12),E="LOGIN",f="LOGOUT";var O={login:!1};var j="ADD_ITEM",y="CLEAR",N="CURRENT_ITEM";var x={items:[],currentNumber:"",images:[]};var w=a(22),k=a(27),C=a.n(k),R=Object(h.combineReducers)({loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(g.a)({},O);switch((arguments.length>1?arguments[1]:void 0).type){case E:return Object(g.a)({},e,{login:!0});case f:return Object(g.a)({},O);default:return e}return e},dataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(g.a)({},x),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var a=t.payload;console.log(a),console.log(e);var n=e.items,r=a.number;n.push(r);for(var i=[],o=1;o<=r;o++){var c={src:window.location.href+"images/placeholder/"+o+".png",altText:o,caption:o};i.push(c)}return Object(g.a)({},e,{items:n,images:i});case N:return r=(a=t.payload).number,Object(g.a)({},e,{currentNumber:r});case y:return Object(g.a)({},x);default:return e}return e}}),I={key:"root",storage:C.a},S=Object(w.a)(I,R),T=Object(h.createStore)(S,{},Object(v.composeWithDevTools)(Object(h.applyMiddleware)(b.a))),L={store:T,persistor:Object(w.b)(T)},D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleOnChangeInput=function(e){a.setState(Object(d.a)({},e.target.id,e.target.value))},a.state={username:"",password:"",alert:!1},a.handleOnChangeInput=a.handleOnChangeInput.bind(Object(p.a)(Object(p.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){var t=this.state;e.preventDefault(),e.stopPropagation();var a=t.username,n=t.password;"shaadi"===a&&"123"===n?L.store.dispatch({type:"LOGIN"}):this.setState({alert:!0,username:"",password:""})}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",{id:"LoginForm"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{className:"main-div"},r.a.createElement("div",{className:"panel"},r.a.createElement("img",{src:"images/logo.png",className:"img-responsive logo",alt:"Logo"}),r.a.createElement("p",null,"Please enter username and password")),r.a.createElement("form",{id:"Login",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"username",required:!0,onChange:this.handleOnChangeInput,placeholder:"Username",value:e.username})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"password",required:!0,onChange:this.handleOnChangeInput,placeholder:"Password",value:e.password})),e.alert&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The User Name or Password entered is incorrect.  Please try again."),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"))),r.a.createElement("p",null,"Designed by Amit K Khanchandani"))))}}]),t}(n.Component),H=(a(41),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={logoUrl:window.location.href+"images/logo.png"},a.handleLogout=a.handleLogout.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleLogout",value:function(e){e.preventDefault(),L.store.dispatch({type:"CLEAR"}),L.store.dispatch({type:"LOGOUT"})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light justify-content-between",id:"Navmenu"},r.a.createElement("a",{className:"navbar-brand",href:window.location.href},r.a.createElement("img",{src:this.state.logoUrl,alt:"Logo"}),"React Assignment"),r.a.createElement("form",{className:"form-inline",onSubmit:this.handleLogout},r.a.createElement("div",{className:"username"},r.a.createElement("i",{className:"fa fa-user-circle-o","aria-hidden":"true"})," Shaadi"),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0 logout",type:"submit"},r.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"}))))}}]),t}(n.Component)),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mt25 text-center mb10"},"Designed and Developed by Amit K Khanchandani",r.a.createElement("br",null),r.a.createElement("a",{href:"http://resume.amitk.co.in"},"E-Resume")," |",r.a.createElement("a",{href:"http://www.amitk.co.in"}," AmitK.co.in"))}}]),t}(n.Component),U=a(11),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onSelectChange=a.onSelectChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onSelectChange",value:function(e){e.preventDefault();var t=e.target.value;L.store.dispatch({type:"CURRENT_ITEM",payload:{number:t}}),t>0&&L.store.dispatch({type:"ADD_ITEM",payload:{number:t}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-2"},r.a.createElement("div",{className:"form-group mt10"},r.a.createElement("label",{htmlFor:"carousel"},"Select Number For Carousel:"),r.a.createElement("select",{className:"form-control",id:"carousel",onChange:this.onSelectChange},r.a.createElement("option",{value:"0"},"Select Slides"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"11"},"11"),r.a.createElement("option",{value:"12"},"12"),r.a.createElement("option",{value:"13"},"13"),r.a.createElement("option",{value:"14"},"14"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"16"},"16"),r.a.createElement("option",{value:"17"},"17"),r.a.createElement("option",{value:"18"},"18"),r.a.createElement("option",{value:"19"},"19"),r.a.createElement("option",{value:"20"},"20"))))))}}]),t}(n.Component),M=Object(U.b)(function(e){return console.log("number selector",e),e})(A),F=a(4),K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={img:[{src:window.location.href+"images/placeholder/select.png",altText:"Carousel",caption:""}],images:[],activeIndex:0},a.next=a.next.bind(Object(p.a)(Object(p.a)(a))),a.previous=a.previous.bind(Object(p.a)(Object(p.a)(a))),a.goToIndex=a.goToIndex.bind(Object(p.a)(Object(p.a)(a))),a.onExiting=a.onExiting.bind(Object(p.a)(Object(p.a)(a))),a.onExited=a.onExited.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Props",this.props),console.log("State",this.state)}},{key:"componentWillReceiveProps",value:function(){this.goToIndex(0)}},{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===this.props.dataReducer.images.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?this.props.dataReducer.images.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.props.dataReducer.images.map(function(t){return r.a.createElement(F.f,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},r.a.createElement("img",{src:t.src,alt:t.altText,className:"w-100"}),r.a.createElement(F.c,{captionText:t.caption,captionHeader:t.caption}))});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},0==this.props.dataReducer.currentNumber&&r.a.createElement("div",{className:"col-md-8 offset-md-2"},r.a.createElement(F.k,{autoPlay:!1,items:this.state.img})),this.props.dataReducer.currentNumber>0&&r.a.createElement("div",{className:"col-md-8 offset-md-2"},r.a.createElement(F.b,{activeIndex:this.state.activeIndex,next:this.next,previous:this.previous},r.a.createElement(F.e,{items:this.props.dataReducer.images,activeIndex:this.state.activeIndex,onClickHandler:this.goToIndex}),t,r.a.createElement(F.d,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(F.d,{direction:"next",directionText:"Next",onClickHandler:this.next})))))}}]),t}(n.Component),G=Object(U.b)(function(e){return{dataReducer:e.dataReducer}})(K),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(p.a)(Object(p.a)(a))),a.printNumberHitory=a.printNumberHitory.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"printNumberHitory",value:function(){var e="",t=this.props.dataReducer.items;if(void 0==t)return e;var a=t.length-1;return t.forEach(function(t,n){e+=a!=n?t+", ":t+"."}),e}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mt10"},r.a.createElement("div",{className:"text-center"},r.a.createElement(F.a,{color:"danger",onClick:this.toggle},"Finish"))))),r.a.createElement(F.g,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(F.j,{toggle:this.toggle},"Carousel Selection History"),r.a.createElement(F.h,null,(!this.props.dataReducer.items||this.props.dataReducer.items.length>0)&&r.a.createElement("div",null,"Numbers selected: ",this.printNumberHitory()),(!this.props.dataReducer.items||0==this.props.dataReducer.items.length)&&r.a.createElement("div",null,"No History Found.")),r.a.createElement(F.i,null,r.a.createElement(F.a,{color:"primary",onClick:this.toggle},"Close"))))}}]),t}(n.Component),_=Object(U.b)(function(e){return{dataReducer:e.dataReducer}})(W),q=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"componentDidUpdate",value:function(e,t){console.log("update",this.props)}},{key:"render",value:function(){var e=this.props.loginReducer;return r.a.createElement("div",null,!e.login&&r.a.createElement(D,null),e.login&&r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(M,null),r.a.createElement(G,null),r.a.createElement(_,null),r.a.createElement(P,null)))}}]),t}(n.Component),B=Object(U.b)(function(e){return{loginReducer:e.loginReducer}})(q),J=(a(46),a(30));o.a.render(r.a.createElement(U.a,{store:L.store},r.a.createElement(J.a,{loading:null,persistor:L.persistor},r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.6de24046.chunk.js.map