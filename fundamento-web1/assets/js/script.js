/*
Case sensitive = reconhece letras maiusculas e minusculas
podemos chamar por:

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color = 'green'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
    }
}