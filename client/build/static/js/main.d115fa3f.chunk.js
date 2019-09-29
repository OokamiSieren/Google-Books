(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(30),r=a.n(o),c=a(12),i=a(6),s=a(31),m=a(7),u=a(8),d=a(10),v=a(9),h=a(11);a(39);var E=function(){return l.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"jumbo"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4",id:"header"},"Google Books!")))};a(40);var f=function(e){var t=e.q,a=e.handleInputChange,n=e.handleFormSubmit;return l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"text"},"Book Search: Enter a book title to begin."),l.a.createElement("form",{className:"create-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"text"},"Book Ttitle: "),l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:t,name:"q",onChange:a,required:!0}),l.a.createElement("br",null),l.a.createElement("button",{onClick:n,type:"submit",className:"text",id:"search"},"Search"))))};a(41);var b=function(e){var t=e.title,a=e.subtitle,n=e.authors,o=e.link,r=e.description,c=e.image,i=e.Button;return l.a.createElement("ul",null,l.a.createElement("div",{className:"row flex-wrap-reverse"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("h3",{className:"font-italic"},t),a&&l.a.createElement("h5",{className:"font-italic"},a)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"btn-container"},l.a.createElement("a",{className:"btn btn-info",target:"_blank",rel:"noopener noreferrer",href:o,id:"text"},"View"),l.a.createElement(i,null)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("p",{className:"font-italic small"},"Written by ",n))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12-sm-4-md-2"},l.a.createElement("img",{className:"img-thumbnail img-fluid w-100",src:c,alt:t})),l.a.createElement("div",{className:"col-12-sm-8-md-10"},l.a.createElement("p",null,r))))};var g=function(e){var t=e.icon,a=e.title,n=e.children;return l.a.createElement("div",{className:"card mt-4"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",null,l.a.createElement("strong",null,l.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",a))),l.a.createElement("div",{className:"card-body"},n))},p=a(15),N=a.n(p),k={getBooks:function(e){return N.a.get("/api/google",{params:{q:e}})},getSavedBooks:function(){return N.a.get("/api/books")},deleteBook:function(e){return N.a.delete("/api/books/"+e)},saveBook:function(e){return N.a.post("/api/books",e)}};a(59);var w=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement("footer",{className:"page-footer"}),l.a.createElement("br",null))},B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],q:"",message:"No results yet. Have you searched for a title?"},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(s.a)({},n,l))},a.getBooks=function(){k.getBooks(a.state.q).then(function(e){return a.setState({books:e.data})}).catch(function(e){console.log(e),a.setState({books:[],message:"No New Books Found, Try a Different Query"})})},a.handleFormSubmit=function(e){e.preventDefault(),a.getBooks()},a.handleBookSave=function(e){var t=a.state.books.find(function(t){return t.id===e});k.saveBook({googleId:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then(function(){return a.getBooks()})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(E,null)),l.a.createElement("div",{className:"col-md-12"},l.a.createElement(f,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(g,{title:"Results"},this.state.books.length?l.a.createElement("ul",null,this.state.books.map(function(t){return l.a.createElement(b,{key:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors.join(", "),description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return l.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-primary ml-2"},"Save")}})})):l.a.createElement("h2",{className:"text-center"},this.state.message))))),l.a.createElement(w,null))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={books:[]},a.getSavedBooks=function(){k.getSavedBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleBookDelete=function(e){k.deleteBook(e).then(function(e){return a.getSavedBooks()})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(E,null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(g,{title:"Saved Books",icon:"download"},this.state.books.length?l.a.createElement("ul",null,this.state.books.map(function(t){return l.a.createElement(b,{key:t._id,title:t.title,subtitle:t.subtitle,link:t.link,authors:t.authors.join(", "),description:t.description,image:t.image,Button:function(){return l.a.createElement("button",{onClick:function(){return e.handleBookDelete(t._id)},className:"btn btn-danger ml-2",id:"text"},"Delete")}})})):l.a.createElement("h2",{className:"text-center"},"No Saved Books")))),l.a.createElement(w,null))}}]),t}(n.Component);var S=function(){return l.a.createElement("div",{className:"containter"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(E,null,l.a.createElement("h1",{className:"text-center"},"404 Page Not Found"),l.a.createElement("h1",{className:"text-center"},l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))),l.a.createElement(w,null))},j=(a(60),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1,width:window.innerWidth},a.updateWidth=function(){var e={width:window.innerWidth};a.state.open&&e.width>991&&(e.open=!1),a.setState(e)},a.toggleNav=function(){a.setState({open:!a.state.open})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-2"},l.a.createElement(c.b,{className:"navbar-brand",to:"/",id:"text"},"Google Books"),l.a.createElement("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{onClick:this.toggleNav,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/",id:"text"},"Search")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{onClick:this.toggleNav,className:"/saved"===window.location.pathname?"nav-link active":"nav-link",to:"/saved",id:"text"},"Saved")))))}}]),t}(n.Component));a(65);var x=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{id:"mainContainer"},l.a.createElement(j,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:B}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:y}),l.a.createElement(i.a,{component:S}))))};r.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d115fa3f.chunk.js.map