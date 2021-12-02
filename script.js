
const inputEmail = document.querySelector('#email').value;
const emailTeste = 'tryber@teste.com';
const senhaTeste = '123456';
const inputSenha = document.querySelector('#senha').value;
const botaoSubmit = document.querySelector('#botao');

function validacaoDados() {
  if (inputSenha !== senhaTeste  && inputEmail !== emailTeste) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function validacaoBotao(event) {
  event.preventDefault();
  validacaoDados();
}
botaoSubmit.addEventListener('click', validacaoBotao);