package bubleSort;

import java.util.ArrayList;

public class BubleSort {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(6);
        list.add(7);
        list.add(4);
        list.add(5);
        list.add(2);

        System.out.println(list);
        //O for externo vai garantir que percorra em cada elemento o algoritmo
        //DEBUGE PRA ESTUDAR
        for (int i = 0; i < list.size(); i++) {
            for (int j = 0; j < list.size() - 1; j++) {
                if (list.get(j) > list.get(j + 1)) {
                    //Swap
                    Integer aux = list.get(j);
                    list.set(j, list.get(j + 1));
                    list.set(j + 1, aux);
                }
            }
        }
        System.out.println(list);
    }
}
