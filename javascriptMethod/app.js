// fitler method >_< 

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Arrow function
// filter((element) => { /* ... */ } )
// filter((element, index) => { /* ... */ } )
// filter((element, index, array) => { /* ... */ } )

// Callback function
// filter(callbackFn)
// filter(callbackFn, thisArg)

// // Inline callback function
// filter(function(element) { /* ... */ })
// filter(function(element, index) { /* ... */ })
// filter(function(element, index, array){ /* ... */ })
// // filter(function(element, index, array) { /* ... */ }, thisArg)
 const someItems = [
     {name:'personOne',spend:200},
     {name:'personTwo',spend:300},
     {name:'personThree',spend:400},
     {name:'personFour',spend:250},
     {name:'personFive',spend:300},
     {name:'personSix',spend:460},
     {name:'personSeven',spend:270}
]

const filtered = someItems.filter((item) => {
    //this function checking if there are spending
    // less then 300 or equal /
    // if they found they will create an array of   
    //item which is less or equal to the 300

    return item.spend <=300;
})



let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ]

  const filteredOne = arr.filter((e) => {
     if (Number.isFinite && e !== 0 ){
         return e.id ;
     }
    })

let inValidEntries = 0 ;

function filteredTwo(item){
    if(Number.isFinite(item.id) && item.id !==0){
       return item.id 
    } 
    inValidEntries ++ ;
    return false ;
    
}

let arrayId = arr.filter(filteredTwo);

console.log('Valid Item: ',arrayId, '\n'); 
console.log('Invalid Item: ',inValidEntries, '\n')

// const arrayOfPrime = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function findPrime(num){
//     for(let i = 2; i < num; i++)
//         if(num % i === 0) return false;
//     return num > 1;
// }

// let arrOfprime = arrayOfPrime.filter(findPrime);

// console.log('Array of Prime Number : ', arrOfprime ,"\n")


// const findPrime =  arrOfPrime.filter((num) => {
//     for (let i = 2 ; i < num ; i++)
//         if(num % i === 0) return false ;
//     return num > 1;

// }) 

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

const filteritemSecond = (arr,query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

let result = filteritemSecond(fruits,'ap')

console.log(result)