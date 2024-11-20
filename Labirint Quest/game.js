// Riferimenti agli elementi
const videoContainer = document.getElementById('video-container');
const gameContainer = document.getElementById('game-container');
const introVideo = document.getElementById('intro-video');
const maze = document.getElementById('maze');

    let playerPosition = { x: 0, y: 1 };

    const walls = [
    { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 8, y: 1 }, { x: 9, y: 1 },
  { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, 
  { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 }, { x: 1, y: 7 },
  { x: 1, y: 8 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 9 }, { x: 3, y: 8 },
  { x: 3, y: 7 }, { x: 3, y: 6 }, { x: 3, y: 5 }, { x: 4, y: 3 }, { x: 5, y: 3 },
  { x: 6, y: 3 }, { x: 10, y: 1 }, { x: 11, y: 1 }, { x: 6, y: 4 }, { x: 6, y: 5 },
  { x: 5, y: 5 }, { x: 4, y: 7 }, { x: 6, y: 6 }, { x: 6, y: 7 }, { x: 6, y: 8 },
  { x: 6, y: 9 }, { x: 5, y: 9 }, { x: 5, y: 10 }, { x: 5, y: 11 }, { x: 4, y: 11 },
  { x: 3, y: 11 }, { x: 2, y: 11 }, { x: 1, y: 11 }, { x: 0, y: 11 }, { x: 8, y: 3 },
  { x: 8, y: 4 }, { x: 8, y: 5 }, { x: 8, y: 6 }, { x: 8, y: 7 }, { x: 8, y: 8 },
  { x: 6, y: 11 }, { x: 7, y: 11 }, { x: 8, y: 11 }, { x: 9, y: 11 }, { x: 8, y: 9 },
  { x: 8, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 9 }, { x: 11, y: 9 }, { x: 12, y: 9 },
  { x: 12, y: 10 }, { x: 12, y: 11 }, { x: 12, y: 12 }, { x: 12, y: 13 }, { x: 11, y: 13 },
  { x: 10, y: 13 }, { x: 9, y: 13 }, { x: 8, y: 13 }, { x: 7, y: 13 }, { x: 6, y: 13 },
  { x: 5, y: 13 }, { x: 4, y: 13 }, { x: 3, y: 13 }, { x: 2, y: 13 }, { x: 1, y: 13 },
  { x: 1, y: 14 }, { x: 1, y: 15 }, { x: 1, y: 16 }, { x: 1, y: 17 }, { x: 1, y: 18 },
  { x: 2, y: 18 }, { x: 3, y: 18 }, { x: 4, y: 18 }, { x: 5, y: 18 }, { x: 6, y: 18 },
  { x: 4, y: 14 }, { x: 4, y: 15 }, { x: 3, y: 15 }, { x: 3, y: 16 }, { x: 6, y: 17 },
  { x: 6, y: 16 }, { x: 6, y: 15 }, { x: 7, y: 15 }, { x: 8, y: 15 }, { x: 9, y: 15 },
  { x: 9, y: 16 }, { x: 9, y: 17 }, { x: 10, y: 17 }, { x: 11, y: 17 }, { x: 11, y: 18 },
  { x: 11, y: 19 }, { x: 10, y: 8 }, { x: 10, y: 7 }, { x: 10, y: 6 }, { x: 11, y: 6 },
  { x: 12, y: 6 }, { x: 13, y: 6 }, { x: 14, y: 6 }, { x: 15, y: 6 }, { x: 15, y: 7 },
  { x: 15, y: 8 }, { x: 15, y: 9 }, { x: 15, y: 5 }, { x: 15, y: 4 }, { x: 15, y: 3 },
  { x: 16, y: 3 }, { x: 10, y: 2 }, { x: 10, y: 3 }, { x: 10, y: 4 }, { x: 9, y: 4 },
  { x: 8, y: 17 }, { x: 12, y: 1 }, { x: 13, y: 1 }, { x: 14, y: 1 }, { x: 15, y: 1 },
  { x: 16, y: 1 }, { x: 17, y: 1 }, { x: 18, y: 1 }, { x: 18, y: 2 }, { x: 18, y: 3 },
  { x: 18, y: 4 }, { x: 18, y: 5 }, { x: 17, y: 5 }, { x: 18, y: 6 }, { x: 18, y: 7 },
  { x: 16, y: 7 }, { x: 18, y: 8 }, { x: 18, y: 9 }, { x: 17, y: 9 }, { x: 13, y: 2 },
  { x: 13, y: 3 }, { x: 13, y: 4 }, { x: 12, y: 4 }, { x: 11, y: 2 }, { x: 18, y: 10 },
  { x: 18, y: 11 }, { x: 17, y: 11 }, { x: 16, y: 11 }, { x: 15, y: 11 }, { x: 14, y: 11 },
  { x: 14, y: 9 }, { x: 12, y: 8 }, { x: 14, y: 12 }, { x: 14, y: 13 }, { x: 15, y: 13 },
  { x: 16, y: 13 }, { x: 17, y: 13 }, { x: 11, y: 15 }, { x: 12, y: 15 }, { x: 13, y: 15 },
  { x: 14, y: 15 }, { x: 15, y: 15 }, { x: 16, y: 15 }, { x: 17, y: 15 }, { x: 18, y: 15 },
  { x: 18, y: 14 }, { x: 18, y: 13 }, { x: 13, y: 16 }, { x: 13, y: 17 }, { x: 13, y: 18 },
  { x: 14, y: 18 }, { x: 15, y: 18 }, { x: 15, y: 17 }, { x: 16, y: 18 }, { x: 17, y: 16 },
  { x: 17, y: 18 }, { x: 18, y: 18 }
    ];

    const doors = [
        { x: 2, y: 8, question: 'Qual è 2 + 2?', answer: '4' },
        { x: 8, y: 16, question: 'Qual è la capitale della Francia?', answer: 'Parigi' },
        { x: 11, y: 8, question: 'Qual è la capitale della Francia?', answer: 'Parigi' }
    ];

    const exit = { x: 10, y: 19 };
const cellSize = 20; // Dimensione di ogni cella

// Funzione per avviare il video
function startIntroVideo() {
    introVideo.play();
    introVideo.onended = () => {
        videoContainer.style.display = 'none';
        gameContainer.style.display = 'flex';
        startGame();
    };
}

// Funzione per iniziare il gioco
function startGame() {
    drawMaze();
    document.addEventListener('keydown', handlePlayerMovement);
}

// Funzione per disegnare il labirinto
function drawMaze() {
    maze.innerHTML = ''; // Pulisci il labirinto

    // Aggiungi muri al labirinto
    walls.forEach(wall => {
        const wallElement = document.createElement('div');
        wallElement.classList.add('wall');
        wallElement.style.left = `${wall.x * cellSize}px`;
        wallElement.style.top = `${wall.y * cellSize}px`;
        maze.appendChild(wallElement);
    });

    // Disegna il giocatore
    const playerElement = document.createElement('div');
    playerElement.id = 'player';
    playerElement.classList.add('player');
    playerElement.style.left = `${playerPosition.x * cellSize}px`;
    playerElement.style.top = `${playerPosition.y * cellSize}px`;
    maze.appendChild(playerElement);
}

// Funzione per controllare se una cella è occupata da un muro
function isWall(x, y) {
    return walls.some(wall => wall.x === x && wall.y === y);
}

// Gestire il movimento del giocatore
function handlePlayerMovement(event) {
    const newPosition = { ...playerPosition };

    if (event.key === 'ArrowUp') {
        newPosition.y -= 1;
    } else if (event.key === 'ArrowDown') {
        newPosition.y += 1;
    } else if (event.key === 'ArrowLeft') {
        newPosition.x -= 1;
    } else if (event.key === 'ArrowRight') {
        newPosition.x += 1;
    }

    // Controlla i bordi e i muri
    if (
        newPosition.x >= 0 && newPosition.y >= 0 &&
        newPosition.x < maze.offsetWidth / cellSize &&
        newPosition.y < maze.offsetHeight / cellSize &&
        !isWall(newPosition.x, newPosition.y)
    ) {
        playerPosition = newPosition;
    }

    drawMaze(); // Aggiorna il labirinto
}

// Avvio del video di introduzione al caricamento della pagina
window.onload = startIntroVideo;
