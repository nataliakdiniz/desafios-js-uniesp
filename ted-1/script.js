/* Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados:

- A maior e a menor altura do grupo;
- A média de altura dos homens;
- O número de mulheres.*/

let MAXIMO_REPETICOES = 15

function pegarInformacoes() {
  const pessoas = []
  for (let i = 0; i < MAXIMO_REPETICOES; i++) {
    const sexo = prompt(`Informe seu sexo [M ou F]: `)
    const altura = parseFloat(prompt(`Informe sua altura - pessoa ${i + 1}`))
    const pessoa = { sexo, altura }
    pessoas.push(pessoa)
  }

  return pessoas
}

function pegarMaiorAlturaGrupo(pessoas) {
  let maiorAlturaGrupo = pessoas[0].altura

  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].altura > maiorAlturaGrupo) {
      maiorAlturaGrupo = pessoas[i].altura
    }
  }

  return maiorAlturaGrupo
}

function pegarMenorAlturaGrupo(pessoas) {
  let menorAlturaGrupo = pessoas[0].altura

  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].altura < menorAlturaGrupo) {
      menorAlturaGrupo = pessoas[i].altura
    }
  }

  return menorAlturaGrupo
}

function pegarMediaAlturaHomens(pessoas) {
  let quantidadeHomens = 0
  let alturaHomensTotal = 0
  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].sexo === 'M') {
      quantidadeHomens++
      alturaHomensTotal = pessoas[i].altura + alturaHomensTotal
    }
  }
  return alturaHomensTotal / quantidadeHomens
}

function pegarQuantidadeMulheres(pessoas) {
  let quantidadeMulheres = 0
  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].sexo === 'F') {
      quantidadeMulheres++
    }
  }
  return quantidadeMulheres
}

function main() {
  const pessoas = pegarInformacoes()
  const maiorAlturaGrupo = pegarMaiorAlturaGrupo(pessoas)
  const menorAlturaGrupo = pegarMenorAlturaGrupo(pessoas)
  const mediaAlturaHomens = pegarMediaAlturaHomens(pessoas)
  const quantidadeMulheres = pegarQuantidadeMulheres(pessoas)
  alert(`A maior altura do grupo é: ${maiorAlturaGrupo}`)
  alert(`A menor altura do grupo é: ${menorAlturaGrupo}`)
  alert(`A média de altura dos homens é: ${mediaAlturaHomens}`)
  alert(`A quantidade de mulheres é: ${quantidadeMulheres}`)
}
