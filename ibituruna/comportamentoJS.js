$(document).ready(function()
{
	//PÁGINA INICIAL
	$("#corpoPagina").load("inicio.html");
})
function carregaPagina(url)
{
	//alert(url);
	$("#corpoPagina").load(url);
}