package banco.entidades;

import banco.Interfaces.Operacos;

public abstract class Conta implements Operacos {
    private Integer agencia;
    private Integer numero;
    private Integer digito;
    //Campo só é acessado na classe pai e nas filhas apenas
    protected Double saldo;
    private Cliente cliente;

    public void imprimirSaldo() {
        System.out.println(saldo);
    }

    public Integer getAgencia() {
        return agencia;
    }

    public void setAgencia(Integer agencia) {
        this.agencia = agencia;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public Integer getDigito() {
        return digito;
    }

    public void setDigito(Integer digito) {
        this.digito = digito;
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
}
