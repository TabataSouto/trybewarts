const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const botaoSubmit = document.querySelector('#botao');
const pesquisa = document.querySelector('#contagem');
const botaoCheckbox = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const textoArea = document.querySelector('#textarea');
const avisoTextArea = document.querySelector('#counter');

// ---------------------------- para requisito 21
const pai = document.querySelector('#resposta-form');
const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('#input[class="radio-family"]:checked');
const aprender = document.querySelector('#label-content');
const notaPesquisa = document.querySelector('#contagem-pesquisa');
const comentario = document.querySelector('#textarea');

function validacaoBotao(event) {
  event.preventDefault();
  const emailTeste = 'tryber@teste.com';
  const senhaTeste = '123456';
  if (inputSenha.value === senhaTeste && inputEmail.value === emailTeste) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoSubmit.addEventListener('click', validacaoBotao);

// Este link nos ajudou a realizar esta função: https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode

function gerarPesquisa() {
  for (let index = 1; index <= 10; index += 1) {
    const radio = document.createElement('input');
    const texto = document.createTextNode(index);
    radio.type = 'radio';
    radio.name = 'rate';
    radio.value = index;
    pesquisa.appendChild(radio);
    pesquisa.appendChild(texto);
  }
}
gerarPesquisa();

// Requisito 18: Este site nos ajudou a realizar este requisito: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    botaoCheckbox.disabled = false;
  } else {
    botaoCheckbox.disabled = true;
  }
});

// Este link nos ajudou a realizar esta função: https://pt.stackoverflow.com/questions/113089/contador-de-caracteres-digitados-em-um-textarea

function limiteTextarea() {
  const valorLimite = 500;
  const caracteres = this.value.length;
  const restantes = valorLimite - caracteres;
  avisoTextArea.innerHTML = restantes;
}
textoArea.addEventListener('keyup', limiteTextarea);

// Adicionar informações do formulario na tela;
function respostasDoForm(event) {
  event.preventDefault();
  const filhoPai = pai.children;
  filhoPai[0].innerText = `Nome: ${firstName.value}`;
  filhoPai[1].innerText = `Sobrenome: ${lastName.value}`;
  filhoPai[2].innerText = `Email: ${email.value}`;
  filhoPai[3].innerText = `Casa: ${house.value}`;
  filhoPai[4].innerText = `Família: ${family.value}`;
  filhoPai[5].innerText = `Quer aprender: ${aprender.value}`;
  filhoPai[6].innerText = `Avaliação: ${notaPesquisa.value}`;
  filhoPai[7].innerText = `Comentário: ${comentario.value}`;
}

botaoCheckbox.addEventListener('click', respostasDoForm);
