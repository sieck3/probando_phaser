 import { Game } from '/scene/game.js'
 
const config = {
    /* Seleccionar Canvas o Web gl*/
    type: Phaser.AUTO,
    width: 1920 ,
    height: 1080,
    scene: [Game],
    pixelArt: true,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y: 200 },
            debug: true
        }
    }
    // physics: {
    //     default: 'game',
    //     arcade: {
    //         // gravity: { y: 400 },
    //         debug: false
    //     }
    // }
};

let game = new Phaser.Game(config);