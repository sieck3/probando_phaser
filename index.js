 import { Game } from '/scene/game.js'
 
const config = {
    /* Seleccionar Canvas o Web gl*/
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    scene: [Game],
    pixelArt: true,
    backgroundColor: '#ffffff'
    // physics: {
    //     default: 'game',
    //     arcade: {
    //         // gravity: { y: 400 },
    //         debug: false
    //     }
    // }
};

let game = new Phaser.Game(config);