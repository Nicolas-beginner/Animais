import ScrollSuave from './modules/scrollSuave.js';
import Scrolldefault from './modules/animaçãoSroll.js';
import Cordiao from './modules/crodiao.js';
import ShowDesc from './modules/ShowDesc.js';
import Modal from './modules/modal.js';
import Tolltip from './modules/tollTip.js';
import dropDown from './modules/DorpDownMenu.js';
import menuMobile from './modules/menu-Mobile.js';
import initAnimaNumeros from './modules/AnimaNumeros.js';
import initFuncionamento from './modules/Funcionamento.js';
import fetchAnimais from './modules/FetchAnimais.js';
import FetchBit from './modules/bitcoinFetch.js';

const ScrollSuavew = new ScrollSuave('a[href^="#"]');
const acordiao = new Cordiao('.faq-lista dt');
const modall = new Modal();

menuMobile();
acordiao.initAcordiao();
ScrollSuavew.init();
modall.init();
Scrolldefault();
ShowDesc();
FetchBit();
Tolltip();
dropDown();
initAnimaNumeros();
initFuncionamento();
fetchAnimais();
