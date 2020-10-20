package oop;

import java.util.Scanner;

public class principal {
    public static void main(String[] args) {
        Person p1 = new Person("Joe", 32, "3929.23232.22");

        Scanner entInt = new Scanner(System.in);
        Scanner entChar = new Scanner(System.in);
        char imprimeEndereco;

        System.out.println("Nome:");
        p1.name = entChar.nextLine();

        System.out.println("Idade:");
        p1.age = entInt.nextInt();

        System.out.println("CPF:");
        p1.CPF = entChar.nextLine();

        System.out.println("Rua:");
        p1.adress.street = entChar.nextLine();

        System.out.println("Número:");
        p1.adress.number = entInt.nextInt();

        System.out.println("Complemento:");
        p1.adress.complement = entChar.nextLine();

        System.out.println("Cidade:");
        p1.adress.city = entChar.nextLine();

        System.out.println("CEP:");
        p1.adress.CEP = entChar.nextLine();

        System.out.println("Estado:");
        p1.adress.state = entChar.nextLine();

        System.out.println("Imprimir dados endereço?");
        imprimeEndereco = entChar.nextLine().charAt(0);

        System.out.printf("%s\n", p1.printPersonData(imprimeEndereco));
    }
}
