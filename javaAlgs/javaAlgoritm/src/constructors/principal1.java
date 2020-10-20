package constructors;

import oop.Person;

public class principal1 {
    public static void main(String[] args) {
        Person p2 = new Person("Jorge", 23, "999-8738-323");
        System.out.println(p2.printPersonData('s'));
    }
}
