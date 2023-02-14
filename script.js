// exercicio pratica guiada em aula

const string = ["ola", "tudo", "bem"]
const numero = [10, 13, 73]
const variosItens = ["rock", 51, true]
const numeroSozinho = [1989]
const valorVazio = []

const tamanhoString = string.length
console.log(tamanhoString)

const inclusaoOla = string.includes("ola")
console.log(inclusaoOla)

const inclusaoTrue = variosItens.includes(true)
console.log(inclusaoTrue)

const sozinho = numeroSozinho[0]
console.log(sozinho)

const tamanhoSozinho = numeroSozinho.length
console.log(tamanhoSozinho)

// terceira parte guiada

const copiaStringTeste = string
copiaStringTeste.push("livros")

console.log(string)
console.log(copiaStringTeste)

const copiaStringCerto = string.slice()

copiaStringCerto.splice(2,2)
console.log(copiaStringCerto)

// novo exercicio
/* Crie um array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.

Depois disso, crie uma cópia deste array utilizando o método slice().

No array copiado: 
Remova o último item 
Adicione o número 6 no fim do array
Remova o número que está no índice 2 do array
Por fim, imprima os dois arrays */

const numerosAleatorios = [17, 73, 33, 45, 18]
const copiaNumerosAleatorios = numerosAleatorios.slice()
copiaNumerosAleatorios.splice(4,1)
copiaNumerosAleatorios.push(6)
copiaNumerosAleatorios.splice(2,1)
console.log("Editados" , copiaNumerosAleatorios)
console.log("Original" , numerosAleatorios)
