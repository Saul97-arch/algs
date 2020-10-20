package list;

import java.util.ArrayList;

public class lista {
    public static void main(String[] args) {
        //Como declarar uma lista
        //Por padrão o tipo que vai no ArrayList não pode ser um primitivo
        //Até por que ser for pra mecher com int use array, overengeniering aqui não
        ArrayList<String> carros = new ArrayList<>();
        //Inserindo elementos, o add sempre adiciona ao final da lista
        carros.add("Celta");
        carros.add("Gol");
        carros.add("Palio");

        carros.add(1, "Sandero");

        //Vericar se contém elemento
        if (carros.contains("Gol")) {
            System.out.println("O elemento \"Gol\" no Array existe!");
        } else {
            System.out.println("O elemento \"Gol\" não existe!");
        }

        //Aqui seta o valor para um novo, no js é só um i[0] = "foo"
        carros.set(0, "Novo Celta");

        //Retorna a primeira ocorrência do item na lista
        System.out.println("Primeiro indice do carro " + carros.get(2) + " é: " +carros.indexOf("Gol"));

        carros.add("Gol");

        System.out.println("Ultimo indice do carro " + carros.get(4) + " é: " +carros.lastIndexOf("Gol"));

        for (int i = 0; i < carros.size(); i++) {
            //Veja em encapsulation, o set é pra atrubuir numa classe, e o get é pra pegar esse valor e retornar
            System.out.println(carros.get(i));
        }

        //Lembrar que quando tu remove o indice 0 o que era 1 vira 0
        //Quer remover sempre o primeiro? Remove elemento 0
        carros.remove(0);
        carros.remove(1);

        //For bolado
        System.out.println("\nApós a remoção:!");
        for (String carro : carros) {
            System.out.println(carro);
        }

        carros.clear();

        System.out.println("Após o clear: " + carros);
    }
}
