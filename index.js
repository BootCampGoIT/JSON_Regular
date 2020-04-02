'use strict'

// const json = `{
// "name": "Ivan",
//     "age": 25,
//         "status": "student",
//             "online": true,
//                 "header": ["Home", "About", "Contacts"]
// }`;


// Method JSON.parse()
// const result = JSON.parse(json);
// console.log(result);

// =========== JSON.parse(*****) ==============

// function markupFromString(data) {

// let string = '';
// array.forEach(element => {
//     string += `
//         <li>${element}</li>
//         `
// });
// return string;

// ========== 2 ==========

// return JSON.parse(data).reduce((accum, item) => {
//     accum += `<li>${item}</li>`
//     return accum;
// }, '')
// }

// const data = '["Home", "About", "Contacts"]'; //string

// const list = document.querySelector(".list");
// list.innerHTML = markupFromString(data);


// ============= JSON.stringify( ****** ) ==================

// const user = {
//     name: "Ivan",
//     age: 25,
//     status: "student",
//     online: true,
// };

// const json = JSON.stringify(user);
// console.log(json);

// ============= cookies ====  4096 символов ===== 1 кук = 30 - 70 символов =====

// const age = document.cookie.match(/age=(.+?);/);

// document.cookie = "age=25";
// document.cookie = `user=${json}`
// console.log(document.cookie);

// document.cookie = "name=Andrii";
// console.log(document.cookie);

// ============== localStorage ========= 50 - 12 мегабайт =====

// localStorage.setItem("key", "Value");

// localStorage.getItem("key");

// localStorage.removeItem("key");

// localStorage.clear();


// ============== ex1 ================
// localStorage.setItem("name", "Andrii");
// console.log(localStorage.getItem("name"));
// localStorage.clear();

// ============== ex2 ================
// const myObject = {
//     name: "Andrii",
//     parametrs: [10, 20, 30]
// }

// const json = JSON.stringify(myObject);
// localStorage.setItem("user", json);

// const getJson = localStorage.getItem('user'); //string
// const convertJSon = JSON.parse(getJson); // object
// console.log(getJson);
// console.log(convertJSon);

// exp1

const object = `{
    "menu": ["Home", "About", "Categories"],
    "categories": ["Products", "Tools", "Cars", "Homes"]
}`

// const constructor = {
//     method(data) {
//         const parseData = JSON.parse(data); //'' => {}
//         const keys = Object.keys(parseData); // ["menu", "categories"]
//         keys.forEach(key => {
//             this.templateItems(parseData[key], key)// parseData.key
//         })
//     },
//     templateItems(array, str) { //["Home", "About", "Categories"], menu
//         const buildStr = array.reduce((acc, item) => {
//             return acc += `<li data-target="li">${item}</li>`
//         }, '') //<li data-target="li">Home</li><li data-target="li">About</li><li data-target="li">Categories</li>
//         const element = document.querySelector(`.${str}`); //ul
//         element.addEventListener('click', this.handleClick);
//         element.innerHTML = buildStr;
//     },
//     handleClick(e) {
//         const target = e.target;
//         // if (e.target === e.currentTarget) {
//         //     return
//         // }
//         // if (e.target.nodeName !== "LI") {
//         //     return
//         // }
//         if (e.target.dataset.target === 'li') {
//             console.log(target.textContent);
//         }
//     },
// }

// constructor.method(object)


function constructor(data) {
    (function method(data) {
        const parseData = JSON.parse(data); //'' => {}
        const keys = Object.keys(parseData); // ["menu", "categories"]
        keys.forEach(key => {
            templateItems(parseData[key], key)// parseData.key
        })
    })(data)
    function templateItems(array, str) { //["Home", "About", "Categories"], menu
        const buildStr = array.reduce((acc, item) => {
            return acc += `<li data-target="li">${item}</li>`
        }, '') //<li data-target="li">Home</li><li data-target="li">About</li><li data-target="li">Categories</li>
        const element = document.querySelector(`.${str}`); //ul
        element.addEventListener('click', handleClick);
        element.innerHTML = buildStr;
    }
    function handleClick(e) {
        const target = e.target;
        // if (e.target === e.currentTarget) {
        //     return
        // }
        // if (e.target.nodeName !== "LI") {
        //     return
        // }
        if (e.target.dataset.target === 'li') {
            console.log(target.textContent);
        }
    }
}

constructor(object)

















