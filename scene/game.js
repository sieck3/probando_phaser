let velocidad = 2;
let frameVelocidad = 16

let cursor;
let boy;
let bg;

function limit(x, y, height, width) {
    let value;
    if (x < height) {
        value = true;
    } else {
        value = false;
    }
    return value;
}

export class Game extends Phaser.Scene {

    constructor() {
        super({ key: 'game' })
    }

    preload() {
        this.load.spritesheet('skeleton', 'img/huesos_sprite576×256.png', { frameWidth: 64, frameHeight: 64 }, 8);
        this.load.image('background', 'img/fondo.png');

    }

    create() {
        this.cameras.main.setBounds(0, 0, 1205, 1205);
        bg = this.add.image(0, 0, 'background').setOrigin(0);
        boy = this.add.sprite(400, 300 * 2, 'skeleton', 18);

        cursor = this.input.keyboard.createCursorKeys();
        boy.scaleX = 2;
        boy.scaleY = 2;

        this.cameras.main.startFollow(boy, true);

        this.anims.create({
            key: 'up',
            repeat: -1,
            frameRate: frameVelocidad,
            frames: this.anims.generateFrameNames('skeleton', { start: 1, end: 8, zeroPad: 0 })

        }
        );

        this.anims.create({
            key: 'left',
            repeat: -1,
            frameRate: frameVelocidad,
            frames: this.anims.generateFrameNames('skeleton', { start: 10, end: 17, zeroPad: 0 })

        }
        );

        this.anims.create({
            key: 'down',
            repeat: -1,
            frameRate: frameVelocidad,
            frames: this.anims.generateFrameNames('skeleton', { start: 19, end: 26, zeroPad: 0 })

        }
        );

        this.anims.create({
            key: 'right',
            repeat: -1,
            frameRate: frameVelocidad,
            frames: this.anims.generateFrameNames('skeleton', { start: 27, end: 35, zeroPad: 0 })

        }
        );

    };
    update() {


        if (cursor.left.isDown || cursor.right.isDown || cursor.down.isDown || cursor.up.isDown) {

            if ((cursor.left.isDown && cursor.down.isDown) || (cursor.left.isDown && cursor.up.isDown) || (cursor.right.isDown && cursor.up.isDown) || (cursor.right.isDown && cursor.down.isDown)) {
                boy.anims.stop();
            } else {


                if (cursor.left.isDown) {

                    boy.anims.play('left', true);

                    boy.x -= velocidad;
                    if (limit(boy.x, 800, 600)) {
                        console.log('true');
                    }

                }

                if (cursor.right.isDown) {
                    boy.anims.play('right', true);
                    boy.x += velocidad;

                };

                if (cursor.up.isDown) {
                    boy.anims.play('up', true);
                    boy.y -= velocidad;

                }

                if (cursor.down.isDown) {
                    boy.anims.play('down', true);
                    boy.y += velocidad;

                };


            }


        } else {

            boy.anims.stop();

        }


    };

};