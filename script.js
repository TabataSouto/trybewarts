const inputEmail = document.querySelector('#email');
const emailTeste = 'tryber@teste.com';
const senhaTeste = '123456';
const inputSenha = document.querySelector('#senha');
const botaoSubmit = document.querySelector('#botao');
const pesquisa = document.querySelector('#label-rate');

function validacaoBotao(event) {
  event.preventDefault();
  if (inputSenha.value === senhaTeste && inputEmail.value === emailTeste) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoSubmit.addEventListener('click', validacaoBotao);

//----------------------------------------------------------------------

// Este link nos ajudou a realizar o requisito 14: https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
function gerarRadioPesquisa() {
  const arrPesquisa = 10;
  for (let index = 1; index <= arrPesquisa; index += 1) {
    const radio = document.createElement('input');
    const texto = document.createTextNode(index);
    radio.type = 'radio';
    radio.name = 'rate';
    radio.value = arrPesquisa[index];
    radio.innerText = arrPesquisa[index];
    pesquisa.appendChild(radio);
    pesquisa.appendChild(texto);
  }
}
gerarRadioPesquisa();
