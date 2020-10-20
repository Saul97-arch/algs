package encapsulation;

public class Carro {
    /*Essa parada de GET e SET é quando você tem métodos privados e quer retornar eles em
    * outras paradas*/
    private int nPortas;
    private String marca;
    private String modelo;
    private int nCavalos;

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getnCavalos() {
        return nCavalos;
    }

    public void setnCavalos(int nCavalos) {
        this.nCavalos = nCavalos;
    }

    //GET --> Pega os dados, se quiser somente leitura faz só o GET
    public int getnportas() {
        return nPortas;
    }
    //SET --> Seta os valores
    public void setNportas(int nPortas) {
        this.nPortas = nPortas;
    }
}
