var mensagem = document.getElementById('message');
var seleciona = document.getElementById('selection');
var incremento = document.getElementById('incremento');
var entrada = document.getElementById('entrada');
var codifica = document.getElementById('cod');
var decodifica = document.getElementById('decod');
var botao = document.getElementById('botao');
var resultado = document.getElementById ('resultado');

var labelCifra = document.querySelector("#incremento");
var inputCifra = document.querySelector("#numeroIncremento");

seleciona.addEventListener('change', function(){
    if(seleciona.value == 'cifraCesar'){
        labelCifra.style.display = "block";
        inputCifra.style.display = "block";
    }else {
        labelCifra.style.display = "none";
        inputCifra.style.display = "none";
    }
});