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

function switchBloco(alvo)
{
	var numBloco = parseInt(alvo);
	var interruptor;
	var estadoInterruptor;

	switch(numBloco)
	{
		case 1: //BLOCOINFOS COM DADOS DE CONTATOS
			interruptor = document.getElementById("blocoInfos");
			estadoInterruptor = parseInt(interruptor.getAttribute("data-interruptor"));
			if(estadoInterruptor == 0)
			{
				$("#corpoInfos").load("contatos.html");
				$(interruptor).css("left","20%");
				$(interruptor).css("box-shadow","0 0 0.2rem 0.2rem #222");
				interruptor.setAttribute("data-interruptor","1");
			}
			else
			{
				$(interruptor).css("left","100%");
				$(interruptor).css("box-shadow","none");
				interruptor.setAttribute("data-interruptor","0");
			}
		break;

		case 2:
			interruptor = document.getElementById("blocoInfos");
			estadoInterruptor = parseInt(interruptor.getAttribute("data-interruptor"));
			if(estadoInterruptor == 0)
			{
				$("#corpoInfos").load("sobre.html");
				$(interruptor).css("left","20%");
				$(interruptor).css("box-shadow","0 0 0.2rem 0.2rem #222");
				interruptor.setAttribute("data-interruptor","1");
			}
			else
			{
				$(interruptor).css("left","100%");
				$(interruptor).css("box-shadow","none");
				interruptor.setAttribute("data-interruptor","0");
			}
		break;
	}
}