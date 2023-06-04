const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

// Coloca fundo  branco quando value .mensagem não estiver vazio



//Volta a imagem no bg .mensagem quando value estiver vazio...

function fundoTexto(){

    const checked1 = document.getElementById("btnInput");
    const checked2 = checked1.checked;
    if(mensagem.value){

        if(checked2){
            document.getElementById("mensagem").style.background="#4b4b4b";
        }else{
            document.getElementById("mensagem").style.background="rgb(209, 209, 209"; 
        }
    }else{
        document.getElementById("mensagem").style.background="";
    }}



function btnPrincipal() { 
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    fundoTexto();
    textArea.value = "";
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btnDescriptografar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    
    fundoTexto();
    textArea.value = "";
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar() {
    
    var copiar = mensagem.value;
    navigator.clipboard.writeText(copiar);
    document.getElementById("mensagem").style.background="";
    mensagem.value = "";
}
// Modo Dark //
//////////////

const btnDark = document.getElementById("btnInput");

btnDark.addEventListener("change", (e) =>{
    document.body.classList.toggle("dark", e.target.checked);
    document.getElementById("mensagem").style.background="";
    mensagem.value = "";
})