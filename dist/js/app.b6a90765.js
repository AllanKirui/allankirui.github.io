(function(){var e={2399:function(e,t,a){"use strict";var o=a(9242),i=a(3396);const n={class:"container"};function s(e,t,a,o,s,r){const l=(0,i.up)("TheHeader"),c=(0,i.up)("TheHero"),d=(0,i.up)("AboutMe"),u=(0,i.up)("MyProjects"),p=(0,i.up)("ContactMe"),g=(0,i.up)("TheFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l,{onChangeTheme:r.switchTheme},null,8,["onChangeTheme"]),(0,i._)("div",n,[(0,i._)("main",null,[(0,i.Wm)(c,{theme:s.theme},null,8,["theme"]),(0,i.Wm)(d),(0,i.Wm)(u),(0,i.Wm)(p)])]),(0,i.Wm)(g)],64)}var r=a(7139);const l=e=>((0,i.dD)("data-v-0c4ef5c7"),e=e(),(0,i.Cn)(),e),c={class:"header",ref:"header"},d={class:"nav flex flex-jc-sb flex-ai-c"},u=l((()=>(0,i._)("a",{href:"/",class:"header__logo","aria-label":"home"},[(0,i.Uk)("a"),(0,i._)("span",{class:"text-alt-color"},"k")],-1))),p={class:"header__toggler","aria-label":"Switch theme"},g=l((()=>(0,i._)("span",{class:"toggle"},null,-1))),h=(0,i.uE)('<div class="header__links hide-for-small" data-v-0c4ef5c7><a href="#about" data-v-0c4ef5c7>about</a><a href="#projects" data-v-0c4ef5c7>projects</a><a href="#contact" data-v-0c4ef5c7>contact</a><div class="resume-btn-wrapper" data-v-0c4ef5c7><a href="/allan-kirui-resume.pdf" class="resume-btn" target="_blank" rel="noopener noreferrer" data-v-0c4ef5c7>resume</a></div></div>',1),b=l((()=>(0,i._)("span",null,null,-1))),A=l((()=>(0,i._)("span",null,null,-1))),m=l((()=>(0,i._)("span",null,null,-1))),f=[b,A,m],v=l((()=>(0,i._)("small",null,"Designed & Built by Allan Kirui.",-1)));function w(e,t,a,o,n,s){return(0,i.wg)(),(0,i.iD)("header",c,[(0,i._)("nav",d,[u,(0,i._)("label",p,[(0,i._)("input",{ref:"check",type:"checkbox",onChange:t[0]||(t[0]=t=>e.$emit("change-theme",this.$refs.check))},null,544),g]),h,(0,i._)("button",{type:"button","aria-label":"Toggle menu",class:(0,r.C_)([n.isMenuOpen?"open":"","header__burger hide-for-large"]),onClick:t[1]||(t[1]=(...e)=>s.toggleMenu&&s.toggleMenu(...e))},f,2)]),(0,i._)("div",{class:(0,r.C_)([n.isMenuOpen?"open":"","header__menu flex flex-fd-c hide-for-large"])},[(0,i._)("a",{href:"#about",onClick:t[2]||(t[2]=(...e)=>s.closeMenu&&s.closeMenu(...e))},"about"),(0,i._)("a",{href:"#projects",onClick:t[3]||(t[3]=(...e)=>s.closeMenu&&s.closeMenu(...e))},"projects"),(0,i._)("a",{href:"#contact",onClick:t[4]||(t[4]=(...e)=>s.closeMenu&&s.closeMenu(...e))},"contact"),(0,i._)("a",{href:"/allan-kirui-resume.pdf",class:"resume-btn",target:"_blank",rel:"noopener noreferrer",onClick:t[5]||(t[5]=(...e)=>s.closeMenu&&s.closeMenu(...e))},"resume"),v],2)],512)}var k={data(){return{isMenuOpen:!1}},methods:{preCheckDarkToggle(){"dark"===document.documentElement.getAttribute("data-theme")&&(this.$refs.check.checked=!0)},toggleMenu(){this.isMenuOpen=!this.isMenuOpen,document.body.classList.toggle("no-scroll")},closeMenu(){document.body.classList.remove("no-scroll"),this.isMenuOpen=!1},closeMenuOnResize(){let e=window.innerWidth;e>768&&this.closeMenu()},checkWindowSize(){window.addEventListener("resize",this.closeMenuOnResize)},checkWindowScrollPosition(){const e=this.$refs.header;let t=0;window.addEventListener("scroll",(()=>{let a=window.scrollY;a>t?(e.style.top=`-${e.clientHeight}px`,this.isMenuOpen&&(e.style.top=0)):e.style.top=0,t=a}))}},mounted(){this.preCheckDarkToggle(),this.checkWindowScrollPosition()},beforeUpdate(){this.checkWindowSize()}},G=a(89);const M=(0,G.Z)(k,[["render",w],["__scopeId","data-v-0c4ef5c7"]]);var D=M,I=a.p+"img/hero-dark.8209c9a1.png",B=a.p+"img/hero-light.8fab946b.png";const N={class:"hero flex flex-jc-sb flex-ai-c"},C=(0,i.uE)('<div class="hero__text" data-v-2d77040c><h1 class="hero__text-greeting" data-v-2d77040c>Hi, my name is</h1><h3 class="hero__text-name" data-v-2d77040c> Allan<span class="text-alt-color" data-v-2d77040c>Kirui</span>. </h3><p class="hero__text-description text-1" data-v-2d77040c> Building creative designs for the web and having fun with code are my favorite things to do as <span class="semi-bold" data-v-2d77040c>a self-taught developer</span>. </p><p class="hero__text-description text-2" data-v-2d77040c> Oh, and I&#39;ve been doing it all <span class="semi-bold" data-v-2d77040c>on a 12-year-computer!</span></p></div>',1),S={class:"hero__image"},y={key:0,src:I,width:"600",height:"600",alt:"Allan's avatar"},x={key:1,src:B,width:"600",height:"600",alt:"Allan's avatar"};function T(e,t,a,o,n,s){return(0,i.wg)(),(0,i.iD)("section",N,[C,(0,i._)("div",S,["dark"===n.preferredTheme?((0,i.wg)(),(0,i.iD)("img",y)):((0,i.wg)(),(0,i.iD)("img",x))])])}var O={props:["theme"],data(){return{preferredTheme:null}},watch:{theme(e){this.preferredTheme=e}},beforeMount(){this.preferredTheme=document.documentElement.getAttribute("data-theme")}};const Y=(0,G.Z)(O,[["render",T],["__scopeId","data-v-2d77040c"]]);var E=Y;const j={id:"about",class:"about fade-in",ref:"about"},Q={class:"about__images floating-icons",ref:"images"},W=(0,i.uE)('<div class="about__text" data-v-53f38b62><h2 class="about__text-title" data-v-53f38b62> about <span class="text-alt-color" data-v-53f38b62>me</span></h2><p class="about__text-description text-1" data-v-53f38b62> My name is <span class="semi-bold" data-v-53f38b62>Allan</span>, and I&#39;m <span class="semi-bold" data-v-53f38b62>from Kenya</span>. I&#39;ve been learning how to code for a while now and have grown a passion for frontend web development. </p><p class="about__text-description text-2" data-v-53f38b62> These are some of the skills I learned along the way in my journey: </p><div class="skills-wrapper flex flex-jc-c" data-v-53f38b62><ul class="about__text-skills skills-1" data-v-53f38b62><li data-v-53f38b62>HTML</li><li data-v-53f38b62>CSS</li><li data-v-53f38b62>JavaScript</li></ul><ul class="about__text-skills skills-2" data-v-53f38b62><li data-v-53f38b62>SASS</li><li data-v-53f38b62>Tailwind</li><li data-v-53f38b62>Vue</li></ul><ul class="about__text-skills skills-3" data-v-53f38b62><li data-v-53f38b62>PHP Basics</li><li data-v-53f38b62>Laravel Basics</li><li data-v-53f38b62>React</li></ul><ul class="about__text-skills skills-4" data-v-53f38b62><li data-v-53f38b62>Git</li><li data-v-53f38b62>GitHub</li></ul></div><p class="about__text-description text-3" data-v-53f38b62> I am currently exploring backend development with Laravel and learning to build beautiful frontends with React, both of which excite me for their potential in creating robust and scalable web applications. </p></div>',1);function L(e,t,a,o,n,s){return(0,i.wg)(),(0,i.iD)("section",j,[(0,i._)("div",Q,null,512),W],512)}var F={inject:["fadeHandler"],methods:{showFadingElement(){const e=this.$refs.about,t=150;this.fadeHandler(e,t),this.showFadingImages()},showFadingImages(){const e=this.$refs.images,t=100;this.fadeHandler(e,t)}},mounted(){window.addEventListener("scroll",this.showFadingElement)}};const J=(0,G.Z)(F,[["render",L],["__scopeId","data-v-53f38b62"]]);var P=J;const H=e=>((0,i.dD)("data-v-cb92d208"),e=e(),(0,i.Cn)(),e),z={id:"projects",class:"projects fade-in",ref:"projects"},K=H((()=>(0,i._)("h2",{class:"projects__title"},[(0,i.Uk)(" some things I've built and "),(0,i._)("span",{class:"text-alt-color"},"helped build")],-1))),U={class:"project__cards"};function V(e,t,a,o,n,s){const r=(0,i.up)("ProjectItem");return(0,i.wg)(),(0,i.iD)("section",z,[K,(0,i._)("div",U,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.projectsData,((e,t)=>((0,i.wg)(),(0,i.j4)(r,{key:t,title:e.title,tag:e.tag,description:e.description,"about-tags":e.about,"live-link":e.links.live,"repo-link":e.links.repo,img:e.img,"is-collab":e.isCollab},null,8,["title","tag","description","about-tags","live-link","repo-link","img","is-collab"])))),128))])],512)}var X=[{title:"Brain Bender",tag:"solo project",description:"A Sudoku app built with React and TypeScript.",about:["React","TypeScript","Tailwind"],links:{live:"https://allankirui.github.io/brain-bender",repo:"https://github.com/AllanKirui/brain-bender"},img:"9-brain-bender.png",isCollab:!1},{title:"Calculate It",tag:"solo project",description:"Having built previous Vue apps using the Options API, I wanted to gain hands-on experience with the Composition API. From concept to code, creating this calculator app with Vue's Composition API was a rewarding journey.",about:["Vue","Composition API","Tailwind"],links:{live:"https://allankirui.github.io/calculate-it",repo:"https://github.com/AllanKirui/calculate-it"},img:"8-calculate-it.png",isCollab:!1},{title:"Your Notes v2",tag:"solo project",description:"An updated version of a notes app I had created with vanilla JavaScript. It features a better UI/UX flow compared to the earlier version and intergrates with Firebase to facilitate user authentication and persistance of user data across devices.",about:["Vue","Vuex","Options API","Firebase"],links:{live:"https://allankirui.github.io/your-notes-v2",repo:"https://github.com/AllanKirui/your-notes-v2"},img:"1-yournotes-v2.png",isCollab:!1},{title:"Vue Movies",tag:"solo project",description:"A movie database I designed to get some practice with the topics I was learning about Vue at the time. The site gives users suggestions for movies and TV shows in either the popular or top rated categories. Users can also perform searches based these two categories.",about:["Vue","Options API","Routing","API Integration"],links:{live:"https://allankirui.github.io/vue-movies",repo:"https://github.com/AllanKirui/vue-movies"},img:"2-vue-movies.png",isCollab:!1},{title:"The Frontend",tag:"solo project",description:"A project I designed in the format of a newspaper as a refresher on CSS Grid. As part of the 'headlines', the page lists some useful resources about programming in general.",about:["HTML","SASS","CSS Grid","JavaScript"],links:{live:"https://allankirui.github.io/the-frontend",repo:"https://github.com/AllanKirui/the-frontend"},img:"3-the-frontend.png",isCollab:!1},{title:"Vue Color Picker",tag:"solo project",description:"A project I created earlier on when I was learning the basics of Vue. The goal of the project was to get some practice with creating components and to better understand how components communicate with each other.",about:["Vue","Components","Options API"],links:{live:"https://allankirui.github.io/vue-color-picker",repo:"https://github.com/AllanKirui/vue-color-picker"},img:"4-color-picker.png",isCollab:!1},{title:"Social Proof",tag:"a collaborative project",description:"My first collaborative project. I met an amazing human being on Frontend Mentor and we decided to work together on one of the simpler challenges offered by the site.",about:["HTML","CSS","Git","GitHub","Collaboration"],links:{live:"https://practical-tereshkova-8c641d.netlify.app/",repo:"https://github.com/AllanKirui/social-proof"},img:"5-social-proof.png",isCollab:!0},{title:"Loopstudios",tag:"a collaborative project",description:"A second collaborative project. After successfully finishing out Social Proof Frontend Mentor challenge, my collaboration partner and I decided to work on another project - a slightly bigger Frontend Mentor challenge.",about:["HTML","CSS","Git","GitHub","Collaboration"],links:{live:"https://hungry-kilby-fc41c0.netlify.app/",repo:"https://github.com/AllanKirui/loopstudios-landing-page"},img:"6-loopstudios.png",isCollab:!0},{title:"Learning to Code on a 12 Year Old Machine - A Journey of Patience and Perseverance",tag:null,description:"I blog about my journey as a self-taught developer and the challenges I've faced while learning how to code.",about:["Grit","Humor"],links:{live:"https://allankirui.github.io/my-journey",repo:null},img:"7-blog.png",isCollab:!1}];const R=e=>((0,i.dD)("data-v-1a345a2c"),e=e(),(0,i.Cn)(),e),q={class:"project__cards-item flex flex-jc-sb",ref:"projectCard"},Z={class:"card-image"},_=["src","alt"],$={class:"card-text"},ee={class:"title-wrapper flex flex-ai-c flex-jc-sb"},te={key:0},ae={key:1,class:"flex flex-ai-c with-icon"},oe=R((()=>(0,i._)("svg",{fill:"currentColor",width:"25",height:"25",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",class:"icon"},[(0,i._)("path",{d:"M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"})],-1))),ie={class:"description-wrapper"},ne={class:"about-wrapper flex"},se={class:"links-wrapper flex"},re={key:0,class:"repo-link"},le=["href"],ce=R((()=>(0,i._)("svg",{fill:"currentColor",width:"24px",height:"24px",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{d:"M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696","fill-rule":"evenodd"})],-1))),de=[ce],ue={key:1,class:"live-site-link"},pe=["href"],ge=R((()=>(0,i._)("svg",{width:"24",height:"24",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg","stroke-width":"3",stroke:"currentColor",fill:"none"},[(0,i._)("path",{d:"M55.4 32v21.58a1.81 1.81 0 0 1-1.82 1.82H10.42a1.81 1.81 0 0 1-1.82-1.82V10.42a1.81 1.81 0 0 1 1.82-1.82H32M40.32 8.6H55.4v15.58M19.32 45.72 54.61 8.91"})],-1))),he=[ge];function be(e,t,o,n,s,l){return(0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("div",Z,[(0,i._)("img",{src:a(7895)(`./${o.img}`),alt:"image for Allan's "+o.title+" project",width:"500",height:"280",loading:"lazy"},null,8,_)]),(0,i._)("div",$,[(0,i._)("div",ee,[(0,i._)("h4",null,(0,r.zw)(o.title),1),o.isCollab?((0,i.wg)(),(0,i.iD)("small",ae,[(0,i.Uk)((0,r.zw)(o.tag)+" ",1),oe])):((0,i.wg)(),(0,i.iD)("small",te,(0,r.zw)(o.tag),1))]),(0,i._)("div",ie,[(0,i._)("p",null,(0,r.zw)(o.description),1)]),(0,i._)("ul",ne,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.aboutTags,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t},[(0,i._)("small",null,(0,r.zw)(e),1)])))),128))]),(0,i._)("ul",se,[o.repoLink?((0,i.wg)(),(0,i.iD)("li",re,[(0,i._)("a",{href:o.repoLink,target:"_blank",rel:"noopener noreferrer","aria-label":"view GitHub repository"},de,8,le)])):(0,i.kq)("",!0),o.liveLink?((0,i.wg)(),(0,i.iD)("li",ue,[(0,i._)("a",{href:o.liveLink,target:"_blank",rel:"noopener noreferrer","aria-label":"view live site"},he,8,pe)])):(0,i.kq)("",!0)])])],512)}var Ae={props:["title","tag","description","aboutTags","liveLink","repoLink","img","isCollab"],inject:["fadeHandler"],methods:{showFadingProject(){const e=this.$refs.projectCard,t=80;this.fadeHandler(e,t)}},mounted(){window.addEventListener("scroll",this.showFadingProject)}};const me=(0,G.Z)(Ae,[["render",be],["__scopeId","data-v-1a345a2c"]]);var fe=me,ve={components:{ProjectItem:fe},inject:["fadeHandler"],data(){return{projectsData:X}},methods:{showFadingElement(){const e=this.$refs.projects,t=150;this.fadeHandler(e,t)}},mounted(){window.addEventListener("scroll",this.showFadingElement)}};const we=(0,G.Z)(ve,[["render",V],["__scopeId","data-v-cb92d208"]]);var ke=we;const Ge={id:"contact",class:"contact fade-in",ref:"contact"},Me=(0,i.uE)('<div class="contact__text" data-v-6b4abc0b><h2 class="contact__text-title" data-v-6b4abc0b> feel free to <span class="text-alt-color" data-v-6b4abc0b>contact me</span></h2><p class="contact__text-description text-1" data-v-6b4abc0b> Connect with me and let&#39;s build a world of websites together. I am seeking new opportunities and exciting challenges. </p><p class="contact__text-description text-2" data-v-6b4abc0b> Feel free to also just <span class="semi-bold" data-v-6b4abc0b>say hi</span> and I&#39;ll try my best to get back to you soon! </p></div><div class="contact__link" data-v-6b4abc0b><a href="mailto:allan.kirui@outlook.com" class="cta" data-v-6b4abc0b>Say Hello</a></div>',2),De=[Me];function Ie(e,t,a,o,n,s){return(0,i.wg)(),(0,i.iD)("section",Ge,De,512)}var Be={inject:["fadeHandler"],methods:{showFadingElement(){const e=this.$refs.contact,t=150;this.fadeHandler(e,t)}},mounted(){window.addEventListener("scroll",this.showFadingElement)}};const Ne=(0,G.Z)(Be,[["render",Ie],["__scopeId","data-v-6b4abc0b"]]);var Ce=Ne;const Se=e=>((0,i.dD)("data-v-797b5bed"),e=e(),(0,i.Cn)(),e),ye=Se((()=>(0,i._)("small",null,"Designed & Built by Allan Kirui.",-1))),xe=[ye];function Te(e,t){return(0,i.wg)(),(0,i.iD)("footer",null,xe)}const Oe={},Ye=(0,G.Z)(Oe,[["render",Te],["__scopeId","data-v-797b5bed"]]);var Ee=Ye,je={name:"App",components:{TheHeader:D,TheHero:E,AboutMe:P,MyProjects:ke,ContactMe:Ce,TheFooter:Ee},data(){return{theme:null}},methods:{switchTheme(e){const t=e,a=t.checked;a?(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark"),t.checked=!0,this.theme="dark"):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"),t.checked=!1,this.theme="light")},detectColorScheme(){let e="light";if(localStorage.getItem("theme"))"dark"===localStorage.getItem("theme")&&(e="dark");else{if(!window.matchMedia)return!1;window.matchMedia("(prefers-color-scheme: dark)").matches&&(e="dark")}"dark"===e?document.documentElement.setAttribute("data-theme","dark"):"light"===e&&document.documentElement.setAttribute("data-theme","light")},fadeHandler(e,t){const a=e;let o=window.innerHeight,i=a.getBoundingClientRect().top,n=t;i<o-n&&a.classList.add("visible")}},provide(){return{fadeHandler:this.fadeHandler}},created(){this.detectColorScheme()}};const Qe=(0,G.Z)(je,[["render",s]]);var We=Qe;const Le=(0,o.ri)(We);Le.mount("#app")},7895:function(e,t,a){var o={"./1-yournotes-v2.png":1301,"./2-vue-movies.png":8855,"./3-the-frontend.png":8893,"./4-color-picker.png":6991,"./5-social-proof.png":7833,"./6-loopstudios.png":5409,"./7-blog.png":298,"./8-calculate-it.png":2946,"./9-brain-bender.png":2486,"./team.svg":7359};function i(e){var t=n(e);return a(t)}function n(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=n,e.exports=i,i.id=7895},7359:function(e,t,a){"use strict";e.exports=a.p+"img/team.29ecd32b.svg"},1301:function(e,t,a){"use strict";e.exports=a.p+"img/1-yournotes-v2.d5c1cdf4.png"},8855:function(e,t,a){"use strict";e.exports=a.p+"img/2-vue-movies.1dd9a7ec.png"},8893:function(e,t,a){"use strict";e.exports=a.p+"img/3-the-frontend.00944a29.png"},6991:function(e,t,a){"use strict";e.exports=a.p+"img/4-color-picker.158ae57a.png"},7833:function(e,t,a){"use strict";e.exports=a.p+"img/5-social-proof.49b4c2a1.png"},5409:function(e,t,a){"use strict";e.exports=a.p+"img/6-loopstudios.fa0d4a3e.png"},298:function(e,t,a){"use strict";e.exports=a.p+"img/7-blog.661bc7b5.png"},2946:function(e,t,a){"use strict";e.exports=a.p+"img/8-calculate-it.9c745f94.png"},2486:function(e){"use strict";e.exports="data:image/png;base64,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"}},t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,i,n){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],n=e[d][2];for(var r=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(r=!1,n<s&&(s=n));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,i,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,n,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var d=l(a)}for(t&&t(o);c<s.length;c++)n=s[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(2399)}));o=a.O(o)})();
//# sourceMappingURL=app.b6a90765.js.map