var logado = false;
var pagAnterior = "inicio.html";

$(document).ready(function()
{
	$("#corpoPagina").css("pagAnterior");
});

function carregaPagina(url)
{
	//alert(url);
	$("#corpoPagina").css(url);
}