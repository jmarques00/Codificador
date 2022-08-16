var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");


function criptografar(){                       //essa função irá transformar a letra (a) em (ai), (e) em (enter), (i) em (imes), (o) em (ober) e o (u) em (ufat) por meio do replace//
  var texto = textInput.value;
  var resultCripto = texto.replace(/a/g, "ai")
                          .replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat") 
  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'


  
}
function descriptografar(){
    var texto = textInput.value;
    var resultDescripto = texto .replace(/ai/g, "a")
                                .replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
    
}

function copiar() {                              //essa função irá inverter a primeira//
    var textoCop = document.getElementById('input-texto'); 
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");

  }
