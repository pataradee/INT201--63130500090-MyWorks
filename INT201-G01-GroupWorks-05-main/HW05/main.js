import {group , filter , group1 , plusType , addFirst , addFirst2 , addNumber , filterMember , 
members , calculator} 
from './export/export.js';

//import Default parameter
console.log('------------------------------');
console.log('Default parameter');
console.log(group());
console.log(group('JavaScript'));
console.log(group(undefined));
console.log('------------------------------');
//import Rest Parameter
console.log('------------------------------');
console.log('Rest parameter');
console.log(calculator(2,3,4,5));
console.log(calculator(10,6,2,20));
console.log(calculator(9,19,10,18));
console.log('------------------------------');
//import Higther Order Function 
console.log('------------------------------');
console.log('Higther Order Function');
console.log('case 1 :', filter(group1, group => group.age >= 16));
console.log('case 2 :',filter(group1 ,  group => group.sex == 'male'));
console.log('case 3 :',filter(group1 ,  group => group.sec == 'a'));
console.log('------------------------------');
//import Closure Function
console.log('------------------------------');
console.log('Closure Function');
console.log(addFirst('script'));
console.log(addFirst2('Umaporn'));
console.log(addNumber(14));
console.log('------------------------------');
//import Destructuring Functions
console.log('------------------------------');
console.log('Destructuring Functions');
console.log(filterMember(members)) // 3Ex
console.log('------------------------------');


