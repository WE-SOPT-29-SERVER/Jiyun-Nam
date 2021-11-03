console.log(typeof 1);
console.log(typeof "str");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof null); //object로 출력 버그임

console.log(null===undefined) //false
console.log(null==undefined) //true


const num1=1;
const num2=2;

const bool=true;

console.log(num1==bool); //true
console.log(num2==bool); //false

//truthy
//대충 트루다
//1, 10, -41, '문자', {빈 객체}, [빈 배열]
//falsy
//대충 false
//false, 0, null, undefined, '빈 문자열'


const post=await postsGET();
if(!post){
    //logic
}