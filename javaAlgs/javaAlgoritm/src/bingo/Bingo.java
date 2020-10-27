package bingo;

import bingo.entidades.Cartela;
import bingo.entidades.Numero;

import java.util.ArrayList;
import java.util.Random;

public class Bingo {
    private Integer numLinhasColunas = 3;

    public void iniciar() {
        Cartela cartela = new Cartela();
        cartela.setNome("Ronaldo");
        for (int i = 0; i < numLinhasColunas; i++) {
            ArrayList<Numero> linha = new ArrayList<>();
            for (int j = 0; j < numLinhasColunas; j++) {
                linha.add(geraNumero());
            }
            cartela.getLinhas().add(linha);
        }
        System.out.println(cartela);

        while (true) {
            Integer numeroSorteado = sortearNumero();
            System.out.println("Numero sorteado: " + numeroSorteado);

            marcarNumeroCartela(cartela, numeroSorteado);

            if (verificarCartelaVencedora(cartela)) {
                System.out.println(cartela.getNome() + " venceu!");
                imprimirCartela(cartela);
                break;
            }
        }
    }
    private void imprimirCartela(Cartela cartela) {
        for (ArrayList<Numero> linha: cartela.getLinhas()) {
            System.out.println(linha);
        }
    }
    private Numero geraNumero() {
        Numero numero = new Numero();
        numero.setMarcado(false);
        numero.setValor(sortearNumero());

        return numero;
    }

    private Integer sortearNumero() {
        Integer num = new Random().nextInt(100);
        if (num.equals(0)) {
            num = 1;
        }
        return num;
    }

    private void marcarNumeroCartela(Cartela cartela, Integer num) {
        for (ArrayList<Numero> linha : cartela.getLinhas()) {
            for (Numero numero : linha) {
                if (numero.getValor().equals(num)) {
                    numero.setMarcado(true);
                }
            }
        }
    }

    private Boolean verificarCartelaVencedora(Cartela cartela) {

        for (int i = 0; i < cartela.getLinhas().size(); i++) {
            if (verificaLinhaMarcada(cartela.getLinhas().get(i))) {
                System.out.println("Vitoria na horizontal!");
                return true;
            }
        }

        for (int i = 0; i < numLinhasColunas; i++) {
            if (verificaColunaMarcada(cartela, 0)) {
                System.out.println("Vitoria na vertical!");
                return true;
            }
        }

        if (verificaDiagonalMarcada(cartela)) {
            System.out.println("Vitoria na diagonal");
            return true;
        }

        if (verificaDiagonalInvertidaMarcada(cartela)) {
            System.out.println("Vitoria na diagonal invertida");
            return true;
        }

        return  false;
    }

    private Boolean verificaLinhaMarcada(ArrayList<Numero> linha) {
        for (int i = 0; i < linha.size(); i++) {
            if(!linha.get(i).getMarcado()) {
                return false;
            }
        }
        return true;
    }

    private Boolean verificaColunaMarcada(Cartela cartela, int coluna) {
        for (ArrayList<Numero> linha: cartela.getLinhas()) {
            if (!linha.get(coluna).getMarcado()) {
                return false;
            }
        }
        return  true;
    }

    private Boolean verificaDiagonalMarcada(Cartela cartela) {
        for (int i = 0; i < numLinhasColunas; i++) {
            if (!cartela.getLinhas().get(i).get(i).getMarcado()) {
                return false;
            }
        }

        return true;
    }

    private Boolean verificaDiagonalInvertidaMarcada(Cartela cartela) {
        int j = 0;
        for (int i = numLinhasColunas - 1; i >= 0; i--) {
            if(!cartela.getLinhas().get(j).get(i).getMarcado()) {
                return false;
            }
            j++;
        }
        return true;
    }
}
