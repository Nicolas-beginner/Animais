(()=>{"use strict";function t(t,e){const i="data-outside",s=document.documentElement;function n(o){e.contains(o.target)||(t(),s.removeEventListener("click",n),e.removeAttribute(i))}null===e.getAttribute(i)&&(setTimeout((()=>{s.addEventListener("click",n)})),e.setAttribute(i,""))}class e{constructor(t,e){this.observer=void 0,this.Numeros=document.querySelectorAll(t),this.handleObserver=this.handleObserver.bind(this),this.observerClass=e,this.ObserverTarget=document.querySelector(".numeros")}static incrementarNumero(t){const e=+t.innerText;let i=0;const s=e/100,n=setInterval((()=>{t.innerText=i.toFixed(0),i+=s,i>e&&clearInterval(n)}),10)}AnimaNumbers(){this.Numeros.forEach((t=>{this.constructor.incrementarNumero(t)}))}handleObserver(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.AnimaNumbers())}addMutationObserver(){this.observer=new MutationObserver(this.handleObserver),this.observer.observe(this.ObserverTarget,{attributes:!0})}Init(){return this.ObserverTarget&&this.Numeros.length&&this.addMutationObserver(),this}}let i;new class{constructor(t,e){this.options=void 0===e?{block:"start",behavior:"smooth"}:e,this.navItems=document.querySelectorAll(t),this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(){this.navItems.forEach((t=>{const e=t.getAttribute("href");t.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(`${e}`).scrollIntoView(this.options)}))}))}init(){return this.navItems.length||this.navItems.forEach((t=>{t.addEventListener("click",this.scrollToSection)})),null}}('a[href^="#"]').init(),new class{constructor(t){this.faqList=document.querySelectorAll(t)}faqMake(){this.faqList.forEach((t=>{const e=t.nextElementSibling;t.addEventListener("click",(()=>{e.classList.toggle("showDD")}))}))}initAcordiao(){return this.faqList[0].outerHTML.startsWith("<dt>")&&this.faqList[0].nextElementSibling.outerHTML.startsWith("<dd")?this.faqMake():console.log("voce deve ter um dl seguida por um dt, o elemeto passado nao corresponde a esses parametros"),this}}(".faq-lista dt").initAcordiao(),(new class{constructor(){this.ModalAbrir=document.querySelector('[data-modal="abrir"]'),this.ModalCOntainer=document.querySelector("[data-modal='container']"),this.ModalFechar=document.querySelector('[data-modal="fechar"]'),this.Form=document.querySelector(".modal form"),this.ShowSenha=document.querySelector(".ShowSenha input"),this.senhaInput=document.querySelector('input[type="password"]'),this.eventToggleModal=this.eventToggleModal.bind(this),this.showSenha=this.showSenha.bind(this),this.clickForaModal=this.clickForaModal.bind(this)}abriModal(t){t.preventDefault(),this.ModalCOntainer.classList.add("ativo")}fecharModal(t){t.preventDefault(),this.ModalCOntainer.classList.remove("ativo")}toggleModal(){this.ModalCOntainer.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickForaModal(t){t.target===this.ModalCOntainer&&this.ModalCOntainer.classList.remove("ativo")}showSenha(){this.ShowSenha.checked?this.senhaInput.setAttribute("type","text"):this.senhaInput.setAttribute("type","password")}EventListeners(){this.ModalCOntainer.addEventListener("click",this.clickForaModal),this.ModalAbrir.addEventListener("click",this.eventToggleModal),this.ModalFechar.addEventListener("click",this.eventToggleModal),this.Form.addEventListener("submit",this.fecharModal),this.ShowSenha.addEventListener("click",this.showSenha)}init(){this.ModalCOntainer&&this.ModalFechar&&this.ModalAbrir&&this.EventListeners()}}).init(),new class{constructor(t){this.Tolltips=document.querySelectorAll(t),this.onMouseover=this.onMouseover.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.mouseMove=this.mouseMove.bind(this)}mouseMove(t){this.tollTipBox.style.top=`${t.pageY+20}px`,this.tollTipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tollTipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.mouseMove)}onMouseover({currentTarget:t}){this.criarTollBox(t),t.addEventListener("mousemove",this.mouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}criarTollBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("TollTip"),e.innerHTML=i,document.body.appendChild(e),this.tollTipBox=e}addEventListenerr(){this.Tolltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseover)}))}init(){return this.Tolltips.length&&this.addEventListenerr(),this}}('[data-tollTip="Tolltip"]').init();const s=new class{constructor(t){this.sections=document.querySelectorAll(t),this.TotalTop=70*window.innerHeight/100,this.checkDistance=function(t,e){let i;return(...e)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...e),i=null}),50)}}(this.checkDistance.bind(this))}getDistance(){this.Distance=Array.from(this.sections).map((t=>{const e=t.offsetTop;return{element:t,distancia:Math.floor(e-this.TotalTop)}}))}checkDistance(){this.Distance.forEach((t=>{window.pageYOffset>t.distancia?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",(()=>this.checkDistance()))),this}}(".js-scroll");s.init();const n=new class{constructor(t){this.ElementMenu=document.querySelectorAll(t),this.UserEvents=["click","touchstart"]}MenuHandleClick(e){e.preventDefault(),this.classList.add("ativoSubMenu"),t((()=>this.classList.remove("ativoSubMenu")),this)}events(){this.ElementMenu.forEach((t=>{this.UserEvents.forEach((e=>{t.addEventListener(e,this.MenuHandleClick)}))}))}init(){this.ElementMenu.length&&this.events()}}("[data-dropDown]");n.init(),new class{constructor(t,e){this.menu=document.querySelector(t),this.button=document.querySelector(e),this.handleClick=this.handleClick.bind(this)}handleClick(){this.menu.classList.toggle("active"),this.button.classList.toggle("active"),t((()=>{this.menu.classList.remove("active"),this.button.classList.remove("active")}),this.menu)}init(){return this.menu&&this.button&&this.button.addEventListener("click",this.handleClick),this}}('[data-menu="lista"]','[data-menu="button"]').init(),new class{constructor(t,e){this.EstaAberto=document.querySelector(t),this.funcionamento=document.querySelector(e),this.diasSemana=this.funcionamento.dataset.semana.split(",").map((t=>+t)),this.HorarioSemana=this.funcionamento.dataset.horario.split(",").map((t=>+t)),this.DataAgora=new Date,this.DiaAgora=this.DataAgora.getDay(),this.HorarioAgora=this.DataAgora.getUTCHours()-3}wasWorking(){this.diasSemana.includes(this.DiaAgora)&&this.HorarioAgora>=this.HorarioSemana[0]&&this.HorarioAgora<this.HorarioSemana[1]?this.EstaAberto.classList.add("aberto"):this.EstaAberto.classList.add("fechado")}init(){this.wasWorking()}}(".dados","[data-Semana]").init();const o=new class extends class{constructor(t,e){this.slide=document.querySelector(t),this.wrapper=document.querySelector(e),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="ativo",this.changeEvent=new Event("changeSlide")}transition(t){this.slide.style.transition=t?"transform .3s":""}moveSlide(t){this.dist.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0, 0)`}updatePosition(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}onStart(t){let e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}changeSlideOnEnd(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}addSlideEvents(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}slidePosition(t){const e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}slidesConfig(){this.slideArray=[...this.slide.children].map((t=>({position:this.slidePosition(t),element:t})))}slidesIndexNav(t){const e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}changeSlide(t){const e=this.slideArray[t];this.moveSlide(e.position),this.slidesIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}changeActiveClass(){this.slideArray.forEach((t=>t.element.classList.remove(this.activeClass))),this.slideArray[this.index.active].element.classList.add(this.activeClass)}activePrevSlide(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}activeNextSlide(){void 0!==this.index.next&&this.changeSlide(this.index.next)}onResize(){setTimeout((()=>{this.slidesConfig(),this.changeSlide(this.index.active)}),1e3)}addResizeEvent(){window.addEventListener("resize",this.onResize)}bindEvents(){var t,e;this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.onResize=(t=this.onResize.bind(this),e=200,(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...s),i=null}),e)}),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this)}init(){this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.addResizeEvent(),this.changeSlide(0)}}{constructor(t,e){super(t,e),this.bindControlsEvent()}addArrow(t,e){this.prevButton=document.querySelector(t),this.NextButton=document.querySelector(e),this.addArrowEvent()}addArrowEvent(){this.prevButton.addEventListener("click",this.activePrevSlide),this.NextButton.addEventListener("click",this.activeNextSlide)}CreateControls(){const t=document.createElement("ul");return t.classList.add("SlidePaginacao"),this.slideArray.forEach(((e,i)=>{t.innerHTML+=`<li><a href='#slide${i+1}'></a></li>`})),this.wrapper.append(t),t}activeControlItem(){this.controlArray.forEach((t=>t.classList.remove(this.activeClass))),this.controlArray[this.index.active].classList.add(this.activeClass)}addControl(t=null){this.control=document.querySelector(t)||this.CreateControls(),this.controlArray=[...this.control.children],this.controlArray.forEach(((t,e)=>{this.EventControl(t,e)}))}EventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e)})),this.activeControlItem(),this.wrapper.addEventListener("changeSlide",this.activeControlItem)}bindControlsEvent(){this.changeSlide=this.changeSlide.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}(".Slide",".Slide-Container");o.init(),o.addControl(".pagination-Item"),function(){const t=document.querySelectorAll('[data-animais="desc"] section');function e(e){t.forEach((t=>t.classList.remove("ativo-descAnimals")));const i=document.querySelector(`#${e}`),s=i.dataset.anime;i.classList.add("ativo-descAnimals",s)}document.querySelectorAll('img[src^="img/imagem"]').forEach((t=>{t.addEventListener("click",(()=>{e(t.getAttribute("class"))}))})),e("raposa")}(),async function(t,e){const i=document.querySelector(".BitCoin span"),s=await fetch("https://blockchain.info/ticker"),n=+(await s.json()).BRL.sell;i.innerText=`${(1e3/n).toFixed(3)}R$`}(),async function(){const t=await fetch("../../AnimaisApi.json"),i=await t.json(),s=document.querySelector(".numeros-grid");i.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3> \n  <span>${t.total}</span> `,e}(t);s.appendChild(e)})),t.ok&&new e(".numeros-grid span","ativo").Init()}()})();