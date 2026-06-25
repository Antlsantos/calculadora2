let display = document.getElementById("display");


function adicionar(valor){

    if(display.innerText=="0"){
        display.innerText = valor;
    }
    else{
        display.innerText += valor;
    }

}



function limpar(){

    display.innerText="0";

}



function calcular(){

    try{

        let resultado = eval(display.innerText);

        display.innerText = resultado;

    }

    catch{

        display.innerText="Erro";

    }

}