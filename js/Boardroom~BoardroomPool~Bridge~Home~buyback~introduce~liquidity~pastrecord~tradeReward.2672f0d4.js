(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Boardroom~BoardroomPool~Bridge~Home~buyback~introduce~liquidity~pastrecord~tradeReward"],{"037b":function(t,e,a){t.exports=a.p+"img/pc_en_Heco.71e93b6b.jpg"},"482c":function(t,e,a){"use strict";a("f91f")},"4c7d":function(t,e,a){t.exports=a.p+"img/h5_en_Bsc.0102371f.jpg"},"647d":function(t,e,a){t.exports=a.p+"img/pc_zh-CN_Heco.a2c54346.jpg"},8455:function(t,e,a){var s={"./home/bsc_h5-home_nav.jpg":"ac78","./home/h5_en_Bsc.jpg":"4c7d","./home/h5_en_Heco.jpg":"bab6","./home/h5_zh-CN_Bsc.jpg":"a3ca","./home/h5_zh-CN_Heco.jpg":"dda2","./home/pc_en_Bsc.jpg":"c560","./home/pc_en_Heco.jpg":"037b","./home/pc_zh-CN_Bsc.jpg":"e4a3","./home/pc_zh-CN_Heco.jpg":"647d"};function i(t){var e=A(t);return a(e)}function A(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=A,t.exports=i,i.id="8455"},a3ca:function(t,e,a){t.exports=a.p+"img/h5_zh-CN_Bsc.40b12290.jpg"},aa95:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-banner",class:[t.classPage,t.getLanguage],on:{click:t.clickNav}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"/"==t.routerName,expression:"routerName == '/'"}],staticClass:"banner-con",style:{backgroundImage:"url("+t.getImg("home")+")"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:"/liquidity"==t.routerName,expression:"routerName == '/liquidity'"}]},[a("div",{staticClass:"pc"},[a("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("CurrentTransacObtainCurrencytionVolume"))+" ")]),a("div",{staticClass:"ban-center"},[a("p",{staticClass:"liquidity-mdx ban-center"},[t._v(" "+t._s(t.$t("MDXtotal"))+" "),a("CountUp",{attrs:{endVal:t.liquidity_mdex||0}}),t._v(" USDT ")],1)])]),a("div",{staticClass:"h5 li-h5title ban-start"},[a("div",{staticClass:"act-title"},[a("p",[t._v(t._s(t.$t("LiquidityMining")))]),a("p")]),a("div",{staticClass:"li-title",on:{click:t.h5_tab_evens}},[a("span",[t._v(" "+t._s(t.$t("TradePool"))+" ")])])]),a("div",{staticClass:"h5 li-banner-total"},[a("div",{staticClass:"banner-tit"},[t._v(t._s(t.$t("TotalLockIn"))+"(USDT)")]),a("div",{staticClass:"banner-sum"},[a("CountUp",{attrs:{endVal:t.liquidity_mdex||0}})],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/trading"==t.routerName,expression:"routerName == '/trading'"}]},[a("div",{staticClass:"pc"},[a("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("tradeTitle"))+" ")]),a("div",{staticClass:"new-banner-totals"},[a("div",{staticClass:"new-banner-total-white"},[a("div",{staticClass:"list-white"},[a("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool"))+" ")]),a("span",{staticClass:"list-white-own"},[a("CountUp",{attrs:{endVal:t.trading_totalReward}})],1),a("span",{staticClass:"list-white-one"},[t._v("MDX")])]),a("div",{staticClass:"list-white"},[a("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus"))+" ")]),a("span",{staticClass:"list-white-own"},[a("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}})],1),a("span",{staticClass:"list-white-one"},[t._v("MDX")])])]),a("button",{staticClass:"new-list-white-banner",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])]),a("div",{staticClass:"h5 li-h5title ban-start"},[a("div",{staticClass:"li-title",on:{click:t.h5_tab_li_evens}},[a("span",[t._v(" "+t._s(t.$t("LiquidityMining"))+" ")])]),a("div",{staticClass:"act-title act-mining"},[a("p",[t._v(t._s(t.$t("TradePool")))]),a("p")])]),a("div",{staticClass:"h5 trading-banner"},[a("div",{staticClass:"ban-start trading-ban-list"},[a("div",[a("p",[t._v(t._s(t.$t("TotalRewardOfCurrentPool")))]),a("p",[a("CountUp",{attrs:{endVal:t.trading_totalReward}}),a("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)]),a("div",[a("p",[t._v(t._s(t.$t("CurrentIndividualWithdrawableBonus")))]),a("p",[a("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}}),a("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)])]),a("div",{staticClass:"ban-center"},[a("button",{staticClass:"new-banner-btn-dra",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/boardroom"==t.routerName,expression:"routerName == '/boardroom'"}]},[a("div",{staticClass:"pc"},[a("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("text9"))+" ")]),a("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("text8"))+" ")])]),a("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("Directors"))+" ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/bridge"==t.routerName,expression:"routerName == '/bridge'"}]},[a("div",{staticClass:"pc"},[a("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(128==t.chainId?t.$t("MDEForEcoEurrencyTrading1"):56==t.chainId?t.$t("MDEForEcoEurrencyTrading2"):t.$t("MDEForEcoEurrencyTrading3"))+" ")]),a("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),a("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("crossChainBridge"))+" ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"BoardroomPool"==t.getRoute,expression:"'BoardroomPool' == getRoute"}]},[a("div",{staticClass:"pc"},[a("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("poolTitle"))+" ")]),a("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(128==t.chainId?t.$t("poolDescribe1"):56==t.chainId?t.$t("poolDescribe2"):t.$t("poolDescribe3"))+" ")])]),a("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("transaction"))+" ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/introduce"===t.routerName,expression:"routerName === '/introduce'"}]},[a("div",{staticClass:"pc"},[a("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),a("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"===t.$store.state.language?t._e():a("div",[a("h1",{staticClass:"introduce_banner"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),a("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"!==t.$store.state.language?t._e():a("div",[a("p",{staticClass:"text-info"},[t._v(t._s(t.$t("introduceComplete")))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/buyback"===t.routerName||"/pastrecord"===t.routerName,expression:"routerName === '/buyback' || routerName === '/pastrecord'"}]})])},i=[],A=(a("466d"),a("ac1f"),a("a9e3"),a("b0c0"),a("99af"),a("5319"),{name:"HomeBanner",data:function(){return{userReward:0,onresizeIsPC:!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},props:{liquidity_mdex:{type:String|Number,default:0},trading_userReward:{type:String|Number|Boolean,default:0},trading_options:{type:Object|Array,default:function(){}},trading_totalReward:{type:String|Number|Boolean,default:0}},computed:{classPage:function(){return"/"==this.routerName?this.getImg("home"):"/buyback"==this.routerName||"/pastrecord"==this.routerName?this.buybackLogotwo:this.chainName},buybackLogotwo:function(){return"Bsc"==this.chainName&&"zh-CN"==this.$store.state.language?"Bsc-buyback-cn-1":"Bsc"==this.chainName&&"zh-CN"!==this.$store.state.language?"Bsc-buyback-en-1":"Heco"==this.chainName&&"zh-CN"==this.$store.state.language?"Heco-buyback-cn-1":"Heco"==this.chainName&&"zh-CN"!==this.$store.state.language?"Heco-buyback-en-1":void 0},getLanguage:function(){return this.$store.state.language},getRoute:function(){return this.$route.name},isPC:function(){return this.$store.getters.isPC},routerName:function(){return this.$store.state.routerName},chainName:function(){return this.$store.state.chainName},chainId:function(){return this.$store.getters.chainId},bannerName:function(){var t="en"==this.$store.state.language?" Bsc-home-en":"Bsc-home-zh-CN";return"/"==this.routerName&&"Bsc"==this.chainName?t:this.chainName},isImo:function(){return"en"==this.$store.state.language?" Bsc-home-en":"Bsc-home-zh-CN"}},mounted:function(){var t=this;window.onresize=function(){t.onresizeIsPC=!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},$computed:{bnp:"bnp"},methods:{stitchingPic:function(){var t="";return this.isPC?t+="pc_":t+="h5_","zh-CN"===this.getLanguage?t+="zh-CN_":t+="en_",t+=this.chainName,t},getImg:function(t){var e={home:{"pc_zh-CN_Heco":"pc_zh-CN_Heco","pc_zh-CN_Bsc":"pc_zh-CN_Bsc",pc_en_Heco:"pc_en_Heco",pc_en_Bsc:"pc_en_Bsc","h5_zh-CN_Heco":"h5_zh-CN_Heco","h5_zh-CN_Bsc":"h5_zh-CN_Bsc",h5_en_Heco:"h5_en_Heco",h5_en_Bsc:"h5_en_Bsc"}};return a("8455")("./".concat(t,"/").concat(e[t][this.stitchingPic()],".jpg"))},h5_tab_li_evens:function(){this.$router.replace({path:"/liquidity"})},h5_tab_evens:function(){this.$router.replace({path:"/trading"})},clickNav:function(){"/"==this.routerName&&("Heco"===this.chainName?window.open("https://www.heco123.com/".concat("zh-CN"===this.getLanguage?"zh-cn":"en-us","/vote-campaignc")):this.$router.push("/buyback"))},onWithdrawal:function(){this.$emit("on-withdrawal")},goHomeUrl:function(){if("Bsc"==this.chainName&&"/"==this.routerName){var t="zh-CN"==this.$store.state.language?"https://mdexcom.zendesk.com/hc/zh-cn/articles/360059672551":"https://mdexcom.zendesk.com/hc/en-gb/articles/360059671831";window.open(t)}}}}),n=A,o=(a("482c"),a("2877")),r=Object(o["a"])(n,s,i,!1,null,"558b2e1a",null);e["a"]=r.exports},ac78:function(t,e){t.exports="data:image/jpeg;base64,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"},bab6:function(t,e,a){t.exports=a.p+"img/h5_en_Heco.8df0485d.jpg"},c560:function(t,e,a){t.exports=a.p+"img/pc_en_Bsc.26146452.jpg"},dda2:function(t,e,a){t.exports=a.p+"img/h5_zh-CN_Heco.24ed8ceb.jpg"},e4a3:function(t,e,a){t.exports=a.p+"img/pc_zh-CN_Bsc.59155280.jpg"},f91f:function(t,e,a){}}]);