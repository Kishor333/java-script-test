// const names = ['kishor', 'thinley', 'Kumar'];
// const personas = [
//     {
//         name: 'Kishor',
//         age: 26,
//         designation: 'Software Engineer',
//         village: 'Thimphu',
//         status: 'married',
//         children: 2
//     },
//     {
//         name: 'Thinley',
//         age: 29,
//         designation: 'Software Engineer',
//         village: 'Thimphu',
//         status: 'married',
//         children: 2
//     },
// ];

// const persona = {

//                 name: 'Thinley',
//                 age: 29,
//                 designation: 'Software Engineer',
//                 village: 'Thimphu',
//                 status: undefined,
//                 children: undefined
// }

// Object.keys(persona).forEach(item => {
//     if(!persona[item]){ 
//         delete persona[item]
//     }
// })
// console.log(persona)


// personas.forEach((persona)=>{
//     persona.gender = 'male';
// })
// personas[0].gender = 'male';
// personas[1].gender = 'gay';

// const newArray = personas.map(({age, name, designation})=>{
//     return {
//         age,
//         name,
//         designation,
//         // gender: 'male'
//     }
// })
// console.log(newPersona)

class Animals {
    private breed = 'Normal';

    constructor(){
    }
    
}

class Dog extends Animals {

    constructor(dog){
        super();
        // debugger
        //@ts-ignore
        this.dogBreed = this.breed;
        //@ts-ignore
        this.name = dog
        //@ts-ignore
    console.log(this.dogBreed)
    }
    
}
let d = new Dog('larry');
console.log(d)