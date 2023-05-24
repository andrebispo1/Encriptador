const text-area = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function botaoencriptar() {
	const textoEncriptado = encriptar(text-area.value);
	mensagem.value = textoEncriptado;
	text-area.value == "";
}

function encriptar(stringEncriptada) {

	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
	stringEncriptada = stringEncriptada.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++) {
		if(stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}

	return stringEncriptada;
}

function botaodesencriptar() {
	const textoDesencriptado = desencriptar(text-area.value);
	mensagem.value = textoDesencriptado;
	text-area.value == "";
}

function desencriptar(stringDesencriptada) {

	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++) {
		if(stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}

	return stringDesencriptada;
}



function copiar() {
    const texto = mensagem.value;
    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log("Texto copiado para a área de transferência: " + texto);
      })
      .catch((error) => {
        console.error("Erro ao copiar o texto: ", error);
      });
      mensagem.value = "";
}