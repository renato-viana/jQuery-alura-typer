var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

//$(document).ready(function() {
$(function () {
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  validaTexto();
  $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
  var frase = $(".frase").text();
  var numeroPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numeroPalavras);
}

function inicializaContadores() {
  campo.on("input", function () {
    var conteudo = campo.val(); //$(this).val();
    var qtdPalavras = conteudo.split(/\s+/).length;

    $("#contador-palavras").text(qtdPalavras);

    //Expressão regular (/\s+/g) \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
    var qtdCaracteres = conteudo.replace(/\s+/g, "").length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

function inicializaCronometro() {
  var tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus", function () {
    $("#botao-reiniciar").attr("disabled", true);
    var cronometroID = setInterval(function () {
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr("disabled", true);
        clearInterval(cronometroID);
        $("#botao-reiniciar").attr("disabled", false);
        campo.toggleClass("campo-desativado");
      }
    }, 1000);
  });
}

function validaTexto() {
  var texto = $(".frase").text();
  campo.on("input", function () {
    var textoDigitado = campo.val();
    var comparavel = texto.substr(0, textoDigitado.length);

    if (textoDigitado == comparavel) {
      campo.addClass("campo-correto");
      campo.removeClass("campo-errado");
    } else {
      campo.addClass("campo-errado");
      campo.removeClass("campo-correto");
    }
  });
}

function reiniciaJogo() {
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-caracteres").text(0);
  $("#contador-palavras").text(0);
  $("#tempo-digitacao").text(tempoInicial);
  inicializaCronometro();
  campo.removeClass("campo-desativado");
  campo.removeClass("campo-correto");
  campo.removeClass("campo-errado");
}
