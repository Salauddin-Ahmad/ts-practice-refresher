class Person {
    name: string; 

    constructor(name: string) {
        this.name = name;
    }

    getSleep(numOfHours: number ) {
    console.log(`takes ${numOfHours}`)
    }
}


class Student extends  Person{
    constructor(name: string){
        super(name)
    }

    doStudy(numOfHours: number){
        console.log(`${this.name} doinik ${numOfHours} Hours study kore `)
    }
}

class Teacher extends  Person{
    constructor(name: string){
        super(name)
    }

    takeClass(numOfHours: number){
        console.log(`${this.name} doinik ${numOfHours} Hours class neei `)
    }
}


// function Guard 


const isStudet = (user: Person) =>{
    return user instanceof Student //true false
}

const isTecher = (user: Person) => {
    return user instanceof Teacher
}


const getUserInfo =(user: Person) => {

    if(isStudet(user)){
        user.doStudy(10)
    } else if (isTecher(user)){
      user.takeClass(5)  
    } else {
        user.getSleep(15)
    }
}



const student1 = new Student("Mr. Student")
const teacher1 = new Teacher("Mr. Teacher")


getUserInfo(teacher1)
