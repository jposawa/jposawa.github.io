var logado = false;
var pagAtual = "inicio.html";

$(document).ready(function()
{
	$("#corpoPagina").css("pagAtual");
});

function carregaPagina(url)
{
	//alert(url);
	pagAtual = url;
	$("#corpoPagina").css(url);
}