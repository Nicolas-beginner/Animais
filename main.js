(()=>{"use strict";function t(t,e){const s="data-outside",o=document.documentElement;function i(n){e.contains(n.target)||(t(),o.removeEventListener("click",i),e.removeAttribute(s))}null===e.getAttribute(s)&&(setTimeout((()=>{o.addEventListener("click",i)})),e.setAttribute(s,""))}class e{constructor(t,e){this.observer=void 0,this.Numeros=document.querySelectorAll(t),this.handleObserver=this.handleObserver.bind(this),this.observerClass=e,this.ObserverTarget=document.querySelector(".numeros")}static incrementarNumero(t){const e=+t.innerText;let s=0;const o=e/100,i=setInterval((()=>{t.innerText=s.toFixed(0),s+=o,s>e&&clearInterval(i)}),10)}AnimaNumbers(){this.Numeros.forEach((t=>{this.constructor.incrementarNumero(t)}))}handleObserver(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.AnimaNumbers())}addMutationObserver(){this.observer=new MutationObserver(this.handleObserver),this.observer.observe(this.ObserverTarget,{attributes:!0})}Init(){return this.ObserverTarget&&this.Numeros.length&&this.addMutationObserver(),this}}new class{constructor(t,e){this.options=void 0===e?{block:"start",behavior:"smooth"}:e,this.navItems=document.querySelectorAll(t),this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(){this.navItems.forEach((t=>{const e=t.getAttribute("href");t.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(`${e}`).scrollIntoView(this.options)}))}))}init(){return this.navItems.length||this.navItems.forEach((t=>{t.addEventListener("click",this.scrollToSection)})),null}}('a[href^="#"]').init(),new class{constructor(t){this.faqList=document.querySelectorAll(t)}faqMake(){this.faqList.forEach((t=>{const e=t.nextElementSibling;t.addEventListener("click",(()=>{e.classList.toggle("showDD")}))}))}initAcordiao(){return console.log(this.faqList[0].nextElementSibling.outerHTML.startsWith("<dd")),this.faqList[0].outerHTML.startsWith("<dt>")&&this.faqList[0].nextElementSibling.outerHTML.startsWith("<dd")?this.faqMake():console.log("voce deve ter um dl seguida por um dt, o elemeto passado nao corresponde a esses parametros"),this}}(".faq-lista dt").initAcordiao(),(new class{constructor(){this.ModalAbrir=document.querySelector('[data-modal="abrir"]'),this.ModalCOntainer=document.querySelector("[data-modal='container']"),this.ModalFechar=document.querySelector('[data-modal="fechar"]'),this.Form=document.querySelector(".modal form"),this.ShowSenha=document.querySelector(".ShowSenha input"),this.senhaInput=document.querySelector('input[type="password"]'),this.eventToggleModal=this.eventToggleModal.bind(this),this.showSenha=this.showSenha.bind(this),this.clickForaModal=this.clickForaModal.bind(this)}abriModal(t){t.preventDefault(),this.ModalCOntainer.classList.add("ativo")}fecharModal(t){t.preventDefault(),this.ModalCOntainer.classList.remove("ativo")}toggleModal(){this.ModalCOntainer.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),console.log(this),this.toggleModal()}clickForaModal(t){console.log(this.ModalCOntainer),t.target===this.ModalCOntainer&&this.ModalCOntainer.classList.remove("ativo")}showSenha(){console.log(this.senhaInput),this.ShowSenha.checked?this.senhaInput.setAttribute("type","text"):this.senhaInput.setAttribute("type","password")}EventListeners(){this.ModalCOntainer.addEventListener("click",this.clickForaModal),this.ModalAbrir.addEventListener("click",this.eventToggleModal),this.ModalFechar.addEventListener("click",this.eventToggleModal),this.Form.addEventListener("submit",this.fecharModal),this.ShowSenha.addEventListener("click",this.showSenha)}init(){this.ModalCOntainer&&this.ModalFechar&&this.ModalAbrir&&this.EventListeners()}}).init(),new class{constructor(t){this.Tolltips=document.querySelectorAll(t),this.onMouseover=this.onMouseover.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.mouseMove=this.mouseMove.bind(this)}mouseMove(t){this.tollTipBox.style.top=`${t.pageY+20}px`,this.tollTipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tollTipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.mouseMove)}onMouseover({currentTarget:t}){this.criarTollBox(t),t.addEventListener("mousemove",this.mouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}criarTollBox(t){const e=document.createElement("div"),s=t.getAttribute("aria-label");e.classList.add("TollTip"),e.innerHTML=s,document.body.appendChild(e),this.tollTipBox=e}addEventListenerr(){this.Tolltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseover)}))}init(){return this.Tolltips.length&&this.addEventListenerr(),this}}('[data-tollTip="Tolltip"]').init(),function(){const e=document.querySelector('[data-menu="lista"]'),s=document.querySelector('[data-menu="button"]');t((()=>{e.classList.remove("active"),s.classList.remove("active")}),e),s.addEventListener("click",(function(){e.classList.toggle("active"),s.classList.toggle("active")}))}(),function(){const t=document.querySelectorAll(".js-scroll"),e=70*window.innerHeight/100;window.addEventListener("scroll",(()=>{t.forEach((t=>{const{top:s}=t.getBoundingClientRect();s<e?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}))}(),function(){const t=document.querySelectorAll('[data-animais="desc"] section');function e(e){t.forEach((t=>t.classList.remove("ativo-descAnimals")));const s=document.querySelector(`#${e}`),o=s.dataset.anime;s.classList.add("ativo-descAnimals",o)}document.querySelectorAll('img[src^="img/imagem"]').forEach((t=>{t.addEventListener("click",(()=>{e(t.getAttribute("class"))}))})),e("raposa")}(),async function(){const t=document.querySelector(".BitCoin span"),e=await fetch("https://blockchain.info/ticker"),s=+(await e.json()).BRL.sell;t.innerText=`${(1e3/s).toFixed(3)}R$`}(),function(){const e=document.querySelectorAll("[data-dropDown]"),s=["click","touchstart"];function o(e){e.preventDefault(),this.classList.add("ativoSubMenu"),t((()=>this.classList.remove("ativoSubMenu")),this)}e.forEach((t=>{s.forEach((e=>t.addEventListener(e,o)))}))}(),function(){const t=document.querySelector(".dados"),e=document.querySelector("[data-Semana]"),s=e.dataset.semana.split(",").map((t=>+t)),o=e.dataset.horario.split(",").map((t=>+t)),i=new Date,n=i.getDay(),a=i.getHours();s.includes(n)&&a>=o[0]&&a<o[1]?t.classList.add("aberto"):t.classList.add("fechado")}(),async function(){const t=await fetch("../../AnimaisApi.json"),s=await t.json(),o=document.querySelector(".numeros-grid");s.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3> \n  <span>${t.total}</span> `,e}(t);o.appendChild(e)})),t.ok&&new e(".numeros-grid span","ativo").Init()}()})();