(window["webpackJsonpgoit-react-hw-03-image-finder"]=window["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{2:function(e,t,a){e.exports={photo_card:"PhotoCard_photo_card__189E0",stats:"PhotoCard_stats__3XRLi",stats_item:"PhotoCard_stats_item__1clgI",fullscreen_button:"PhotoCard_fullscreen_button__1dSBe",gallery_item:"PhotoCard_gallery_item__240R2"}},22:function(e,t,a){e.exports={search_form:"SearchForm_search_form__3vPzB"}},25:function(e,t,a){e.exports=a(57)},30:function(e,t,a){},31:function(e,t,a){},5:function(e,t,a){e.exports={gallery:"Gallery_gallery__3RNHd",button:"Gallery_button__3HT1a"}},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),c=a.n(r),l=(a(30),a(4)),i=a(18),s=a(19),m=a(23),u=a(20),d=a(24),g=(a(31),a(21)),p=a.n(g),h=a(5),f=a.n(h),_=a(2),b=a.n(_),v=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.openModal,r=e.likes,c=e.views,l=e.downloads,i=e.comments;return o.a.createElement("li",{className:b.a.gallery_item},o.a.createElement("div",{className:b.a.photo_card},o.a.createElement("img",{src:t,alt:"imghere"}),o.a.createElement("div",{className:b.a.stats},o.a.createElement("p",{className:b.a.stats_item},o.a.createElement("i",{className:"material-icons"},"thumb_up"),r),o.a.createElement("p",{className:b.a.stats_item},o.a.createElement("i",{className:"material-icons"},"visibility"),c),o.a.createElement("p",{className:b.a.stats_item},o.a.createElement("i",{className:"material-icons"},"comment"),i),o.a.createElement("p",{className:b.a.stats_item},o.a.createElement("i",{className:"material-icons"},"cloud_download"),l)),o.a.createElement("button",{onClick:function(){return n(a)},type:"button",className:b.a.fullscreen_button},o.a.createElement("i",{className:"material-icons",style:{pointerEvents:"none"}},"zoom_out_map"))))},E=function(e){var t=e.imagesArr,a=e.onClickBtn,n=e.openModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:f.a.gallery},t.map((function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.likes,c=e.views,l=e.comments,i=e.downloads;return o.a.createElement(v,{key:p.a.generate(),webformatURL:t,largeImageURL:a,likes:r,views:c,comments:l,downloads:i,openModal:n})}))),o.a.createElement("button",{type:"button",onClick:a,className:f.a.button},"Load more"))},w=a(22),y=a.n(w),N=function(e){var t=e.onSubmitForm,a=e.onChangeInput,n=e.inputSearch;return o.a.createElement("form",{className:y.a.search_form,onSubmit:t},o.a.createElement("input",{type:"text",value:n,onChange:a,autoComplete:"off",placeholder:"Search images..."}))},S=a(6),C=a.n(S),L=function(e){var t=e.largeURL,a=e.closeModal;return o.a.createElement("div",{className:C.a.overlay,onClick:a},o.a.createElement("div",{className:C.a.modal},o.a.createElement("img",{src:t,alt:"imgLarge"})))},M=a(7),k=a.n(M);k.a.defaults.baseURL="https://pixabay.com/api/";var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cat",a="&key=".concat("13282514-2415d37e85c92861470a7cbb5"),n="?image_type=photo&orientation=horizontal",o="&per_page=12",r="&page=".concat(e),c="&q=".concat(t);return k.a.get(n+o+a+r+c)},O=1,R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={imagesArr:[],pageNumber:1,inputSearch:"",isModalOpen:!1,largeImageURL:""},a.closeOnEscape=function(e){27===e.keyCode&&a.setState({isModalOpen:!1})},a.fetchingImg=function(){var e=a.state,t=e.pageNumber,n=e.inputSearch;I(t,n.toLowerCase()).then((function(e){return a.setState((function(t){return{imagesArr:[].concat(Object(l.a)(t.imagesArr),Object(l.a)(e.data.hits))}}),(function(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}))})).catch(console.log)},a.fetchingNewImg=function(){var e=a.state,t=e.pageNumber,n=e.inputSearch;I(t,n.toLowerCase()).then((function(e){return a.setState({imagesArr:Object(l.a)(e.data.hits)})}),(function(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})).catch(console.log)},a.changePageNumber=function(){a.setState((function(e){return{pageNumber:e.pageNumber+O}})),a.fetchingImg()},a.handleChangeInput=function(e){a.setState({inputSearch:e.target.value})},a.onSubmitForm=function(e){e.preventDefault(),a.setState({pageNumber:1}),a.fetchingNewImg()},a.openModalWindow=function(e){a.setState({isModalOpen:!0,largeImageURL:e})},a.closeModalWindow=function(e){"IMG"!==e.target.tagName&&a.setState({isModalOpen:!1})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchingImg(),document.addEventListener("keydown",this.closeOnEscape)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.closeOnEscape)}},{key:"render",value:function(){var e=this.state,t=e.imagesArr,a=e.inputSearch,n=e.isModalOpen,r=e.largeImageURL;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"app"},o.a.createElement(N,{onSubmitForm:this.onSubmitForm,onChangeInput:this.handleChangeInput,inputSearch:a}),o.a.createElement(E,{imagesArr:t,onClickBtn:this.changePageNumber,openModal:this.openModalWindow}),n&&o.a.createElement(L,{largeURL:r,closeModal:this.closeModalWindow})))}}]),t}(n.Component);c.a.render(o.a.createElement(R,null),document.getElementById("root"))},6:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}}},[[25,1,2]]]);
//# sourceMappingURL=main.0f932691.chunk.js.map