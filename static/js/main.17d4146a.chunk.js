(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),o=n.n(r),c=(n(17),n(9)),s=n(4),l=n(5),p=n(7),d=n(6),u=n(2);function g(e,t){return fetch("".concat("https://pixabay.com/api","/?key=").concat("21813643-16e9f0b30c26c932714b1b168","&q=").concat(e,"&image_type=photo&page&per_page=12&page=").concat(t)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e.tags)))}))}function h(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}var b=Object(u.a)("div",{target:"e1cb2dpc3"})({name:"1ssw7nl",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),m=Object(u.a)("form",{target:"e1cb2dpc2"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),x=Object(u.a)("button",{target:"e1cb2dpc1"})({name:"1a3m8tj",styles:"display:inline-block;width:48px;height:48px;border:0;background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}"}),f=Object(u.a)("input",{target:"e1cb2dpc0"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),j=n(1),y=function(e){var t=e.onSubmit;return Object(j.jsx)(b,{children:Object(j.jsxs)(m,{onSubmit:function(e){e.preventDefault(),t(e.target.elements.query.value)},autoComplete:"off",children:[Object(j.jsx)(f,{type:"text",name:"query",autoFocus:!0,placeholder:"Search images and photos"})," ",Object(j.jsx)(x,{type:"submit"})]})})};var v=Object(u.a)("ul",{target:"eh3lazj0"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"});var k=Object(u.a)("li",{target:"e1mekrqo0"})({name:"12uiiq6",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12);& img{width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);}& img:hover{transform:scale(1.03);cursor:zoom-in;}"}),O=function(e){var t=e.webformatURL,n=void 0===t?"https://pixabay.com/en/blossom-bloom-flower-195893/":t,a=e.tags,i=void 0===a?"Awesome picture":a,r=e.onClick,o=e.img;return Object(j.jsx)(k,{onClick:function(){return r(o)},children:Object(j.jsx)("img",{src:n,alt:i})})},w=function(e){var t=e.images,n=e.onClick;return Object(j.jsx)(v,{children:t.map((function(e){return Object(j.jsx)(O,{webformatURL:e.webformatURL,tags:e.tags,onClick:n,img:e},e.id)}))})};var C=Object(u.a)("button",{target:"e1lho6em0"})({name:"1fj4rmc",styles:"display:block;margin:0 auto;padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;min-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,&:focus{background-color:#303f9f;}"}),S=function(e){var t=e.type,n=e.text,a=e.onClick;return Object(j.jsx)(C,{onClick:a,type:t,children:n})};var M=Object(u.a)("div",{target:"eu3a2j71"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),z=Object(u.a)("div",{target:"eu3a2j70"})({name:"8i9ttg",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200"}),I=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.props.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.onKeyDown)}},{key:"render",value:function(){var e=this.props.currImg,t=e.largeImageURL,n=e.tags;return Object(j.jsx)(z,{onClick:this.props.onClick,children:Object(j.jsx)(M,{children:Object(j.jsx)("img",{src:t,alt:n})})})}}]),n}(a.Component),q=n(12),E=n.n(q);var L=Object(u.a)("div",{target:"e19xuyl50"})({name:"1xze4kd",styles:"display:flex;justify-content:center;align-items:center;width:100%;height:calc(100vh - 80px)"}),D=function(){return Object(j.jsx)(L,{children:Object(j.jsx)(E.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})};var U=Object(u.a)("div",{target:"ei41pl81"})({name:"jhhym1",styles:"text-align:center;color:red;font-size:34px"}),F=Object(u.a)("div",{target:"ei41pl80"})({name:"kyj7j7",styles:"display:grid;grid-template-columns:1fr;grid-gap:16px;padding-bottom:24px"}),R=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={images:[],status:"idle",query:"",page:1,currImg:null},e.handleGalleryItemClick=function(t){e.setState({currImg:t})},e.handleSubmit=function(t){e.setState({query:t})},e.handleLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.closeModal=function(){e.setState({currImg:null})},e.handleModalMouseClick=function(t){"IMG"!==t.target.nodeName&&e.closeModal()},e.handleModalEscClick=function(t){"Escape"===t.code&&e.closeModal()},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state,i=a.query,r=a.page;t.query!==i&&(this.setState({page:1,status:"pending"}),g(i,r).then((function(e){if(0===e.hits.length)throw new Error("\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e");n.setState({images:e.hits,status:"resolved"})})).catch((function(){return[n.setState({status:"rejected",page:1,images:[],currImg:null})]}))),t.page!==r&&(this.setState({status:"pending"}),g(i,r).then((function(e){return n.setState((function(t){return{images:[].concat(Object(c.a)(t.images),Object(c.a)(e.hits)),status:"resolved"}}))})).then(h).catch((function(){return n.setState({status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.query,n=e.status,a=e.images,i=e.currImg,r="rejected"!==n&&""!==t&&a.length>=12;return Object(j.jsxs)(F,{children:[Object(j.jsx)(y,{onSubmit:this.handleSubmit}),"rejected"===n?Object(j.jsx)(U,{children:Object(j.jsx)("h2",{children:"\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})}):Object(j.jsx)(w,{images:this.state.images,onClick:this.handleGalleryItemClick}),"pending"===n?Object(j.jsx)(D,{}):r&&Object(j.jsx)(S,{type:"button",text:"Load More",onClick:this.handleLoadMore}),i&&Object(j.jsx)(I,{currImg:i,onClick:this.handleModalMouseClick,onKeyDown:this.handleModalEscClick})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.17d4146a.chunk.js.map