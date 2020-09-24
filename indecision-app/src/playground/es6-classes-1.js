class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(!this.homeLocation) {
            return greeting;
        }else{
            greeting += `I'm visiting from ${this.homeLocation}.`;
            return greeting;
        }
    }
}

const me = new Traveler('Allen Yang', 24, 'Nanjing');
console.log(me.getGreeting());