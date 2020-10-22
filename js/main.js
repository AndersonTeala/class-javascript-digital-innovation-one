
function botao(){
    document.getElementById("obrigado").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("obrigado"));
}

function redirecionar(){
    window.open("https://blogatnteala.sentidoconsultoria.com.br/");
    //window.location.href = "https://blogatnteala.sentidoconsultoria.com.br/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar Texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function load(){
    var d = new Date();
    alert(d);
}*/



/* var d = new Date();
alert(d); */



/*
var count = 0;
while (count <= 10){
    console.log(count);
    count = count + 1;
} */

/*
var idade = prompt("QUAL A SUA IDADE: ")
if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
} */

/*

nome = "Anderson Teala";
var idade = 24;
var idade2 = 10;
var frase = "Flamengo e o melhor time do mundo"
alert(nome + " tem " + idade + " anos");
alert(idade + idade2)
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Flamengo", "Brasil"));
*/