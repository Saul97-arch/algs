package oop.orientacaoObj.entidades;

import java.util.Date;

public class Professor extends Pessoa {
    private String nome;
    private String CPF;
    private String telefone;
    private String endereco;
    private Date dataAdmissao;


    public Date getDataAdmissao() {
        return dataAdmissao;
    }

    public void setDataAdmissao(Date dataAdmissao) {
        this.dataAdmissao = dataAdmissao;
    }


    @Override
    public String informaTipo() {
        return "Meu tipo é Professor";
    }
}
