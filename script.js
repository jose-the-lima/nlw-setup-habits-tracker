const form = document.querySelector("#habits-form")
const nlwSetup = new NLWSetup(form)
const buttonAdd = document.querySelector(".button-add")

buttonAdd.addEventListener("click", add)

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

  localStorage.setItem("habitos", JSON.stringify(dados))
}

const dadosAtuais = JSON.parse(localStorage.getItem("habitos")) || {}

nlwSetup.setData(dadosAtuais)
nlwSetup.load()
