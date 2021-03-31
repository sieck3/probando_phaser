let UP = false;
let DOWN = false;
let LEFT = false;
let RIGHT = false;

export class Game extends Phaser.Scene {

    constructor() {
        super({ key: 'game' })
    }

    preload() {


        // this.game.load.spritesheet('uniqueKey', 'img/huesos_sprite576×256.png', 256, 576);
        this.load.spritesheet('boy', 'img/huesos_sprite576×256.png', { frameWidth: 64, frameHeight: 64 }, 8);
    }

    create() {


        const boy = this.add.sprite(400, 300, 'boy', 18);


        this.anims.create({
            key: 'up',
            repeat: -1,
            frameRate: 8,
            frames: this.anims.generateFrameNames('boy', { start: 1, end: 8, zeroPad: 0 })

        }
        )
        this.anims.create({
            key: 'up_stop',
            repeat: -1,
            frameRate: 8,
            frames: this.anims.generateFrameNumbers('boy', { frames: [0] })

        }
        )

        this.anims.create({
            key: 'left',
            repeat: -1,
            frameRate: 8,
            frames: this.anims.generateFrameNumbers('boy', { frames: [9, 10, 11, 12, 13, 14, 15, 16, 17] })

        }
        )

        this.anims.create({
            key: 'down',
            repeat: -1,
            frameRate: 8,
            frames: this.anims.generateFrameNumbers('boy', { frames: [19, 20, 21, 22, 23, 24, 25, 26] })

        }
        )


        this.anims.create({
            key: 'right',
            repeat: -1,
            frameRate: 8,
            frames: this.anims.generateFrameNumbers('boy', { frames: [28, 29, 30, 31, 32, 33, 34, 35] })

        }
        )

        this.anims.create({
            key: 'right_stop',
            repeat: 1,
            frameRate: 2,
            frames: this.anims.generateFrameNumbers('boy', { frames: [9] })

        }
        )


        this.input.keyboard.on('keydown-A', function (event) {

            RIGHT = true;
            console.log('key down ', RIGHT)
            boy.play('left');
  
        });

        // this.input.keyboard.on('keyup-D', function (event) {

        //     RIGHT = false;
        //     console.log('key up ', RIGHT)
        // });



        // if (RIGHT) {
        //     console.log('true')
        // } else {
        //     boy.play('right_stop');
        // }
        // this.input.keyboard.on('keyup-A', function (event) {

        //     boy.play('right_stop');
        // });


        // this.input.keyboard.on('keyup-W', function (event) {

        //     boy.play('up_stop');

        // });

        this.input.keyboard.on('keyup-W', function (event) {
            boy.play('up');
        });
        this.input.keyboard.on('keydown-S', function (event) {
            boy.play('down');
        });

        this.input.keyboard.on('keydown-D', function (event) {
            boy.play('right');
        });


        // let keyObjUP = this.load.input.keyboard.addKey('W');
        // let keyObjLEFT = this.load.input.keyboard.addKey('A');
        // let keyObjDOWN = this.load.input.keyboard.addKey('S');
        // let keyObjRIGHT = this.load.input.keyboard.addKey('D');



    }

}