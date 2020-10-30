class SimpleMembership{
    constructor(name) {
        this.name = name;
        this.cost = 50.00;
    }
}

class StandardMembership{
    constructor(name) {
        this.name = name;
        this.cost = 150.00;
    }
}

class PremiumMembership{
    constructor(name) {
        this.name = name;
        this.cost = 500.00;
    }
}

// создаём фабрику
class MemberFactory{
    // сюда передаём ссылки на однотипные объекты
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    // создаём объект, сначала передаём имя, которое будет использовано в конструкторе каждого класса
    // потом type, при помощи которого мы будем выбирать из list объект, который нам нужен
    create(name, type = 'simple'){

        // вот здесь мы выбрали объект
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        // создаём пользователя, то есть изначально мы из списка list выбрали тот, который нам нужен при помощи type,
        // а потом мы при помощи уже конструктора объекта дали ему имя

        const member = new Membership(name);

        // задаём тип
        member.type = type;

        // вывести информацию об объекте
        member.define = function (){

            console.log(`${this.name} (${this.type}): ${this.cost}`)

        }
        return member
    }

}

const factory = new MemberFactory()

const members = [
    factory.create('Bob', 'simple'),
    factory.create('Joe', 'standard')
]

members.forEach(x => x.define());