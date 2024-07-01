// Seven JavaScript Fundamentals That You Need To Know  :

// 1. How to declare a variable . [ let , const , var]

// 2 . conditions  , operators . [ if else , >= <= ,=== ,!== , <= , >=]

//3. Multiple Conditions . [ if-else , else , && , || ]

// 4. How to declare an ARRAY . [ length , indexof , push,pop,shift,unshift,includes etc.]


//5.  Loop . [ for of , while , for , for in  ]

// 6. function ..

// 7.  Object ...



//-----------------------ES6------------------------------

//TEMPLATE STRING 

const number = [55,77,88,]

const about = {
    name : ' affnan',
    age : 22 ,

    passion : [ 'front-end' , 'back-end' , 'full-stack']
}

const result = `My name Is ${about.name} , age is ${about.age}
 passion - ${about.passion[2]} , number is ${number[2]}
`

console.log(result);


// ARRROW FUNCTION : 

const sum = ( a ) => a + 5

const r =  sum(5);

console.log(r);


// 2 
const even = ( a ) =>{
    if( a % 2 === 0){
        return 'even'
    }
    return false
}

const r1 =  even(6);

console.log(r1);


// 3 . spread operator

let array1 = [1,2,3,4]

// copying an array through spread operator =>  ...
let numbers = [...array1]

array1.push(5) 

console.log(numbers);

console.log(array1);


// Array Methods (Map, ForEach, Filter And Find )

const products = [
  {name : 'apple' , series : '11'     , price: 1200  },
  {name : 'apple1 ', series : '1123'  , price: 1200      },
  {name : 'apple21', series : '111'   , price: 1200      },
  {name : 'apple22' , series : '1132' , price: 120      }

]


const ab = products.map( product => product.price * 2)
console.log(ab);


products.forEach(product=> console.log(product.price))


const ab1 = products.filter( product => product.price > 1000)
console.log(ab1)


const ab11 = products.find( product => product.price > 1000)
console.log(ab11)


// Array And Object Destructuring

const pp = {

    name1 : 'affnn',
    price: 100
}

const {name1 , price} = pp;

console.log(name1,price)


let pp1 = [1,2,3,4,5];

const [a,b,c] = pp1;

console.log(a,b,c)


// Dot Notation / Bracket Notation


const mobile = {

    brand: 'Apple',
    series: '11 pro-max',

    64 : 'ram',
    price : 1200
}

//dot notation

const brands = mobile.brand ;

console.log(brands);

//bracket notation

const series1 = mobile['series']

console.log(series1);
