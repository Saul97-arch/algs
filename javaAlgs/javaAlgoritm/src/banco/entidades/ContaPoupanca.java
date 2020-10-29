package banco.entidades;

public class ContaPoupanca extends Conta {
    private Double rentabilidade;


    public void imprimirSaldo() {
        System.out.println("O saldo da poupança é: " + saldo);
    }

    public Double getRentabilidade() {
        return rentabilidade;
    }

    public void setRentabilidade(Double rentabilidade) {
        this.rentabilidade = rentabilidade;
    }

    @Override
    public void saque() {

    }

    @Override
    public void deposito() {

    }

    @Override
    public void saldo() {

    }

    @Override
    public void extrato() {

    }
}
