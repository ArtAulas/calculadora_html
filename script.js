alert("Bem vindo(a) a Calculadora HTML")

let b1=document.querySelector("button.nro1")
let b2=document.querySelector("button.nro2")
let b3=document.querySelector("button.nro3")
let b4=document.querySelector("button.nro4")
let b5=document.querySelector("button.nro5")
let b6=document.querySelector("button.nro6")
let b7=document.querySelector("button.nro7")
let b8=document.querySelector("button.nro8")
let b9=document.querySelector("button.nro9")
let b0=document.querySelector("button.nro0")

let tela=document.querySelector("div.tela")

b1.addEventListener("click",function (){
    tela.textContent+='1'
})
b2.addEventListener("click",function (){
    tela.textContent+='2'
})
b3.addEventListener("click",function (){
    tela.textContent+='3'
})
b4.addEventListener("click",function (){
    tela.textContent+='4'
})
b5.addEventListener("click",function (){
    tela.textContent+='5'
})
b6.addEventListener("click",function (){
    tela.textContent+='6'
})
b7.addEventListener("click",function (){
    tela.textContent+='7'
})
b8.addEventListener("click",function (){
    tela.textContent+='8'
})
b9.addEventListener("click",function (){
    tela.textContent+='9'
})
b0.addEventListener("click",function (){
    tela.textContent+='0'
})

