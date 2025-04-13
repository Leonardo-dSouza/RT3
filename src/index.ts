import * as readline from "readline"
import Mensagens from "./mensagens.js";  
import Calculo from "./calculo.js";
import Divisor from "./divisor.js";
import Multiplicador from "./multiplicador.js";
import Radiador from "./radiacao.js";
import Subtrador from "./subtrador.js";
import Somador from "./somador.js";




let mensagens = new Mensagens()
    

let iniciar = () => {
  let leitor = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
      let instrucoes = valor.split(' ');
      let numero1 = Number(instrucoes[0]);
      let numero2 = Number(instrucoes[1]);
      let operacao = instrucoes[2];
      
      if (instrucoes.length === 1) {
          operacao = instrucoes[0];
      }

      console.log(`Estas foram suas instruções: ${instrucoes}\n`);
      
      let calculo: Calculo; 

      switch (operacao) {
          case 'Somar':
              calculo = new Somador();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Subtrair':
              calculo = new Subtrador();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Multiplicar':
              calculo = new Multiplicador();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Dividir':
              calculo = new Divisor();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Radiacao':
            calculo = new Radiador()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
            break
          case 'Sair':
              console.log(`Até uma próxima, falou...`);
              break;
          default:
              console.log(`Operação não entendida :(`);
      }
      
      leitor.close();
      if (operacao !== 'Sair') {
          mensagens.comoUsar();
          iniciar();
      }
  });
};
iniciar()