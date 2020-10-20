package matriz;

import java.util.ArrayList;
import java.util.Arrays;

public class Matriz {
    public static void main(String[] args) {
        //O primeiro ArrayList é pras linhas, o aninhado é pras colunas
        ArrayList<ArrayList<Double>> matriz = new ArrayList<>();

        ArrayList<Double> linha1 = new ArrayList<>();
        linha1.add(8.0);
        linha1.add(10.0);
        linha1.add(7.0);
        linha1.add(6.5);

        matriz.add(linha1);

        //Outra forma de adicionar
        ArrayList<Double> linha2 = new ArrayList<>(Arrays.asList(7.0, 9.0, 5.0, 4.0));
        ArrayList<Double> linha3 = new ArrayList<>(Arrays.asList(4.0, 8.0, 6.0, 9.0));

        matriz.add(linha2);
        matriz.add(linha3);

        System.out.println(matriz);

        //Pegando elementos da matriz, usando o get
        System.out.println(matriz.get(1).get(2));

        //Alterar elemento da matriz, pego a linha um e altero o elemento indice 2
        //get the line 1 and set the element index 2
        matriz.get(1).set(2, 10.5);

        System.out.println(matriz.get(1).get(2));

        System.out.println("Imprimido elementos de cada linha:");

        for (int i = 0; i < matriz.size(); i++) {
            ArrayList<Double> linha = matriz.get(i);
            System.out.println(linha);
            for (int j = 0; j < linha.size(); j ++) {
                System.out.println(linha.get(j));
            }
        }
    }
}
