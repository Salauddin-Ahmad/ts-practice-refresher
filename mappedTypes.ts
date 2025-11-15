// map


const arrayOfNum : number[]= [1,2,3,4];
const arrayOfString : string[]= ['1','2','3','4'];


const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap)


type AreaOfNum = {
    height: number;
    width: number;
}

type height = AreaOfNum['height'];



// type AreaOfString = {
//     height: string;
//     width: string;
// } // let's create this using AreaOfNum using mapped type


// 👇👇👇👇 

type Area<T> = {
    [key in keyof T]: T[key];
}


const area1: Area<{height: boolean; width: number}> = {height: false, width: 60}







