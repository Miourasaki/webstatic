(function(){var e={5113:function(e,a,t){"use strict";var i=t(9242),n=(t(6229),t(7330),t(2062),t(3396)),o=t(7139),l=t.p+"static/img/favicon.4bd9088e.svg",s=t(4870),c=t(4161),u=t(2483);const r={class:"mb-8 flex flex-col justify-center items-center"},m={class:"w-16"},v={key:0,src:l,alt:""},d={key:1,t:"1691358254210",class:"w-16 h-16 text-red-900",viewBox:"0 0 1024 1024",fill:"currentColor",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"21520",width:"200",height:"200"},h=(0,n._)("path",{d:"M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m169.71 568.57a80 80 0 0 1-113.14 113.14L512 625.14l-56.57 56.57a80 80 0 1 1-113.14-113.14L398.86 512l-56.57-56.57a80 80 0 1 1 113.14-113.14L512 398.86l56.57-56.57a80 80 0 1 1 113.14 113.14L625.14 512z","p-id":"21521"},null,-1),g=[h],p={key:0,class:"font-semibold mt-3"},f=(0,n._)("iframe",{hidden:"",id:"auth-iframe",src:"https://seiya.mio.ski/post/token"},null,-1);var _={__name:"App",setup(e){const a=(0,u.tv)(),t=(0,s.iH)(0),i=(0,s.iH)(!1),l=(0,s.iH)("opacity-100"),h=(0,s.iH)(!1),_=localStorage.getItem("theme");if(_)document.documentElement.classList.add(_);else{const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;e?document.documentElement.classList.add("dark"):document.documentElement.classList.add("light")}(0,n.bv)((()=>{y()}));const b=()=>{l.value="opacity-0",h.value=!0,setTimeout((function(){const e=document.getElementById("loading");e&&e.remove()}),500)},y=()=>{const e=localStorage.getItem("UIMToken");e||window.addEventListener("message",(function(e){if("https://seiya.mio.ski"!=e.origin)return;const a=e.data;"No-UIMToken"==a||"Error-Origins"==a?this.localStorage.removeItem("UIMToken"):(this.localStorage.setItem("UIMToken",a),C())})),b()};function k(){var e=navigator.userAgent,a=/Chrome\/\d+/.test(e),t=/Chromium\/\d+/.test(e);return a||t}const w=()=>{const e=localStorage.getItem("UIMToken");function t(){const e=window.location.search,t=new URLSearchParams(e),i=t.get("token");i?"null"==i?(a.replace(location.pathname),H()):(localStorage.setItem("UIMToken",i),a.replace(location.pathname),C()):location.replace("https://seiya.mio.ski/post/token?redirect_uri="+location.href)}e?C():k()?window.addEventListener("message",(function(e){if("https://seiya.mio.ski"!=e.origin)return;const a=e.data;"No-UIMToken"==a?(this.localStorage.removeItem("UIMToken"),H()):"Error-Origins"==a?(this.localStorage.removeItem("UIMToken"),t()):(this.localStorage.setItem("UIMToken",a),C())})):t()},C=()=>{const e=localStorage.getItem("UIMToken");c.Z.get("https://api.mioseiya.com/app/account/web/auth",{headers:{Authorization:`UIMAC ${e}`}}).then((()=>{b()})).catch((()=>{localStorage.removeItem("UIMToken"),t.value>=2?H():(t.value++,w())}))};function H(){setTimeout((function(){location.href="https://seiya.mio.ski/login?redirect_uri="+location.href}),2e3)}return(e,a)=>{const t=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",{id:"loading",class:(0,o.C_)([l.value,"z-50 fixed bg-white select-none transition-opacity duration-500 ease-linear w-screen h-screen flex justify-center items-center"])},[(0,n._)("div",r,[(0,n._)("div",m,[i.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("img",v)),i.value?((0,n.wg)(),(0,n.iD)("svg",d,g)):(0,n.kq)("",!0)]),i.value?((0,n.wg)(),(0,n.iD)("div",p,"Error Login")):(0,n.kq)("",!0)]),f],2),h.value?((0,n.wg)(),(0,n.j4)(t,{key:0})):(0,n.kq)("",!0)],64)}}};const b=_;var y=b,k=t.p+"static/media/180574089-1-30080.9d42322f.mp4",w=t(8082);const C={class:"Home"},H=(0,n._)("div",{class:"home-image page4"},null,-1),x=[H],I=(0,n._)("div",{class:"home-image page3"},null,-1),M=[I],T=(0,n._)("div",{class:"home-image page2"},null,-1),S=[T],U=(0,n._)("div",{class:"home-image page1"},null,-1),E=[U],L=(0,n._)("video",{src:k,class:"home-video",id:"v1",autoplay:"",loop:"",muted:""},[(0,n._)("div",{class:"home-image page0"})],-1),O=[L],j={class:"home-image-after"},A=(0,n._)("div",null,"Darkness cannot drive out darkness",-1),B=(0,n._)("div",null,"only light can do that",-1),D=(0,n._)("div",null,"Hate cannot drive out hate",-1),z=(0,n._)("div",null,"only love can do that.",-1),P=(0,n._)("div",{class:"lin-select"}," ",-1),q=(0,n._)("div",{class:"home-text-end"},"Your sin , I bear",-1),N=[A,B,D,z,P,q],F=(0,n._)("div",null,"不管何时我都能这样坚持。",-1),K=(0,n._)("div",null,"怀有希望是一件错误的事情",-1),Y=(0,n._)("div",null,"我将无论多少次都会出言反驳",-1),R=(0,n._)("div",null,"不管何时我都能这样坚持。",-1),G=[F,K,Y,R],J=(0,n._)("div",null,"don't forget",-1),V=(0,n._)("div",null,"always somewhere",-1),Z=(0,n._)("div",null,"someone is fighting for you",-1),$=(0,n._)("div",null,"as long as you remember her",-1),W=(0,n._)("div",{style:{color:"#ffffff80","font-weight":"bold"}},"You are not alone.",-1),Q=(0,n._)("div",{class:"lin-select"}," ",-1),X=(0,n._)("a",{href:"https://lolilin.com/game/mio",target:"_blank",class:"home-btns home-btns-action opa-8 b-r-10"},[(0,n.Uk)("PLAY "),(0,n._)("i",{class:"bi bi-play-fill"})],-1),ee=[J,V,Z,$,W,Q,X],ae=(0,n._)("div",null,"夢はこの部屋の中で",-1),te=(0,n._)("div",null,"優しい歌をずっと君に歌っていた",-1),ie=(0,n._)("div",null,"何がほんとのことなの",-1),ne=(0,n._)("div",null,"一番強く信じられる世界を追いかけて",-1),oe=(0,n._)("div",{class:"home-text-end"},"君の銀の庭へ",-1),le=[ae,te,ie,ne,oe],se=(0,n._)("div",null,"奇跡も",-1),ce=(0,n._)("div",null,"魔法も",-1),ue=(0,n._)("div",null,"あるんだよ",-1),re=(0,n._)("div",{class:"home-text-end"},"後悔なんて、あるわけない",-1),me=[se,ce,ue,re],ve={class:"home-swiper-footer"},de={class:"home-center"},he={class:"home-page"},ge=["src"],pe=(0,n._)("div",{class:"home-range-a"},null,-1),fe=(0,n._)("div",{class:"home-range-lan"},null,-1),_e={class:"home-player"},be=(0,n._)("span",null,"  ",-1),ye={class:"home-info"},ke={class:"home-bkg"},we={class:"home-user"},Ce=(0,n._)("div",{style:{height:"2.5rem"}},null,-1),He={class:"home-cpage"},xe={style:{width:"30px"}},Ie={style:{width:"30px"}},Me={style:{width:"30px"}},Te={style:{width:"30px"}},Se={style:{width:"30px"}},Ue={class:"home-soul lin-select"},Ee={class:"soulCount"},Le={class:"home-navbar"},Oe=(0,n._)("div",{class:"home-navbar-right"},[(0,n._)("a",{href:"/",id:"logolink"},[(0,n._)("div",{class:"home-logo"},[(0,n._)("div",{class:"home-lo1"},[(0,n._)("div",{class:"home-lo2"},[(0,n._)("div",{class:"home-lo3"},[(0,n._)("div",{class:"home-lo4"})])])])])]),(0,n._)("a",{class:"a",href:"https://space.bilibili.com/94209973"},[(0,n._)("svg",{t:"1679256043556",class:"icon",viewBox:"0 0 2299 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2072",width:"200",height:"200"},[(0,n._)("path",{d:"M1775.840814 322.588002c6.0164 1.002733 53.144869-9.525967 55.150336-6.016401 3.0082 4.5123 24.065601 155.92504 18.550567 156.927774s-44.621635 10.027334-44.621635 10.027334c-3.0082-20.556034-28.577901-147.903173-29.079268-160.938707m75.205003-14.539634l20.556034 162.944174c10.5287-0.501367 53.144869-3.509567 57.155803-4.010934-6.0164-61.668103-16.545101-158.933241-16.545101-158.93324-20.054668-4.010934-41.112069-4.010934-61.166736 0m-40.610702 226.116376s92.752838-23.564234 126.344406-12.0328c17.046467 61.668103 48.131202 407.611118 51.139402 421.649386-21.057401 2.506833-90.246004 8.523234-95.761037 10.027333-4.5123-26.071068-81.72277-403.098818-81.722771-419.643919m343.436183-207.565809c5.515034 1.5041 54.648969-5.013667 55.150335-1.5041 1.002733 12.032801 6.0164 157.42914 0.501367 157.930507s-44.621635 4.010934-44.621635 4.010934c-1.002733-20.054668-12.032801-146.90044-11.030067-160.437341m75.70637-4.010933l4.010933 160.938707c10.5287 0 52.643502 2.506833 57.155803 2.005467-1.002733-61.668103 0-158.933241 0-158.933241-20.054668-3.509567-40.610702-5.013667-61.166736-4.010933m-64.676303 216.089043s94.758304-12.534167 126.845772 2.506833c7.019134 72.196803 6.0164 408.613852 7.019134 422.652119-21.558768 0-90.246004 1.002733-95.761038 2.005467-1.002733-26.071068-39.607968-410.619319-38.103868-427.164419m-220.099977-413.627519c54.648969 278.759879 96.262404 755.058234 97.766504 785.641602 0 0 43.117535 1.002733 91.750105 4.010934C2105.740095 614.383415 2070.644427 134.575493 2071.145794 119.033126c-12.032801-13.536901-126.344406 6.0164-126.344406 6.0164m-120.328005 659.297196c-10.5287-78.213204-290.291313-166.955108-447.720454-138.377206 0 0-19.553301-172.470141-27.073801-339.425248-6.517767-143.390873-1.002733-282.770813 0.501366-305.833681-10.5287-7.5205-123.837572 46.627102-185.004308 69.188603 0 0 73.199537 309.844614 126.344406 952.59671 0 0 84.730971 9.0246 230.12731-19.051934s317.365114-115.815705 302.825481-219.097244m-341.932083 140.88404l-24.566967-176.982441c6.0164-3.0082 156.927774 53.144869 172.971507 63.172203-2.506833 11.030067-148.40454 113.810238-148.40454 113.810238M610.664628 322.588002c6.0164 1.002733 53.144869-9.525967 55.150335-6.016401 3.0082 4.5123 24.065601 155.92504 18.550568 156.927774s-44.621635 10.027334-44.621635 10.027334c-3.0082-20.556034-28.577901-147.903173-29.079268-160.938707m75.205003-14.539634l20.556034 162.944174c10.5287-0.501367 53.144869-3.509567 57.155803-4.010934-6.517767-61.668103-16.545101-158.933241-16.545101-158.93324-20.054668-4.010934-41.112069-4.010934-61.166736 0m-40.610702 226.116376s92.752838-23.564234 126.344406-12.0328c17.046467 61.668103 48.131202 407.611118 51.139402 421.649386-21.057401 2.506833-90.246004 8.523234-95.761037 10.027333-4.5123-26.071068-81.72277-403.098818-81.722771-419.643919m343.436182-207.565809c5.515034 1.5041 54.648969-5.013667 55.150336-1.5041 1.002733 12.032801 6.0164 157.42914 0.501367 157.930507s-44.621635 4.010934-44.621635 4.010934c-1.002733-20.054668-11.531434-146.90044-11.030068-160.437341m75.706371-4.010933l4.010933 160.938707c10.5287 0 52.643502 2.506833 57.155803 2.005467-1.002733-61.668103 0-158.933241 0-158.933241-20.054668-3.509567-40.610702-4.5123-61.166736-4.010933m-64.676303 216.089043s94.758304-12.534167 126.845772 2.506833c7.019134 72.196803 6.0164 408.613852 7.019134 422.652119-21.558768 0-90.246004 1.002733-95.761038 2.005467-0.501367-26.071068-39.607968-410.619319-38.103868-427.164419m-220.099977-413.627519c54.648969 278.759879 96.262404 755.058234 97.766504 785.641602 0 0 43.117535 1.002733 91.750105 4.010934-28.577901-300.318647-63.67357-780.126569-63.172203-796.170303-12.032801-13.035534-126.344406 6.517767-126.344406 6.517767m-120.328005 659.297196c-10.5287-78.213204-290.291313-166.955108-447.720454-138.377206 0 0-19.553301-172.470141-27.073801-339.425248-6.517767-143.390873-1.002733-282.770813 0.501366-305.833681C174.475608-6.308547 61.166736 47.337689 0 69.89919c0 0 73.199537 309.844614 126.344406 952.59671 0 0 84.730971 9.0246 230.12731-19.051934s317.365114-115.815705 302.825481-219.097244m-341.932083 140.88404l-24.566967-176.982441c6.0164-3.0082 156.927774 53.144869 172.971507 63.172203-2.506833 11.030067-148.40454 113.810238-148.40454 113.810238","p-id":"2073"})])]),(0,n._)("a",{class:"a",href:"https://twitter.com/Miololilin"},[(0,n._)("i",{class:"bi bi-twitter"}),(0,n.Uk)(" TWITTER")]),(0,n._)("a",{class:"a",href:"https://github.com/lolilin"},[(0,n._)("i",{class:"bi bi-github"}),(0,n.Uk)(" GITHUB")]),(0,n._)("a",{class:"a",href:"https://afdian.net/@lolilin"},[(0,n._)("i",{class:"bi bi-box2-heart-fill"}),(0,n.Uk)(" 爱发电")])],-1),je={key:0,class:"home-swiper-account flex flex-row items-center"},Ae=["href"],Be=["src"],De=["innerHTML"],ze=["href"],Pe=(0,n._)("span",{class:"lin-select"}," ",-1),qe=(0,n._)("span",{class:"awaaw"},[(0,n._)("i",{class:"bi bi-list"})],-1);var Ne={__name:"HomeView",setup(e){(0,i.sj)((e=>({"4396aac2":_.value}))),document.title="Home | 白澪",document.body.style=" overflow: hidden;",document.addEventListener("visibilitychange",(function(){let e=document.visibilityState;"hidden"==e&&(document.title="Home | 再见"),"visible"==e&&(document.title="Home | 白澪")}));const a=(0,s.iH)(),t=(0,s.iH)(!0),l=(0,s.iH)("Loding..."),u=(0,s.iH)("https://seiya.mio.ski/login?redirect_uri="+location.href),r=(0,s.iH)(!1),m=(0,s.iH)(""),v=(0,s.iH)("0"),d=localStorage.getItem("UIMToken");c.Z.post("https://api.mioseiya.com/app/account/web/get/info",null,{headers:{Authorization:`UIMAC ${d}`}}).then((function(e){t.value=!0,r.value=!0;const i=e.data;l.value=i["nickname"],a.value=i["uid"].toString(),m.value="https://s1.lolis.fyi/seiya/avatar/"+(0,w.MD5)(a.value).toString(),u.value="https://seiya.mio.ski/"})).catch((function(){t.value=!0,l.value="sign in"}));const h=(0,s.iH)(),g=(0,s.iH)(),p=(0,s.iH)(),f=(0,s.iH)("bi bi-play-circle"),_=(0,s.iH)("0px"),b=(0,s.iH)("home-range hide");function y(){h.value.pause(),b.value="home-range hide",f.value="bi bi-play-circle"}function k(){h.value.currentTime=p.value.value}const H=function(){p.value.max=h.value.duration,_.value=12.5*h.value.currentTime/h.value.duration+.125+"rem",document.title="Home & 正在播放» "+W[Y.value]+" | 白澪"};function I(){h.value.volume=g.value.value/100}function T(){h.value.paused?(b.value="home-range",f.value="bi bi-pause-circle",h.value.play(),p.value.max=h.value.duration,setInterval(H,.1),I()):y()}const U=(0,s.iH)("home-btn page active"),L=(0,s.iH)("home-btn page"),A=(0,s.iH)("home-btn page"),B=(0,s.iH)("home-btn page"),D=(0,s.iH)("home-btn page"),z=(0,s.iH)("home-main hide"),P=(0,s.iH)("home-main hide"),q=(0,s.iH)("home-main hide"),F=(0,s.iH)("home-main hide"),K=(0,s.iH)("home-main"),Y=(0,s.iH)(0),R=(0,s.iH)(),J=["BackgroundUser1","BackgroundUser2","BackgroundUser3","BackgroundUser4","BackgroundUser5"],V=(0,s.iH)("https://1oli.cn/music/3915331329.mp3"),Z=["https://1oli.cn/music/2464368556.mp3","https://1oli.cn/music/Dragonflame.mp3","https://1oli.cn/music/Fly.mp3","https://1oli.cn/music/3915331329.mp3","https://1oli.cn/music/M500002HmJmG20gJ7A.mp3"],$=(0,s.iH)(),W=["Kirara Magic - Beyond the Sky (feat. Shion)","Kirara Magic - Dragonflame","Kirara Magic - Fly","Kirara Magic - Floating Star (feat. Shion)","C418 - Alpha"];function Q(){X(Y.value+1)}function X(e){Y.value=5==e?0:e,U.value="home-btn page",L.value="home-btn page",A.value="home-btn page",B.value="home-btn page",D.value="home-btn page",z.value="home-main hide",P.value="home-main hide",q.value="home-main hide",F.value="home-main hide",K.value="home-main hide",R.value=J[Y.value],$.value=W[Y.value],V.value=Z[Y.value],0==Y.value?(U.value="home-btn page active",K.value="home-main"):1==Y.value?(L.value="home-btn page active",F.value="home-main"):2==Y.value?(A.value="home-btn page active",q.value="home-main"):3==Y.value?(B.value="home-btn page active",P.value="home-main"):4==Y.value&&(D.value="home-btn page active",z.value="home-main"),setTimeout(T,50)}return R.value=J[Y.value],$.value=W[Y.value],V.value=Z[Y.value],(e,a)=>((0,n.wg)(),(0,n.iD)("div",C,[(0,n._)("main",{class:(0,o.C_)(z.value)},x,2),(0,n._)("main",{class:(0,o.C_)(P.value)},M,2),(0,n._)("main",{class:(0,o.C_)(q.value)},S,2),(0,n._)("main",{class:(0,o.C_)(F.value)},E,2),(0,n._)("main",{class:(0,o.C_)(K.value)},O,2),(0,n._)("div",j,[(0,n._)("main",{class:(0,o.C_)(["home-text",z.value])},N,2),(0,n._)("main",{class:(0,o.C_)(["home-text",P.value])},G,2),(0,n._)("main",{class:(0,o.C_)(["home-text",q.value])},ee,2),(0,n._)("main",{class:(0,o.C_)(["home-text",F.value])},le,2),(0,n._)("main",{class:(0,o.C_)(["home-text",K.value])},me,2)]),(0,n._)("div",ve,[(0,n._)("div",de,[(0,n._)("div",he,[(0,n._)("audio",{onEnded:Q,src:V.value,ref_key:"audioRef",ref:h,controls:"",name:"audio",id:"audio",style:{display:"none"}},null,40,ge),(0,n._)("input",{type:"range",ref_key:"range",ref:g,min:"0",value:"10",max:"100",id:"range",onChange:I,style:{width:"200px",opacity:"0"}},null,544),(0,n._)("div",{class:(0,o.C_)(b.value)},[pe,fe,(0,n._)("input",{type:"range",ref_key:"pro",ref:p,min:"0",value:"0",max:"0",id:"pro",onChange:k,class:"home-pro"},null,544)],2),(0,n._)("div",_e,[(0,n._)("button",{onClick:T,class:"home-butn playVid"},[(0,n._)("i",{class:(0,o.C_)(f.value)},null,2)]),be,(0,n._)("div",ye,[(0,n._)("div",null,(0,o.zw)($.value),1),(0,n._)("div",ke,[(0,n.Uk)("Background by "),(0,n._)("span",we,(0,o.zw)(R.value),1)])]),Ce,(0,n._)("div",He,[(0,n._)("div",xe,[(0,n._)("div",{onClick:a[0]||(a[0]=e=>X(0)),class:(0,o.C_)(U.value)},null,2)]),(0,n._)("div",Ie,[(0,n._)("div",{onClick:a[1]||(a[1]=e=>X(1)),class:(0,o.C_)(L.value)},null,2)]),(0,n._)("div",Me,[(0,n._)("div",{onClick:a[2]||(a[2]=e=>X(2)),class:(0,o.C_)(A.value)},null,2)]),(0,n._)("div",Te,[(0,n._)("div",{onClick:a[3]||(a[3]=e=>X(3)),class:(0,o.C_)(B.value)},null,2)]),(0,n._)("div",Se,[(0,n._)("div",{onClick:a[4]||(a[4]=e=>X(4)),class:(0,o.C_)(D.value)},null,2)])])])]),(0,n._)("div",Ue,[(0,n.Uk)(" today "),(0,n._)("span",Ee,(0,o.zw)(v.value),1),(0,n.Uk)(" Soul Point ")])])]),(0,n._)("header",Le,[Oe,t.value?((0,n.wg)(),(0,n.iD)("div",je,[r.value?((0,n.wg)(),(0,n.iD)("a",{key:0,class:"home-account flex flex-row items-center",href:u.value},[(0,n._)("img",{src:m.value,alt:"avatar"},null,8,Be),(0,n._)("span",{innerHTML:l.value},null,8,De)],8,Ae)):((0,n.wg)(),(0,n.iD)("a",{key:1,class:"home-account home-login",href:u.value},"sign in",8,ze)),Pe,qe])):(0,n.kq)("",!0)])]))}};const Fe=Ne;var Ke=Fe;const Ye=[{path:"/",name:"home",component:Ke,meta:{login:!1}},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,833)),meta:{login:!0}}],Re=(0,u.p7)({history:(0,u.PO)("/"),routes:Ye});var Ge=Re,Je=t(65),Ve=(0,Je.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),Ze=t(5213);let $e=null;null==localStorage.getItem("lang")&&localStorage.setItem("lang","local");const We=localStorage.getItem("lang");$e="local"==We?navigator.language:We;const Qe=(0,Ze.o)({legacy:!1,locale:$e,fallbackLocale:"en",messages:{zh:t(3462),"zh-CN":t(3462),en:t(8921)}});var Xe=Qe;const ea=(0,i.ri)(y);ea.use(Xe),ea.use(Ve),ea.use(Ge),ea.mount("#app")},2480:function(){},8921:function(e){"use strict";e.exports={lang:"English"}},3462:function(e){"use strict";e.exports={lang:"简体中文"}}},a={};function t(i){var n=a[i];if(void 0!==n)return n.exports;var o=a[i]={exports:{}};return e[i].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,i,n,o){if(!i){var l=1/0;for(r=0;r<e.length;r++){i=e[r][0],n=e[r][1],o=e[r][2];for(var s=!0,c=0;c<i.length;c++)(!1&o||l>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[c])}))?i.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(r--,1);var u=n();void 0!==u&&(a=u)}}return a}o=o||0;for(var r=e.length;r>0&&e[r-1][2]>o;r--)e[r]=e[r-1];e[r]=[i,n,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(a,i){return t.f[i](e,a),a}),[]))}}(),function(){t.u=function(e){return"static/js/about.23460145.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="miochyan:";t.l=function(i,n,o,l){if(e[i])e[i].push(n);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),r=0;r<u.length;r++){var m=u[r];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==a+o){s=m;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",a+o),s.src=i),e[i]=[n];var v=function(a,t){s.onerror=s.onload=null,clearTimeout(d);var n=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(t)})),a)return a(t)},d=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={826:0};t.f.j=function(a,i){var n=t.o(e,a)?e[a]:void 0;if(0!==n)if(n)i.push(n[2]);else{var o=new Promise((function(t,i){n=e[a]=[t,i]}));i.push(n[2]=o);var l=t.p+t.u(a),s=new Error,c=function(i){if(t.o(e,a)&&(n=e[a],0!==n&&(e[a]=void 0),n)){var o=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;s.message="Loading chunk "+a+" failed.\n("+o+": "+l+")",s.name="ChunkLoadError",s.type=o,s.request=l,n[1](s)}};t.l(l,c,"chunk-"+a,a)}},t.O.j=function(a){return 0===e[a]};var a=function(a,i){var n,o,l=i[0],s=i[1],c=i[2],u=0;if(l.some((function(a){return 0!==e[a]}))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(c)var r=c(t)}for(a&&a(i);u<l.length;u++)o=l[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(r)},i=self["webpackChunkmiochyan"]=self["webpackChunkmiochyan"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(5113)}));i=t.O(i)})();
//# sourceMappingURL=index.226bbb6c.js.map