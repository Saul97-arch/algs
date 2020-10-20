package oop.orientacaoObj.entidades;

public class Aluno extends Pessoa {
    private Integer matricula;

    //Constructor Default
    public Aluno() {

    }
    //Construtores podem ser varios, nesse vamos passar só um param
    public Aluno(String nome) {
        this.nome = nome;
    }
    //Constructor, para passar os parametros de uma vez
    public Aluno(String nome, String CPF, String endereco, Integer matricula) {
        this.nome = nome;
        this.CPF = CPF;
        this.matricula = matricula;
        this.endereco = endereco;
    }

    public String enderecoCompleto() {
        return "Sobreescrevi o método";
    }

    public void atualizarDadosPessoais(String nome) {
        this.nome = nome;
    }

    public void atualizarDadosPessoais(String nome, String CPF) {
        this.nome = nome;
        this.CPF = CPF;
    }

    public void atualizarDadosPessoaisNomeCpf(String nome, String CPF) {
        this.nome = nome;
        this.CPF = CPF;
    }

    public Integer getMatricula() {
        return matricula;
    }

    public void setMatricula(Integer matricula) {
        this.matricula = matricula;
    }

    @Override
    public String informaTipo() {
        return "Meu tipo é Aluno";
    }
}
