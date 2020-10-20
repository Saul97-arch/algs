package list.ListaCompras;

import java.util.ArrayList;
import java.util.Scanner;

public class ListaCompras {
    //Declaração de variáveis e tipos compostos
    private ArrayList<String> lista = new ArrayList<>();
    private Scanner ent = new Scanner(System.in);

    public  void iniciar() {
        String opcao = mostrarMenu();
        while (!opcao.equals("5")) {
            switch (opcao) {
                case "1":
                    System.out.println(lista);
                    opcao = mostrarMenu();
                    break;
                case "2":
                    System.out.println("Digite o item que você quer adicionar:");
                    String item = ent.nextLine();
                    lista.add(item);

                    opcao = mostrarMenu();
                    break;
                case "3":
                    System.out.println("Digite o indice do item para remover da lista:");
                    int indice = Integer.valueOf(ent.nextLine());
                    lista.remove(indice - 1);
                    System.out.println(lista);

                    opcao = mostrarMenu();
                    break;
                case "4":
                    lista.clear();
                    opcao = mostrarMenu();
                    break;
                default:
                    System.out.println("Opção invalida!");
                    opcao = mostrarMenu();
            }
        }
        ent.close(); //Libera memória
        System.out.println("Obrigado por usar o sistema!");
    }

    private String mostrarMenu() {
        Scanner ent = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();
        sb.append("Digite o comando desejado: \n");
        sb.append("1 - Ver Lista\n");
        sb.append("2 - Adicionar item a lista\n");
        sb.append("3 - Remover item da lista\n");
        sb.append("4 - Limpar lista\n");
        sb.append("5 - Sair");

        System.out.println(sb);
        return ent.nextLine();
    }
}
