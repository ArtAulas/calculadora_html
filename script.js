alert("Bem vindo(a) a Calculadora HTML")

//definir as seguintes variáveis
let tela=document.querySelector("div.tela")
let total=0
let operadorAnterior=''
let igualSelecionado=false

//cria uma lista com todos os botoes numerados
lista_botoes=[]
for (let i=0;i<10;i++){
    lista_botoes.push(document.querySelector("button.nro"+i))
}

/*
para cada botão contendo um de número
é definida uma função que adiciona o número em formato string à tela

também testa se o número foi pressionado após o igual, para poder limpar da tela o resultado anterior
*/
lista_botoes[1].addEventListener("click",function (){
    if (igualSelecionado){
        tela.textContent=''
        igualSelecionado=false
    }
    tela.textContent+='1'
})
lista_botoes[2].addEventListener("click",function (){
    if (igualSelecionado){
        tela.textContent=''
        igualSelecionado=false
    }
    tela.textContent+='2'
})
lista_botoes[3].addEventListener("click",function (){
    if (igualSelecionado){
        tela.textContent=''
        igualSelecionado=false
    }
    tela.textContent+='3'
})
lista_botoes[4].addEventListener("click",function (){
    if (igualSelecionado){
        tela.textContent=''
        igualSelecionado=false
    }
    tela.textContent+='4'
})
lista_botoes[5].addEventListener("click",function (){
    if (igualSelecionado){
        tela.textContent=''
        igualSelecionado=false
    }
    tela.textContent+='5'
})
lista_botoes[6].addEventListener("click",function (){
    if (igualSelecionado){
        tela.textContent=''
        igualSelecionado=false
    }
    tela.textContent+='6'
})
lista_botoes[7].addEventListener("click",function (){
    if (igualSelecionado){
        tela.textContent=''
        igualSelecionado=false
    }
    tela.textContent+='7'
})
lista_botoes[8].addEventListener("click",function (){
    if (igualSelecionado){
        tela.textContent=''
        igualSelecionado=false
    }
    tela.textContent+='8'
})
lista_botoes[9].addEventListener("click",function (){
    if (igualSelecionado){
        tela.textContent=''
        igualSelecionado=false
    }
    tela.textContent+='9'
})
lista_botoes[0].addEventListener("click",function (){
    if (igualSelecionado){
        tela.textContent=''
        igualSelecionado=false
    }
    tela.textContent+='0'
})


//definição de variável e função para o botão "Reseta"
let reset=document.querySelector("button.reseta")

function reseta(){
    tela.textContent=''
    total=0
    igualSelecionado=false
    operadorAnterior=''
}
reset.onclick=reseta


//definição de variável e função para o botão "Backspace"
let buttonBack=document.querySelector("button.backspace")

buttonBack.onclick=function(){
    tela.textContent=tela.textContent.slice(0,-1)
}


//definição de variável e função para o botão "C"
let cancela=document.querySelector("button.cancela")

cancela.onclick=function(){
    tela.textContent=''
}

//definição de variável e função para o botão "Igual"
let btIgual=document.querySelector("button.igual")

btIgual.addEventListener("click",function(){
    switch (operadorAnterior){
        case("soma"):
            total+=Number(tela.textContent);
            break;
        case("subtracao"):
            total-=Number(tela.textContent);
            break;
        case("multi"):
            total=total*Number(tela.textContent);
            break;
        case("divi"):{
            if (Number(tela.textContent)==0){
                alert("Não realize divisões por 0")
            }
            else{
                total=total/(Number(tela.textContent))
            }
            break;
        }
    }
    tela.textContent=total
    total=0
    operadorAnterior=''
    igualSelecionado=true
})


//definição de variável e função para o botão "Soma"
let btSoma=document.querySelector("button.soma")

function soma(){
    total+=Number(tela.textContent)
    tela.textContent=''
    operadorAnterior='soma'
}
btSoma.onclick = soma

//definição de variável e função para o botão "Subtração"
let btSubtrai=document.querySelector("button.subtrai")

function subtracao(){
    if (total!=0){
        total=total-Number(tela.textContent)}
    else{
        total+=Number(tela.textContent)}
    tela.textContent=''
    operadorAnterior='subtracao'
}
btSubtrai.onclick = subtracao

//definição de variável e função para o botão "Multiplicação"
let btMulti=document.querySelector("button.mult")

function multiplicacao(){
    if (total!=0){
        total=total*Number(tela.textContent)}
    else{
        total=Number(tela.textContent)}
    tela.textContent=''
    operadorAnterior='multi'
}
btMulti.onclick = multiplicacao

//definição de variável e função para o botão "Divisão"
let btDivide=document.querySelector("button.divide")

function divisao(){
    if(total==0){
        total+=Number(tela.textContent)}
        else{
            total=total/(Number(tela.textContent))
        }
    if (Number(tela.textContent)==0){
        alert("Não realize divisões por zero >:(")}
    tela.textContent=''
    operadorAnterior='divi'
}
btDivide.onclick = divisao