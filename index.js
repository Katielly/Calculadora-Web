
function numeros(numb) {
    let tela = document.getElementById("tela");
    // console.log(typeof numb);
    console.log('tela:', tela)

    switch (numb) {
        case 0:
            tela.innerHTML += 0;
            break;
        case 1:
            tela.innerHTML += 1;
            break;
        case 2:
            tela.innerHTML += 2;
            break;
        case 3:
            tela.innerHTML += 3;
            break;
        case 4:
            tela.innerHTML += 4;
            break;
        case 5:
            tela.innerHTML += 5;
            break;
        case 6:
            tela.innerHTML += 6;
            break;
        case 7:
            tela.innerHTML += 7;
            break;
        case 8:
            tela.innerHTML += 8;
            break;
        case 9:
            tela.innerHTML += 9;
            break;

    }
    let valueTela = document.getElementById("tela").value;
    console.log('final: ', valueTela);
}

function zerar() {
    document.getElementById("tela").innerHTML = 0;
}

function clearNumb (){
    let display = document.getElementById("tela").value;
    console.log('display: ', display);
}