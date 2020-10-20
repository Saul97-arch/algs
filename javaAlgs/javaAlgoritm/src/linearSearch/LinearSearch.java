package linearSearch;

import java.util.ArrayList;

public class LinearSearch {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(6);
        list.add(7);
        list.add(4);
        list.add(5);
        list.add(2);

        Integer elementoBuscado = 4;
        Boolean elementoEncontrado = false;
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).equals(elementoBuscado)) {
                System.out.println("O elemento buscado está no indice: " + i);
                elementoEncontrado = true;
                break;
            }
        }
        //No if entra se for true brow
        if(!elementoEncontrado) {
            System.out.println("Elemento não encontrado");
        }
        System.out.println(list);

        Boolean boleano = false;
        System.out.println(!boleano);
    }
}
