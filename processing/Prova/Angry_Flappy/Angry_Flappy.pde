float larguraCano = 30; //Largura em pixels
//A borda da boca será de 10 pixels a mais que a largura
float alturaInicial = random(15, 50); //Dar a altura do cano em porcentagem da tela
float alturaVariavel, dX = 7, dY, vX = 0, vY = 0;
float modAlturaInicial = 0.1;
boolean podeAtirar = true; //Assim sei se posso atirar clicando
PImage flappyAsaB, flappyAsaM, flappyAsaA;

void setup()
{
  size(800, 800);
  noStroke();
  alturaInicial = alturaInicial/100;
  alturaVariavel = alturaInicial;
  dY = (0.9-alturaInicial)*height-25;
  println(modAlturaInicial);
  //Inicializar altura
  //alturaInicial = random(20,80)/100;

  flappyAsaB = loadImage("flappyAsaBaixa.png");
  flappyAsaM = loadImage("flappyAsaMeio.png");
  flappyAsaA = loadImage("flappyAsaAlta.png");
}

void draw()
{
  //CENÁRIO\\
  background(80, 120, 250);
  fill(80, 250, 80);
  rect(0, 0.8*height, width, 0.2*height);
  //CENÁRIO\\

  //O meu chão do cenário está a 80% da altura. Logo sobram 20%.
  //Para o cano ficar no meio do chão, ele tem que pegar a metade da "altura" do chão
  //Ou seja, efetivamente, se meu chão está a 80%, os canos devem terminar a altura em 90%

  //DESENHA CANOS\\
  //Cano jogador
  desenhaCano(larguraCano/2-10, (0.9-alturaInicial)*height, larguraCano, alturaInicial*height);

  //Cano alvo
  alturaVariavel += modAlturaInicial/100;
  desenhaCano(width/2-larguraCano/2, (0.9-alturaVariavel)*height, larguraCano, alturaVariavel*height);

  if (alturaVariavel >= (1.5*alturaInicial) || alturaVariavel <= alturaInicial)
    modAlturaInicial = -modAlturaInicial;

  //DESENHA CANOS\\

  //DESENHA ANGRY FLAPPY\\
  fill(50, 200, 200);
  image(flappyAsaM, dX, dY);
  dX += vX;
  
  if(dX+7 >= (width/2-larguraCano/2-5) && dX+7 <= (width/2+larguraCano/2+5))// && dY >= ((0.9-alturaVariavel)*height))
  {
    background(0);
    text("DERROTA",width/2,height/2);
    stop();
  }
  else if(dX+7 >= (width))
  {
    background(0);
    text("VITÓRIA",width/2,height/2);
    stop();
  }

  //DESENHA ANGRY FLAPPY\\
}

void desenhaCano(float x, float y, float largura, float altura)
{
  fill(150, 80, 10);
  rect(x, y, largura, altura);
  rect(x-5, y, largura+10, 0.5*larguraCano);
}

void mousePressed()
{
  if (podeAtirar && (mouseX != 0 || mouseY !=0))
  {
    vX = abs(width/2-mouseX)/100;
    vY = abs(height/2-mouseY)/100;
    println("vX = "+vX);
    println("vY = "+vY);

    podeAtirar = false;
  }
}

void movimentoObliquo()
{
}