//Export Defalut Parameter
export function group(name = 'INT201_S2_G1') {
    return name; // return ค่า name 
}

//Rest Parameter
export function calculator(num1 , ...num){
    let arrayofnum = [...num];
    let sum = 0;
    for(let i in arrayofnum){
        sum += i;
    }
    return num1 * (sum);
}
//Higther Order Function 
export let group1 = [{ id: 1, name: 'Pataradanai', age: 20, sec: 'a', sex: 'male' },
    { id: 2, name: 'Pichaya', age: 19, sec: 'b', sex: 'male' },
    { id: 3, name: 'Paramat', age: 12, sec: 'b', sex: 'male' },
    { id: 4, name: 'Buratsakorn', age: 16, sec: 'b', sex: 'female' },
    { id: 5, name: 'Wareewan', age: 19, sec: 'a', sex: 'female' },
    { id: 6, name: 'Wajanapnap', age: 22, sec: 'b', sex: 'female' }
];

export function filter(array, func) { // สร้างฟังก์ชั่นที่รับ parameter สองตัวโดยที่ตัวแรกไว้รับตัวแปรที่เป็น Array ตัวที่สองเป็น Function
    const ans = []; //สร้างตัวแปรที่เป็น Array ใหม่มารอรับ
    for (let i = 0; i < array.length; i++) { //ลูปค่าใน Array ปกติ
        if (func(array[i])) { // เช็คเงื่อนไขโดยให้เอา parameter ที่เป็น Function มารับโดยเช็คเงื่อนไข index ของ array ในแต่ละรอบ
            ans.push(array[i]); //เมื่อเช็คแล้วเงื่อนไขเป็น True ให้ push ค่า array เข้าไปใน array ใหม่ที่เตรียมไว้
        }
    }
    return ans; // return array ที่เช็คค่าได้ออก
}

//Closure
export function plusType(a){ 
    function sumElement(b){ 
        return a + b;
    }
    return sumElement; 
}

export const addFirst = plusType('Java ');
export const addFirst2 = plusType('Aj.');
export const addNumber = plusType(20);

//Destructuring Functions
export let filterMember = (members = []) => {
    let filtered = [];
    let ans = [];
    for (let i = 0; i < members.length; i++) {
        let { id = -1, name = "No Name", age = 0 } = members[i]; 
        let tempMember = { id, name, age } 
        filtered.push(tempMember) 
    }
    for(let i = 0; i < filtered.length; i++){
        if(filtered[i].id == -1 || filtered[i].name == "No Name" || filtered[i].age == 0){
            ans.push(filtered[i]);
        }
    }
    return ans;
}
export let members = [
    { id: 1, name: 'Opal', age: 12, money: 3000 },
    { id: 2, name: 'Green' }, //ไม่มี age
    { name: 'Game', age: 12, money: 3000 }, //ไม่มี id
    { id: 4, age: 12 }, //ไม่มี name
    { id: 5, name: 'Five', age: 15, money: 3000 },
    { id: 6, name: 'Bew', age: 19, money: 3000 },
    { id: 7, name: 'Tle', age: 16, money: 3000 },
];
