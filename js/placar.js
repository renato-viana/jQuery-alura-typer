$("#botao-placar").click(mostraPlacar);
    
function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Renato";
  var numeroPalavras = $("#contador-palavras").text();

  var linha = novaLinha(usuario, numeroPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.append(linha);
  $(".placar").slideDown(500);
  scrollPlacar();
}

function scrollPlacar() {
  var posicaoPlacar = $(".placar").offset().top;
  $("body").animate(
    {
      scrollTop: posicaoPlacar+"px"
  }, 1000);
}

function novaLinha(usuario, numeroPalavras) {
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(numeroPalavras);
  var colunaRemover = $("<td>");

  var link = $("<a>").addClass("botao-remover").attr("href", "#");
  var icone = $("<i>")
    .addClass("small")
    .addClass("material-icons")
    .text("delete");

  link.append(icone);

  colunaRemover.append(link);

  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}

function removeLinha() {
  event.preventDefault();
  var linha = $(this).parent().parent();
  linha.fadeOut(1000);
  setTimeout(function() {
    linha.remove();
  }, 1000);

}

function mostraPlacar() {
    $(".placar").stop().slideToggle(1000);
}