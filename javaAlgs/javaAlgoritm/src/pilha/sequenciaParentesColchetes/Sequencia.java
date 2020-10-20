package pilha.sequenciaParentesColchetes;

import java.util.Scanner;
import java.util.Stack;

public class Sequencia {
    private Scanner scanner = new Scanner(System.in);
    private String mostrarMenu() {
        System.out.println("Digite a sequência para verificação ou digite sair para encerrar:");

        return scanner.nextLine();
    }
    public void iniciar() {
        // ()
        //[]
        //(())
        //[()]
        //Terminou ou começou com parênteses ou colchetes é válido!
        //Se encontrar ( ou [ joga na pilha
        //Desempilha a pilha e verifica se é igual, se for é uma sequência válida
        //[(] inválido
        //[(([))] inválido
        String sequencia = mostrarMenu();
        while (!sequencia.equals("sair")) {
          Stack<String> stack = new Stack<>();
          boolean isSequenceOk = true;
          for (int i = 0; i < sequencia.length(); i++) {
             if (!isSequenceOk) {
                 break;
             }
             //Conversão para char
             char c = sequencia.charAt(i);

             switch (c) {
                    case ')':
                     if (stack.isEmpty()) {
                         System.out.println("Sequência inválida!");
                         sequencia = mostrarMenu();
                         isSequenceOk = false;
                     } else {
                         //Desempilha e pega ultimo elemento jogando na variavel elemento
                         String elemento = stack.pop();
                         if (!elemento.equals("(")) {
                             System.out.println("Sequencia inválida!");
                             sequencia = mostrarMenu();
                             isSequenceOk = false;
                         }
                     }
                     break;

                     case ']':
                     if (stack.isEmpty()) {
                         System.out.println("Sequência inválida!");
                         sequencia = mostrarMenu();
                         isSequenceOk = false;
                     } else {
                         //Desempilha e pega ultimo elemento jogando na variavel elemento
                         String elemento = stack.pop();
                         //Aqui verifica se difere do elemento que seria o correto
                         if (!elemento.equals("[")) {
                             System.out.println("Sequencia inválida!");
                             sequencia = mostrarMenu();
                             isSequenceOk = false;
                         }
                     }
                     break;

                     default:
                     //Cast pra str pois stack aceita só str
                     stack.push(String.valueOf(c));
             }
          }
          //Se a Stack estiver vazia todos os elementos foram puxados e comparados com sucesso
          //Claro isso vem fora do for, se for dentro significa caratcer inválido pra entrar nos cases
          if (stack.isEmpty()) {
              System.out.println("A sequência está correta!");
          } else {
              System.out.println("Sequência inválida");
          }
          sequencia = mostrarMenu();
        }
    }
}
