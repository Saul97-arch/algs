package fila;

import java.util.LinkedList;
import java.util.Queue;

public class Fila {
    public static void main(String[] args) {
        //FIFO first in first out, primeiro a entrar, primeiro a sair, fila na vida XD
        //Muda a implementação depois do new por que é uma interfaca
        Queue<String> fila = new LinkedList<>();

        //Adicionando elementos na fila
        fila.add("Pessoa 1");
        fila.add("Pessoa 2");
        fila.add("Pessoa 3");
        fila.add("Pessoa 4");
        fila.add("Pessoa 5");

        System.out.println(fila);

        //Remover elemento da fila
        System.out.println("Elemento removido: " + fila.remove());

        System.out.println(fila);

        //Verifica o primeiro elemento da fila mas não remove
        System.out.println("Elemento verificado: " + fila.peek());

        //Verifica se tem um elemento na fila, retorna true ou false
        System.out.println(fila.contains("Pessoa 3"));

        //Retornar tamanho da fila
        System.out.println(fila.size());
    
        //Verifica se está vazio
        System.out.println(fila.isEmpty());
    }

}
