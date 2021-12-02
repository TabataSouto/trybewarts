const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const botaoSubmit = document.querySelector('#botao');

function validDados(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}
botaoSubmit.addEventListener('click', validDados);
