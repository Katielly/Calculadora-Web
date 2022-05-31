
function numeros(num) {
    var tela = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = tela + num;
}

function operador(){

}

function zerar() {
    document.getElementById("tela").innerHTML = "";
}

function back(){
    let tela = document.getElementById("tela").innerHTML;
    document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1); //subtring
}

function result() {
    let tela = document.getElementById("tela").innerHTML;
    if(tela){
        document.getElementById("tela").innerHTML = eval(tela);
    }
}