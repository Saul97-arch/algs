package oop.orientacaoObj.entidades;

public abstract class Pessoa {
    protected String nome;
    protected String CPF;
    protected String telefone;
    protected String endereco;
    protected String numero;

    public abstract String informaTipo();

    public String enderecoCompleto() {
        return endereco + ", " + numero;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }



    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCPF() {
        return CPF;
    }

    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }


}
