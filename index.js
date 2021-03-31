 import { Game } from '/scene/game.js'
 
const config = {
    /* Seleccionar Canvas o Web gl*/
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Game],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false
        }
    }
};

let game = new Phaser.Game(config);