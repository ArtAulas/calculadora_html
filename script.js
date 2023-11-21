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

for (let i=0;i<10;i++){
    lista_botoes[i].addEventListener("click",function (){
        if (igualSelecionado){
            tela.textContent=''
            igualSelecionado=false
        }
        tela.textContent+=lista_botoes[i].textContent
        console.log('chamada função ao botão '+i)
    })
};

//definição de variável e função para o botão "Reseta"
let reset=document.querySelector("button.reseta")

function reseta(){
    tela.textContent=''
    total=0
    igualSelecionado=false
    operadorAnterior=''
    console.log('chamada função ao botão reseta')
}
reset.onclick=reseta


//definição de variável e função para o botão "Backspace"
let buttonBack=document.querySelector("button.backspace")

buttonBack.onclick=function(){
    tela.textContent=tela.textContent.slice(0,-1)
    console.log('chamada função ao botão backspace')
}


//definição de variável e função para o botão "C"
let cancela=document.querySelector("button.cancela")

cancela.onclick=function(){
    tela.textContent=''
    console.log('chamada função ao botão c')
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