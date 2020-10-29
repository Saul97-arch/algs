package banco.entidades;

public class ContaCorrente extends Conta {

    private Integer qtdCheques;

    public Integer getQtdCheques() {
        return qtdCheques;
    }

    public void setQtdCheques(Integer qtdCheques) {
        this.qtdCheques = qtdCheques;
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
