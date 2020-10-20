package oop;

public class Data {

    String street;
    int number;
    String complement;
    String city;
    String CEP;
    String state;

    String printData() {
        return "Rua " + street + ", " + number + ", " + complement + ". Cidade: " + city
                +". Estado: " + state + ". CEP:" + CEP;
    }
}
