var mensagem = document.getElementById('message');
var seleciona = document.getElementById('selection');
var incremento = document.getElementById('incremento');
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
    codifica(texto.value);
 })





///seleciona.addEventListener('change', function(){
   // if (opcaocodigo.value === '0' || opcaocodigo.value === 'base64') {
      // document.querySelector('.incremento').style.display  = 'none';
    //} else {
      // document.querySelector('.incremento').style.display = 'flex'
   // }
 //})

