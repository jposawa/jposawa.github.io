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
  var textoEscolhido = "";
  var listaEscolhas = [];
  var tituloEscolha = "";
  var numeroEscolha;
  switch(passo.length)
    {
      case 1:
        switch(passo[passo.length-1]) //Assim dá um Switch no último elemento do Array. Feito assim com o intuito de "agilizar" a criação de novas ramificações. Ou de usar esse modelo para criarem novas histórias.
          {
            case 1:
              textoEscolhido += "Em meio à meditação, imagens distantes começaram a surgir. Memórias de uma semana atrás, mas que provavelmente ficariam marcadas por muito tempo.<br><br>";
              textoEscolhido += "Um jovem rapaz sofria com brincadeiras maldosas dos guardas humanos, pelo simples fato de não ser da mesma raça que eles. Em meio à multidão, você via quando os guardas batiam no jovem de aspecto felino com o cabo de suas lanças.Havia um guarda mais jovem que nada fazia, assistindo inerte enquanto o líder daquele grupo de patrulha se aproximava para pegar no rabo do jovem faelir.<br><br>";
              textoEscolhido += "Você sabia que só te deixavam em paz, sendo um siruna, por ser um membro da Ordem Shaogu. Mas que a maioria dos guardas falava de você, o chamando de \"macaco piolhento\" como uma mancha ao templo shaogu que tinha naquela região.<br><br>";
              textoEscolhido += "Em meio a essa memória, você se lembra que...";
              
              tituloEscolha = "foiAjudar";
              listaEscolhas.push("Foi ajudar o faelir. Os guardas não deviam agir assim só por ele não ser humano");
              tituloEscolha = "naoAjudou";
              listaEscolhas.push("Não era problema seu. Virou-se para ir embora");
              tituloEscolha = "hesitou";
              listaEscolhas.push("Ficou parado observando. Não sabia se havia como ajudar");
              break;
          }
        break;
      
      case 2:
        switch(passo[passo.length-1])
          {
            case 1: //Foi lutar pra ajudar
              modificadores.ajudou = "sim";
              
              textoEscolhido += "Todos os mundanos possuem seu lugar ao mundo e você sabe disso.<br>Em um movimento rápido e contínuo, você jogou o capuz para trás e se preparou para avançar contra os soldados.<br><br>";
              textoEscolhido += "Seus reflexos o fizeram parar quando viu um jovem pular entre os guardas e o faelir.<br>Um humano? Não, você percebeu que era um meio elfo. Ele estava se saindo bem, combinando alguns movimentos com o lançamento de simples esferas de plasma.<br>";
              textoEscolhido += "No entanto cada esfera parecia queimar também a palma da mão do rapaz.<br>E então aconteceu algo que reacendeu seu ímpeto de agir:<br><br>";
              
              listaEscolhas.push("Puxar o faelir e ir com ele por um beco para fugirem da cidade");
              listaEscolhas.push("Indicar uma rota de fuga e lutar contra os guardas para o faelir fugir");
              break;
              
              case 2: //Não ajudou
              modificadores.ajudou = "nao";
              
              textoEscolhido += "Todos os mundanos possuem seu lugar ao mundo e você sabe disso.<br>Em um movimento rápido e contínuo, você jogou o capuz para trás e se preparou para avançar contra os soldados.<br><br>";
              textoEscolhido += "Seus reflexos o fizeram parar quando viu um jovem pular entre os guardas e o faelir.<br>Um humano? Não, você percebeu que era um meio elfo. Ele estava se saindo bem, combinando alguns movimentos com o lançamento de simples esferas de plasma.<br>";
              textoEscolhido += "No entanto cada esfera parecia queimar também a palma da mão do rapaz.<br>E então aconteceu algo que reacendeu seu ímpeto de agir:<br><br>";
              
              listaEscolhas.push("Puxar o faelir e ir com ele por um beco para fugirem da cidade");
              listaEscolhas.push("Deixar o lugar sem ser percebido");
              break;
              
            case 3: //Hesitou
              textoEscolhido += "A dúvida se havia algo que poderia fazer te consumia enquanto via o faelir apanhar. As pernas estavam rígidas enquanto o pensamento sobre o que deveria ou não fazer.<br>";
              textoEscolhido += "A memória muscular fez seus olhos acompanharem, antes de sua mente registrar de fato, a movimentação de um jovem que pulou no meio dos guardas.<br>";
              textoEscolhido += "Um meio elfo. Você deu um meio sorriso, pois parecia realmente apropriado que um mestiço ajudasse um mundano que não fosse humano.<br>";
              textoEscolhido += "Você deu um meio sorriso, pois parecia realmente apropriado que um mestiço ajudasse um mundano que não fosse humano.<br>"
              textoEscolhido += "Era estranho que quando o garoto usava a magia de esfera de plasma, as mãos dele também se queimavam.<br>"
              textoEscolhido += "Então aconteceu algo que te deu uma nova chance de agir:<br><br>"
              
              listaEscolhas.push("Puxar o faelir e ir com ele por um beco para fugirem da cidade");
              listaEscolhas.push("Indicar uma rota de fuga e lutar contra os guardas para o faelir fugir");
              listaEscolhas.push("Deixar o lugar sem ser percebido");
              
              break;
          }
        textoEscolhido += "Um descuido do jovem meio elfo fez com que fosse atingido no ombro esquerdo pelo corte de uma lança. Em um rápido movimento, o sargento que liderava aquela patrulha avançou com uma rápida e mortal estocada usando sua espada curta.<br><br>"
        textoEscolhido += "Você se lembra como se tivesse sentido o coração disparar. Mas na verdade isso não aconteceu, uma vez que nada se movia. Era bem nítida a imagem de como tudo parou. A angústia de mandar o corpo se mover e ele não obedecer.<br><br>"
        textoEscolhido += "Um homem encapuzado saiu do meio da multidão. Por mais que tentasse se lembrar, não conseguia discernir de onde ele saiu. Porém viu que apenas ele e o garoto meio elfo pareciam se mover, até que o encapuzado usou um cristal de teletransporte e ambos desapareceram dali.<br><br>"
        textoEscolhido += "Após o flash do teletransporte, a espada do sargento continuou seu movimento como se nada tivesse acontecido, mas sem acertar seu alvo. Por um momento as pessoas pareceram esquecer a presença do pequeno faelir ali, atônitas com o \"desaparecimento\" do garoto que o ajudou.<br><br>";
        textoEscolhido += "Nesse instante foi o momento perfeito que você usou para...";
        break;
        
      case 3:
        switch(passo[passo.length-1])
          {
            case 1:
              modificadores.ajudou = "sim";
              modificadores.inimigos = "ladrões";
              
              textoEscolhido += "Enquanto a multidão estava confusa com o súbito desaparecimento do meio elfo, você se aproximou do jovem faelir.<br>";
              textoEscolhido += "Com poucas palavras você o convenceu a te seguir e começaram a correr por um beco próximo.<br><br>";
              textoEscolhido += "Os anos de treinamento fizeram seu corpo reagir antes de sua consciência perceber o virote. Graças a isso o jovem felino foi salvo do projétil.<br>";
              textoEscolhido += "Um trio de ladrões, todos com pequenas bestas, apareceu querendo roubar os brincos dourados que o faelir usava.<br><br>";
              textoEscolhido += "Em pouco tempo, junto de seu mestre, você foi capaz de rechaçar a investida dos ladrões. Antes que outros aparecessem por ali vocês guiaram o garoto para a embaixada de Iesia, um dos principais reinos e que era controlado por um conselho de faelirs...<br><br>";
              
              listaEscolhas.push("Explicar porque salvou o garoto");
              
              break;
              
            case 2:
              if(modificadores.ajudou == "nao")
                {
                  textoEscolhido += "Pareceu que o melhor era de fato não interferir. Com o desaparecimento do garoto meio elfo, a população ficou muito confusa e aquilo foi a oportunidade perfeita para o faelir fugir.<br>";
                  textoEscolhido += "Tendo em mente que interferir poderia ser pior, você apenas se virou e seguiu com seu mestre para fora da cidade...<br><br>";
                  
                  listaEscolhas.push("Explicar porque decidiu não salvar o garoto");
                }
              else
                {
                  modificadores.ajudou = "sim";
                  modificadores.inimigos = "soldados";
                  
                  textoEscolhido += "Aproveitando a confusão das pessoas com o desaparecimento do meio elfo, você e seu mestre indicaram uma rota de fuga para o jovem faelir.<br>";
                  textoEscolhido += "Para dar uma melhor chance dele fugir, vocês ficaram a lutaram com os guardas. Diferente do meio elfo, vocês não se machucavam usando suas habilidades, além de possuírem treinamento marcial<br>";
                  textoEscolhido += "Sem muita dificuldade você e seu mestre foram capazes de derrotar os guardas da cidade. Aproveitando o alvoroço, vocês correram pelos telhados da cidade, evitando mais guardas e deixaram a cidade sem maiores problemas...<br><br>";
                  
                  listaEscolhas.push("Explicar porque salvou o garoto");
                }
              break;
              
            case 3:
              modificadores.ajudou = "nao";
              
              textoEscolhido += "Pareceu que o melhor era de fato não interferir. Com o desaparecimento do garoto meio elfo, a população ficou muito confusa e aquilo foi a oportunidade perfeita para o faelir fugir.<br>";
              textoEscolhido += "Tendo em mente que interferir poderia ser pior, você apenas se virou e seguiu com seu mestre para fora da cidade...<br><br>";
                  
              listaEscolhas.push("Explicar o que o levou a não salvar o garoto");
              break;
          }
        textoEscolhido += "Quando você voltou a si, seu mestre e o grão-mestre do templo se aproximavam.<br>";
        textoEscolhido += "O homem de meia idade parecia ter uma constituição mais frágil do que de fato possuía.<br>";
        textoEscolhido += "Sua voz calma e serena ecoou até seus ouvidos como se ele aproveitasse a brisa do lugar para levar o som.<br><br>";
        
        textoEscolhido += "- Seu mestre me contou sobre sua experiência. Sobre você ter visto o mundo completamente parado, com exceção do garoto e o indivíduo encapuzado...<br><br>";
        
        textoEscolhido += "Antes que você tentasse falar algo, ele ergueu a mão e continuou:<br><br>";
        
        textoEscolhido += "- Por isso que você resolveu ajudar o jovem faelir?<br><br>";
        
        listaEscolhas.push("Ficar calado, apenas observando os dois shaogus");
        break;
        
      case 4:
        var respostaExplicacao = "";
        
        textoEscolhido += "Com seu bastão, o grão-mestre desenhou na terra. Ele fazia sete círculos com uma linha que ligava o Primeiro ao Segundo, então o Segundo ao Terceiro e assim por diante.<br>";
        textoEscolhido += "Por um momento você achou que seria repetida a explicação básica sobre como a energia fluía por tudo. Pensou que o grão-mestre repetiria como os shaogus, diferente dos arcanistas, procuravam atuar junto ao fluxo de energia, no lugar de forçar um novo fluxo.<br>";
        textoEscolhido += "Enquanto desenhava, ele comentou:";
        
        if(modificadores.ajudou == "sim")
          {
            respostaExplicacao = "- Imagino que você saiba que isso pode fazer com que questionem o fato de termos um siruna em nosso templo...";
            listaEscolhas.push("Ignorar a ordem e avançar para ajudar o grão-mestre");
            listaEscolhas.push("Obedecer e segurar a mão de seu mestre para se teletransportarem rapidamente");
          }
        else
          {
            respostaExplicacao = "- Bem, para você ter agido assim só consigo imaginar que se preocupou com represálias contra seus irmãos shaogu...";
            listaEscolhas.push("Pedir para seu mestre o acompanhar em sua peregrinação");
            listaEscolhas.push("Insistir em ir sozinho na peregrinação...");
          }
        switch(passo[passo.length-1])
          {
            case 1:
              textoEscolhido += respostaExplicacao;
              break;
            
            case 2:
              textoEscolhido += "- Seus motivos são seus e não é obrigado compartilhar conosco. Porém somos uma família e confiança entre nós mesmos é algo importante.";
              break;
          }
        textoEscolhido += "Ele parou de desenhar e se apoiou no bastão, dando um sorriso despreocupado e continuando a falar:<br><br>";
        textoEscolhido += "- É esperado sim que você consiga adquirir sempre mais sabedoria para tomar decisões de forma independente. Como você sabe, todas nossas ações geram reações.<br><br>";
        textoEscolhido += "Ao olhar para baixo, você percebeu que o desenho não se tratava de apenas uma linha indo de um círculo ao outro, mas um emaranhado delas. A teia formada possuía linhas maiores, com mais curvas, assim como também outras mais retas e diretas.<br><br>";
        textoEscolhido += "- O Tempo também é um tipo de fluxo, meu jovem. A questão é que podemos escolher qual caminho vamos seguir... Apesar de que em alguns pontos iremos convergir para pontos determinados. Por exemplo: Todos morreremos, mas as circunstâncias podem variar...<br><br>";
        textoEscolhido += "O grão-mestre levou a mão ao ombro do jovem adulto que estava ao seu lado. O seu mestre deu um passo à frente, entregando um par de soqueiras e uma bolsa de viagem, amarrada em um bastão.<br>";
        textoEscolhido += "Imaginando que você não entenderia o que estava acontecendo, o grão-mestre resolveu explicar...<br><br>";
        if(modificadores.ajudou == "sim")
          {
            
            textoEscolhido += "Antes de conseguir explicar qualquer coisa, uma ponta de virote saiu no lado esquerdo da cintura dele.<br>";
            textoEscolhido += "Ao mesmo tempo, o sino de alarme do templo começou a ecoar...<br>"
            textoEscolhido += "Cerca de "+modificadores.qtdadeInimigos+" "+modificadores.inimigos+" começaram a avançar lentamente contra vocês.<br>";
            textoEscolhido += "Antes que seu mestre fizesse qualquer coisa, o grão-mestre jogou um cristal de teletransporte para ele.<br><br>";
            textoEscolhido += "- Eis minha última ordem: Usem esse cristal, evolua e aprenda a dominar seu dom, Hirake. Ajude a manter a paz em DraenaK...<br><br>";
          }
        else
          {
            textoEscolhido += "- De alguma forma, sua energia e seu fluxo conseguem te colocar parcialmente fora do fluxo do Tempo. Mas, pelo o que você disse, não está independente dele uma vez que você não é capaz de controlar quando isso acontece. Contudo, sua evolução pode ser a chave para que consiga ao menos manter suas capacidades físicas ainda com o Tempo parado.<br><br>";
            textoEscolhido += "O grão-mestre suspirou, entregando um tipo de pulseira com sete contas. Seis delas estavam escuras e a sétima estava clara na metade.<br><br>";
            textoEscolhido += "- Muitos podem considerar cedo, mas chegou a hora de sua peregrinação de reflexão. Equilibre seus Círculos de energia, aprenda a seguir melhor seu fluxo para poder então interagir com o fluxo de DraenaK...<br><br>";
          }
        break;
      case 5:
        if(modificadores.ajudou == "sim")
          {
            switch(passo[passo.length-1])
              {
                case 1:
                  textoEscolhido += "Quando você avançou para ajudar o grão-mestre, sua visão periférica viu quando um outro inimigo saiu do meio da floresta. Ele carregava uma balestra maior do que os demais, pronta para atirar.<br>";
                  textoEscolhido += "Devido a seu movimento brusco, o inimigo mirou contra você. O disparo teria te matado se não fosse seu rápido mestre, que se jogou na frente para receber o virote por você.<br><br>";
                  textoEscolhido += "Estado sobre seus braços, ele reuniu suas últimas energias para ativar o cristal. Sua visão ficou turva e no segundo seguinte vocês já estavam em Faljord, no pátio de um outro templo shaogu.<br>";
                  textoEscolhido += "Os membros daquele templo logo correram em sua direção em busca de socorrer seu mestre, tratar seus ferimentos e saberem o que tinha acontecido...<br><br>"
                  break;
                case 2:
                  textoEscolhido += "O grão-mestre podia parecer velho, mas na verdade era muito habilidoso e resistente. Em uma reação inesperada para os inimigos, o líder daquele templo shaogu contra-atacou com grande velocidade e precisão.<br>";
                  textoEscolhido += "Confiante de que tudo ficaria bem, você segurou a mão de seu mestre enquanto ele ativava o cristal de teletransporte.<br>";
                  textoEscolhido += "Antes do artefato ser totalmente ativado, você viu a silhueta de um inimigo sair das árvores e atirar contra o grão-mestre pelas costas. Contudo já não havia mais nada o que fazer, pois no segundo seguinte você já estava com seu mestre em Faljord, no pátio de um outro templo shaogu.<br>";
                  textoEscolhido += "Enquanto você era conduzido para um dos quartos, seu mestre foi se reunir com o grão-mestre local para reportar os últimos acontecimentos...<br><br>";
                  break;
              }
          }
        else
          {
            textoEscolhido += "Ele tocou seu ombro, com um sorriso.<br><br>";
            switch(passo[passo.length-1])
            {
              case 1:
                textoEscolhido += "- Você tem muito potencial... Agora vão para a peregrinação. Seu mestre o acompanhará em caráter especial por estar indo muito novo. Mas não deixe de procurar seu equilíbrio interior e sabedoria...<br><br>";
                textoEscolhido += "Com a bolsa presa às costas e usando o bastão que lhe foi dado, você e seu mestre começaram a caminhar para longe do templo shaogu de Lodarek. Seu mestre puxou o capuz e você imitou o movimento. O ar realmente estava úmido e não poderiam parar nem se chovesse, uma vez que seria bom chegar na próxima cidade antes do anoitecer.<br>";
                break;
              
              case 2:
                textoEscolhido += "- Sempre soube que você tem muito potencial. Mas não deixe que isso suba à sua cabeça, certo? - Ele suspirou. - Mas acredito que você realmente precisa aprender a andar sozinho...<br><br>";
                textoEscolhido += "Com a bolsa presa às costas e usando o bastão que lhe foi dado, você começou a caminhar para longe do templo shaogu de Lodarek. Você puxou o capuz para cobrir a cabeça. O ar realmente estava úmido e você não poderia parar no meio da estrada nem se chovesse, uma vez que seria bom chegar na próxima cidade antes do anoitecer.<br>";
                break;
            }
          }
        textoEscolhido += "Por um momento você se perguntou se sua decisão sobre o faelir tinha mesmo sido a mais sábia. Mas, apesar de tudo, apenas o Tempo diria isso. Sabia que tudo acontecia por algum motivo, era assim que o Fluxo funcionava.<br>";
            textoEscolhido += "Esperava poder trazer orgulho e honra para seu mestre e grão-mestre de onde cresceu. Havia decidido que usaria sua nova habilidade relacionada ao Tempo em benefício dos outros e no que dependesse de si, nenhum inocente seria ferido.<br><br>";
        
        listaEscolhas.push("Reiniciar");
        textoEscolhido += "<span id=\"fimJogo\">--- FIM PRÓLOGO ---</span>";
        break;
        
      default:
        location.reload(true);
        break;
    }
  escolhas.innerHTML = "";
  for(var i = 0; i<listaEscolhas.length;i++)
    {
      numeroEscolha = parseInt(i)+1;
      numeroEscolha = String(numeroEscolha);
      escolhas.innerHTML += "<br><p><a href=\"#escolhas\" onclick=\"executaEscolha(this,resultados)\" title=\""+tituloEscolha+"\" name=\""+numeroEscolha+"\">"+listaEscolhas[i]+"</a></p>";
    }
  return textoEscolhido;
}
