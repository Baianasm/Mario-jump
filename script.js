// Selecionando elementos visuais do jage
const mario = document.querySelector('.mario'); // Seleciona pela classe
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds'); // Selecionando elementos da Interface
const scoreDisplay= document.getElementById('score'); // Seleciona pelo 10
const restartBtn = document.getElementById('restartBtn'); // Variáveis de controle do jogo
let score = 0; // Contador de pontes
let isGameOver = false; // Estado do jogo (jogando ou não)

const jump = () => { // Só permite pular se e jogo não acabou
if (!isGameOver) { // Adiciona a classe Jump que ativa a animação CSS
mario.classList.add('jump'); // Remove a classe após 500mg (duração da animação)
setTimeout(() => {
mario.classList.remove('jump');
}, 500);
}
};
// Escuta o evento de tecla pressionada
document.addEventListener("keydown", (event) => {
// Verifica se a tecla pressionada foi a barra de espaço
if (event.code === 'Space') {
jump();
}
});
