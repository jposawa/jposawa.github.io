//IMPORTANTE: Por algum motivo em Algumas execuções o gráfico não reseta direito. Ainda não identifiquei o bug, mas é só executar de novo do 0 que funciona

/*
===RACIOCÍNIO===
 Vai de 0 a 200 variando de 5 em 5. Logo são 40 variações
 360 / 40 = 9
 Logo varia de 9 em 9 graus.
 Mas não vai até 360, logo só temos até 
 
 A cor vai mudar apenas na saturação, ficando sempre na matiz vermelha e brilho máximo.
===RACIOCÍNIO===
 */
int variaCor = 0; //Vai variar a saturação começando de 0 pra ficar branco

float x, y, x_anterior, y_anterior = 150, velocidade = 0;

boolean acelerando = false;

void setup()
{
  size(800, 600);
  background(0);
  colorMode(HSB, 1);
  noFill();
  stroke(0,0,1);
  rect(width*0.2, 0, width*0.6, height/2-140);
  
  text("0 km/h",width*0.15,height/2-140);
  text("200 km/h",width*0.13,20);
}

void draw()
{
  if (acelerando)
  {
    if (velocidade < 270)
      velocidade += 1;
  } else
  {
    if (velocidade > 0)
      velocidade -= 1;
  }
  fill(0);
  
  grafico();
  noStroke();
  fill(0);
  rect(0, height*0.5-120, width, height); //Assim a parte do velocímetro é sempre "resetada" mantendo o desenho ok enquanto a parte do gráfico pode ser feita a linha
  stroke(0, velocidade/270, 1);
  noFill();
  baseVelocimetro();
  ponteiroVelocimetro(85, velocidade);
  fill(0,velocidade/270,1);
  text(int(velocidade/270*200)+" km/h", width*0.5-15,height*0.6);
  println(x);
}

void baseVelocimetro()
{
  arc(float(width)*0.5, float(height)*0.5, 80, 80, radians(135), radians(360+45), OPEN); //Arco menor
  arc(float(width)*0.5, float(height)*0.5, 160, 160, radians(135), radians(360+45), OPEN); //Arco maior
  
  detalhesVelocimetro(10,0);
  //detalhesVelocimetro(10,270);
}

void detalhesVelocimetro(float comprimento, float ang)
{
  float x = comprimento * cos(radians(ang-225));
  float y = comprimento * sin(radians(ang-225));
  
  line(width+x-10,height+y+10,width+x, height+y);
}

void ponteiroVelocimetro(float comprimento, float ang)
{
  float x = comprimento * cos(radians(ang-225));
  float y = comprimento * sin(radians(ang-225));

  line(width*0.5, height*0.5, width*0.5+x, height*0.5+y);
}

void grafico()
{
  float margemLados = width/5;
  
  x = millis()/100; //"DeltaTempo" do gráfico. Quando menor a divisão mais rápido ele vai para direita
  x %= width-2*margemLados; //Pega o resto da divisão do x pela largura, fazendo ele voltar para a borda esquerda ao atingir a direita
  stroke(0,0,1);
  if (x <= 5)
  {
    rect(width*0.2, 0, width*0.6, height*0.5-140);
    x_anterior = 0;
  }
  
  //if(x > width)
  //x
  y = 150 - velocidade/2;     
  if (millis() > 1)         
    line(x+margemLados, y, x_anterior+margemLados, y_anterior);
  noStroke();
  fill(0);
  rect(width*0.81,0,width*0.39,height*0.5-140);
  fill(0,0,1);
  text(int(velocidade/270*200)+"km/h",width*0.81,y);
  x_anterior = x;     
  y_anterior = y;
}

void mousePressed()
{
  acelerando = true;
}

void mouseReleased()
{
  acelerando = false;
}