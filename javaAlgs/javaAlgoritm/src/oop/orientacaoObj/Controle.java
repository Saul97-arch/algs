package oop.orientacaoObj;

import oop.orientacaoObj.entidades.*;

import java.util.ArrayList;

public class Controle {
    private ArrayList<Aluno> alunos = new ArrayList<>();
    private ArrayList<Diretor> diretores= new ArrayList<>();
    private ArrayList<Professor> professores = new ArrayList<>();
    private ArrayList<Pessoa> pessoas = new ArrayList<>();

    public void iniciar() {
        Aluno aluno1 = new Aluno();
        aluno1.setNome("João Silva");
        aluno1.setCPF("8712881298");
        aluno1.setTelefone("(31)999288392");
        aluno1.setEndereco("Rua x");
        aluno1.setMatricula(123456);
        aluno1.setNumero("10");
        Aluno aluno2 = new Aluno("Maria souza", "0129120020", "Rua dos canhamos", 12223123);
        Aluno aluno3 = new Aluno("Egar");
        aluno3.setCPF("382829383");
        aluno3.setTelefone("33 32939239");
        aluno3.setEndereco("Rua Jobs");
        alunos.add(aluno1);
        alunos.add(aluno2);
        alunos.add(aluno3);

        Professor professor1 = new Professor();
        professor1.setNome("Henrique Souza");

        Diretor diretor1 = new Diretor();
        diretor1.setNome("Otavio Mesquita");

        pessoas.add(aluno1);
        pessoas.add(professor1);
        pessoas.add(diretor1);

        System.out.println(alunos.get(0).getNome());
        System.out.println(aluno1.enderecoCompleto());
        System.out.println(aluno1.informaTipo());
        System.out.println(professor1.informaTipo());
        System.out.println(diretor1.informaTipo());
        aluno1.atualizarDadosPessoais("Lalzo");
        aluno1.atualizarDadosPessoais("Lalzo2", "28129812819");

        AlunoMedio alunoMedio = new AlunoMedio();

        System.out.println(aluno1.getNome());
        //É uma lista das classes que implementam a interface MeioLocomocao
        ArrayList<MeioLocomocao> lista = new ArrayList<>();
        Carro carro = new Carro();
        Caminhao caminhao = new Caminhao();
        //Só aceita classes que tenham MeioLocomocao implementado
        lista.add(carro);
        lista.add(caminhao);

    }
}
