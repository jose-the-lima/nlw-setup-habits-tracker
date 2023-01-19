const form = document.querySelector("#habits-form")

const nlwSetup = new NLWSetup(form)

let data = {
  run: ["01-17", "01-18", "01-19"],
  food: ["01-15", "01-16", "01-17"],
  water: ["01-15", "01-16", "01-17", "01-18", "01-19"],
  study: ["01-15", "01-16", "01-17", "01-18", "01-19"],
}

nlwSetup.setData(data)
nlwSetup.load()
