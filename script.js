
/*Aqui foram declaradas dois arrays, um contendo as vogais, e outro contendo
as substituiçãodas vogais */
var letras = ["e", "i", "a", "o", "u"]
var substituicao = ["enter", "imes", "ai", "ober", "ufat"]

/*Aqui temos uma função que vai pegar o valor do 'textarea' no html, percorrer
todas as letras do texto e conferir se o texto possui alguma vogal,
se tiver ela vai ser substituida por uma das substituições acima, de acordo com
sua posição.*/
function codificar() {
   let mensagem = document.querySelector("#mensagem");
   let valor = mensagem.value;


   for(let i = 0; i < letras.length; i++) {
      let vogal = letras[i];
      let regex = new RegExp(vogal, "gi");
      if(valor.includes(vogal)) {
         valor = valor.replace(regex, substituicao[i]);
         atualizar = true;
      }
   }

   if(valor !== "") {
      limparImagem()
      exibirBotao()
   
   }
   let mensagem1 = document.getElementById("mensagem1");
   mensagem1.value = valor;
   mensagem.value = valor;

}

/*Aqui temos uma função que vai pegar o valor do 'textarea' no html, percorrer
todas as letras do texto e conferir se o texto possui alguma substituilção,
se tiver ela vai ser substituida por uma das vogais acima, de acordo com
sua posição.*/
function decodificar() {
   let mensagem = document.querySelector("#mensagem");
   let valor = mensagem.value;

   
   for(let i = 0; i < letras.length; i++) {
      let substituido = substituicao[i];
      let regex = new RegExp(substituido, "gi");
      if(valor.includes(substituido)) {
         valor = valor.replace(regex, letras[i]);
         atualizar = true;
      }
   }

   if(valor !== "") {
      limparImagem()
      exibirBotao()  
   }
   let mensagem1 = document.getElementById("mensagem1");
   mensagem1.value = valor;
   mensagem.value = valor;

}

/*Aqui temos uma função que vai selecionar o valor do 'textarea' no html,
e executar um comando para copiar o texto selecionado.*/
function copiarTexto() {
  var mensagem = document.getElementById("mensagem");
   mensagem.select();
   mensagem.setSelectionRange(0, 99999);
   document.execCommand("copy");
}

/*Aqui temos uma função que vai pegar o valor da tag 'conteudo' no html,
e mudar a exibição, deixando o 'conteudo' invisivel */
function limparImagem() {
   var conteudo = document.getElementById("conteudo");
   
   conteudo.style.display = "none";
}

/*Aqui temos uma função que vai pegar o valor de um 'textarea' e de um 'button' com a tag copiar,
e então mudar a exibição do bottun e o tamanho do 'textarea'. */
function exibirBotao() {
   var mensagem1 = document.getElementById("mensagem1");
   var copiar = document.getElementById("copiar");

   copiar.style.display = "inline-block";
   mensagem1.style.height = "70%";
}
