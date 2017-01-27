/*
//Um exemplo de object, que você pode criar atributos para serem alterados no decorrer da história, ajudando a filtrar opções que serão exibidas ou seus resultados.
var modificadores = {ajudou:"", inimigos:"none", qtdadeInimigos:5};

function dadosHistoria() //Função com informações básicas do jogo
{
  titulo.innerHTML = "DraenaK Paragons"; //Título do jogo
  subtitulo.innerHTML = "Moldando o Fluxo"; //Subtitulo do jogo

  autor.href = "https://www.facebook.com/jp.osawa"; //Link para alguma página do autor
  autor.innerHTML += "João Pedro Osawa"; //Nome do autor que vai aparecer após "Autor:"

  logo.src = "https://media.textadventures.co.uk/coverart/3caade1f-2f0d-4c08-b40a-15b24c4ff964%20cover.png"; //Link da imagem para ser usada como logo
}

function historia(escolha, passo)
{
//Função que vai controlar os textos que serão enviados para a função de lógica principal
  var textoEscolhido = ""; //Inicializa essa variável como uma String vazia sempre que essa função é chamada
  var listaEscolhas = []; //Inicializa a lista de Escolhas como um Array vazio para que possam ser adicionadas as opções atuais
  var tituloEscolha = ""; //Uma variável "opcional" que pode ser usada para dar título às escolhas. Ela, além de dar título para o link, pode servir para outros fins caso queira.
  var numeroEscolha; //Inicialização da variável que será usada para passar o número real da escolha.
  
  switch(passo.length) //Um tipo de contador de passos que foram dados na história. Ou seja, é pego o tamanho do array criado na página de lógica, que determina quantas escolhas o jogador já fez.
    {
      case 1:
        switch(passo[passo.length-1]) //Assim dá um Switch no último elemento do Array. Feito assim com o intuito de "agilizar" a criação de novas ramificações. Ou de usar esse modelo para criarem novas histórias.
          {
            case 1:
              textoEscolhido += "Em meio à meditação, imagens distantes começaram a surgir. Memórias de uma semana atrás, mas que provavelmente ficariam marcadas por muito tempo.<br><br>";
              textoEscolhido += "Um jovem rapaz sofria com brincadeiras maldosas dos guardas humanos, pelo simples fato de não ser da mesma raça que eles. Em meio à multidão, você via quando os guardas batiam no jovem de aspecto felino com o cabo de suas lanças.Havia um guarda mais jovem que nada fazia, assistindo inerte enquanto o líder daquele grupo de patrulha se aproximava para pegar no rabo do jovem faelir.<br><br>";
              textoEscolhido += "Você sabia que só te deixavam em paz, sendo um siruna, por ser um membro da Ordem Shaogu. Mas que a maioria dos guardas falava de você, o chamando de \"macaco piolhento\" como uma mancha ao templo shaogu que tinha naquela região.<br><br>";
              textoEscolhido += "Em meio a essa memória, você se lembra que...";
              
              tituloEscolha = "foiAjudar"; //Uma forma de dar um título para sua escolha.
              //Assim, com o push(), é adicionada de forma ordenada os textos das opções apresentadas ao jogador já com um índice.
              listaEscolhas.push("Foi ajudar o faelir. Os guardas não deviam agir assim só por ele não ser humano");
              tituloEscolha = "naoAjudou";
              listaEscolhas.push("Não era problema seu. Virou-se para ir embora");
              tituloEscolha = "hesitou";
              listaEscolhas.push("Ficou parado observando. Não sabia se havia como ajudar");
              break;
          }
        break;
    }
  escolhas.innerHTML = ""; //Apagando o texto das escolhas atualmente antes de poder, então, reescrever com as novas opções que devem ser apresentadas.
  
  for(var i = 0; i<listaEscolhas.length;i++) //É pego o array de escolhas que você utilizou, os escrevendo na página de exibição.
    {
      numeroEscolha = parseInt(i)+1;
      numeroEscolha = String(numeroEscolha);
      escolhas.innerHTML += "<br><p><a href=\"#escolhas\" onclick=\"executaEscolha(this,resultados)\" title=\""+tituloEscolha+"\" name=\""+numeroEscolha+"\">"+listaEscolhas[i]+"</a></p>";
    }
    
  return textoEscolhido; //Retorna à função original, todo texto que foi organizado para que ele seja escrito pela função principal na tela de exibição
}*/
