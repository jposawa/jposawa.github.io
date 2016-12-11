$(document).ready(function()
{
	var largura = parseInt($("#FormatoCarta").css("width"));
	alert(largura);
	var altura = largura * 1.5;
    $("#FormatoCarta").css("top",(screen.height-altura)*0.3); //Posiciona a coordenada Y do meio da carta a 30% da tela
    $("#FormatoCarta").css("left",(screen.width-largura)/2); //Centraliza a coordenada X do meio da carta no meio da tela dinamicamente
    $("#FormatoCarta").css("width", largura);
    $("#FormatoCarta").css("height", altura);
    $("#FormatoCarta br").css("line-height",altura*0.006);

    var alturaBordaAtributo = altura*0.10;
//    var larguraCaixaEsquerda = $("#ColunaEsquerda").css("width");
    $(".bordaAtr").css("width",alturaBordaAtributo);
    $(".bordaAtr").css("height",alturaBordaAtributo);
    $(".faccaoImg").css("width",altura*0.1);
});

function gerarCarta()
{
	if(attrTipo.value == "" || attrTipo.value == null)
	{
		alert("Faltou selecionar tipo de carta");
		attrTipo.focus();
		return false;
	}
	else if (custoBytes.value == "" || custoBytes.value == null)
	{
		alert("Faltou definir custo de Frequência da carta");
		custoBytes.focus();
		return false;
	}
	else if(attrNome.value == "" || attrNome.value == null)
	{
		alert("Faltou definir o nome da carta");
		attrNome.focus();
		return false;
	}
	else if(custoCreditos.value == "" || custoCreditos.value == null)
	{
		alert("Faltou definir o custo de Créditos da carta");
		custoCreditos.focus();
		return false;
	}
	else if(attrFac.value == "" || attrFac.value == null)
	{
		alert("Faltou selecionar a facção da carta");
		attrFac.focus();
		return false;
	}
	else if(attrDis.value == "" || attrDis.value == null)
	{
		alert("Faltou definir o número de Disparos da carta");
		attrDis.focus();
		return false;
	}
	else if(attrAlc.value == "" || attrAlc.value == null)
	{
		alert("Faltou selecionar o Alcance da carta");
		attrAlc.focus();
		return false;
	}
	else if(attrEsc.value == "" || attrEsc.value == null)
	{
		alert("Faltou selecionar tipo de carta");
		attrEsc.focus();
		return false;
	}
	else if(attrBli.value == "" || attrBli.value == null)
	{
		alert("Faltou definir a Blindagem da carta");
		attrBli.focus();
		return false;
	}
	else if(attrVel.value == "" || attrVel.value == null)
	{
		alert("Faltou definir a Velocidade da carta");
		attrVel.focus();
		return false;
	}
	else if(attrTro.value == "" || attrTro.value == null)
	{
		alert("Faltou definir o número de Tropas da carta");
		attrTro.focus();
		return false;
	}
	else if(attrTxt.value == "" || attrTxt.value == null)
	{
		alert("Faltou definir o Texto da carta");
		attrTxt.focus();
		return false;
	}
	else if(linkImagem.value == "" || linkImagem.value == null)
	{
		alert("Faltou adicionar URL para imagem da carta");
		linkImagem.focus();
		return false;
	}
	//Coloca Tipo e Nome
	$("#LinhaNome").html("<b>"+attrTipo.value+"</b> - "+attrNome.value);

	//Coloca Custos e Facção
	if(custoBytes.value < 1)
	{
		$(".bytes").html("X")
	}
	else
	{
		$(".bytes").html(custoBytes.value+" THz");
	}

	if(custoCreditos.value < 1)
	{
		$(".creditos").html("X")
	}
	else
	{
		$(".creditos").html(custoCreditos.value+"₢");
	}

	var numFaccao = parseInt(attrFac.value);
	//alert(numFaccao);

	$(".faccao").html("");
	switch(numFaccao)
	{

		/*
		<option value="2">Conglomerado Independente (CI)</option>
			<option value="1">Organização Terráquea Unificada (OTU)</option>
			<option value="3">OTU/CI</option>
			<option value="4">Davok</option>
			<option value="5">Concílio Nayan</option>
			<option value="6">Mercenário Livre</option>
		*/

		case 1: //Organização Terráquea Unida
			//alert(numFaccao);
			$(".faccao").css("background", "url('https://raw.githubusercontent.com/jposawa/jposawa.github.io/master/space-clash/imgs/OTU.png') no-repeat");		
			break;

		case 2: //Conglomerado Independente
			$(".faccao").css("background", "url('https://raw.githubusercontent.com/jposawa/jposawa.github.io/master/space-clash/imgs/CI.png') no-repeat");
			break;

		case 3: //Organização Terráquea Unida ou Conglomerado Independente
			//alert(numFaccao);
			$(".faccao").css("background", "url('https://raw.githubusercontent.com/jposawa/jposawa.github.io/master/space-clash/imgs/OTU-CI.png') no-repeat");		
			break;

		case 4: //Davok
			//alert(numFaccao);
			$(".faccao").css("background", "url('https://raw.githubusercontent.com/jposawa/jposawa.github.io/master/space-clash/imgs/Davok.png') no-repeat");		
			break;

		case 5: //Nayan
			//alert(numFaccao);
			$(".faccao").css("background", "url('https://raw.githubusercontent.com/jposawa/jposawa.github.io/master/space-clash/imgs/Nayan.png') no-repeat");		
			break;

		case 6: //Organização Terráquea Unida
			//alert(numFaccao);
			$(".faccao").css("background", "url('https://raw.githubusercontent.com/jposawa/jposawa.github.io/master/space-clash/imgs/Mercenarios.png') no-repeat");		
			break;

	}
	$(".faccao").css("background-size", "contain");
	$(".faccao").css("background-position", "center");

	//Aloca Atributos
	$(".disparos").html(attrDis.value);
	$(".alcance").html(attrAlc.value);
	$(".escudos").html(attrEsc.value);
	$(".blindagem").html(attrBli.value);
	$(".velocidade").html(attrVel.value);
	$(".tropas").html(attrTro.value);

	//Coloca Texto
	$("#textoCarta").html(attrTxt.value.replace("\n","<br>"));

	//Coloca Imagem
	imagemCarta.src = linkImagem.value;
}

function switchTexto(x)
{
	if(janelaTexto.style.height == 0 || janelaTexto.style.height == "0px")
	{
		janelaTexto.style.height = "10rem";
		x.innerHTML = "&#215;";
	}
	else
	{
		janelaTexto.style.height = 0;
		x.innerHTML = "Instruções";
	}
}