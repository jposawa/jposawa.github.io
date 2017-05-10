var paginaAtual = "inicio.html";

$(document).ready(function()
{
	$("#corpo1").load(paginaAtual);
});

function carregaPagina(url)
{
	if(parseInt($("#blocoInfos").attr("data-interruptor")) == "1")
	{
		$("#blocoInfos").css({"left":"100%", "box-shadow":"none"});
		$("#blocoInfos").attr("data-interruptor","0");
	}

	if(url != paginaAtual)
	{
		if(parseInt($("#corpo1").css("top")) == 0)
		{
			//alert("entrou com corpo1 indo esconder");
			$("#corpo2").load(url);
			$("#corpo1").css({"top":"100%","z-index":"5"});
			$("#corpo2").css({"top":"0","z-index":"7"});
		}
		else
		{
			//alert("vez do corpo2 esconder");
			$("#corpo1").load(url);
			$("#corpo2").css({"top":"100%","z-index":"5"});
			$("#corpo1").css({"top":"0","z-index":"7"});	
		}
		paginaAtual = url;
	}
}