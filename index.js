var mensagem = document.getElementById('message');
var seleciona = document.getElementById('selection');
var incremento = document.getElementById('incremento');
var increment = document.getElementById ('increment');
var entrada = document.getElementById('entrada');
var codifica = document.getElementById('cod');
var decodifica = document.getElementById('decod');
var botao = document.getElementById('botao');
var resultado = document.getElementById ('resultado');
var texto = document.getElementById('txt');
var base = document.getElementById('base');
var cifra = document.getElementById('cifra');


cod.addEventListener('click', function(){
   botao.innerText='Codificar mensagem!'
})

decod.addEventListener('click', function(){
   botao.innerText='Decodificar mensagem!'
})

seleciona.addEventListener('change', function(){
   if (selection.value === '0' || selection.value === 'base') {
      document.getElementById('incremento').style.display = 'none';
   } else {
      document.getElementById('incremento').style.display = 'block'
   } 
})

 botao.addEventListener('click', function(event){
    event.preventDefault();
    codificar(texto.value);
 })

 function codificar(caixaTxt){
   if (seleciona.value == 'base' && botao.innerText == 'Codificar mensagem!') {
      var codBase = btoa(caixaTxt);
      resultado.value = codBase;                                  // codificar em base64 
   } else if (seleciona.value == 'base' && botao.innerText == 'Decodificar mensagem!') {
      var decodBase = atob(caixaTxt);
      resultado.value = decodBase;                                    // decodificar em base64
   } else if (seleciona.value == 'cifra' && botao.innerText == 'Codificar mensagem!') {
      var codC = codCifra(texto.value, +increment.value); 
      resultado.value = codC;                             // cofificar em cifra de césar
   } else if (seleciona.value == 'cifra' && botao.innerText == 'Decodificar mensagem!') {
      alert('decod cifra');                 // decodifica em cifra de césar
   } else {
      alert('Tente apenas letras');
   }
}

 function codCifra(msg, inc) {
    var t = msg.toUpperCase();
    var arrayTxt = t.split('');
    var entradaCifra = [];
    var saidaCifra = [];
    for (i = 0; i < arrayTxt.length ; i++) {
      if (arrayTxt[i].charCodeAt() >= 65 && arrayTxt[i].charCodeAt() >= 90 ) {
         var recebeCharCode = ((arrayTxt[i].charCodeAt() - 65 + inc) % 26)
         entradaCifra.push(recebeCharCode + 65);  
      } else {
         entradaCifra.push(arrayTxt[i].charCodeAt());
    } 
 } 
   for (var h = 0; h < entradaCifra.length ; h++) {
      saidaCifra.push(String.fromCharCode(entradaCifra[h]))
   }
   return saidaCifra.join('');
 }
 




