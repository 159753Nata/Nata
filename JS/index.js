
// let n1 = 5
// const n2 = 22

// if (n1 > n2) {
//     console.log("Наибольшее число ", n1)
// } else if (n1 < n2) {
//     console.log("Наибольшее число ", n2)
// } else {
//     console.log("Числа равныё")
// }
    
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// // alert(211212)

// // const num = prompt("Введите число")

// let elem = document.getElementById('num');

// console.log(elem)

// alert(num)


// let h = prompt("Введите число 1")
// let m = prompt("Введите число 2")

// h = Number(h)
// m = Number(m)

// let mA = 1440 - (19 * 60 + 14)

// let h = Math.floor(mA / 60)
// let m = mA - Math.floor(mA / 60) * 60

// console.log(mA)
// console.log(h, m)

// alert("осталось " + h + " часов и" + m + " минут")

// console.log(1440 - (1440 - (h * 60 + m) * 60))

// alert(Math.floor(mA / 60))






// if (confirm("Сказать привет?")) {
//   alert("Привет!")
// } else {
//   alert("Вы нажали кнопку отмена")
// }


// let num = 12347

// let str = String(num)

// console.log(str.substr(str.length-1, str.length-1) + 
// str.substr(0, str.length-1))



// console.log("hello world".substr(2, 4))

// .split('')

// let lastCh = str[str.length-1]

// console.log(lastCh)

// console.log()


// let sumProduct = prompt("Введите сумму продаж")

// sumProduct = Number(sumProduct)

// let mA = sumProduct * 0.1 + 250

// alert(mA)

// let obj = new Object()

// let obj2 = {
//     name: "Erog",
//     age: 18,
//     isProgrammer: true,
//     skills: ["html", "css", "js"]
// }

// obj2.isMarried = false
// obj2.isMarried = true

// delete obj2.isMarried 

// obj2["user addres"] = {
//     city: "kazan",
//     postIndex: 445633
// }

// if("name" in obj2) {
//     console.log(`Такое свойство есть в объекте`)
// } else {
//     console.log('такого свойства нет')
// }


// console.log(obj2)


// for (let key in obj2) {
//     console.log(key, obj2[key])
// }

// let n = prompt('Input number between 0 and 120')

// n = Number(n)

// if (n !== NaN && n > -1 && n < 121) {
//     alert("Все ок")
// } else {
//     alert("Данные введены неверно")
// }


// console.log(Math.abs(7))

// function sumOfNum(a, b) {
//     return a + b
// }

// console.log(sumOfNum("8", 6))



// let obj2 = {
//     name: "Erog",
//     age: 18,
//     isProgrammer: true,
//     skills: ["html", "css", "js"],
//     sumOfNum(a, b) {
//         return a + b
//     }
// }

// console.log(obj2.sumOfNum(1, 5))

// console.log(Math.pow(2, 3))



// const arr = ["str", 1212, [12, 774], true, "pizza"]

// const arr2 = new Array(34, 34)

// console.log(arr[arr.length - 1])

// arr[0] = "pizza"

// for (let i = 0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// console.log(arr.lastIndexOf("pizza")); 

// function getFirstElem(str) {
//     return str[0];
// }

// console.log(getFirstElem("hello world"))

// let str = "I love pizza so much"

// str = str.split(' ')

// str = str.join('**')



// if (4 < 6) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// let isLoaded = ["data"]

// !isLoaded ? console.log(true) : console.log("error")

// let answer = prompt("введите число")

// let str = "Hello World"
// str = str.toUpperCase()

// let str2 = "HEllO wORLd"
// str2 = str2.toUpperCase()

// console.log(str === str2)

// let firstNum = Number(prompt("Введите первое значение"))

// let sign = prompt('Введите знак')

// let secondNum = Number(prompt("Введите второе значение"))

// switch(sign) {
//     case "+":
//         alert(firstNum + secondNum )
//         break
//     case "-":
//         alert(firstNum - secondNum )
//         break
//     case "*":
//         alert(firstNum * secondNum )
//         break
//     case "/":
//         alert(firstNum / secondNum )
//         break
//     default:
//         alert('Введен неверный знак')
//         break
// }



// let h = []

// console.log(h.substr(2, 6) )

// console.log(h.substring(2, 6))

// let n = 5
// let res = 1

// for(let i = 1; i <= n; i++ ) {
//     res = res * i
// }


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     }
//     return n * (factorial(n-1))
// }

// console.log(String(factorial(5)))

// let res = new Date()
// let res2 = new Date("2021-05-17")

// console.log(res.getTime() - res2)

// function Student(firstname, lastname, birthday) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.birthday = birthday;
//     this.showInfo = function(){
//         return "Student name: " + this.firstname + ' ' +  this.lastname
//     }
//     this.showAge = function(){
//         const deltaTime = Date.now() -
//         Date.parse(this.birthday);
//         const studentAge = Math.floor(deltaTime/
//         (365*24*60*60*1000));
//         return (this.firstname+' '+this.lastname+' is '+studentAge +' years old.');
// }}

// let michael = new Student("Michael", "Tomson", "11/23/2001")

// console.log(michael.showAge())

// let diana = new Student("Diana", "Vladilen", "3/22/1999")

// console.log(diana)

// class Car {
//     constructor(wheelAmount) {
//         this.wheelAmount = wheelAmount;
//     }

//     go() {
//         return "Мы едем"
//     }

//     showWheelAmount() {
//         return this.wheelAmount
//     }}
   
// class Audi extends Car{
//     #index
//     constructor(wheelAmount, madeIn, isPrime, disine) {
//         super(wheelAmount)
    
//         this.madeIn = madeIn
//         this.isPrime = isPrime
//         this.disine = disine
//         this.#index = Math.floor(Math.random()*1000);

//     }
//     get getIndex() {
//         return this.#index
//     }
//     set setIndex(value){
//         this.#index = value;
//         }
//     showInfo() {
//         return "Произведено в " + this.madeIn + " "
//         + "Автомобиль престижный - " + this.isPrime
//     }
// }

// const Example = new Audi(4, "Germany", true, {logo: "4 rings"}) 

// Example.setIndex = 20000000
// console.log(Example.index)

// function number(x)
// {
//     for (let i = 2; i < 10;i++) {
//         if(x % i == 0) {
//             return false
//         }
//     }
//     return true 
// }
// console.log(number(463))


// function sumAllElem(arr) {
//     return arr.reduce(function(acc, elem) {
//         return elem.length + acc
//     }, 0)
// }

// let animals = ["cat", "dog", "parrot", "lion"]

// animals.push("elephant")

// console.log(animals)

// animals.forEach((elem, index, arr) => {
//     if (index % 2 === 0) {
//         console.log(elem += "!")
//     }  else {
//         console.log(elem)
//     }
// })



// function createNewArray(arr) {
//     return arr.filter((el, i) => i !== 2)
// }

// console.log(createNewArray(animals))




// function createNewArray(arr) {
//   return arr.map((elem, index, array) => elem.length + 10)
// }

// console.log(createNewArray(animals))

   
// console.log(sumAllElem(animals))


// function sumAllElem(arr) {
//     return arr.reduce((sum, elem) => elem.length + sum, 0)
//    }

// const sumNum = (a) => {
//     return a
// }

// // const sequenceSum = (begin, end, step) => {
// //     const arrNum = []
    
// //     for (let i = begin; i <= end; i += step) {
// //       arrNum.push(i)
// //     }
    
// //     return arrNum.reduce((acc, elem) => acc + elem, 0)
// //   }

// // console.log(sequenceSum(1, 8, 5))

// // document.querySelector(".one").style.top = "40px"

// // document.querySelector(".two").style.top = "80px"

// // document.querySelector(".three").style.top = "80px"

// // document.querySelector(".four").style.top = "40px"

// const div  = document.createElement('div')
// const p = document.createElement('p')


// div.classList.add('wrapper')

// document.body.appendChild(div)

// p.textContent = "DOM Document"

// div.insertAdjacentElement('afterend', p)

// // console.log("Это элемент див " + div + " Это элемент параграф" + p)
// // console.log(`Это элемент див ${div} Это элемент параграф $`)

// const ul = `
//     <ul>
//         <li>Один</li>
//         <li>Два</li>
//         <li>Три</li>
//     </ul>
// `

// div.innerHTML = ul

// const img = document.createElement('img')
// img.src = "https://picsum.photos/240"

// div.appendChild(img)



// const pDiv = document.createElement('div')

// const pDiv1 = document.createElement("p")
// const pDiv2 = document.createElement("p")
// pDiv.appendChild(pDiv1)
// pDiv.appendChild(pDiv2)
// pDiv1.textContent = "Первый абзац"
// pDiv2.textContent = "Второй абзац"

// pDiv.classList.add("red-text")

// pDiv.lastElementChild.remove()

// document.body.insertAdjacentElement("beforeend", pDiv)





// function genetateAutoCar(brand, color, year) {
//     const currentDate = new Date()
//     const currentYear = currentDate.getFullYear()
//     return `
//         <div class="parent">
//             <div>
//                 <h2>${brand} ${color}</h2>
//                 <p>Автомобиль ${brand} Возраст ${currentYear - year}.</p>
//                 <button>Удалить карточку</button>
//             </div>
//         </div>
//     `
// }

// const carsDiv = document.createElement('div')

// const carsList = [
//     {brand: "Tesla", color: "red", year: 2016},
//     {brand: "Lexus", color: "dark", year: 2018},
//     {brand: "Lada", color: "green", year: 2007},
// ]

// let carsHTML = carsList.map((car) => {
//     return genetateAutoCar(car.brand, car.color, car.year)
// })

// carsHTML = carsHTML.join(' ')



// carsDiv.innerHTML = carsHTML





// document.body.appendChild(carsDiv)


// const buttons = document.querySelectorAll("button")


// function handleClick(e) {
//     const currentBtn = e.currentTarget
//     currentBtn.closest(".parent").remove()
// }

// buttons.forEach(button => {
//     button.addEventListener("click", handleClick)
// })




// function isPangram(string){
//     const alphabet = ["t", "h", "e", "q", "u", "i", "c","k","b","r","o","w","n","f","o","x","j","u","m","p","s","o","v","e","r","t","h","e","l","a","z","y","d","o","g"]

//     let arrind = new Array()
//     let arr = string.split(' ').join('').toLowerCase().split('')
//     for (let i = 0; i <= arr.length; i++) {
//         for(let j = 0; j <= 26;j++)
//         {
//             alphabet[j] == arr[i] ? arrind[j] = 1: arrind[j] = 0 
//         }
//     }

//     for(let i = 0; i < 26;i++)
//     {
//         if(arrind[i] != 1)  return false
//     }
//     return arr
//   }

//   console.log(isPangram("The quick brown fox jumps over the lazy dog"))



// const l = new XMLHttpRequest()

// console.log(l)

// const data = fetch()

// console.log(data.json())



// function getData(url) {
//     return fetch(url).then( response => {
//         return response.json().then(ans => console.log(ans))
//     });

// }



// function getData(url) {
//     fetch(url).then(data => {
//         return data.text()
//     })
//     .then(data => {
//         console.log(data)
//     })

// }


// let data = getData('https://jsonplaceholder.typicode.com/users')

// console.log(data)



// function mult(n) {
//     return (d != 0) ? n * mult(n, d - 1) : 1
// }

// const n = 5
// const d = 3

// console.log(mult([12, 3, 4, 4, 7]))

// let arr = [1, 61, 5, 4]


// console.log(mult(arr, -Infinity))

// function mult(arr, buf) {
//     for (let i = 0; i <= arr.length; i += 1) {
//         if (arr[i] > buf) {
//             buf = arr[i]
//         }
//     }
//     return buf
// }
// let users = "121"

// async function getUsers() {
//     await fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => users = JSON.stringify(data))

//     console.log(typeof users);

//     const div = document.createElement("div")

//     document.body.appendChild(div)

//     div.innerHTML = users

//     console.log(JSON.parse(users))

// }

// getUsers()


// const btn = document.getElementById("button")
// btn.addEventListener('click', handleClick)
   
// function handleClick(event) {
//     event.preventDefault()
//     const e = document.forms[0].elements
//     const p = document.getElementById("out");
//     p.innerHTML = "";

//     for (let i = 0; i < e.length; i++) {
//          p.innerHTML += e[i].tagName + " — " +
//         e[i].name + " — " + e[i].value + "<br>"
//     }
// }


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

//         document.body.appendChild(f)
//         console.log(phoneCounter)
// }
// Примеры типа данных Symbol
// const name = Symbol ("name111")
//         console.log(name)

        // let user = {
        //         login: "user1",
        //         [Symbol("data")]: "This is important user data"
        // }
        // console.log(user)

//        const arr=[1221,1984, 1881,2115] 
//         // let nam1=arr[0]; //можно записть так
//         // let num2=arr[1]; // это первый вариант записи

//         const [num1, num2,, num4] = arr; //а можно запистаь так
//         console.log (num4) //второй вариант записи


// import axios from "axios"        ;

// console.log (axios)

// const obj = {name: "Nataliya", age: 41};

//         let{name, age} = obj;
//         console.log (name, age)



class Product{
        constructor(name, price){
                this._name = name;
                this._price = price;
                }
               set name(name) {
                if (name.trim().length !==0){
                        this._name = nameж
                }
                else {
                        console.log(" This is not suitable data")
                }
               } 
               set price(price) {
                if(price > 0 ){
                this._price = price;
                }
                else{
                console.log("This is not suitable data");
                }

}
}





