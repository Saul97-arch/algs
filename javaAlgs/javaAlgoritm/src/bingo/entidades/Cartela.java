package bingo.entidades;

import java.util.ArrayList;

public class Cartela {
    private String nome;
    private ArrayList<ArrayList<Numero>> linhas;

    //Construtor pra inicializar a linha e não dar nullPointer
    public Cartela() {
        linhas = new ArrayList<>();
    }

    public String toString() {
        return linhas.toString();
    }

    public ArrayList<ArrayList<Numero>> getLinhas() {
        return linhas;
    }

    public void setLinhas(ArrayList<ArrayList<Numero>> linhas) {
        this.linhas = linhas;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


}
