// const createArrayWithGeneric = <T>(value: T) => {
//     return [value]
// }

// const arrString = createArrayWithGeneric<string>("Apple");
// const arrNum = createArrayWithGeneric<number>(22);

// const arrObj = createArrayWithGeneric<object>({
//     id: 1,
//     name: "next level"
// })

// const createArrayWithTuple = (param: string, param2: number) =>
//     [param,
//     param2,]

//     const createArrayWithTupleGeneric = <X, Y>(param: X, param2: Y) => [param, param2]

//     const res1 = createArrayWithTupleGeneric<string, number>('hh', 11)
//     const res2 = createArrayWithTupleGeneric<string, number>('hh', 11)

// GENERIC FUNCTION

// const addCourseStudent = <T>(studentInfo: T ) => {
//     return {
//         course: "Next Level",
//         ...studentInfo
//     }
// }

//     const student1 ={
//         id: 123,
//         name: 'Mejba',
//         haspen: true,
//     }

//     const student2 ={
//         id: 321,
//         name: 'Jhankar Mahabub',
//         hasCar: true,
//         isMarried: true
//     }

//     const resutl = addCourseStudent<typeof student1>(student1)

//     console.log(resutl)

// GENERIC FUNCTION IMPROVED VERSION

type Student = {
  id: number;
  name: string;
};

const addCourseStudent = <T extends Student>(studentInfo: T): T & { course: string } => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Mejba",
  haspen: true,
};

const student3 = {
  hasWatch: true,
};

const resutl = addCourseStudent(student3);

console.log(resutl);
