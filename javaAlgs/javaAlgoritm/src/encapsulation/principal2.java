package encapsulation;

public class principal2 {
    public static void main(String[] args) {
        Carro c1 = new Carro();
        //Defini o set na Classe carro pra pegar o nPortas
        c1.setNportas(4);
        c1.setMarca("Cruise");
        c1.setModelo("4x4");
        c1.setnCavalos(700);

        //Aqui é como retorna os getters
        System.out.println(c1.getnportas());
        System.out.println(c1.getModelo());
    }
}
