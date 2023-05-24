var letras = ["e", "i", "a", "o", "u"]
var substituicao = ["enter", "imes", "ai", "ober", "ufat"]

function codificar() {
   let mensagem = document.querySelector("#mensagem");
   let valor = mensagem.value;


   for(let i = 0; i < letras.length; i++) {
      let vogal = letras[i];
      let regex = new RegExp(vogal, "gi");
      if(valor.includes(vogal)) {
         valor = valor.replace(regex, substituicao[i]);
         atualizar = true
      }
   }

   if(valor !== "") {
      limparImagem()
      exibirBotao()
   
   }
   let mensagem1 = document.getElementById("mensagem1");
   mensagem1.value = valor
   mensagem.value = valor;

}

function decodificar() {
   let mensagem = document.querySelector("#mensagem");
   let valor = mensagem.value;

   
   for(let i = 0; i < letras.length; i++) {
      let substituido = substituicao[i];
      let regex = new RegExp(substituido, "gi");
      if(valor.includes(substituido)) {
         valor = valor.replace(regex, letras[i]);
         atualizar = true
      }
   }

   if(valor !== "") {
      limparImagem()
      exibirBotao()  
   }
   let mensagem1 = document.getElementById("mensagem1");
   mensagem1.value = valor
   mensagem.value = valor;

}

function copiarTexto() {
  var mensagem = document.getElementById("mensagem");
   mensagem.select();
   mensagem.setSelectionRange(0, 99999);
   document.execCommand("copy");
}

function limparImagem() {
   var conteudo = document.getElementById("conteudo");
   
   conteudo.style.display = "none"

}

function exibirBotao() {
   var mensagem1 = document.getElementById("mensagem1")
   var copiar = document.getElementById("copiar");

   copiar.style.display = "inline-block";
   mensagem1.style.height = "70%";
}
