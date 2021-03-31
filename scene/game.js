let UP = false;
let DOWN = false;
let LEFT = false;
let RIGHT = false;

let velocidad = 12;
let cursor;
let boy;


export class Game extends Phaser.Scene {


    constructor() {
        super({ key: 'game' })
    }

    preload() {
        // this.game.load.spritesheet('uniqueKey', 'img/huesos_sprite576×256.png', 256, 576);
        this.load.spritesheet('boy', 'img/huesos_sprite576×256.png', { frameWidth: 64, frameHeight: 64 }, 8);
        // cursors = this.input.keyboard.createCursorKeys();
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
        )
        this.anims.create({
            key: 'left',
            repeat: -1,
            frameRate: velocidad,
            frames: this.anims.generateFrameNames('boy', { start: 10, end: 17, zeroPad: 0 })

        }
        )

        this.anims.create({
            key: 'down',
            repeat: -1,
            frameRate: velocidad,
            frames: this.anims.generateFrameNames('boy', { start: 19, end: 26, zeroPad: 0 })

        }
        )

        this.anims.create({
            key: 'right',
            repeat: -1,
            frameRate: velocidad,
            frames: this.anims.generateFrameNames('boy', { start: 27, end: 35, zeroPad: 0 })

        }
        )

        // this.input.keyboard.on('keyup-D', function (event) {
        //     boy.anims.stop('right', true);
        // });
        // this.input.keyboard.on('keyup-A', function (event) {
        //     boy.anims.stop('left', true);

        // });
        // this.input.keyboard.on('keyup-S', function (event) {
        //     boy.anims.stop('down', true);
        // });
        // this.input.keyboard.on('keyup-W', function (event) {
        //     boy.anims.stop('up', true);

        // });

        // this.input.keyboard.on('keydown-A', function (event) {
        //     boy.anims.play('left', true);

        // });

        // this.input.keyboard.on('keydown-W', function (event) {
        //     boy.anims.play('up', true);

        // });

        // this.input.keyboard.on('keydown-S', function (event) {
        //     boy.anims.play('down', true);
        // });


        // this.input.keyboard.on('keydown-D', function (event) {
        //     boy.anims.play('right', true);
        // });
    

    }

    update() {

        // if (cursor.right.isDown) {
        //     boy.anims.play('right', true);
        // }
        // if (cursor.right.isUp) {
        //     boy.anims.stop('right', true);
        // }

        if(cursor.left.isDown || cursor.right.isDown || cursor.down.isDown || cursor.up.isDown){

        
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

        }else {
            boy.anims.stop();
        }
        
        
     

        // if(cursor.right.isUp){
            
        //     boy.anims.stop('right', false);
        // }

        // if(cursor.up.isUp){
            
        //     boy.anims.stop('up', true);
        // }
 
        // if (cursor.right.isDown) {
        //     boy.anims.play('right', true);

        // } else if (cursor.right.isUp) {
        //     boy.anims.stop('right', true);

        // }
 
        // if (cursor.left.isUp) {
        //     boy.anims.stop('left', true);
        // }

        // if (cursor.right.isDown) {
        //     boy.anims.play('right', true);
        // }
        // if (cursor.right.isUp) {
        //     boy.anims.stop('right', true);
        // }

        // if (cursor.right.isDown) {
        //     boy.anims.play('right', true);
        // }
        // if (cursor.right.isUp) {
        //     boy.anims.stop('right', true);
        // }

    }

}