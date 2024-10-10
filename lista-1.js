// Nome: Leonardo Canuto Junior
// RA: 2453533

// 1. Função que calcule e retorne o fatorial de um número:
function fatorial(n) {
    if (n < 0) return null;
    if (n === 0) return 1;
    let resultado = 1;
    for (let i = n; i > 1; i--) {
      resultado *= i;
    }
    return resultado;
  }

// 2. Função que retorne uma String contendo uma sequência de N mensagens:
  function repetirMensagem(mensagem, n) {
    let resultado = '';
    for (let i = 0; i < n; i++) {
      resultado += mensagem;
      if (i < n - 1) resultado += ' ';
    }
    return resultado;
  }

// 3. Função que realiza uma operação básica entre dois valores:
function calcularOperacao(a, b, operacao) {
    if (operacao === 'adição') return a + b;
    if (operacao === 'subtração') return a - b;
    if (operacao === 'multiplicação') return a * b;
    if (operacao === 'divisão') {
      if (b === 0) return null;
      return a / b;
    }
    return null; // Operação inválida
  }

// 4. Função que retorne um vetor com a tabuada de um número:
function tabuada(numero) {
    let resultados = [];
    for (let i = 1; i <= 10; i++) {
      resultados.push(numero * i);
    }
    return resultados;
  }

// 5. Função que retorne o número invertido:
function inverterNumero(numero) {
    let invertido = parseInt(numero.toString().split('').reverse().join(''));
    return invertido;
  }

// 6. Função que conte o número de vogais em uma string:
function contarVogais(str) {
    let vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let char of str) {
      if (vogais.includes(char)) contador++;
    }
    return contador;
  }

// 7. Função que verifique se a sequência de parênteses e colchetes está bem formada:
function verificarSequencia(sequencia) {
    let pilha = [];
    let pares = {
      '(': ')',
      '[': ']'
    };
    
    for (let char of sequencia) {
      if (char === '(' || char === '[') {
        pilha.push(char);
      } else if (char === ')' || char === ']') {
        let ultimo = pilha.pop();
        if (pares[ultimo] !== char) return false;
      }
    }
    
    return pilha.length === 0;
  }

// 8. Função que gera uma lista de objetos aleatórios:
function gerarPessoasAleatorias(n) {
    const nomes = ['Ana', 'Pedro', 'João', 'Maria', 'Carlos', 'Fernanda'];
    let pessoas = [];
    
    for (let i = 1; i <= n; i++) {
      let pessoa = {
        id: i,
        nome: nomes[Math.floor(Math.random() * nomes.length)],
        idade: Math.floor(Math.random() * (90 - 18 + 1)) + 18
      };
      pessoas.push(pessoa);
    }
    
    return pessoas;
  }


// 9. Função que calcula a média de idades:
function calcularMediaIdades(lista) {
    let soma = lista.reduce((total, pessoa) => total + pessoa.idade, 0);
    return soma / lista.length;
  }

// 10. Função que ordena a lista de objetos por um atributo:
function ordenarPorAtributo(lista, atributo) {
    return lista.sort((a, b) => {
      if (a[atributo] < b[atributo]) return -1;
      if (a[atributo] > b[atributo]) return 1;
      return 0;
    });
  }
  
  // 1. Testando a função fatorial
console.log("1. Fatorial de 5:", fatorial(5)); // 120

// 2. Testando a função que repete mensagem
console.log("\n2. Repetindo a mensagem 'Olá' 3 vezes:", repetirMensagem("Olá", 3)); // "Olá Olá Olá"

// 3. Testando a função de operações básicas
console.log("\n3. Adição de 10 e 5:", calcularOperacao(10, 5, "adição")); // 15
console.log("\n3. Subtração de 10 e 5:", calcularOperacao(10, 5, "subtração")); // 5
console.log("\n3. Multiplicação de 10 e 5:", calcularOperacao(10, 5, "multiplicação")); // 50
console.log("\n3. Divisão de 10 e 2:", calcularOperacao(10, 2, "divisão")); // 5
console.log("\n3. Tentativa de divisão por 0:", calcularOperacao(10, 0, "divisão")); // null
console.log("\n3. Operação inválida:", calcularOperacao(10, 5, "potência")); // null

// 4. Testando a função tabuada
console.log("\n4. Tabuada de 7:", tabuada(7)); // [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]

// 5. Testando a função de inverter número
console.log("\n5. Número 875 invertido:", inverterNumero(875)); // 578

// 6. Testando a função de contar vogais
console.log("\n6. Número de vogais em 'Brocolis':", contarVogais("Brocolis")); // 3

// 7. Testando a função de verificar sequência de parênteses e colchetes
console.log("\n7. Verificação da sequência '(([]))':", verificarSequencia("(([]))")); // true
console.log("\n7. Verificação da sequência '(([)])':", verificarSequencia("(([)])")); // false

// 8. Testando a função de gerar pessoas aleatórias
let pessoas = gerarPessoasAleatorias(5);
console.log("\n8. Pessoas geradas aleatoriamente:", pessoas);

// 9. Testando a função de calcular a média de idades
console.log("\n9. Média de idades das pessoas geradas:", calcularMediaIdades(pessoas));

// 10. Testando a função de ordenar por atributo
console.log("\n10. Pessoas ordenadas por idade:", ordenarPorAtributo(pessoas, 'idade'));
console.log("\n10. Pessoas ordenadas por nome:", ordenarPorAtributo(pessoas, 'nome'));