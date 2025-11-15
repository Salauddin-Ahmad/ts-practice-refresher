type RichPeoplesVehicle = {
    car:  string;
    bike:  string;
    cng:  string;
}

type myVehicle = "bike" | "cng" | "car" ;
type myVehicle2 = keyof RichPeoplesVehicle
const myVehicle: myVehicle2 = "bike"




type User = {
    id: number;
    name: string;
    address: {
        city: string
    }
}

const user: User = {
    id: 222,
    name: "hello",
    address: {
        city: "ctg",
    }
}


const myId = user["id"]
// const myId = user.id; //same as ⬆⬆
const myName = user['name']
// const myName = user.name // same as ⬆⬆

const adress = user["address"]

// console.log({myId, myName, adress})



const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key]
}


const product = {
    brand: "Hp"
}
const product1 = {
    name: "Olive Oil"
}
const result = getPropertyFromObj(user, "name")
const result1 = getPropertyFromObj(product1, "name")
console.log(result)