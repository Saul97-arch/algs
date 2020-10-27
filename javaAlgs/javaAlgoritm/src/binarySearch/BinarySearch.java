package binarySearch;

import java.util.ArrayList;

public class BinarySearch {
    public static void main(String[] args) {
        //A busca binária precisa de uma lista ordenada
        //DEBUGUE PARA ESTUDAR
        ArrayList<Integer> list = new ArrayList<>();
        /*
        for (int i = 1; i <= 100; i++) {
            list.add(i);
        }
        */

        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        int elementoBuscado = 64;

        int inicio = 0;
        int fim = list.size() - 1;

        Boolean elementoEncontrado = false;

        while (inicio <= fim) {
            int meio = (inicio + fim) / 2;

            if (list.get(meio) < elementoBuscado) {
                inicio = meio + 1;
            } else if (list.get(meio) > elementoBuscado) {
                fim = meio - 1;
            } else {
                System.out.println("Elemento encontrado no indice: " + meio);
                elementoEncontrado = true;
                break;
            }
        }

        if(!elementoEncontrado) {
            System.out.println("Elemento não encontrado");
        }
    }
}
