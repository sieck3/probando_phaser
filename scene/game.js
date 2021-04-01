let velocidad = 4;
let frameVelocidad = 16;
let scale = 1;

let cursor;
let boy;
let boy2;
let bg;
let bodySwitch = true;

let body = 'skeleton';
let container;
export class Game extends Phaser.Scene {

    constructor() {
        super({ key: 'game' })
    }

    preload() {
        this.load.spritesheet('human', 'img/hombre_sprite_poder.png', { frameWidth: 64, frameHeight: 64 }, 8);
        this.load.spritesheet('skeleton', 'img/huesos_sprite576×256.png', { frameWidth: 64, frameHeight: 64 }, 8);
        this.load.image('background', 'img/fondo.png');

    }

    create() {
        this.cameras.main.setBounds(0, 0, 1205, 1205);
        bg = this.add.image(0, 0, 'background').setOrigin(0);
        boy2 = this.physics.add.sprite(200, 300 * 2, 'human', 0);
        boy = this.physics.add.sprite(400, 300 * 2, body, 18);
        cursor = this.input.keyboard.createCursorKeys();
        boy.scaleX = scale;
        boy.scaleY = scale;

        let image1 = this.add.image(0, -30, 'skeleton');
        let image2 = this.add.image(-40, 30, 'skeleton');
        let image3 = this.add.image(40, 30, 'skeleton');

        // container = this.add.container(400, 600, [image1, image2, image3]);

        this.cameras.main.startFollow(boy, true);

        this.anims.create({
            key: 'up',
            repeat: -1,
            frameRate: frameVelocidad,
            frames: this.anims.generateFrameNames(body, { start: 1, end: 8, zeroPad: 0 })

        }
        );

        this.anims.create({
            key: 'left',
            repeat: -1,
            frameRate: frameVelocidad,
            frames: this.anims.generateFrameNames(body, { start: 10, end: 17, zeroPad: 0 })

        }
        );

        this.anims.create({
            key: 'down',
            repeat: -1,
            frameRate: frameVelocidad,
            frames: this.anims.generateFrameNames(body, { start: 19, end: 26, zeroPad: 0 })

        }
        );

        this.anims.create({
            key: 'right',
            repeat: -1,
            frameRate: frameVelocidad,
            frames: this.anims.generateFrameNames(body, { start: 27, end: 35, zeroPad: 0 })

        }
        );


        this.anims.create({
            key: 'npc_stand',
            repeat: -1,
            frameRate: 4,
            frames: this.anims.generateFrameNames('human', { start: 23, end: 27, zeroPad: 0 })

        }
        );

        boy2.anims.play('npc_stand', true);

        boy.setBounce(1, 1);
        boy2.setBounce(1, 1);

        this.physics.add.collider(boy, boy2, function () { console.log('choque') });


    };
    update() {



        if (cursor.left.isDown || cursor.right.isDown || cursor.down.isDown || cursor.up.isDown) {


            if ((cursor.left.isDown && cursor.down.isDown)) {

                boy.anims.play('down', true);
                if (boy.y >= 1150) {
                    boy.y = 1150;
                } else {

                    boy.y += velocidad;
                }

                if (boy.x <= 10) {
                    boy.x = 10;
                } else {
                    boy.x -= velocidad;

                }



            } else if ((cursor.left.isDown && cursor.up.isDown)) {
                boy.anims.play('up', true);

                if (boy.y <= 30) {
                    boy.y = 30;
                } else {

                    boy.y -= velocidad;
                }
                if (boy.x <= 10) {
                    boy.x = 10;
                } else {
                    boy.x -= velocidad;

                }


            } else if ((cursor.right.isDown && cursor.up.isDown)) {
                boy.anims.play('up', true);


                if (boy.y <= 30) {
                    boy.y = 30;
                } else {

                    boy.y -= velocidad;
                }

                if (boy.x >= 1195) {
                    boy.x = 1195;
                } else {
                    boy.x += velocidad;

                }
            } else if ((cursor.right.isDown && cursor.down.isDown)) {
                boy.anims.play('down', true);

                if (boy.x >= 1195) {
                    boy.x = 1195;
                } else {
                    boy.x += velocidad;

                }
                if (boy.y >= 1150) {
                    boy.y = 1150;
                } else {

                    boy.y += velocidad;
                }

            } else {



                if (cursor.right.isDown) {
                    boy.anims.play('right', true);
                    if (boy.x >= 1195) {
                        boy.x = 1195;
                    } else {
                        boy.x += velocidad;

                    }

                };

                if (cursor.up.isDown) {
                    boy.anims.play('up', true);

                    if (boy.y <= 30) {
                        boy.y = 30;
                    } else {

                        boy.y -= velocidad;
                    }

                }



                if (cursor.left.isDown) {

                    boy.anims.play('left', true);
                    if (boy.x <= 10) {
                        boy.x = 10;
                    } else {
                        boy.x -= velocidad;

                    }
                }

                if (cursor.down.isDown) {
                    boy.anims.play('down', true);
                    if (boy.y >= 1150) {
                        boy.y = 1150;
                    } else {

                        boy.y += velocidad;
                    }

                };


            }
        } else {

            boy.anims.stop();
        }



    };

};