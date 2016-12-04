$(document).ready(function()
{
	var altura = 450;
	var largura = altura * 1.5;
    $("#FormatoCarta").css("top",(screen.height-altura)*0.4); //Posiciona a coordenada Y do meio da carta a 60% da tela
    $("#FormatoCarta").css("left",(screen.width-largura)/2); //Centraliza a coordenada X do meio da carta no meio da tela dinamicamente
    $("#FormatoCarta").css("width", largura);
    $("#FormatoCarta").css("height", altura);

    var alturaBordaAtributo = altura*0.10;
//    var larguraCaixaEsquerda = $("#ColunaEsquerda").css("width");
    $(".bordaAtr").css("width",alturaBordaAtributo);
    $(".bordaAtr").css("height",alturaBordaAtributo);
    $(".faccaoImg").css("width",altura*0.1);
});

function gerarCarta()
{
	//Coloca Tipo e Nome
	$("#LinhaNome").html("<b>"+attrTipo.value+"</b> - "+attrNome.value);

	//Coloca Custos e Facção
	$(".bytes").html(custoBytes.value+"TB");
	$(".creditos").html(custoCreditos.value+"₢");
	$(".faccao").html(attrFac.value);

	//Aloca Atributos
	$(".disparos").html(attrDis.value);
	$(".alcance").html(attrAlc.value);
	$(".escudos").html(attrEsc.value);
	$(".blindagem").html(attrBli.value);
	$(".velocidade").html(attrVel.value);
	$(".tropas").html(attrTro.value);

	//Coloca Texto
	$("#textoCarta").html(attrTxt.value);

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