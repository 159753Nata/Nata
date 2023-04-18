

//let ch =8 
//let a =19
//let l = Math.floor (a/ch) //floor функция, которая округляет в меньшую сторону
//let res = a%ch
//alert (l,res) //команда для показа информации пользователю

//console.log("досталось каждому",l, "осаток",res)

//console.log (5==5)


// сравнение чисел
//let a=7
//let b=10
//if (a>b) {
   // console.log ("наибольшое число", a)
//}
//else if (a<b){
  //  console.log ("наибольшое число", b)
//}
//else {
    //console.log ("числа равны")
//}


// узнать положительное число или нет 
//let n=-5
//let f =(Math.sign(n))
//if(f==1){
  //  console.log("число положительное")
//}

//if(f==-1){
  //  console.log   ("число отрицательное")
//}

//for (let i=0; i<=10; i++){
  //  console.log (i)
//}
//alert (12345)
//console.log

//const name = prompt("введите ваше имя");
//alert("Привет, " + name);

//if(confirm("сказать привет")){
 // alert ("Привет!")
//} else{
  //alert ("Вы нажали кнопку отмена")
//}

// let n = prompt("введите число 1");
// let m = prompt("введите число 2");
// //n=Number(n+m)/2
// n=Number(n) //преобразовываем в число, иначе программа воспримет как строки
// m=Number(m)
// alert ((n+m)/2)
// console.log (typeof n)



// let h = prompt("введите часы");
// let m = prompt("введите минуты");
// h=Number(h)
// m=Number(m)
// alert("осталось " + (24-1-h) + " часов " +  (60-m) + "мин")


// выводим последнее число из любого поорядка
// let n = 123489117
// let str = String(n).split("")
// let LastCh = str[str.length-1]
// console.log(str.length) //количество символов в строке
// console.log(str[str.length-1]) //последний символ

// console.log ("Hello world". substr(5,7)) //ставим период с какого по какой символ вывести инфо


// let SumSale = prompt ("Введите сумму продаж");

// SumSale = Number (SumSale)
// let H = SumSale * 0.1 +250

// let obj = new Object()
// let obj2={
//  name: "Наталия" ,
//  age: 40,
//  skills: ["html", "css", "js"]
// }

// // if("age" in obj2){
// //   console.log("Exists");
// //  }
// //  else{
// //   console.log("Not exists");
// //  }
// // console.log (obj2)
// // console.log (obj2.skills)

// for (let key in obj2){
//   console.log(key, obj2 [key]) //key это переменная  obj2 [key] это значение в ней
// }

// let n= prompt (" введите возраст в диапозоне от 0 до 120")
// n=Number(n)
// if((typeof n) == "number" && n>-1 && n< 121){
//   alert("все хорошо")
// }
//   else{
//     alert("данные неверны")
//   } 

//Задача 3

//console.log(Math.abs(7))
//function sumOfNum (a,b){
  // return a+b
//}
//console.log(sumOfNum (8 , 6))

  
//const arr = [1, 21, 358, "str", "bla bla bla"]
//const arr2 = new Array [lementN]
//console.log (arr.length)
//console.log (arr[arr.length-1]) //выводим последний элемент массива
//arr[0] = "bla bla bla"

// for (let i=0; i<arr.length;i++){
//   console.log (arr[i])
// }
//arr.indexOf("bla bla bla")
//console.log(arr.LastIndexOf("bla bla bla"))

//const arr = [1, 5, 15, 28, 32, "hello", "world"]
//function getFirstElem(str){
  //return str[0];
//}
//console.log(getFirstElem ("hello"))

// let str = "I hate this world"
// str = str.split(" ")
// str = str.join ("**")
// console.log(str)

// let number = prompt("введите число");
// number=Number(number);
// number%5==0 ? alert ("кратно 5") : alert ("не кратно 5")


// const str = "ЗЕМЛЯ";

// let str2 = prompt ("введите название Вашей планеты");
// str2=str2.toUpperCase() //поднимаем все буквы на верхний регистр
//  if (str==str2){
//   alert("Привет землянин")
//  }
//  else{
//   alert("Валите в свою систему")
//  } 


//  let n = Number ( prompt ("введите первое число"))
//  let m = Number ( prompt ("введите второе число"))
//  let x = prompt ("введите математический знак")
//  switch(x){  // в данном случает это значит в "если"
//   case "+":
//      alert (n+m)
//      break

//      case "-":
//      alert (n-m)
//      break

//      case "*":
//      alert (n*m)
//      break;

//      case "/":
//      alert (n/m)
//      break;

//    default:   //в данном случает это значит в "другом случае"
//     alert ("я таких знаков не знаю") 
//     break
//  }

//  let first = "boat";
// let second = "river";
// let result = first + " and " + second;
// // boat and river
// alert(result);
// let n ="helloworld"
// console.log(n.substring(2,6))

// let n = prompt("введите число");
// n=Number(n);
// while(n>=0){
//   alert (n)
//   n--;
// }


//итерации
// let a =5
// let res=1
// for(i=1;i<=a;i++){
//   res = res *i
// }
// console.log(res)


//Рекурсии

// function factorial(n){
//   if (n ==0 || n==1){
//     return 1
//   }
//   return n *(factorial (n-1))
// }
// console.log(factorial(5))


//  let n = 10;
//  n=Number(n);
//   for(i=0;i<100;i++)
//     if (i%n==0)
//   console.log (i)

//   var res = Math.random();
// // псевдослучайное число
// alert(res);
// res = Math.random();
// // псевдослучайное число
// alert(res);



// let res = new Date()
// let res2 = new Date("2023-12-31")
// console.log((res2.getTime() - res)/24/60/60/1000)



// function Student(firstname, lastname, birthday){
// this.firstname = firstname
// this.lastname=lastname
// this.birthday = birthday
// this.showInfo = function(){
//   return "Student name:" + this.firstname+""+ this.firstname
// }
//   this.showAge = function(){
//     const deltaTime = Date.now() -
//  Date.parse(this.birthday);
//  const studentAge = Math.floor(deltaTime/
//  (365*24*60*60*1000));
//  console.log(this.firstname+' '+this.lastname+
//  ' is '+studentAge +' years old.');
//  }
//   }
// let Michail = new Student ("Michail", "Tompson", "11/12/1996")
// let Diana = new Student ("Diana", "Ray", "03/03/2002")

// console.log(Michail.showAge())
// console.log(Diana.showAge())



// class Car{
//    constructor (wheelAmount){
//      this.wheelAmount=wheelAmount
//     }
// go() {
// return "Едем";
// }
// ShowwheelAmoun(){
//   return this.wheelAmount
// }
// }
// class Audi extends Car{
//   #index
//   constructor(wheelAmount, madeIn, IsPrime, design){
//     super(wheelAmount);
//     this.madeIn=madeIn;
//     this.IsPrime=IsPrime;
//     this.design=design;
//     this.#index= Math.floor(Math.random()*1000);
//       }
//       get index(){
//         return this.#index;
//       }
//         set index(value){
//           this.index

//         }
//       }
//       showInfo(){
//   return "ПРоизведено в   ", this.madeIn + " " + "автомобиль престижный - " + this.IsPrime 
//   }
// }
//   const Example = new Audi(4, "Russia", true, {logo: "4 rings"});
//   Example
//   console.log (Example);
//   console.log(Example.showInfo());

//Функция которая проверяет простое число или нет

// function testNumber(n) {
//   if (n < 2) {
//     return 'Число должно быть больше 1';
//   } else if (n === 2) {
//     return 'Простое число';
//   }

//   let i = 2;
//   const limit = Math.sqrt(n); //проверяет 
//   while (i <= limit) {
//     if (n % i === 0) {
//       return 'Составное число';
//     }
//     i +=1;
//   }
  
//   return 'Простое число';
// }

// console.log(2393, testNumber(2393));
// console.log(463, testNumber(463));
// console.log(14, testNumber(14));
// console.log(23, testNumber(23));
// console.log(39, testNumber(39));

// function number(x)
// {
//   for(let i=2;i<10; i++) {
//      if(x%1==0) {
//       return false
//      }
//   }
//   return true
// }
// console.log(number(463))

// function sumAllelem(firstNum, ...args) {
//   return args.reduce((acc, elem)=> acc= acc+elem, 0) + firstNum
// }
// console.log(sumAllelem(1,2,3,4,5))

// let arr = [1,2,3,4,5]
// let ans = arr.reduce((acc, elem)=> acc= acc+elem, 0)
// console.log(ans)

// const animals = ["cat", "dog", "rabbit", "shark"];
// const count = animals.reduce( (acc, animals) => {
//   tally[animals] = (tally[animals] || 0) + 1 ;
//   return tally;
// } , {})





// const year = prompt('Enter a year:');
// function checkLeapYear(year) {

//   if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//       console.log(year + ' is a leap year');
//   } else {
//       console.log(year + ' is not a leap year');
//   }
// }

// alert(checkLeapYear(year))

// const animals = ["cat", "dog", "lion", "parrot"]

// function sumAllElem(arr){
//    return arr.reduce((sum, elem)=> elem.length + sum,0);
   
// }
// console.log(sumAllElem(animals))


// const animals = ["cat", "dog", "lion", "parrot"]
//  function createNewArray(arr){
//     return arr.map((elem, index,array)=> elem.length)

//  } 
// console.log (createNewArray(animals))

// const animals = ["cat", "dog", "lion", "parrot"]
//   function createNewArray(arr){

//     return arr.filter ((elem, index)=> elem !== "cat")
//   }
//   console.log (createNewArray(animals))


//  const animals = ["cat", "dog", "lion", "parrot"]
//   animals.forEach ((elem, index, arr)=> 
//   console.log(elem +="!"))


// const animals = ["cat", "dog", "lion", "parrot"]
// animals.push('elefant')
// console.log (animals)

// const sequensSum =(begin, end, step)=>{
// const arrNum =[];
// for(let i=begin; i<=end; i+=step) {
//  arrNum.push(i)
// }
// return arrNum. reduce ((acc,elem)=> acc+elem,0)
// }
// console.log(sequensSum(1,8,5)) // в периоде цифр c 1 до 6  с шагом 5




// function Rect(h,l){
//   this.h = h;
//   this.l=l;

//    this.showRect = function(){
//   return "Высота" + this.h + "" + "длина" + "" +  this.l
//    }
//     this.perim = function(){
//       return "периметр =" + ((l*2)+(h*2))
//     }
//   }
//     let xy=new Rect(3,6)
//   console.log(xy.showRect())
//   console.log(xy.perim())
     
// document.querrySelector("one").style.top = "40px"
// document.querrySelector("one").style.top = "40px"
// document.querrySelector("one").style.top = "40px"
// document.querrySelector("one").style.top = "40px"
// console.log (document)




// const div = document.createElement('div');// создает элемент
// const p = document.createElement('p'); //создали еще одну переменную
// div.classList.add('wrapper');
// const body = document.body;
// document.body.appendChild(div); // в тэг добавили еще один тэг, вкладывает внутрь
// div.appendChild(p);
// const header = document.createElement('h1');
// header.textContent = "DOM (Document object model)" //присваивает текст
// div.insertAdjacentElement('beforebegin', header) //положение текста

// const ul=`
// <ul> 
//   <li>Один</li>
//   <li>Два</li>
//   <li>Три</li>
// </ul>
// `
// div.innerHTML = ul
// const img = document.createElement('img');
// img.src = "https://picsum.photos/240"
// div.appendChild(img)
// console.log(img) 

// const pDiv = document.createElement('div');
// const pDiv1 = document.createElement('p');
// const pDiv2 = document.createElement('p');
// pDiv.appendChild(pDiv1)
// pDiv.appendChild(pDiv2)
// pDiv1.textContent=('первый  абзац')
// pDiv2.textContent=('второй  абзац')



// document.body.insertAdjacentElement("afterbegin", pDiv)
// pDiv.classList.add("red") //наследуется цвет всего класса

// const generateAutoCard = (brand, color, year) =>{
//   const currentDate = new Date() //
//   const currentYear = currentDate.getFullYear()
//   return `
//   <div class="parent">
//   <div> 
//     <h2> ${brand} ${color} </h2>
//     <p> Автомобиль ${brand} возраст${currentYear-year}</p>
//     <button> удалить карточку </button>
//     </div>
//  </div>
//   `
// }

// const carDiv = document.createElement('div')
// const carList = [
//   {brand: "Tesla", color: "red", year:2018  },
//   {brand: "Audi", color: "black", year:2020  }
// ]
// let carHTML = carList.map((car)=>{return generateAutoCard (car.brand, car.color, car.year)}
// )
// carHTML = carHTML.join('')
// carDiv.innerHTML=carHTML
// console.log(carDiv) //выводим информацию в консоли
// document.body.appendChild(carDiv) //выводим информацию в браузере

// const button = document.querySelectorAll("button")
// console.log(button)

// function handleClick (e){
//   const currentButton = e.currentTarget;
//   currentButton.closest(".parent").remove()
//   console.log(currentButton)


// }
// button.forEach(button=>{
//   button.addEventListener("click", handleClick) //вызывается само событие и то что с ним связано
// })



// function pangrams(str){
//   const
//  //let arr = string.split(''). filter(elem=> !(elem in ['!',",","."," "]))
//  let arr = string.split('').
//   console.log(arr)
// }

// console.log


 
//Вариант 1

// function isPangram(str) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const letters = {};
  
//   str.toLowerCase().split('').forEach(char => {
//     if (alphabet.indexOf(char) !== -1) {
//       letters[char] = true;
//     }
//   });

//   return Object.keys(letters).length === alphabet.length;
// }
// console.log(isPangram('Jackdaws love my big sphinx of quartz')); // true
// console.log(isPangram('This is not a pangram')); // false


// Вариант2

// function isPangram(str) {
//   // приведем все символы к нижнему регистру
//   str = str.toLowerCase();
//   // создадим множество для хранения уникальных букв
//   let letters = new Set();
//   // переберем каждый символ строки и добавим его в множество,
//   // если символ является буквой алфавита
//   for (let i = 0; i < str.length; i++) {
//     if (/[a-z]/.test(str[i])) { // /[a-z] это регулярное выражение поэтому такая запись
//       letters.add(str[i]);
//     }
//   }
//   // вернем true, если количество уникальных букв равно 26 (то есть все буквы алфавита встречаются хотя бы один раз)
//   return letters.size === 26;
// }

// // пример использования:
// console.log(isPangram("The five boxing ,.!  wizards jump quickly")); // true
// console.log(isPangram("Hello world")); // false


// Из двух массивов создаем один с уникальными значениями 
//вариант 1
// let arr1 = ['1', '2', '3', '4', '11'];
// let arr2 = ['6', '7', '10', '1', '12', '4'];

// let d = {};
// arr1.concat(arr2).forEach(function(item) {
//   d[item] = true;
// });
// let result = Object.keys(d);
// console.log(result);

//Вариант 2
// let array1 = ['1', '2', '3', '4', '11'];
// let array2 = ['6', '7', '10', '1', '12', '4'];
// let a = new Set ([...array1, ...array2])
// console.log(a)

// let num1 = Number(prompt("enter the first number"));
// let num2 = Number(prompt("enter the second number"));
// function Compare(num1, num2){
// 	if(num1 < num2){
// 		return -1;
// 	}
// 	else if(num1 > num2){
// 		return 1;
// 	}
// 	else if(num1 == num2){
// 		return 0;
// 	}
// }


// const l =XMLHttpRequest();
// console.log (l)



//const data = fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
//console.log(data)


// async function getData(){
//    let url = 'https://jsonplaceholder.typicode.com/users';
//    let response = await fetch(url);
//    let commits = await response.json();
//    return commits.text
//}

 //import axios from "axios"
 //function getData(url){
//     return fetch(url).then(
//       response =>{
//         return response.json().then(ans => console.log(ans))
//            }
//     )
//           }
//     getData('https://jsonplaceholder.typicode.com/users')

    // function getData(){
    //   const res = axios.get(url)
    // }
    //   console.log( getData('https://jsonplaceholder.typicode.com/users'))

    // function getData(url){
    //     fetch(url).then(data => {
    //              return data.text()
    //     })
    //      .then(data=>{
    //        console.log(data)

    //      })
    // }

    //   let data =  getData('https://jsonplaceholder.typicode.com/users')

    //  function mult(n,d){
    //     return
    //       }
    //       const n=5;
    //        const d=3;
    //        console.log(mult(5,3))

          //  let arr = [1,15,24,38,46,111]
          //    function mult(arr){
          //   let buf= -Infinity // число минус бесконечность
          //    for(let i=0; i < arr;  i+=1){
          //     if (arr[i]>buf){
                
          //     }

          //    }
          //  }
          //  console.log (Math.max(...arr.))


//           let user  = "121"
//           async function getUser(){

          
// await fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
// .then(data => user = JSON.stringify (data))
// console.log(user)
      
// const div = document.createElement('div')  
// document.body.appendChild(div)   
// div.innerHTML = user
//           }

    
//           getUser()
//console.log (document.forms)

// const btn = document.getElementById('button')
//  btn.addEventListener('click', handleClick)
//  function handleClick(event){
  
//     event.preventDefault()
//       const e = document.forms[0].elements
  
//    const p = document.getElementById('out')
//    p.innerHTML = "";

//  for (let i=0; i<e.length; i++){
//  p.innerHTML += e[i].tagName + " — " +
//  e[i].name + " — " + e[i].value + 
//  "<br>"
// }
//  }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Код для добавления дополнительного номера телефона
// let phoneCounter = 1;

// const addBtn = document.getElementById("addBtn")
// addBtn.addEventListener('click', addPhoneNumber)


// function addPhoneNumber(event) {
//         event.preventDefault()
//         phoneCounter++;
//         const f = document.forms[0];
//         const b = document.createElement('br');
//         f.appendChild(b);

//         const t = document.createElement('span')
//         t.textContent = "Phone number "
//         f.appendChild(t)

//         const phoneInput = document.createElement('input');
//         phoneInput.type = 'text';
//         phoneInput.name = 'phone' + phoneCounter;
//         phoneInput.placeholder = 'Enter phone number';
//         f.appendChild(phoneInput);

//         const t2 = document.createElement('span')
//         t2.textContent = " Phone type "
//         f.appendChild(t2)

//         var selector = f.elements['type'];
//         console.log(selector)

//         var newSelector = selector.cloneNode(true);
//         console.log(newSelector);

//         newSelector.name = 'type' + phoneCounter;
//         f.appendChild(newSelector);

//         const t3 = document.createElement('span')
//         t3.textContent = " Priority "
//         f.appendChild(t3);

//         let mainRadio = document. createElement('input')

//         mainRadio.type = 'radio';
//         mainRadio.name = 'main';
//         mainRadio.value = phoneCounter

//         document.body.appendChild(f)
//         console.log(phoneCounter)
//}

// ПРоверки строк на значения и их поиск
       //const template = /\$/; // проверяем оканчивается ли строка знаком $

      //  const template = /^\d/; //проверяем начинается ли строка с цифры

      //  let res =template.test('i hate this world$');
      //  console.log(res);

// еще вариант
      //  let str = "20% of population owning 80% income";
      //  let template = /\80/;
      //  let res = template.exec(str)
      //  console.log(res)

      
  //     
  //перевернутые (значок ! )True и false 
//   const data = "111";
//     if (!data) {
//     console.log('нет данных')
// }
//  else {
//    console.log (data)
//  }

// const template = /^\d/;
// function fetchData (){ 
//   console.log (template)  //область видимой переменной только в этой функции
//   const data ='1111'
// }

// fetchData()

const arr =["i want a cup of coffee"];
let template = /\d/;
console.log(arr.filter(word=>!template.test(word)))

console.log(arr.map(elem=> elem.length)) //используем  мар 

console.log(arr.reduce((acc,n)=>n.length+acc,0))

console.log(arr.forEach(elem=> elem.length)) //используем  for









