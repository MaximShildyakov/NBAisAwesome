/*let apple = 56;
let num = 11;
let q = Math.floor(apple/num);
let w = apple%num;
//alert(q, w);
//alert(Math.floor(apple/num));
console.log("каждому досталось", q);
console.log("осталось", w);*/

/*let a = 15;
let b = 10;
if (Math.sign(a) == 1 ){
    console.log('+');
}else if (Math.sign(a) == -1 ){
    console.log('-');
}else if (Math.sign(a) == 0){
    console.log('0');
}*/

/*for (let a = 0; a < 10; a++){
    console.log(a);
}
*/
//let str = [12, 56, 78]


/*function scum(str){
    console.log(str[0])
    //return str[0]
    //console.log(str[0])
}

scum('Hello World')
*/

//console.log(scum('Hello World'))


//let answer = prompt('Enter your answer')

//answer % 5 === 0 ? alert('Yes') : alert('No')



/*let answer2 = prompt('What planet are you from?')

pump = answer2.toLowerCase()



answer2 === 'Earth' || answer2 === pump ? alert('Hello') : alert('Hello, allien')*/


/*let sign = prompt('Enter a sign')
let number1 = Number(prompt('Enter 1 number'))
let number2 = Number(prompt('Enter 2 number'))

switch(sign){
    case "+": alert(number1 + number2)
    break
    case "-": alert(number1 - number2)
    break
    case "*": alert(number1 * number2)
    break
    case "/": alert(number1 / number2)
    break
    default: alert('Error')
    break
}*/


/*let qwe = Number(prompt('Enter amount'))
while (qwe !== 0){
    alert('#')
    qwe--
}
*/



/*let num = 5
while (num > 0){
    console.log(num)
    num--
}
*/


/*let num4 = 3
let res = 1
for(let i = 1; i <= num4; i++){
    res = res * i
}

console.log(res)
*/


/*function fuck(n){
    if (n === 0 || n === 1) {
        return n
    }
    return n * (fuck(n-1))
}



console.log(fuck(9))*/



/*let res = new Date()

console.log(res.valueOf())
console.log(res.getTime())*/

/*let date2 = new Date
let date1 = new Date('2022-08-12')
*/

//console.log(date2.getTime() - date1)




// function Student(firstname, lastname, birthday){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.birthday = birthday;
//     this.showInfo = function(){
//         console.log('Student name: '+this.firstname+
//         ' '+this.lastname);
//     }
//     this.showAge = function(){
//     const deltaTime = Date.now() - Date.parse(this.birthday);
//     //console.log(deltaTime)
//     const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
//     console.log(this.firstname+' '+this.lastname+
//     ' is '+studentAge +' years old.');
//     }
// }
// let Maxim = new Student('Maxim', 'Shildyakov', '08/31/2005')



/*Maxim.showInfo()
Maxim.showAge()
console.log(Maxim.firstname)*/


// class Car {
//     constructor(wheelAmount) {
//         this.wheelAmount = wheelAmount
//     }
//     showInfo() {
//         console.log('LOL')
//     }
//     wheelAmount() {
//         console.log(this.wheelAmount)
//     }
// }

//const maxim = new Human('Maxim', 'Shildyakov', '08/31/2005')

// class Ferrari extends Car{
//     #index 
//     constructor(wheelAmount, age, MadeIn){
//         super(wheelAmount)
//         this.age = age
//         this.MadeIn = MadeIn
//         this.#index = Math.floor(Math.random()*2500);
//     }
//     get getindex() {
//         return this.#index
//     }
//     set setindex(value){
//         this.#index = value;
//     }
//     showInfo(){
//         console.log('Made In ' + this.MadeIn)
//     }


// }



// const Spider = new Ferrari('4', '1', 'Italy')



//Spider.showInfo()



//console.log(Spider)

//Spider.setindex = 234

//console.log(Spider.getindex)



/*maxim.showInfo()
maxim.showAge()
console.log(maxim)
*/



/*function prosto(num){
    let pok = 0
    for(let i = 2; i < (num/2); i++){
        if (num % i != 0){
            pok = 0
        }
        else{
            pok++
        }
    }
    if(pok <= 6){
        return 'prostoe'
    }
    else{
        return 'ne prostoe'
    }
}

console.log(prosto(20))


*/


// function sumAllElem(firstNum, ...args){
//     return args.reduce((acc, elem) => acc += elem, 0) + firstNum
// }


// let arr = [1,2,3,4]

// let answer = arr.reduce((acc, elem) => acc += elem, 0)

//console.log(answer)
//console.log(sumAllElem(1,2,3,4,5,6,7,8,9))

// const calisthetic = ['qwert', 'L-sit', 'Frog']

// function AmountOfLetters(mas){
//     return mas.reduce((acc, elem) => elem.length + acc, 0)
// }

//console.log(AmountOfLetters(calisthetic))

/*function AmountOfLetters(mas){
    return mas.reduce(function(acc, elem){
        return elem.length + acc, 0})
    }

*/

/*const sumNum = (a) => {
    return a
}



console.log(sumNum(7))
*/

//const pump = [5,5,4]


/*function createNewArray(arr){
    return arr.map((elem, index, array) => elem.length )
}
*/


/*function createNewArray(arr){
    return arr.filter((elem, index, array) => elem.length === 5 )
}*/

//const choppa = calisthetic.forEach((elem, index, array) => index % 2 === 0 ? console.log(elem += '!') : console.log(elem))



//console.log(calisthetic)



//console.log(createNewArray(calisthetic))


/*const toopac = (begin, end, step) => {
    if(begin > end){
        return 0
    }
    const num = []
    for(let i = begin; i <= end; i += step ){
        num.push(i)
    }
    return num.reduce((acc, elem) => acc + elem, 0)
}



console.log(toopac(2,6,2))
*/


// function Figure(heigth, width){
//     this.heigth = heigth;
//     this.width = width;
//     this.showInfo = function(){
//         console.log('Figure`s info: heigth is '+this.heigth+
//         ', width is '+this.width);
//     }
//     this.perimetr = function(){
//         per = (heigth + width)*2
//         console.log('Perimetr of this figure is ' + per)
//     }
//     this.changeHeigth = function(){
//         this.heigth = Math.floor(Math.random()*100)
//         console.log('New heigth is ' + this.heigth)
//     }
// }

// const asd = new Figure(5, 10)

// //asd.showInfo()
// //asd.perimetr()
// asd.changeHeigth()


// let topleft = document.querySelector('.one').style.top = '40px'
// let topright = document.querySelector('.two').style.top = '80px'
// let bottomleft = document.querySelector('.three').style.top = '40px'
// let bottomrigt = document.querySelector('.four').style.top = '80px'

// console.log(querySelector)

// const div = document.createElement('div')
// const p = document.createElement('p')

// div.classList.add('wrapper')

// const body = document.body

// body.appendChild(div)

// //div.appendChild(p)

// div.insertAdjacentElement('afterend',p)
// // console.log(div)

// // const h1 = document.createElement('h1')

// // h1.textContent = 'Tu est amusant'

// p.textContent = 'Tu est amusant'


// //console.log('Its div element ' + div + ' Its another element' + p)

// console.log(`Its div element ${div} Its another element ${p}`)

// const ul = `
//     <ul>
//         <li>Un/Une</li>
//         <li>Deux</li>
//         <li>Trois</li>
//     </ul>
// `

// div.innerHTML = ul

// const img = document.createElement('img')

// img.src = 'https://picsum.photos/240'

// img.width = 240

// console.log(img)


// div.appendChild(img)

// img.alt = 'Random picture'

// const pdiv = document.createElement('div')
// //body.appendChild(pdiv)
// body.insertAdjacentElement('afterbegin',pdiv)
// const pdiv1 = document.createElement('p')
// const pdiv2 = document.createElement('p')
// pdiv1.textContent = 'Tu aimes le fromage?'
// pdiv2.textContent = 'Je visit la Brazile'
// pdiv.appendChild(pdiv1)
// pdiv.appendChild(pdiv2)

// console.log(pdiv)

// // pdiv1.style.color = 'red'

// // pdiv.children[1].style.color = 'pink'

// pdiv.classList.add('red-text')


// //pdiv.firstElementChild.remove()


// function generateAutoCard(brand, color, year) {
//     const curDate = new Date()
//     const curYear = curDate.getFullYear()
//     return `
//     <div class='parent'>
//         <div>
//             <h2> ${brand} ${color}</h2>
//             <p>${brand} ${color} ${year}. Cars age - ${curYear - year}</p>
//             <button class='btn'>Delete</button>
//         </div>
//     </div>
//     `
// }

// const cardiv = document.createElement('div')


// const carList = [
//     {brand: 'Tesla', color: 'red', year: '2015'},
//     {brand: 'Mercedes', color: 'black', year: '2015'},
//     {brand: 'Rivian', color: 'yellow', year: '2022'}
// ]

// let carsHTML = carList.map(car => {
//     return generateAutoCard(car.brand, car.color, car.year)
// })

// carsHTML = carsHTML.join(' ')

// cardiv.innerHTML = carsHTML

// console.log(carsHTML)

// body.appendChild(cardiv)

// const button = document.querySelectorAll('.btn')
// console.log(button)

// function destroy(c){
//     const curbut = c.currentTarget
//     console.log(c)
//     console.log(curbut)
//     curbut.closest('.parent').remove()
// }

// button.forEach(button => {
//     button.addEventListener('click', destroy)
// })



// const letters = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'L', 'l', 'J', 'j', 'K', 'k', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z']


// function phangran(str){
//     let ch = str.split('')
//     let num = 0
//     for(let i = 0; i <= 51; i++){
//         for(let k = 0; k <= ch.length; k++){
//             if(ch[k] === letters[i])
//             num++
//         }
//     }
//     if(num >= 26){
//         console.log('its phangram')
//     }
//     else{
//         console.log('its not phangram')
//     }

// }

// let qwe = 'Two driven jocks help fax my big quiz'
// let asd = 'I have an apple, a pan'
// phangran(qwe)
// phangran(asd)


// for(let b = 0; b <= 26; b++){
//     for(let r = 0; r <= 51; r+=2){
//         for(let k = 0; k <= ch.length; k++){
//             if(ch[k] === letters[r]){
//                 num++

//             }
//             continue
//         }
//     }
// }



// function opa(mas1, mas2){
//     // for(let i = 0; i < mas1.length; i++){
//     //     mas3.add(mas1[i])
//     // }
//     // for(let i = 0; i < mas2.length; i++){
//     //     mas3.add(mas2[i])
//     // }
//     let mas3 = new Set([...mas1, ...mas2])
//     console.log(mas3)

// }



// let mas1 = [1,2,3,4]
// let mas2 = [3,4,5,6]

// opa(mas1,mas2)


// const l = new XMLHttpRequest()

// console.log(l)

// import axios from 'axios'




// async function getData(url){
//     //const q = fetch('https://jsonplaceholder.typicode.com/users')//.then(response => response.json())

//     //let response = await fetch(url)

//     // return fetch(url).then(response => {
//     //     // console.log(response)
//     //     // return response.json().then(ans => console.log(ans))
//     //     // })
//         fetch(url).then(data => {
//             return data.text()
//         })
//         .then(data => {
//             console.log(data)
//         })

        

//     // let commits = await response.text() //читаем ответ в фомате JSON

//     // return response.blob()

//     }

//const q = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())

// let response = await fetch(q)
// let commits = await response.json()

// let json = JSON.stringify(q)

// // console.log(q)

// console.log(json)

//console.log(getData('https://jsonplaceholder.typicode.com/users'))


// async function getData(url){

//     const res = n.get(url)
//     return res
// }

// let pump = getData('https://jsonplaceholder.typicode.com/users')

// console.log(pump)





// function step(n, d){
//     if (d === 0){
//         return 1
//     }
//     return n * (step(n, d-1))
// }

// const n = 5
// // const d = 3

// // console.log(step(5, 3))
// let arr = [1, 222, 444]


// // console.log(qui(arr))

// function qui(arr){
//     let buf = -Infinity
//     for(let i = 0; i <= arr.length; i+= 1){
//         if(arr[i] > buf){
//             buf = arr[i]
//         }

//     }
//     return buf
// }

// // let arr = [1,222,444]
// // console.log(Math.max(...arr))

// // console.log(qui(arr))

// // console.log(qui(arr))

// let users = '121'

// async function getUsers() {
//     await fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => users = JSON.stringify(data))

//     console.log(users)

//     console.log(typeof(users))

//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = users

// //     console.log(JSON.parse(users))
// // }

// // getUsers()
// const btn = document.getElementById('button')
// btn.addEventListener('click', handleClick)


// // console.log(document.forms)
// function handleClick(event){
//     // const currentBtn = e.currentTarget
//     // currentBtn.closest('.parent').remove()
//     event.preventDefault()
//     const e = document.forms[0].elements
//     // const e = document.forms[0].children
//     console.log(e)
//     // localStorage.setItem('e', JSON.stringify(e))
//     // console.log(JSON.parse(localStorage.getItem('e')))
//     // const btn = document.getElementById(btn)
//     // btn.addEventListener('click', handleClick)
//     const p = document.getElementById("out");
//     p.innerHTML = "";

//     for ( let i = 0; i < e.length; i++){
//         p.innerHTML += e[i].tagName + " — " +
//         e[i].name + " — " + e[i].value + "<br>"
//         // `${p.innerHTML} ${e[i].tagName} + ${e[i].name} +  ${e[i].value}`
//     }
// }


// const addBtn = document.getElementById('addBtn')
// addBtn.addEventListener('click', addPhoneNumber)

// let phoneCounter = 1

// function addPhoneNumber(event){
//     event.preventDefault()
//     // if ( phoneCounter === 'undefined')
//     // let phoneCounter = 1
//     phoneCounter++
//     let f = document.forms[0]
//     let b = document.createElement('br');
//     f.appendChild(b);

//     const t = document.createElement('span')

//     t.textContent = ' Phone number '
//     f.appendChild(t)
//     let phoneInput = document.createElement('input');
//     phoneInput.type = 'text';
//     phoneInput.name = 'phone' + phoneCounter;
//     phoneInput.placeholder = 'Enter phone number';
//     f.appendChild(phoneInput);

//     const t2 = document.createElement('span')
//     t2.textContent = ' Phone type '
//     f.appendChild(t2)

//     let selector = f.elements['type']
//     console.log(selector)

//     let newSelector = selector.cloneNode(true)
//     newSelector.name = 'type' + phoneCounter;
//     f.appendChild(newSelector);

//     const t3 = document.createElement('span');
//     t3.textContent= ' Priority '
//     f.appendChild(t3);
//     let mainRadio = document.createElement('input');

//     mainRadio.type = 'radio';
//     mainRadio.name = 'main';
//     mainRadio.value = phoneCounter;
//     f.appendChild(mainRadio); 


//     document.body.appendChild(f)
//     console.log(phoneCounter)
// }

// const btn = document.getElementById('button')
// btn.addEventListener('click', handleClick)
// // btn = document.getElementById(btn)


// function showElements(){
//     let e = document.forms[0].elements
//     // localStorage.setItem('e', JSON.stringify(e))
//     // console.log(JSON.parse(localStorage.getItem('e')))
//     const btn = document.getElementById(btn)
//     btn.addEventListener('click', handleClick)
//     let p = document.getElementById("out");
//     p.innerHTML = "";

//     for ( let i = 0; i < e.length; i++){
//         // p.innerHTML += e[i].tagName + " — " +
//         // e[i].name + " — " + e[i].value + "<br>"
//         `${p.innerHTML} ${e[i].tagName} + ${e[i].name} +  ${e[i].value}`
//     }
// }



// const template =  /\-?\d+/g

// let nn = '323232323 eeee -39999'

// // console.log(nn.replace(/3/g, '8'))

// function fetchData(){

// }

// const arr = ['qwerty', 'wave', 'junkie']

// const i = arr.map((elem, index) => elem.length)

// console.log(i)

// const q = arr.reduce((acc, elem) => acc += elem.length, 0)

// console.log(q)

// const arr2 = ['qwe121', 'asd', 'ewewe', 'zxc22']

// const template = /\d/

// const c = arr2.filter((elem) => !template.test(elem))

// console.log(c)

// let user = {
//     login: "user1",
//     [Symbol("data")]: "This is important user data"
//    }
//    console.log(user.data);

//    console.log(Object.keys(user));
//    console.log(Object. getOwnPropertyNames (user));

// let userData = Symbol("data");
// let user = {
//  login: "user1",
//  userData: "This is important user data"
// }
// console.log(user.userData);


// const arr = [2112, 2332323, 6767676]

// const [numOne, numTwo, ...rest] = arr

// console.log(numOne, numTwo, rest)

const obj = {
    name: 'Anatoly',
    age: 21
}

const {name, age} = obj
console.log(name, age)


class Product{
    constructor(name, price){
        this._name = name
        this._price = price
    }
    set name(name){
        if(name.trim().length !== 0){
            this._name = name
        }
        else{
            console.log('Error')
        }
    }
    

        
}