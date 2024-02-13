const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      respostas: [
        " Estilizar páginas da web",
        " Criar conteúdo dinâmico e interativo em páginas da web",
        " Armazenar dados em um banco de dados",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        " Uma instrução para repetir um bloco de código",
        " Um valor que não pode ser alterado",
        " Um nome simbólico para armazenar dados que podem ser alterados",
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        " push()",
        " unshift()",
        " slice()",
      ],
      correta: 0
    }, 
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        " Um valor que não pode ser alterado",
        " Um tipo de dado",
        " Um bloco de código que pode ser chamado e reutilizado",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        " <!-- Comentário -->",
        " // Comentário",
        " /* Comentário */",
      ],
      correta: 1
    },
    {
      pergunta: "O que é DOM em JavaScript?",
      respostas: [
        " Uma linguagem de programação",
        " Uma estrutura de dados",
        " Uma interface que permite scripts manipularem a estrutura de um documento HTML",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        " =", 
        " ==",
        " ===",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre == e === em JavaScript?",
      respostas: [
        " Não há diferença",
        " == compara o valor e o tipo, enquanto === compara apenas o valor",
        " == compara apenas o valor, enquanto === compara o valor e o tipo",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um loop em JavaScript?",
      respostas: [
        " Uma instrução condicional",
        " Um bloco de código que é executado repetidamente",
        " Uma função de alta ordem",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        " Seleciona o primeiro elemento de uma página HTML que corresponde a um seletor especificado",
        " Seleciona todos os elementos de uma página HTML que correspondem a um seletor especificado",
        " Seleciona um elemento de uma página HTML com base em sua classe",
      ],
      correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laços de repetição
for(const item of perguntas){ 
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta 
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
  const respostaSelecionada = parseInt(event.target.value)
  const estaCorreta = respostaSelecionada === item.correta
  
  corretas.delete(item)
  if (estaCorreta) {
    corretas.add(item)
  }
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
}


    quizItem.querySelector('dl').appendChild(dt)
  }
   

   
   //remove os clones
   quizItem.querySelector('dl dt').remove()
 
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
  

