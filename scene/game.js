let UP = false;
let DOWN = false;
let LEFT = false;
let RIGHT = false;

let cursors;

export class Game extends Phaser.Scene {

    constructor() {
        super({ key: 'game' })
    }

    preload() {
        // this.game.load.spritesheet('uniqueKey', 'img/huesos_sprite576×256.png', 256, 576);
        this.load.spritesheet('boy', 'img/huesos_sprite576×256.png', { frameWidth: 64, frameHeight: 64 }, 8);
        cursors = this.input.keyboard.createCursorKeys();
    }

    create() {
        const boy = this.add.sprite(400, 300, 'boy', 18);

        this.anims.create({
            key: 'up',
            repeat: -1,
            frameRate: 20,
            frames: this.anims.generateFrameNames('boy', { start: 1, end: 8, zeroPad: 0 })

        }
        )
        this.anims.create({
            key: 'left',
            repeat: -1,
            frameRate: 20,
            frames: this.anims.generateFrameNames('boy', { start: 10, end: 17, zeroPad: 0 })

        }
        )

        this.anims.create({
            key: 'down',
            repeat: -1,
            frameRate: 20,
            frames: this.anims.generateFrameNames('boy', { start: 19, end: 26, zeroPad: 0 })

        }
        )

        this.anims.create({
            key: 'right',
            repeat: -1,
            frameRate: 20,
            frames: this.anims.generateFrameNames('boy', { start: 28, end: 35, zeroPad: 0 })

        }
        )

        this.input.keyboard.on('keyup-D', function (event) {
            boy.anims.stop('right', true);
        });
        this.input.keyboard.on('keyup-A', function (event) {
            boy.anims.stop('left', true);

        });
        this.input.keyboard.on('keyup-S', function (event) {
            boy.anims.stop('down', true);
        });
        this.input.keyboard.on('keyup-W', function (event) {
            boy.anims.stop('up', true);

        });

        this.input.keyboard.on('keydown-A', function (event) {
            boy.anims.play('left', true);

        });

        this.input.keyboard.on('keydown-W', function (event) {
            boy.anims.play('up', true);

        });

        this.input.keyboard.on('keydown-S', function (event) {
            boy.anims.play('down', true);
        });


        this.input.keyboard.on('keydown-D', function (event) {
            boy.anims.play('right', true);
        });

    }

}