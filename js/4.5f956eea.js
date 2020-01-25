(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{5033:function(t){t.exports=JSON.parse('{"b":[{"github":"Meteo","imgs":[{"src":"meteo1-min.png"},{"src":"meteo2-min.png"},{"src":"meteo3-min.png"}],"header":"Autonomous outdoor weather station with Wi-Fi","used":"Arduino, NodeJS, MongoDB, MongoClient, JavaScript, Vue/Quasar","text":"The weather station is powered by a lithium battery, which is charged from the solar panel. Data is transmitted via Wi-Fi to the back-end Zeit.co and stored in Mongodb. Universal get request: / data? Start = START_DATE & finish = FINISH_DATE & tframe = TFRAME & step = STEP. The TFRAME can be month, day, hour, minute. A small frontend is written on the quasar. To view, click TO DEPLOY.","link":"https://github.com/alexanderkif/meteo","site":"https://alexanderkif.github.io/meteo-front"},{"github":"Fishnbuy","imgs":[{"src":"fnb1-min.png"},{"src":"fnb2-min.png"},{"src":"fnb3-min.png"}],"header":"Training project FISHNBUY","used":"Java, SpringBoot, Maven, Secure, BCrypt, Mongo DB, MongoRepository, GridFS, Lombok, BEM, JavaScript, Pug, SCSS","text":"A training project for storing, modifying, and deleting user messages with pictures. Backend was written using SpringBoot. External interface - with Pug, SCSS, BEM, Javascript (without frameworks). To work with users and records, AccountRepository and DocRepository are used. For work with images used GridFsOperations. You can delete and modify only your own documents.","link":"https://github.com/alexanderkif/fishandbuy","site":"https://fishandbuy.herokuapp.com/"},{"github":"mytask","imgs":[{"src":"strah1-min.png"},{"src":"strah2-min.png"},{"src":"strah3-min.png"}],"header":"Test task","used":"Vue, Vuetify, Material, Springboot, Postgresql, Maven","text":"A Mytask project for calculating insurance payments for agents of an insurance company was made as a test task. Calculate, control of filling in the required fields, storage, search of documents and data of insured persons were implemented.","link":"https://github.com/alexanderkif/Mytask","site":"http://dogov.herokuapp.com"},{"github":"solartracker","imgs":[{"src":"st1-min.png"},{"src":"st2-min.png"},{"src":"st3-min.png"}],"header":"We won robotics competition","used":"Quasar/vue, PWA","text":"My son, with my help, made a robot that watches the sun. The tracker independently rotates the solar panels in the direction of light during the day to collect more solar energy. We took part in the Junior Russian schoolchildren’s competition at Moscow University of MEPhI. And my son won the Robotics nomination.","link":"https://github.com/alexanderkif/solarTracker","site":"https://alexanderkif.github.io/solarTracker/"},{"github":"modifiable-slider","imgs":[{"src":"slider1.png"},{"src":"slider2-min.png"}],"header":"Modifiable slider","used":"Webpack, JS, Pug, SCSS, BEM","text":"This is a learning assignment. The slider is written in Javascript with the ability to change the appearance. Javascript classes is used. Mentors reviewed the code and wrote issue.","link":"https://github.com/alexanderkif/modifiable-slider","site":"https://alexanderkif.github.io/modifiable-slider/"},{"github":"FlatUI","imgs":[{"src":"flatUI-min.png"}],"header":"Test task","used":"HTML, Pug, CSS, SCSS, BEM, Javascript, Webpack","text":"This is a learning assignment. Several basics web elements is written in HTML, CSS, Javascript with different appearance. Javascript classes is used. Mentors reviewed the code and wrote issue.","link":"https://github.com/alexanderkif/flatUI","site":"https://alexanderkif.github.io/flatUI/"},{"github":"js-test-task","imgs":[{"src":"jstask-min.png"}],"header":"Javascript test task","used":"JavaScript, HTML, CSS","text":"This is a test task for an interview. The same class is used to calculate the moves of a chess knight and visualize moves on a chessboard.","link":"https://github.com/alexanderkif/js-test-task","site":"https://alexanderkif.github.io/js-test-task/"},{"github":"calculator","imgs":[{"src":"calc.png"}],"header":"Java FX","used":"JavaFX","text":"This is my student coursework \\"Calculator\\" written in JavaFX for the university.","link":"https://github.com/alexanderkif/Calculator","site":"https://github.com/alexanderkif/Calculator/raw/master/Calculator.jar"}],"a":[{"link":"https://github.com/alexanderkif","icon":"github.svg"},{"link":"https://www.linkedin.com/in/aleksandr-nikiforov-8a417712a/","icon":"linkedin.svg"},{"link":"https://www.facebook.com/aleksandr.nikiforov.100","icon":"facebook.svg"},{"link":"https://t.me/alexanderkif","icon":"telegram.svg"},{"link":"https://wa.me/79120189321","icon":"whatsapp.svg"},{"link":"mailto:alexander_kif@mail.ru","icon":"mail-dot-ru.svg"}]}')},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[t._l(t.myprojects,(function(t){var e=t.github,s=t.imgs,i=t.header,n=t.used,r=t.text,o=t.link,c=t.site,l=t.index;return a("my-project",{key:l,attrs:{github:e,imgs:s,header:i,used:n,text:r,link:o,site:c,id:e.toLowerCase()}})})),a("q-parallax",{attrs:{src:"statics/vscode2-min.png",height:75}})],2)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-px-md"},[a("q-parallax",{attrs:{src:"statics/vscode2-min.png",height:70}},[a("h3",{staticClass:"q-my-sm text-center text-uppercase text-white text-bold"},[t._v(t._s(t.github))])])],1),a("div",{staticClass:"row justify-between"},[a("div",{staticClass:"q-pa-md col-12 col-md-8"},[a("q-card",{staticClass:"my-card full-height"},[a("q-carousel",{attrs:{animated:"",fullscreen:t.fullscreen,navigation:"",swipeable:"",infinite:"",arrows:"","control-color":"grey-6"},on:{"update:fullscreen":function(e){t.fullscreen=e}},scopedSlots:t._u([{key:"control",fn:function(){return[a("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:t.fullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(e){t.fullscreen=!t.fullscreen}}})],1)]},proxy:!0}]),model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.imgs,(function(t,e){return a("q-carousel-slide",{key:e,attrs:{name:e}},[a("q-img",{staticClass:"fit rounded-borders",attrs:{contain:"",src:"statics/"+t.src}})],1)})),1)],1)],1),a("div",{staticClass:"q-pa-md col-12 col-md-4"},[a("q-card",{staticClass:"my-card full-height"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.header))]),a("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.used))])]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[t._v("\n          "+t._s(t.text)+"\n        ")]),a("q-separator",{attrs:{inset:""}}),a("q-card-actions",[a("q-btn",{attrs:{flat:"",type:"a",href:t.link,target:"_blank"}},[t._v("To GitHub")]),a("q-btn",{attrs:{flat:"",type:"a",href:t.site,target:"_blank"}},[t._v("To Deploy")])],1)],1)],1)])])},r=[],o={name:"MyProject",props:{github:String,imgs:Array,header:String,used:String,text:String,link:String,site:String},data:function(){return{fullscreen:!1,slide:0}}},c=o,l=a("2877"),d=a("eebe"),u=a.n(d),h=a("9989"),p=a("639d"),g=a("f09f"),m=a("880c"),f=a("62cd"),k=a("068f"),b=a("32a7"),v=a("9c40"),w=a("a370"),x=a("eb85"),y=a("4b7e"),S=Object(l["a"])(c,n,r,!1,null,"d44d58a2",null),C=S.exports;u()(S,"components",{QPage:h["a"],QParallax:p["a"],QCard:g["a"],QCarousel:m["a"],QCarouselSlide:f["a"],QImg:k["a"],QCarouselControl:b["a"],QBtn:v["a"],QCardSection:w["a"],QSeparator:x["a"],QCardActions:y["a"]});var T=a("5033"),M={name:"PageIndex",components:{MyProject:C},data:function(){return{slide:0,fullscreen:!1,myprojects:T["b"]}}},q=M,_=Object(l["a"])(q,s,i,!1,null,"9be5abd0",null);e["default"]=_.exports;u()(_,"components",{QPage:h["a"],QParallax:p["a"]})}}]);