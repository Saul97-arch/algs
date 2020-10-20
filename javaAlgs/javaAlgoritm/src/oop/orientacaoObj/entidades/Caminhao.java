package oop.orientacaoObj.entidades;

public class Caminhao implements MeioLocomocao {
    private String chassi;
    private String modelo;
    private String carroceria;
    private Integer eixos;
    private Integer velocidade;

    @Override
    public void acelerar() {
        velocidade = velocidade + 5;
    }

    @Override
    public void frear() {
        if (velocidade > 0) {
            velocidade = velocidade - 2;
        }
    }

    public String getChassi() {
        return chassi;
    }

    public void setChassi(String chassi) {
        this.chassi = chassi;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getCarroceria() {
        return carroceria;
    }

    public void setCarroceria(String carroceria) {
        this.carroceria = carroceria;
    }

    public Integer getEixos() {
        return eixos;
    }

    public void setEixos(Integer eixos) {
        this.eixos = eixos;
    }

    public Integer getVelocidade() {
        return velocidade;
    }

    public void setVelocidade(Integer velocidade) {
        this.velocidade = velocidade;
    }



}
