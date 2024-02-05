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
// 
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

// let promise = Promise.reject({err: 'Thinley'});

// promise.then((data) => {
//     console.log('In the first chain', data)
//     return {name: 'Kishor', age: 26}
// }).then((data) => {
//     console.log('In the second chain', data)
//     return {name: 'Kumar', age: 30}
// }).then((data) => {
//     console.log('In the third chain', data)
// }).catch((err) => {
//     console.log('in the catch block', err)
// }).finally(() => {
//     console.log('In the finally block')
// })


async function dummyFunction() {
    let hero = undefined;
    console.log('Before API');
    await getSuperHero().then((res) => {console.log(res)});
    console.log('end');
}


async function getSuperHero() {
    const heroPromise = await fetch('https://www.superheroapi.com/api.php/7077136192412571/1');
    return heroPromise;
}

dummyFunction();