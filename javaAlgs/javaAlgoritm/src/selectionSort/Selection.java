package selectionSort;

import java.util.ArrayList;

public class Selection {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(6);
        list.add(7);
        list.add(4);
        list.add(5);
        list.add(2);

        System.out.println(list);
        //DEBUGE PARA ESTUDAR
        for (int i = 0; i < list.size(); i++) {
            int menor = i;

            for (int j = menor + 1; j < list.size(); j++) {
                if (list.get(j) < list.get(menor)) {
                    menor =  j;
                }
            }
            //swap case menor diferente de i, se for igual é por que ele é o menor
            if (menor != i) {
                int temp = list.get(i);
                list.set(i, list.get(menor));
                list.set(menor, temp);
            }
        }

        System.out.println(list);
    }
}
