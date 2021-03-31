let velocidad = 12;
let cursor;
let boy;

export class Game extends Phaser.Scene {

    constructor() {
        super({ key: 'game' })
    }

    preload() {
        this.load.spritesheet('boy', 'img/huesos_sprite576×256.png', { frameWidth: 64, frameHeight: 64 }, 8);
    }

    create() {
        boy = this.add.sprite(400, 300, 'boy', 18);
        cursor = this.input.keyboard.createCursorKeys();

        this.anims.create({
            key: 'up',
            repeat: -1,
            frameRate: velocidad,
            frames: this.anims.generateFrameNames('boy', { start: 1, end: 8, zeroPad: 0 })

        }
        );

        this.anims.create({
            key: 'left',
            repeat: -1,
            frameRate: velocidad,
            frames: this.anims.generateFrameNames('boy', { start: 10, end: 17, zeroPad: 0 })

        }
        );

        this.anims.create({
            key: 'down',
            repeat: -1,
            frameRate: velocidad,
            frames: this.anims.generateFrameNames('boy', { start: 19, end: 26, zeroPad: 0 })

        }
        );

        this.anims.create({
            key: 'right',
            repeat: -1,
            frameRate: velocidad,
            frames: this.anims.generateFrameNames('boy', { start: 27, end: 35, zeroPad: 0 })

        }
        );

    }

    update() {

        if (cursor.left.isDown || cursor.right.isDown || cursor.down.isDown || cursor.up.isDown) {


            if (cursor.left.isDown) {
                boy.anims.play('left', true);

            } else if (cursor.right.isDown) {
                boy.anims.play('right', true);

            }

            if (cursor.up.isDown) {
                boy.anims.play('up', true);

            } else if (cursor.down.isDown) {
                boy.anims.play('down', true);

            }

        } else {
            boy.anims.stop();
        }

    }

}