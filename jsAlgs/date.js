class Person {
    constructor(name, age, sex, nation) {
        this._name = name;
        this._age = age;
        this._sex = sex;
        this._nation = nation;
    }

    talk(about) {
        console.log(this._name + " is" + " talking about " + about);
    }
}


const p1 = new Person("Ricardo", "24", "Male", "Uganda");

p1.talk("Rooney");

console.log(p1);