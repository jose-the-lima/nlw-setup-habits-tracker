const form = document.querySelector("#habits-form")
const nlwSetup = new NLWSetup(form)
const buttonAdd = document.querySelector(".button-add")

buttonAdd.addEventListener("click", add)

// Agora vamos adicionar um evento ao "formulário", ele vai simplesmente ativar a função "save" a cada vez que o formulário for alterado, e o nome do evento para alterações no formulário é "change"

form.addEventListener("change", save)

function add() {
  const dataAtual = new Date().toLocaleDateString("pt-br").slice(0, 5)
  const existeEssaData = nlwSetup.dayExists(dataAtual)

  if (existeEssaData) {
    alert("A data já está inclusa 🚫")
    return
  }

  nlwSetup.addDay(dataAtual)
}

function save() {
  let dados = nlwSetup.data

  // E a cada vez que o save for utilizado, ele vai pegar os dados atuais e vai salvar no localStorage com o método setItem

  localStorage.setItem("habitos", JSON.stringify(dados))

  // A cada vez que o formulário for alterado, então será chamado essa função que vai salvar os dados atuais em um localStorage com o formato de string.
}

// Para sempre que o meu programa for aberto, ele chamar todos os dados que já foram salvos ultimamente, eu vou precisar pegar os dados salvos, correto ? Então para isso eu vou utilizar o getItem e passar a chave onde se encontra os dados

const dadosAtuais = JSON.parse(localStorage.getItem("habitos")) || {}

nlwSetup.setData(dadosAtuais)
nlwSetup.load()
