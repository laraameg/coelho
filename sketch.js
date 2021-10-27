//não se esqueçade indentar o código corretamente

var jardim,coelho, maca, folha;
var imagemdojardim,imagemdocoelho, imagemFolha, imagemMaca;

function preload(){
  imagemdojardim = loadImage("jardim.png");
  imagemdocoelho = loadImage("coelho.png");
  imagemMaca = loadImage("maca.png");
  imagemFolha = loadImage ("folha_laranja.png");
  
  //faça o carregamento da imagem de maçã ("maca.png")
  
  
  //faça o carregamento da imagem de folha laranja (folha_laranja.png)
}

function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
jardim=createSprite(200,200);
jardim.addImage(imagemdojardim);

// Criando o coelho
coelho = createSprite(180,340,30,30);
coelho.scale =0.09;
coelho.addImage(imagemdocoelho);
}


function draw() {
  background(0);
  
  bordas= createEdgeSprites();
  coelho.collide(bordas);
  
  //mova o coelho na horizontal com o mouse, usando mouseX
  coelho.x = mouseX
  
  /*
  Ao fim do código, abaixo do function draw(), crie funções que:
  - gerem maçãs
  - gerem folhas
  
  Dentro de function draw(), chame as funções criadas, de maneira aleatória, a cada 80 quadros
  
  numero aleatório (1,2)
  SE for 1 -> gerarMaca()
  SE for 2 -> gerarFolha()
  */
  gerar ();
  drawSprites();
}

function gerar (){
     if(frameCount %80 === 0){
      var num = Math.round(random(1,2));
        switch(num) {
            case 1: gerarMaca ();
                    break;
            case 2: gerarFolha ();
                    break;
    }
}
}

function gerarFolha () {
      folha = createSprite(360,0);
      folha.addImage(imagemFolha);
      folha.x = Math.round(random(20,380));
      folha.velocityY = 3;
      folha.scale = 0.1;
      folha.lifetime = 150;
}

function gerarMaca () {
    maca = createSprite(360,0);
    maca.addImage(imagemMaca);
    maca.x = Math.round(random(20,380));
    maca.velocityY = 3;
    maca.scale = 0.1;
    maca.lifetime = 150;
}
//defina aqui a função para gerar maçãs em posições X aleatórias, que se movem para baixo (lembre de adicionar a imagem de maçã)


//defina aqui a função para gerar folhas alaranjadas em posições X aleatórias, que se movem para baixo(lembre de adicionar a imagem de folha laranja)


//NÃO precisa atribuir um tempo de duração maçãs e folhas. Você aprenderá isso na próxima aula! Não se preocupe.