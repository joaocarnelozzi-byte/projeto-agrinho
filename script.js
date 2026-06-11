let score = 0;
let items = [];

function setup() {
    // Cria a área de desenho dentro da div [16, 17]
    let canvas = createCanvas(600, 400);
    canvas.parent('game-container');
}

function draw() {
    background('#dcfce7'); // Cor da grama
    
    // Gerar itens de sustentabilidade aleatoriamente [8, 15]
    if (frameCount % 60 === 0) {
        items.push({
            x: random(width),
            y: random(height),
            size: 30,
            type: random(['🌱', '⚙️', '☀️']) // Semente, Tecnologia, Energia Solar
        });
    }

    // Desenhar itens na tela [17, 18]
    for (let i = items.length - 1; i >= 0; i--) {
        textSize(items[i].size);
        text(items[i].type, items[i].x, items[i].y);
        
        // Lógica de coleta com o mouse [15, 19]
        if (mouseIsPressed && dist(mouseX, mouseY, items[i].x, items[i].y) < 30) {
            items.splice(i, 1);
            score += 10;
            document.getElementById('score').innerText = score;
        }
    }
}
