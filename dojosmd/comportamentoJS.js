var paginaAtual, paginaAnterior;
$(document).ready(function()
{
	//PÁGINA INICIAL
	$("#corpo1").load("inicio.html");
	paginaAtual = "inicio.html";
	destacaPagina(paginaAtual.slice(0,paginaAtual.length-5)) //CHAMANDO FUNÇÃO COM O NOME RETIRANDO OS 5 CARACTERES FINAIS DA STRING (QUE NESSE CASO É ".HTML")
})

function destacaPagina(pagina,anterior)
{
	$("."+pagina).css //MARCA NO MENU A PÁGINA ATUAL
	({
		"background":"#111",
		"padding-left":"0.7rem"
	});
	if(screen.width >= 800)
		$("."+pagina).css("box-shadow","0 0 0.1rem 0.05rem #333");

	$("."+anterior).css //DESMARCA A PÁGINA ANTERIOR NO MENU
	({
		"background":"",
		"box-shadow":"",
		"padding-left":""
	});
}

function carregaPagina(nomePagina,linkPassado)
{
	linkPassado = parseInt(linkPassado);
	switch(linkPassado)
	{
		case 1: //LINK PASSADO DIRETAMENTE NA FUNÇÃO
			var url = nomePagina;
			break;

		default: //LINK NÃO É PASSADO DIRETAMENTE, PEGA DA CLASSE
			var url = $(nomePagina).attr("class") + ".html";
			break;
	}

	/*if(parseInt($("#blocoInfos").attr("data-interruptor")) == "1")
	{
		$("#blocoInfos").css({"left":"100%", "box-shadow":"none"});
		$("#blocoInfos").attr("data-interruptor","0");
	}*/

	switchBloco(0);

	if(url != paginaAtual)
	{
		if(screen.width < 800) //TELA MOBILE
		{
			if(parseInt($("#corpo1").css("left")) == screen.width)
			{
				$("#corpo1").load(url);
				$("#corpo1").scrollTop(0);
				$("#corpo2").css({"left":"100%","z-index":"5"});
				$("#corpo1").css({"left":"10%","z-index":"6"});
			}
			else
			{
				$("#corpo2").load(url);
				$("#corpo2").scrollTop(0);
				$("#corpo1").css({"left":"100%","z-index":"5"});
				$("#corpo2").css({"left":"10%","z-index":"6"});	
			}
		}
		else //TELA DESKTOP
		{
			if(parseInt($("#corpo1").css("right")) == 0)
			{
				$("#corpo2").load(url);
				$("#corpo2").scrollTop(0);
				$("#corpo1").css({"right":"100%","z-index":"5"});
				$("#corpo2").css({"right":"0","z-index":"6"});
			}
			else
			{
				$("#corpo1").load(url);
				$("#corpo1").scrollTop(0);
				$("#corpo2").css({"right":"100%","z-index":"5"});
				$("#corpo1").css({"right":"0","z-index":"6"});	
			}
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

function switchBloco(alvo,paginaExtra)
{
	var numBloco = parseInt(alvo);
	var interruptor;
	var estadoInterruptor;

	switch(numBloco)
	{
		case 0: //FECHA BLOCOINFOS E MENU LATERAL
			interruptor = document.getElementById("blocoInfos");
			$(interruptor).css("right","-90%");
			$(interruptor).css("box-shadow","none");
			interruptor.setAttribute("data-interruptor","0");

			if(screen.width < 800)
			{
				interruptor = document.getElementById("chamaMenu");
				$("#chamaMenu").html("&#9776;");

				$("#chamaMenu").css
				({
					"right":"-2rem",
					"background":"#555",
					"color":"#eee",
					/*"background-image":"url('imgs/logo2.png')",
					"background-repeat":"no-repeat",
					"background-size":"contain"*/
				});

				$("#menuPrincipal").css
				({
					"left":"-50%"
				});

				interruptor.setAttribute("data-interruptor","0");
			}
		break;

		case 1: //BLOCOINFOS COM DADOS DE CONTATOS
			switchBloco(0);

			interruptor = document.getElementById("blocoInfos");
			estadoInterruptor = parseInt(interruptor.getAttribute("data-interruptor"));
			$("#corpoInfos").load(paginaExtra);
			$("#corpoInfos").scrollTop(0);

			if(estadoInterruptor == 0)
			{
				$(interruptor).css("right","0");
				$(interruptor).css("box-shadow","0 0 0.2rem 0.2rem #222");
				interruptor.setAttribute("data-interruptor","1");
			}
		break;

		case 2:

			if(screen.width < 800)
			{
				interruptor = document.getElementById("chamaMenu");
				estadoInterruptor = parseInt(interruptor.getAttribute("data-interruptor"));

				if(estadoInterruptor == 0)
				{
					$("#chamaMenu").html("&times;");

					$("#chamaMenu").css
					({
						"right":"0",
						"background":"#ff0",
						"color":"#555",
						"background-image":"none"
					});

					$("#menuPrincipal").css
					({
						"left":"0"
					});

					interruptor.setAttribute("data-interruptor","1");
				}
				else
				{
					switchBloco(0);

					/*$("#chamaMenu").html("&#9776;");

					$("#chamaMenu").css
					({
						"right":"-2rem",
						"background":"#555",
						"color":"#eee",
						/*"background-image":"url('imgs/logo2.png')",
						"background-repeat":"no-repeat",
						"background-size":"contain"*
					});

					$("#menuPrincipal").css
					({
						"left":"-50%"
					});

					interruptor.setAttribute("data-interruptor","0");*/
				}
			}
		break;
	}
}