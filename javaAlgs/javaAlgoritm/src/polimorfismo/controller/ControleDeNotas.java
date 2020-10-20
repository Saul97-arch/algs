package polimorfismo.controller;

import polimorfismo.entidades.Aluno;
import polimorfismo.entidades.Materia;
import polimorfismo.entidades.Nota;
import polimorfismo.entidades.Professor;
import polimorfismo.interfaces.ControlesBasicos;

import java.util.ArrayList;
import java.util.Scanner;

public class ControleDeNotas implements ControlesBasicos {
    private Scanner scanner = new Scanner(System.in);
    private ArrayList<Materia> materias = new ArrayList<>();
    private ArrayList<Aluno> alunos = new ArrayList<>();
    private String mostrarMenu() {
        System.out.println("Digite o comando desejado\n" +
                "1 - Ver alunos\n" +
                "1 - Ver materias\n" +
                "3 - Inserir aluno\n" +
                "4 - Inserir nota\n" +
                "5 - Excluir nota\n" +
                "6 - Consultar notas\n" +
                "0 - Para sair\n");

        return scanner.nextLine();
    }

    public void iniciar() {
        iniciarProfessorMateria();
        String opcao = mostrarMenu();

        while (!opcao.equals("0")) {
            switch (opcao) {
                case "1":
                    System.out.println(alunos);
                    opcao = mostrarMenu();
                    break;
                case "2":
                    System.out.println(materias);
                    opcao = mostrarMenu();
                    break;
                case "3":
                    System.out.println("Digite o nome do aluno:");
                    String nome = scanner.nextLine();
                    System.out.println("Digite a matricula do aluno");
                    Integer matricula = Integer.parseInt(scanner.nextLine());


                    Aluno aluno = new Aluno(nome, matricula);
                    alunos.add(aluno);
                    System.out.println(alunos);

                    opcao = mostrarMenu();
                    break;
                case "4":
                    inserir();
                    opcao = mostrarMenu();
                    break;
                case "5":
                    excluir();
                    opcao = mostrarMenu();
                    break;
                case "6":
                    consultar();
                    opcao = mostrarMenu();
                    break;
            }
        }
    }

    public void inserir() {
        System.out.println("Digite o indice do aluno");
        Integer indiceAluno = Integer.parseInt(scanner.nextLine());
        System.out.println("Digite o indice da materia");
        Integer indiceMateria = Integer.parseInt(scanner.nextLine());
        System.out.println("Digite a nota:");
        Double valorNota = Double.parseDouble(scanner.nextLine());

        Nota nota = new Nota();
        nota.setNota(valorNota);
        nota.setMateria(materias.get(indiceMateria));

        alunos.get(indiceAluno).getNotas().add(nota);
    }

    public void excluir() {
        System.out.println("Digite o indice do aluno");
        Integer indiceAluno = Integer.parseInt(scanner.nextLine());
        System.out.println("Digite o indice da nota que deseja excluir");
        int indiceNota = Integer.parseInt(scanner.nextLine());

        alunos.get(indiceAluno).getNotas().remove(indiceNota);
    }

    public void consultar() {
        System.out.println("Digite o indice do aluno");
        Integer indiceAluno = Integer.parseInt(scanner.nextLine());
        System.out.println(alunos.get(indiceAluno).getNotas());
    }

    private void iniciarProfessorMateria (){
        Professor professor1 = new Professor();
        professor1.setNome("Ronaldo Sanchez");
        Materia materia1 = new Materia();
        materia1.setNome("Português");
        materia1.setProfessor(professor1);
        materias.add(materia1);

        Professor professor2 = new Professor();
        professor2.setNome("Jorge Silva");
        Materia materia2 = new Materia();
        materia2.setNome("Matematica");
        materia2.setProfessor(professor2);
        materias.add(materia2);

        Professor professor3 = new Professor();
        professor3.setNome("Cremerson Djonga");
        Materia materia3 = new Materia();
        materia3.setNome("Geografia");
        materia3.setProfessor(professor3);
        materias.add(materia3);

        Professor professor4 = new Professor();
        professor4.setNome("Gener Djow");
        Materia materia4 = new Materia();
        materia4.setNome("Artes");
        materia4.setProfessor(professor4);
        materias.add(materia4);
    }
}
