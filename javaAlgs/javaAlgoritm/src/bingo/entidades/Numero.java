package bingo.entidades;

public class Numero {
    private Integer valor;
    private Boolean marcado;

    public String toString() {
        if (marcado) {
            return valor.toString() + " - X";
        }
        return valor.toString() + " - O";
    }

    public Integer getValor() {
        return valor;
    }

    public void setValor(Integer valor) {
        this.valor = valor;
    }

    public Boolean getMarcado() {
        return marcado;
    }

    public void setMarcado(Boolean marcado) {
        this.marcado = marcado;
    }
}
