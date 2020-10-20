package oop;

public class Person {
    String name;
    int age;
    String CPF;
    Data adress;

    //Quando você chama uma classe em outra, tu tem que usar um cosnstrutor pra instaciar ela
    //na outra classe, nesse exemplo, instaciar um objeto adress do tipo Data na classe Person

    //Aqui eu passe um construtor que já leva alguns argumentos;
    public Person(String nome, int idade, String id) {
        name = nome;
        idade = age;
        CPF = id;
        adress = new Data();
    }

    public String printPersonData(char imprimirEndereco) {
        if (imprimirEndereco == 'N' || imprimirEndereco == 'n')
            return "Nome: " + name + "\nIdade: " + age + "\nCPF: " +
                    CPF;
        else
            return "Nome: " + name + "\nIdade: " + age + "\nCPF: " +
                    CPF + "\n" + adress.printData();
    }
}
