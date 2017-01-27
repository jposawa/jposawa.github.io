var passos = []; //O tamanho do vetor me informa quantos "passos" foram dados, e seus valores me dizem qual escolha de cada passo.

function executaEscolha(escolha, campoResultado)
{
  //alert("entrou");
  passos.push(parseInt(escolha.name)); //Adiciona no vetor qual o número da escolha atual
  //alert(escolha.innerHTML);
  //var tituloResultado = escolha.innerHTML;
  //resultado.innerHTML += "<br><p><b>"+escolha.innerHTML+"</b><br>Teste danadão</p>";
  var textoResultado = "<br><p id=\"resultado\"><span>"+escolha.innerHTML+"</span><br>";
  textoResultado += historia(escolha, passos);
  textoResultado += "</p>";
  campoResultado.innerHTML += textoResultado;
  window.scrollBy(0,1000);
}