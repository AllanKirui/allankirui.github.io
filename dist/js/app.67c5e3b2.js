(function(){var e={2399:function(e,t,a){"use strict";var o=a(9242),i=a(3396);const n={class:"container"};function s(e,t,a,o,s,l){const r=(0,i.up)("TheHeader"),c=(0,i.up)("TheHero"),d=(0,i.up)("AboutMe"),u=(0,i.up)("MyProjects"),p=(0,i.up)("ContactMe"),h=(0,i.up)("TheFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r,{onChangeTheme:l.switchTheme},null,8,["onChangeTheme"]),(0,i._)("div",n,[(0,i._)("main",null,[(0,i.Wm)(c,{theme:s.theme},null,8,["theme"]),(0,i.Wm)(d),(0,i.Wm)(u),(0,i.Wm)(p)])]),(0,i.Wm)(h)],64)}var l=a(7139);const r=e=>((0,i.dD)("data-v-0c4ef5c7"),e=e(),(0,i.Cn)(),e),c={class:"header",ref:"header"},d={class:"nav flex flex-jc-sb flex-ai-c"},u=r((()=>(0,i._)("a",{href:"/",class:"header__logo","aria-label":"home"},[(0,i.Uk)("a"),(0,i._)("span",{class:"text-alt-color"},"k")],-1))),p={class:"header__toggler","aria-label":"Switch theme"},h=r((()=>(0,i._)("span",{class:"toggle"},null,-1))),g=(0,i.uE)('<div class="header__links hide-for-small" data-v-0c4ef5c7><a href="#about" data-v-0c4ef5c7>about</a><a href="#projects" data-v-0c4ef5c7>projects</a><a href="#contact" data-v-0c4ef5c7>contact</a><div class="resume-btn-wrapper" data-v-0c4ef5c7><a href="/allan-kirui-resume.pdf" class="resume-btn" target="_blank" rel="noopener noreferrer" data-v-0c4ef5c7>resume</a></div></div>',1),f=r((()=>(0,i._)("span",null,null,-1))),b=r((()=>(0,i._)("span",null,null,-1))),m=r((()=>(0,i._)("span",null,null,-1))),v=[f,b,m],w=r((()=>(0,i._)("small",null,"Designed & Built by Allan Kirui.",-1)));function _(e,t,a,o,n,s){return(0,i.wg)(),(0,i.iD)("header",c,[(0,i._)("nav",d,[u,(0,i._)("label",p,[(0,i._)("input",{ref:"check",type:"checkbox",onChange:t[0]||(t[0]=t=>e.$emit("change-theme",this.$refs.check))},null,544),h]),g,(0,i._)("button",{type:"button","aria-label":"Toggle menu",class:(0,l.C_)([n.isMenuOpen?"open":"","header__burger hide-for-large"]),onClick:t[1]||(t[1]=(...e)=>s.toggleMenu&&s.toggleMenu(...e))},v,2)]),(0,i._)("div",{class:(0,l.C_)([n.isMenuOpen?"open":"","header__menu flex flex-fd-c hide-for-large"])},[(0,i._)("a",{href:"#about",onClick:t[2]||(t[2]=(...e)=>s.closeMenu&&s.closeMenu(...e))},"about"),(0,i._)("a",{href:"#projects",onClick:t[3]||(t[3]=(...e)=>s.closeMenu&&s.closeMenu(...e))},"projects"),(0,i._)("a",{href:"#contact",onClick:t[4]||(t[4]=(...e)=>s.closeMenu&&s.closeMenu(...e))},"contact"),(0,i._)("a",{href:"/allan-kirui-resume.pdf",class:"resume-btn",target:"_blank",rel:"noopener noreferrer",onClick:t[5]||(t[5]=(...e)=>s.closeMenu&&s.closeMenu(...e))},"resume"),w],2)],512)}var k={data(){return{isMenuOpen:!1}},methods:{preCheckDarkToggle(){"dark"===document.documentElement.getAttribute("data-theme")&&(this.$refs.check.checked=!0)},toggleMenu(){this.isMenuOpen=!this.isMenuOpen,document.body.classList.toggle("no-scroll")},closeMenu(){document.body.classList.remove("no-scroll"),this.isMenuOpen=!1},closeMenuOnResize(){let e=window.innerWidth;e>768&&this.closeMenu()},checkWindowSize(){window.addEventListener("resize",this.closeMenuOnResize)},checkWindowScrollPosition(){const e=this.$refs.header;let t=0;window.addEventListener("scroll",(()=>{let a=window.scrollY;a>t?(e.style.top=`-${e.clientHeight}px`,this.isMenuOpen&&(e.style.top=0)):e.style.top=0,t=a}))}},mounted(){this.preCheckDarkToggle(),this.checkWindowScrollPosition()},beforeUpdate(){this.checkWindowSize()}},x=a(89);const y=(0,x.Z)(k,[["render",_],["__scopeId","data-v-0c4ef5c7"]]);var C=y,j=a.p+"img/hero-dark.8209c9a1.png",M=a.p+"img/hero-light.8fab946b.png";const I={class:"hero flex flex-jc-sb flex-ai-c"},A=(0,i.uE)('<div class="hero__text" data-v-2d77040c><h1 class="hero__text-greeting" data-v-2d77040c>Hi, my name is</h1><h3 class="hero__text-name" data-v-2d77040c> Allan<span class="text-alt-color" data-v-2d77040c>Kirui</span>. </h3><p class="hero__text-description text-1" data-v-2d77040c> Building creative designs for the web and having fun with code are my favorite things to do as <span class="semi-bold" data-v-2d77040c>a self-taught developer</span>. </p><p class="hero__text-description text-2" data-v-2d77040c> Oh, and I&#39;ve been doing it all <span class="semi-bold" data-v-2d77040c>on a 12-year-computer!</span></p></div>',1),H={class:"hero__image"},S={key:0,src:j,width:"600",height:"600",alt:"Allan's avatar"},T={key:1,src:M,width:"600",height:"600",alt:"Allan's avatar"};function O(e,t,a,o,n,s){return(0,i.wg)(),(0,i.iD)("section",I,[A,(0,i._)("div",H,["dark"===n.preferredTheme?((0,i.wg)(),(0,i.iD)("img",S)):((0,i.wg)(),(0,i.iD)("img",T))])])}var D={props:["theme"],data(){return{preferredTheme:null}},watch:{theme(e){this.preferredTheme=e}},beforeMount(){this.preferredTheme=document.documentElement.getAttribute("data-theme")}};const E=(0,x.Z)(D,[["render",O],["__scopeId","data-v-2d77040c"]]);var P=E;const L={id:"about",class:"about fade-in",ref:"about"},F={class:"about__images floating-icons",ref:"images"},z=(0,i.uE)('<div class="about__text" data-v-53f38b62><h2 class="about__text-title" data-v-53f38b62> about <span class="text-alt-color" data-v-53f38b62>me</span></h2><p class="about__text-description text-1" data-v-53f38b62> My name is <span class="semi-bold" data-v-53f38b62>Allan</span>, and I&#39;m <span class="semi-bold" data-v-53f38b62>from Kenya</span>. I&#39;ve been learning how to code for a while now and have grown a passion for frontend web development. </p><p class="about__text-description text-2" data-v-53f38b62> These are some of the skills I learned along the way in my journey: </p><div class="skills-wrapper flex flex-jc-c" data-v-53f38b62><ul class="about__text-skills skills-1" data-v-53f38b62><li data-v-53f38b62>HTML</li><li data-v-53f38b62>CSS</li><li data-v-53f38b62>JavaScript</li></ul><ul class="about__text-skills skills-2" data-v-53f38b62><li data-v-53f38b62>SASS</li><li data-v-53f38b62>Tailwind</li><li data-v-53f38b62>Vue</li></ul><ul class="about__text-skills skills-3" data-v-53f38b62><li data-v-53f38b62>PHP Basics</li><li data-v-53f38b62>Laravel Basics</li><li data-v-53f38b62>React</li></ul><ul class="about__text-skills skills-4" data-v-53f38b62><li data-v-53f38b62>Git</li><li data-v-53f38b62>GitHub</li></ul></div><p class="about__text-description text-3" data-v-53f38b62> I am currently exploring backend development with Laravel and learning to build beautiful frontends with React, both of which excite me for their potential in creating robust and scalable web applications. </p></div>',1);function V(e,t,a,o,n,s){return(0,i.wg)(),(0,i.iD)("section",L,[(0,i._)("div",F,null,512),z],512)}var K={inject:["fadeHandler"],methods:{showFadingElement(){const e=this.$refs.about,t=150;this.fadeHandler(e,t),this.showFadingImages()},showFadingImages(){const e=this.$refs.images,t=100;this.fadeHandler(e,t)}},mounted(){window.addEventListener("scroll",this.showFadingElement)}};const W=(0,x.Z)(K,[["render",V],["__scopeId","data-v-53f38b62"]]);var $=W;const G=e=>((0,i.dD)("data-v-cb92d208"),e=e(),(0,i.Cn)(),e),B={id:"projects",class:"projects fade-in",ref:"projects"},U=G((()=>(0,i._)("h2",{class:"projects__title"},[(0,i.Uk)(" some things I've built and "),(0,i._)("span",{class:"text-alt-color"},"helped build")],-1))),Z={class:"project__cards"};function R(e,t,a,o,n,s){const l=(0,i.up)("ProjectItem");return(0,i.wg)(),(0,i.iD)("section",B,[U,(0,i._)("div",Z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.projectsData,((e,t)=>((0,i.wg)(),(0,i.j4)(l,{key:t,title:e.title,tag:e.tag,description:e.description,"about-tags":e.about,"live-link":e.links.live,"repo-link":e.links.repo,img:e.img,"is-collab":e.isCollab},null,8,["title","tag","description","about-tags","live-link","repo-link","img","is-collab"])))),128))])],512)}var Y=[{title:"Calculate It",tag:"solo project",description:"Having built previous Vue apps using the Options API, I wanted to gain hands-on experience with the Composition API. From concept to code, creating this calculator app with Vue's Composition API was a rewarding journey.",about:["Vue","Composition API","Tailwind"],links:{live:"https://allankirui.github.io/calculate-it",repo:"https://github.com/AllanKirui/calculate-it"},img:"8-calculate-it.png",isCollab:!1},{title:"Your Notes v2",tag:"solo project",description:"An updated version of a notes app I had created with vanilla JavaScript. It features a better UI/UX flow compared to the earlier version and intergrates with Firebase to facilitate user authentication and persistance of user data across devices.",about:["Vue","Vuex","Options API","Firebase"],links:{live:"https://allankirui.github.io/your-notes-v2",repo:"https://github.com/AllanKirui/your-notes-v2"},img:"1-yournotes-v2.png",isCollab:!1},{title:"Vue Movies",tag:"solo project",description:"A movie database I designed to get some practice with the topics I was learning about Vue at the time. The site gives users suggestions for movies and TV shows in either the popular or top rated categories. Users can also perform searches based these two categories.",about:["Vue","Options API","Routing","API Integration"],links:{live:"https://allankirui.github.io/vue-movies",repo:"https://github.com/AllanKirui/vue-movies"},img:"2-vue-movies.png",isCollab:!1},{title:"The Frontend",tag:"solo project",description:"A project I designed in the format of a newspaper as a refresher on CSS Grid. As part of the 'headlines', the page lists some useful resources about programming in general.",about:["HTML","SASS","CSS Grid","JavaScript"],links:{live:"https://allankirui.github.io/the-frontend",repo:"https://github.com/AllanKirui/the-frontend"},img:"3-the-frontend.png",isCollab:!1},{title:"Vue Color Picker",tag:"solo project",description:"A project I created earlier on when I was learning the basics of Vue. The goal of the project was to get some practice with creating components and to better understand how components communicate with each other.",about:["Vue","Components","Options API"],links:{live:"https://allankirui.github.io/vue-color-picker",repo:"https://github.com/AllanKirui/vue-color-picker"},img:"4-color-picker.png",isCollab:!1},{title:"Social Proof",tag:"a collaborative project",description:"My first collaborative project. I met an amazing human being on Frontend Mentor and we decided to work together on one of the simpler challenges offered by the site.",about:["HTML","CSS","Git","GitHub","Collaboration"],links:{live:"https://practical-tereshkova-8c641d.netlify.app/",repo:"https://github.com/AllanKirui/social-proof"},img:"5-social-proof.png",isCollab:!0},{title:"Loopstudios",tag:"a collaborative project",description:"A second collaborative project. After successfully finishing out Social Proof Frontend Mentor challenge, my collaboration partner and I decided to work on another project - a slightly bigger Frontend Mentor challenge.",about:["HTML","CSS","Git","GitHub","Collaboration"],links:{live:"https://hungry-kilby-fc41c0.netlify.app/",repo:"https://github.com/AllanKirui/loopstudios-landing-page"},img:"6-loopstudios.png",isCollab:!0},{title:"Learning to Code on a 12 Year Old Machine - A Journey of Patience and Perseverance",tag:null,description:"I blog about my journey as a self-taught developer and the challenges I've faced while learning how to code.",about:["Grit","Humor"],links:{live:"https://allankirui.github.io/my-journey",repo:null},img:"7-blog.png",isCollab:!1}];const J=e=>((0,i.dD)("data-v-1a345a2c"),e=e(),(0,i.Cn)(),e),N={class:"project__cards-item flex flex-jc-sb",ref:"projectCard"},q={class:"card-image"},X=["src","alt"],Q={class:"card-text"},ee={class:"title-wrapper flex flex-ai-c flex-jc-sb"},te={key:0},ae={key:1,class:"flex flex-ai-c with-icon"},oe=J((()=>(0,i._)("svg",{fill:"currentColor",width:"25",height:"25",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",class:"icon"},[(0,i._)("path",{d:"M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"})],-1))),ie={class:"description-wrapper"},ne={class:"about-wrapper flex"},se={class:"links-wrapper flex"},le={key:0,class:"repo-link"},re=["href"],ce=J((()=>(0,i._)("svg",{fill:"currentColor",width:"24px",height:"24px",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{d:"M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696","fill-rule":"evenodd"})],-1))),de=[ce],ue={key:1,class:"live-site-link"},pe=["href"],he=J((()=>(0,i._)("svg",{width:"24",height:"24",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg","stroke-width":"3",stroke:"currentColor",fill:"none"},[(0,i._)("path",{d:"M55.4 32v21.58a1.81 1.81 0 0 1-1.82 1.82H10.42a1.81 1.81 0 0 1-1.82-1.82V10.42a1.81 1.81 0 0 1 1.82-1.82H32M40.32 8.6H55.4v15.58M19.32 45.72 54.61 8.91"})],-1))),ge=[he];function fe(e,t,o,n,s,r){return(0,i.wg)(),(0,i.iD)("div",N,[(0,i._)("div",q,[(0,i._)("img",{src:a(7895)(`./${o.img}`),alt:"image for Allan's "+o.title+" project",width:"500",height:"280",loading:"lazy"},null,8,X)]),(0,i._)("div",Q,[(0,i._)("div",ee,[(0,i._)("h4",null,(0,l.zw)(o.title),1),o.isCollab?((0,i.wg)(),(0,i.iD)("small",ae,[(0,i.Uk)((0,l.zw)(o.tag)+" ",1),oe])):((0,i.wg)(),(0,i.iD)("small",te,(0,l.zw)(o.tag),1))]),(0,i._)("div",ie,[(0,i._)("p",null,(0,l.zw)(o.description),1)]),(0,i._)("ul",ne,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.aboutTags,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t},[(0,i._)("small",null,(0,l.zw)(e),1)])))),128))]),(0,i._)("ul",se,[o.repoLink?((0,i.wg)(),(0,i.iD)("li",le,[(0,i._)("a",{href:o.repoLink,target:"_blank",rel:"noopener noreferrer","aria-label":"view GitHub repository"},de,8,re)])):(0,i.kq)("",!0),o.liveLink?((0,i.wg)(),(0,i.iD)("li",ue,[(0,i._)("a",{href:o.liveLink,target:"_blank",rel:"noopener noreferrer","aria-label":"view live site"},ge,8,pe)])):(0,i.kq)("",!0)])])],512)}var be={props:["title","tag","description","aboutTags","liveLink","repoLink","img","isCollab"],inject:["fadeHandler"],methods:{showFadingProject(){const e=this.$refs.projectCard,t=80;this.fadeHandler(e,t)}},mounted(){window.addEventListener("scroll",this.showFadingProject)}};const me=(0,x.Z)(be,[["render",fe],["__scopeId","data-v-1a345a2c"]]);var ve=me,we={components:{ProjectItem:ve},inject:["fadeHandler"],data(){return{projectsData:Y}},methods:{showFadingElement(){const e=this.$refs.projects,t=150;this.fadeHandler(e,t)}},mounted(){window.addEventListener("scroll",this.showFadingElement)}};const _e=(0,x.Z)(we,[["render",R],["__scopeId","data-v-cb92d208"]]);var ke=_e;const xe={id:"contact",class:"contact fade-in",ref:"contact"},ye=(0,i.uE)('<div class="contact__text" data-v-6b4abc0b><h2 class="contact__text-title" data-v-6b4abc0b> feel free to <span class="text-alt-color" data-v-6b4abc0b>contact me</span></h2><p class="contact__text-description text-1" data-v-6b4abc0b> Connect with me and let&#39;s build a world of websites together. I am seeking new opportunities and exciting challenges. </p><p class="contact__text-description text-2" data-v-6b4abc0b> Feel free to also just <span class="semi-bold" data-v-6b4abc0b>say hi</span> and I&#39;ll try my best to get back to you soon! </p></div><div class="contact__link" data-v-6b4abc0b><a href="mailto:allan.kirui@outlook.com" class="cta" data-v-6b4abc0b>Say Hello</a></div>',2),Ce=[ye];function je(e,t,a,o,n,s){return(0,i.wg)(),(0,i.iD)("section",xe,Ce,512)}var Me={inject:["fadeHandler"],methods:{showFadingElement(){const e=this.$refs.contact,t=150;this.fadeHandler(e,t)}},mounted(){window.addEventListener("scroll",this.showFadingElement)}};const Ie=(0,x.Z)(Me,[["render",je],["__scopeId","data-v-6b4abc0b"]]);var Ae=Ie;const He=e=>((0,i.dD)("data-v-797b5bed"),e=e(),(0,i.Cn)(),e),Se=He((()=>(0,i._)("small",null,"Designed & Built by Allan Kirui.",-1))),Te=[Se];function Oe(e,t){return(0,i.wg)(),(0,i.iD)("footer",null,Te)}const De={},Ee=(0,x.Z)(De,[["render",Oe],["__scopeId","data-v-797b5bed"]]);var Pe=Ee,Le={name:"App",components:{TheHeader:C,TheHero:P,AboutMe:$,MyProjects:ke,ContactMe:Ae,TheFooter:Pe},data(){return{theme:null}},methods:{switchTheme(e){const t=e,a=t.checked;a?(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark"),t.checked=!0,this.theme="dark"):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"),t.checked=!1,this.theme="light")},detectColorScheme(){let e="light";if(localStorage.getItem("theme"))"dark"===localStorage.getItem("theme")&&(e="dark");else{if(!window.matchMedia)return!1;window.matchMedia("(prefers-color-scheme: dark)").matches&&(e="dark")}"dark"===e?document.documentElement.setAttribute("data-theme","dark"):"light"===e&&document.documentElement.setAttribute("data-theme","light")},fadeHandler(e,t){const a=e;let o=window.innerHeight,i=a.getBoundingClientRect().top,n=t;i<o-n&&a.classList.add("visible")}},provide(){return{fadeHandler:this.fadeHandler}},created(){this.detectColorScheme()}};const Fe=(0,x.Z)(Le,[["render",s]]);var ze=Fe;const Ve=(0,o.ri)(ze);Ve.mount("#app")},7895:function(e,t,a){var o={"./1-yournotes-v2.png":1301,"./2-vue-movies.png":8855,"./3-the-frontend.png":8893,"./4-color-picker.png":6991,"./5-social-proof.png":7833,"./6-loopstudios.png":5409,"./7-blog.png":298,"./8-calculate-it.png":2946,"./team.svg":7359};function i(e){var t=n(e);return a(t)}function n(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=n,e.exports=i,i.id=7895},7359:function(e,t,a){"use strict";e.exports=a.p+"img/team.29ecd32b.svg"},1301:function(e,t,a){"use strict";e.exports=a.p+"img/1-yournotes-v2.d5c1cdf4.png"},8855:function(e,t,a){"use strict";e.exports=a.p+"img/2-vue-movies.1dd9a7ec.png"},8893:function(e,t,a){"use strict";e.exports=a.p+"img/3-the-frontend.00944a29.png"},6991:function(e,t,a){"use strict";e.exports=a.p+"img/4-color-picker.158ae57a.png"},7833:function(e,t,a){"use strict";e.exports=a.p+"img/5-social-proof.49b4c2a1.png"},5409:function(e,t,a){"use strict";e.exports=a.p+"img/6-loopstudios.fa0d4a3e.png"},298:function(e,t,a){"use strict";e.exports=a.p+"img/7-blog.661bc7b5.png"},2946:function(e,t,a){"use strict";e.exports=a.p+"img/8-calculate-it.9c745f94.png"}},t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,i,n){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],n=e[d][2];for(var l=!0,r=0;r<o.length;r++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[r])}))?o.splice(r--,1):(l=!1,n<s&&(s=n));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,i,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,n,s=o[0],l=o[1],r=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(r)var d=r(a)}for(t&&t(o);c<s.length;c++)n=s[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(2399)}));o=a.O(o)})();
//# sourceMappingURL=app.67c5e3b2.js.map