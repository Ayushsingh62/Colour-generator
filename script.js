const body = document.querySelector('body')
const container=document.querySelector('.container')
const box = document.querySelector('#box')
const btn = document.querySelector('button')
const para= document.querySelector('p')

btn.addEventListener("click", randomcolor )

function randomcolor(){

const color = "#"+( Math.floor( Math.random() * 16777215) .toString(16) );
console.log(color);
para.innerText=color
container.style.backgroundColor=color;

}
