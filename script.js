
const inputEmail = document.querySelector('#email');
const emailTeste = 'tryber@teste.com';
const senhaTeste = '123456';
const inputSenha = document.querySelector('#senha');
const botaoSubmit = document.querySelector('#botao');


function validacaoBotao(event) {
  event.preventDefault();
  if (inputSenha.value === senhaTeste  && inputEmail.value === emailTeste) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoSubmit.addEventListener('click', validacaoBotao);