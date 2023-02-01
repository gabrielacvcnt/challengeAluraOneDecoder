const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".msg");
document.querySelector(".btCopy").addEventListener('click', copiarResultado);


function sumirImagem(){
    if(mensagem.value === '') {
        mensagem.style['background-image'] = 'url("/assets/searching.svg")';
    } else {
        mensagem.style['background-image'] = 'none';
    }
}


function btCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
    sumirImagem();
}


function criptografar(stringCriptografada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCriptografada;
}


function btDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";
    sumirImagem();
}


function descriptografar(stringDescriptografada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptografada;
}


async function copiarResultado() {
    await navigator.clipboard.writeText(mensagem.value.toLowerCase());
}