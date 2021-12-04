const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const botaoSubmit = document.querySelector('#botao');
const pesquisa = document.querySelector('#contagem');
const botaoCheckbox = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const textoArea = document.querySelector('#textarea');
const avisoTextArea = document.querySelector('#counter');

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

// Requisito 21: Foi baseado na elaboração do projeto da Polyana (turma XP/B)

function familiaSelecionada() {
  const familias = document.querySelectorAll('#family input');
  let familiaEscolhida;
  familias.forEach((el) => {
    if (el.checked) {
      familiaEscolhida = el.value;
    }
  });
  return familiaEscolhida;
}

function resultadoPesquisa() {
  const pesquisaFeita = document.querySelectorAll('#contagem-pesquisa input');
  let pesquisaRealizada;
  pesquisaFeita.forEach((el) => {
    if (el.checked) {
      pesquisaRealizada = el.value;
    }
  });
  return pesquisaRealizada;
}

function conteudoAprender() {
  const conteudo = document.querySelectorAll('#conteudo-aprender input');
  const conteudoAAprender = [];
  conteudo.forEach((el) => {
    if (el.checked) {
      conteudoAAprender.push(el.value);
    }
  });
  return conteudoAAprender.join(', ');
}

function pegarDadosForm() {
  const primeiroNome = document.querySelector('#input-name');
  const sobrenome = document.querySelector('#input-lastname');
  const email = document.querySelector('#input-email');
  const casa = document.querySelector('#house');
  const comentario = document.querySelector('#textarea');

  return [
    { name: 'Nome', value: `${primeiroNome.value} ${sobrenome.value}` },
    { name: 'Email', value: email.value },
    { name: 'Casa', value: casa.value },
    { name: 'Matérias', value: conteudoAprender() },
    { name: 'Família', value: familiaSelecionada() },
    { name: 'Avaliação', value: resultadoPesquisa() },
    { name: 'Observações', value: comentario.value },
  ];
}

// Adicionar informações do formulario na tela;
function respostasDoForm(event) {
  event.preventDefault();
  const dadosForm = pegarDadosForm();
  const respostasForm = document.querySelector('#resposta-form');
  dadosForm.forEach((resposta) => {
    const item = document.createElement('p');
    item.innerText = `${resposta.name}: ${resposta.value}`;
    respostasForm.appendChild(item);
  });
}
botaoCheckbox.addEventListener('click', respostasDoForm);
