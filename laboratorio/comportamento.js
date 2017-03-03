var logado = false;
var pagAtual = "inicio.html";

$(document).ready(function()
{
	$("#corpoPagina").css(pagAtual);
});

function carregaPagina(url)
{
	//alert(url);
	pagAtual = url;
	$("#corpoPagina").load(url);
}

function blocoLogin(interruptor)
{
	var estadoInterruptor = parseInt(interruptor.getAttribute("data-interruptor"));
	//alert(estadoInterruptor);
	if(estadoInterruptor == 0)
	{
		$("#fzrLogin").css("padding-bottom","10%");
		$("#fzrLogin").css("max-height","10rem");
		interruptor.setAttribute("data-interruptor","1");
	}
	else
	{
		$("#fzrLogin").css("padding-bottom","0");
		$("#fzrLogin").css("max-height","0");
		interruptor.setAttribute("data-interruptor","0");
	}
}

function blocoContatos(interruptor)
{
	var estadoInterruptor = parseInt(interruptor.getAttribute("data-interruptor"));
	//alert(estadoInterruptor);
	if(estadoInterruptor == 0)
	{
		$(".campoContatos").css("padding","0.5% 1% 0 1%");
		$(".campoContatos").css("width","72%");
		$(".contatos").css("opacity","1");
		interruptor.setAttribute("data-interruptor","1");
	}
	else
	{
		$(".campoContatos").css("padding","0");
		$(".campoContatos").css("width","0");
		$(".contatos").css("opacity","0");
		interruptor.setAttribute("data-interruptor","0");
	}
}