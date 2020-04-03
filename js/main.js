var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numeroPalavras);

var campo = $(".campo-digitacao");

campo.on("input", function() {
    var conteudo = campo.val(); //$(this).val();
    var qtdPalavras = conteudo.split(/\s+/).length;

   $("#contador-palavras").text(qtdPalavras);
   
   //Expressão regular (/\s+/g) \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
   var qtdCaracteres =conteudo.replace(/\s+/g, '').length;
   $("#contador-caracteres").text(qtdCaracteres);
  
});

