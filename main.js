bullets = [];
enemies = [];
score = 0;


function preload() {
    img = loadImage("enemy.png");
    explo = loadImage("explosive.png")
}


function setup() {
    canvas = createCanvas(900, 600);
    background(0);
    canvas.center();
    for (i = 0; i < 7; i++) {
        var enemy = {
            x: random(0, 900),
            y: random(-800, 0)

        }
        enemies.push(enemy);

    }

}

function mousePressed() {
    var bullet = {
        x: mouseX,
        y: 550
    }
    bullets.push(bullet);
}
circley = 550;
function draw() {
    background(0);
    stroke(255);
    fill(255);

    circle(mouseX, circley, 50);
    for (var bullet of bullets) {
        bullet.y = bullet.y - 4;
        stroke("red");
        fill("red");
        circle(bullet.x, bullet.y, 10)

    }

    for (var enemy of enemies) {
        enemy.y = enemy.y + 2;
        image(img, enemy.x, enemy.y, 20, 20)
    }

    for (var enemy of enemies) {
        for (var bullet of bullets) {
            if (dist(bullet.x, bullet.y, enemy.x, enemy.y) < 20) {
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                image(explo, bullet.x, bullet.y, 20, 20);
                background("purple");
                enemies.splice(enemies.indexOf(enemy), 1);
                score = score + 1;
                bullets.splice(bullets.indexOf(bullet), 1);
                document.getElementById("score").innerHTML = "Score: " + score


                var newenemy = {
                    x: random(0, 900),
                    y: random(-800, 0)

                }
                enemies.push(newenemy);

            }


        }
    }

    for (var enemy of enemies) {
        if (dist(mouseX, circley, enemy.x, enemy.y) < 20) {
            fill("red");
            stroke("red");
            textSize(50);
            text("YOU DIED", 350, 300);
            noLoop();

        }

    }

}