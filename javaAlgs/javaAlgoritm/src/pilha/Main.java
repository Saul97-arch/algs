package pilha;

import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        //LIFO, last in, first out, ultimo a entrar primeiro a sair
        //O ultimo fica no topo!
        Stack<String> stack = new Stack<>();

        //Adicionando elementos na pilha
        stack.add("Livro 1");
        stack.add("Livro 2");
        stack.add("Livro 3");
        stack.add("Livro 4");
        stack.add("Livro 5");

        System.out.println(stack);

        //Removendo ultimo elemento, o do topo
        System.out.println("Elemento removido: " + stack.pop());

        System.out.println(stack);

        //Verifica ultimo elemento sem remover, verifica no topo da pilha
        System.out.println("Elemento no topo verificado: " + stack.peek());

        System.out.println(stack);

        //Procurar elemento na pilha, retorna a posição, se não achar -1
        System.out.println(stack.search("Livro 4"));

        //Retorna um true ou false se a pilha está vazia
        System.out.println(stack.isEmpty());

    }
}
