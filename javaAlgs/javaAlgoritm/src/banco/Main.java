package banco;

import banco.entidades.Cliente;
import banco.entidades.Conta;
import banco.entidades.ContaCorrente;
import banco.entidades.ContaPoupanca;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Conta> contas = new ArrayList<>();

        Cliente cliente = new Cliente();
        cliente.setNome("Ronando");
        cliente.setCpf("18728127");
        cliente.setEndereco("Rua X");

        ContaCorrente contaCorrente = new ContaCorrente();
        contaCorrente.setAgencia(1212);
        contaCorrente.setNumero(2121);
        contaCorrente.setDigito(1);
        contaCorrente.setQtdCheques(10);
        contaCorrente.setSaldo(100.00);
        contaCorrente.setCliente(cliente);
        contaCorrente.imprimirSaldo();

        contas.add(contaCorrente);

        ContaPoupanca contaPoupanca = new ContaPoupanca();
        contaPoupanca.setAgencia(2112);
        contaPoupanca.setNumero(4124124);
        contaPoupanca.setDigito(12);
        contaPoupanca.setRentabilidade(1.0);
        contaPoupanca.setSaldo(10239.0);
        contaPoupanca.setCliente(cliente);
        contaPoupanca.imprimirSaldo();

        contas.add(contaPoupanca);

        for (Conta conta: contas) {
            System.out.println(conta.getAgencia());
        }

        Conta conta1 = new ContaCorrente();
        Conta conta2 = new ContaPoupanca();


    }
}