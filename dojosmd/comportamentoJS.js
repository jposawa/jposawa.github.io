var paginaAtual, paginaAnterior;
$(document).ready(function()
{
	//PÁGINA INICIAL
	$("#corpo1").load("inicio.html");
	paginaAtual = "inicio.html";
	destacaPagina(paginaAtual.slice(0,paginaAtual.length-5))
})

function destacaPagina(pagina,anterior)
{
	//alert(pagina);
	$("."+pagina).css
	({
		"background":"#111",
		"box-shadow":"0 0 0.1rem 0.05rem #333",
		"padding-left":"0.7rem"
	});

	$("."+anterior).css
	({
		"background":"",
		"box-shadow":"",
		"padding-left":""
	});
}

function carregaPagina(nomePagina)
{
	var url = $(nomePagina).attr("class") + ".html";
	//alert(url);
	//$("#corpoPagina").load(url);

	//alert($(url).attr("name"));

	if(parseInt($("#blocoInfos").attr("data-interruptor")) == "1")
	{
		$("#blocoInfos").css({"left":"100%", "box-shadow":"none"});
		$("#blocoInfos").attr("data-interruptor","0");
	}

	if(url != paginaAtual)
	{
		if(parseInt($("#corpo1").css("right")) == 0)
		{
			//alert("entrou com corpo1 indo esconder");
			$("#corpo2").load(url);
			$("#corpo1").css({"right":"100%","z-index":"5"});
			$("#corpo2").css({"right":"0","z-index":"6"});
		}
		else
		{
			//alert("vez do corpo2 esconder");
			$("#corpo1").load(url);
			$("#corpo2").css({"right":"100%","z-index":"5"});
			$("#corpo1").css({"right":"0","z-index":"6"});	
		}
		paginaAnterior = paginaAtual;
		paginaAtual = url;
		destacaPagina(paginaAtual.slice(0,paginaAtual.length-5), paginaAnterior.slice(0,paginaAnterior.length-5));
	}
}

/*function blocoContatos(interruptor)
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
}*/

function switchBloco(alvo)
{
	var numBloco = parseInt(alvo);
	var interruptor;
	var estadoInterruptor;

	switch(numBloco)
	{
		case 0: //FECHA BLOCOINFOS
			interruptor = document.getElementById("blocoInfos");
			$(interruptor).css("left","100%");
			$(interruptor).css("box-shadow","none");
			interruptor.setAttribute("data-interruptor","0");
		break;

		case 1: //BLOCOINFOS COM DADOS DE CONTATOS
			interruptor = document.getElementById("blocoInfos");
			estadoInterruptor = parseInt(interruptor.getAttribute("data-interruptor"));
			$("#corpoInfos").load("contatos.html");

			if(estadoInterruptor == 0)
			{
				$(interruptor).css("left","20%");
				$(interruptor).css("box-shadow","0 0 0.2rem 0.2rem #222");
				interruptor.setAttribute("data-interruptor","1");
			}
		break;

		case 2:
			interruptor = document.getElementById("blocoInfos");
			estadoInterruptor = parseInt(interruptor.getAttribute("data-interruptor"));
			$("#corpoInfos").load("sobre.html");

			if(estadoInterruptor == 0)
			{
				$(interruptor).css("left","20%");
				$(interruptor).css("box-shadow","0 0 0.2rem 0.2rem #222");
				interruptor.setAttribute("data-interruptor","1");
			}
		break;
	}
}