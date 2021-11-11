import ScrollSuave from './modules/scrollSuave.js';
import ScrollAnima from './modules/animaçãoSroll.js';
import Cordiao from './modules/crodiao.js';
import ShowDesc from './modules/ShowDesc.js';
import Modal from './modules/modal.js';
import Tolltip from './modules/tollTip.js';
import dropDown from './modules/DorpDownMenu.js';
import menuMobile from './modules/menu-Mobile.js';
import initFuncionamento from './modules/Funcionamento.js';
import fetchAnimais from './modules/FetchAnimais.js';
import FetchBit from './modules/bitcoinFetch.js';

const ScrollSuavew = new ScrollSuave('a[href^="#"]');
ScrollSuavew.init();

const acordiao = new Cordiao('.faq-lista dt');
acordiao.initAcordiao();

const modall = new Modal();
modall.init();

const tolltip = new Tolltip('[data-tollTip="Tolltip"]');
tolltip.init();

const ScrollAnimacao = new ScrollAnima('.js-scroll');
ScrollAnimacao.init();

menuMobile();
ShowDesc();
dropDown();
initFuncionamento();

FetchBit('https://blockchain.info/ticker', '.BitCoin span');
fetchAnimais('../../AnimaisApi.json', '.numeros-grid');
