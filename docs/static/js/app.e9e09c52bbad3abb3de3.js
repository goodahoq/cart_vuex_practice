webpackJsonp([1],{"+BTi":function(t,e){},"/iBA":function(t,e,i){var a={"./productA.jpg":"jnK3","./productB.jpg":"k3rn","./productC.jpg":"L/Cl"};function n(t){return i(s(t))}function s(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id="/iBA"},BvVO:function(t,e){},GXEp:function(t,e){},GgFk:function(t,e){},I4nB:function(t,e){},"KK+l":function(t,e){},KXR8:function(t,e){},"L/Cl":function(t,e,i){t.exports=i.p+"static/img/productC.d94849c.jpg"},N4Va:function(t,e,i){"use strict";var a=i("yuJj"),n=i.n(a),s=i("o6Wx");var c=function(t){i("KXR8")},r=i("VU/8")(n.a,s.a,!1,c,null,null);e.default=r.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};i.d(a,"addCart",function(){return V}),i.d(a,"delCart",function(){return $}),i.d(a,"emptyCart",function(){return q}),i.d(a,"updateFee",function(){return W}),i.d(a,"addNumInCart",function(){return K}),i.d(a,"delNumInCart",function(){return G});var n={};i.d(n,"getCart",function(){return H}),i.d(n,"getFee",function(){return Y});i("I4nB"),i("+BTi");var s=i("STLj"),c=i.n(s),r=(i("Zki6"),i("0kY3")),u=i.n(r),o=(i("cDSy"),i("e0Bm")),l=i.n(o),m=(i("GXEp"),i("mtrD")),d=i.n(m),v=i("7+uW"),p=i("Dd8w"),_=i.n(p),C=i("NYxO"),f={name:"home",data:function(){return{}},computed:_()({},Object(C.d)(["productList"]))},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},t._l(t.productList,function(e,n){return a("div",{staticClass:"card"},[a("router-link",{key:e.id,staticClass:"card-body",attrs:{to:{name:"Detail",query:{productId:n+1}}}},[a("div",{staticClass:"productImg"},[a("img",{staticClass:"w100",attrs:{src:i("/iBA")("./"+e.item+".jpg"),alt:""}})]),t._v(" "),a("div",{staticClass:"productName"},[t._v(t._s(e.item))]),t._v(" "),a("div",{staticClass:"productPrice"},[t._v("$"+t._s(e.price))])])],1)}))},staticRenderFns:[]};var g=i("VU/8")(f,h,!1,function(t){i("W6W6")},null,null).exports,I=i("fZjL"),N=i.n(I),w=i("zBLq"),b={name:"detail",components:{VueHZoom:i.n(w).a},data:function(){return{productId:this.$route.query.productId,nowSize:"S",nowNum:1,isLoading:!1}},mounted:function(){this.updateFee()},watch:{nowSize:function(){this.nowNum>=this.sizeInventory[this.nowSize]?this.nowNum=this.sizeInventory[this.nowSize]:this.nowNum=1},nowNum:function(){this.nowNum>this.maxInputNum&&(this.nowNum=this.maxInputNum)}},computed:_()({},Object(C.d)(["productList"]),Object(C.c)(["getCart","getFee"]),{buttonMsg:function(){return this.isLoading?"LOADING":"ADD TO CART"},sizeInventory:function(){return this.productList[this.productId-1].inventory},currentItemNum:function(){var t=this,e=this.getCart.filter(function(e){return e.item==t.productList[t.productId-1].item&&e.size==t.nowSize});return 0!==N()(e).length?e[0].num:0},maxInputNum:function(){return this.sizeInventory[this.nowSize]-this.currentItemNum>0?this.sizeInventory[this.nowSize]-this.currentItemNum:0}}),methods:_()({},Object(C.b)(["addCart","updateFee"]),{clickAddCart:function(){var t=this,e={item:this.productList[this.productId-1].item,price:this.productList[this.productId-1].price,size:this.nowSize,num:Number(this.nowNum)};this.isLoading=!0,setTimeout(function(){t.isLoading=!t.isLoading,t.addCart(e),t.updateFee(),t.nowNum=1},500)}})},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("div",{staticClass:"detail-col"},[a("div",{staticClass:"detailImg"},[a("vue-h-zoom",{staticClass:"w100",attrs:{image:i("/iBA")("./"+t.productList[t.productId-1].item+".jpg"),"image-full":i("/iBA")("./"+t.productList[t.productId-1].item+".jpg"),"zoom-level":2,width:300,height:300,"zoom-window-x":474,"zoom-window-y":53}})],1)]),t._v(" "),a("div",{staticClass:"detail-col text-left"},[a("div",{staticClass:"detail-body"},[a("div",{staticClass:"name mB10"},[t._v(t._s(t.productList[t.productId-1].item))]),t._v(" "),a("div",{staticClass:"price mB10 "},[t._v("$"+t._s(t.productList[t.productId-1].price))]),t._v(" "),a("div",{staticClass:"priceLine w54"}),t._v(" "),a("div",{staticClass:"size mB10 mT20"},[a("span",{staticClass:"subtitle"},[t._v("Size : ")]),t._v(" "),a("el-select",{staticClass:"size-body",attrs:{placeholder:"size"},model:{value:t.nowSize,callback:function(e){t.nowSize=e},expression:"nowSize"}},[a("el-option",{attrs:{value:"S"}},[t._v("S")]),t._v(" "),a("el-option",{attrs:{value:"M"}},[t._v("M")]),t._v(" "),a("el-option",{attrs:{value:"L"}},[t._v("L")])],1)],1),t._v(" "),0!=t.maxInputNum?a("div",{staticClass:"num mB10"},[a("span",{staticClass:"subtitle"},[t._v("Quantity : ")]),t._v(" "),a("el-input-number",{staticClass:"num-body",attrs:{min:0,max:t.maxInputNum,label:"quantity"},model:{value:t.nowNum,callback:function(e){t.nowNum=e},expression:"nowNum"}}),t._v(" "),0!=t.maxInputNum&&0!=t.nowNum?a("div",{staticClass:"inventory mL100"},[a("small",[t._v(t._s(t.maxInputNum)+" left to buy | "+t._s(t.sizeInventory[t.nowSize])+" in Stock")])]):t._e(),t._v(" "),0!=t.maxInputNum&&0==t.nowNum?a("div",{staticClass:"errorMsg mL100"},[t._v("Can't be zero")]):t._e()],1):a("div",{staticClass:"num outOfStock mB10"},[0==t.maxInputNum?a("span",{staticClass:"mL10",staticStyle:{color:"rgb(224, 95, 95)"}},[t._v("Nothing Left To Buy")]):t._e()]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("button",{staticClass:"btn-l btn mT50",attrs:{disabled:0==t.nowNum||t.isLoading},on:{click:t.clickAddCart}},[t.isLoading?a("span",{staticClass:"spinner"}):t._e(),t._v(t._s(t.buttonMsg)+"\n                ")])])],1)])])},staticRenderFns:[]};var A=i("VU/8")(b,k,!1,function(t){i("KK+l")},null,null).exports,z=i("N4Va"),L={name:"navbar",data:function(){return{showCart:!1}},computed:_()({},Object(C.c)(["getCart","getFee"]),{nowNumSum:function(){var t=0;for(var e in this.getCart)t+=this.getCart[e].num;return t}}),methods:{clickMask:function(){this.showCart=!1}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"navBar"},[a("router-link",{staticClass:"navHome",attrs:{to:"/home"}},[t._v("home")]),t._v(" "),a("div",{staticClass:"navCart"},[a("div",{staticClass:"icon",on:{click:function(e){t.showCart=!t.showCart}}},[a("i",{staticClass:"fas fa-cart-plus"}),t._v(" "),a("span",{staticClass:"numSum"},[a("small",[t._v("("+t._s(t.nowNumSum)+")")])])]),t._v(" "),t.showCart?a("div",{staticClass:"floatCart"},[0==t.getCart.length?a("div",{staticClass:"empty-item"},[t._v("\n                    There is nothing here.\n                ")]):t._e(),t._v(" "),t._l(t.getCart,function(e,n){return a("div",{staticClass:"eachFloat-item"},[a("div",{staticClass:"each-img"},[a("div",{staticClass:"img"},[a("img",{staticClass:"w100",attrs:{src:i("/iBA")("./"+e.item+".jpg")}})])]),t._v(" "),a("div",{staticClass:"each-content"},[a("div",{staticClass:"each-name"},[t._v(t._s(e.item))]),t._v(" "),a("div",{staticClass:"each-size"},[t._v("size:"+t._s(e.size))]),t._v(" "),a("div",{staticClass:"each-price"},[a("span",{staticClass:"numbers"},[t._v(t._s(e.num))]),t._v("x\n                            "),a("span",{staticClass:"priceOfItem"},[t._v("$"+t._s(e.price))])])])])}),t._v(" "),0!=t.getCart.length?a("div",{staticClass:"eachFloat-footer mT20"},[a("div",{staticClass:"each-fee"},[t._v("total:  $"+t._s(t.getFee))])]):t._e(),t._v(" "),0!=t.getCart.length?a("div",{staticClass:"btnGroup mT20"},[a("router-link",{staticClass:"btn-s btn pull-left",attrs:{to:{name:"CartPage"}},nativeOn:{click:function(e){return t.clickMask(e)}}},[t._v("view cart")]),t._v(" "),a("router-link",{staticClass:" btn-s btn pull-right",attrs:{to:{name:"Checkout"}}},[t._v("checkout")])],1):t._e()],2):t._e(),t._v(" "),t.showCart?a("div",{staticClass:"mask",on:{click:t.clickMask}}):t._e()])],1)])},staticRenderFns:[]};var E=i("VU/8")(L,y,!1,function(t){i("BvVO")},null,null).exports,T={name:"cartPage",data:function(){return{errorMsg:""}},mounted:function(){this.updateFee()},watch:{getCart:function(){this.updateFee()}},computed:_()({},Object(C.d)(["productList"]),Object(C.c)(["getCart","getFee"])),methods:_()({},Object(C.b)(["updateFee","delCart","emptyCart","addNumInCart","delNumInCart"]),{updateNum:function(t,e){var i=this,a={};this.productList.filter(function(e){return e.item==i.getCart[t].item}).forEach(function(t){a=t});var n=a.inventory[this.getCart[t].size];1==e?this.getCart[t].num<n&&(this.addNumInCart(t),this.updateFee()):-1==e&&this.getCart[t].num>1&&(this.delNumInCart(t),this.updateFee())},getProductName:function(t){return"productA"===t?1:"productB"===t?2:"productC"===t?3:void 0}})},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cartPage "},[a("div",{staticClass:"cartContent"},[0==t.getCart.length?a("div",{staticClass:"ecahItem-empty"},[a("p",[t._v("ＨＡＶＥ ＮＯＴＨＩＮＧ")]),t._v(" "),a("router-link",{staticClass:"btn btn-l mT40 mB20",attrs:{to:{name:"Home"}}},[t._v("buy")])],1):a("div",{staticClass:"eachItem text-left"},[a("div",{staticClass:"eachItem-img"}),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"eachItem-num itemAnimated"},[t._v("quantity")]),t._v(" "),a("div",{staticClass:"eachItem-price itemAnimated"},[t._v("price")]),t._v(" "),a("div",{staticClass:"eachItem-fee itemAnimated"},[t._v("fee")]),t._v(" "),a("div",{staticClass:"eachItem-del itemAnimated"},[t._v("delete")])]),t._v(" "),t._l(t.getCart,function(e,n){return a("div",{key:n,staticClass:"eachItem text-left"},[a("div",{staticClass:"eachItem-img"},[a("div",{staticStyle:{display:"inline-flex"}},[a("router-link",{staticClass:"img",attrs:{to:{name:"Detail",query:{productId:t.getProductName(e.item)}}}},[a("img",{staticClass:"w100",attrs:{src:i("/iBA")("./"+e.item+".jpg"),alt:""}})])],1)]),t._v(" "),a("div",{staticClass:"eachItem-nameAndSize"},[a("div",{staticClass:"eachItem-name"},[t._v(t._s(e.item))]),t._v(" "),a("div",{staticClass:"eachItem-size"},[t._v("size:"+t._s(e.size))])]),t._v(" "),a("div",{staticClass:"eachItem-num"},[a("span",{staticClass:"num-add mR5",on:{click:function(e){t.updateNum(n,1)}}},[a("i",{staticClass:"far fa-plus-square"})]),t._v("\n                "+t._s(e.num)+"\n                "),a("span",{staticClass:"num-del mL5",on:{click:function(e){t.updateNum(n,-1)}}},[a("i",{staticClass:"far fa-minus-square"})]),t._v(" "),a("div",{staticClass:"eachItem-err"},[t._v(t._s(t.errorMsg))])]),t._v(" "),a("div",{staticClass:"eachItem-price"},[a("i",{staticClass:"fas fa-dollar-sign mR5"}),t._v(t._s(e.price))]),t._v(" "),a("div",{staticClass:"eachItem-fee"},[a("i",{staticClass:"fas fa-dollar-sign mR5"}),t._v(t._s(e.num*e.price))]),t._v(" "),a("div",{staticClass:"eachItem-del itemAnimated text-center",on:{click:function(e){t.delCart(n)}}},[a("i",{staticClass:"fas fa-trash-alt fa-2x"})])])}),t._v(" "),a("div",{staticClass:"cartPageLine mB20 mT20"}),t._v(" "),0!=t.getCart.length?a("div",{staticClass:"cart-totalFee text-right mT30"},[t._v("total:  "),a("i",{staticClass:"fas fa-dollar-sign mR5"}),t._v(t._s(t.getFee))]):t._e(),t._v(" "),a("div",{staticClass:"btnGroup m30"},[a("a",{staticClass:"btn btn-l pull-left",on:{click:function(e){t.emptyCart()}}},[t._v("empty cart")]),t._v(" "),a("router-link",{staticClass:"btn  btn-l pull-right",attrs:{to:{name:"Checkout"}}},[t._v("checkout")])],1)],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"eachItem-nameAndSize"},[e("div",{staticClass:"eachItem-name itemAnimated"},[this._v("item")])])}]};var F=i("VU/8")(T,x,!1,function(t){i("dVQq")},null,null).exports,S={name:"App",components:{navbar:E,home:g,detail:A,checkout:z.default,cartPage:F}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var j=i("VU/8")(S,B,!1,function(t){i("GgFk")},null,null).exports,D=i("/ocq");v.default.use(D.a);var M,R=new D.a({routes:[{path:"/home",name:"Home",component:g},{path:"/checkout",name:"Checkout",component:z.default},{path:"/detail",name:"Detail",component:A},{path:"/cartPage",name:"CartPage",component:F},{path:"/*",redirect:"/home"}]}),O=i("bOdI"),P=i.n(O),U=(M={},P()(M,"ADD_CART",function(t,e){t.cart.push(e)}),P()(M,"INCREAMENT_ITEM_NUM",function(t,e){var i=e.item,a=e.size,n=e.num;t.cart.find(function(t){return t.item===i&&t.size===a}).num+=n}),P()(M,"DEL_CART",function(t,e){t.cart.splice(e,1)}),P()(M,"EMPTY_CART",function(t){t.cart=[]}),P()(M,"UPDATE_FEE",function(t){var e=0;t.cart.forEach(function(t){e+=t.price*t.num}),t.totalFee=e}),P()(M,"ADD_NUM_IN_CART",function(t,e){t.cart[e].num+=1}),P()(M,"DEL_NUM_IN_CART",function(t,e){t.cart[e].num-=1}),M),V=function(t,e){var i=t.state,a=t.commit;e.num>0&&(i.cart.find(function(t){return t.item===e.item&&t.size===e.size})?a("INCREAMENT_ITEM_NUM",{item:e.item,size:e.size,num:e.num}):a("ADD_CART",e));a("UPDATE_FEE")},$=function(t,e){var i=t.commit;i("DEL_CART",e),i("UPDATE_FEE")},q=function(t){var e=t.commit;e("EMPTY_CART"),e("UPDATE_FEE")},W=function(t){t.state;(0,t.commit)("UPDATE_FEE")},K=function(t,e){t.state;(0,t.commit)("ADD_NUM_IN_CART",e)},G=function(t,e){t.state;(0,t.commit)("DEL_NUM_IN_CART",e)},H=function(t){return t.cart},Y=function(t){return t.totalFee};v.default.use(C.a);var X=new C.a.Store({state:{productList:[{item:"productA",price:100,inventory:{S:12,M:8,L:5}},{item:"productB",price:200,inventory:{S:5,M:3,L:6}},{item:"productC",price:300,inventory:{S:9,M:7,L:7}}],cart:[],totalFee:0},mutations:U,getters:n,actions:a,strict:!0});i("YWLt");v.default.use(C.a),v.default.use(d.a),v.default.use(l.a),v.default.use(u.a),v.default.use(c.a),v.default.config.productionTip=!1,new v.default({el:"#app",router:R,store:X,components:{App:j},template:"<App/>"})},W6W6:function(t,e){},YWLt:function(t,e){},Zki6:function(t,e){},cDSy:function(t,e){},dVQq:function(t,e){},jnK3:function(t,e,i){t.exports=i.p+"static/img/productA.e70f1a0.jpg"},k3rn:function(t,e,i){t.exports=i.p+"static/img/productB.e0eea36.jpg"},o6Wx:function(t,e,i){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"checkout"},[this._v("\n    checkout\n")])},staticRenderFns:[]};e.a=a},yuJj:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e9e09c52bbad3abb3de3.js.map