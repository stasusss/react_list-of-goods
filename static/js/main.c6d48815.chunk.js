(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(7),s=n.n(o),c=n(2),l=n(3),u=n(5),i=n(4),g=(n(13),n(1)),h=function(t){var e=t.goodsItem;return a.a.createElement("p",null,e)},m=function(t){var e=t.reverse,n=t.sortByAlphabet,r=t.reset,o=t.sortByLength,s=t.select,c=t.value,l=t.filterByLength;return a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:e},"Reverse"),a.a.createElement("button",{type:"button",onClick:n},"Sort By Names"),a.a.createElement("button",{type:"button",onClick:r},"Reset"),a.a.createElement("button",{type:"button",onClick:o},"Sort By Length"),a.a.createElement("select",{onChange:l,value:c},s.map((function(t){return a.a.createElement("option",{key:t,value:t},t)}))))},p=[1,2,3,4,5,6,7,8,9,10],f=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={goods:t.props.goods,minLength:1},t.sortByAlphabet=function(){t.setState((function(t){return{goods:Object(g.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goods:Object(g.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.filterByLength=function(e){t.setState({minLength:e.target.value,goods:Object(g.a)(t.props.goods).filter((function(t){return t.length>=e.target.value}))})},t.reverse=function(){t.setState((function(t){return{goods:Object(g.a)(t.goods).reverse()}}))},t.reset=function(){t.setState({goods:t.props.goods,minLength:1})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.minLength;return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t},a.a.createElement(h,{goodsItem:t}))}))),a.a.createElement(m,{sortByAlphabet:this.sortByAlphabet,sortByLength:this.sortByLength,filterByLength:this.filterByLength,reverse:this.reverse,reset:this.reset,select:p,value:n}))}}]),n}(a.a.Component),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isStarted:!1},t.start=function(){t.setState((function(t){return{isStarted:!t.isStarted}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.isStarted;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"".concat(d.length," Goods")),t?a.a.createElement(f,{goods:d}):a.a.createElement("button",{type:"button",onClick:this.start},"Start"))}}]),n}(a.a.Component);s.a.render(a.a.createElement(y,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c6d48815.chunk.js.map