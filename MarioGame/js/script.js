const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const clouds2 = document.querySelector('.clouds2')



const jump = () =>{
    mario.classList.add('jump');    //adiciona a classe JUMP pra fazer ele pular

    setTimeout(() => {

        mario.classList.remove('jump');     //remove a classe pra ele poder pular outra vez

    }, 500)

}

const loop = setInterval(() => {
    
    const cloudsPosition = clouds.offsetLeft;
    const clouds2Position = clouds2.offsetLeft;

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')  //pega a posição do mario e converte pra numero, tira a string

    if (pipePosition <= 150 && pipePosition > 0 && marioPosition < 95   ) {              //define quando irá bater
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`           //faz o cano parar e manter onde bateu

        mario.style.animation = 'none'                  //tira a animação de pular do mario
        mario.style.bottom = `${marioPosition}px`       //faz o mario ficar onde bateu

        mario.src = 'imagens/game-over.png'          //troca a imagem/tamanho do mario
        mario.style.width = '95px'
        mario.style.marginLeft = '50px'  

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clouds2.style.animation = 'none'
        clouds2.style.left = `${clouds2Position}px`
        
        

        clearInterval(loop)                 //para o loop                  

    }

}, 10);

document.addEventListener('keydown', jump)