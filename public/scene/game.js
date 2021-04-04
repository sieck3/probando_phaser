let velocidad = 4;
let frameVelocidad = 15;
let scale = 1;

let cursor;
let boy;
let boy2;
let bg;
let bodySwitch = true;
let activado = false;
let z = 0;
let skeletos;
let body = 'skeleton';
let container;
let x = 60;

let group;

let gfx;

let animaciones = (ctx, frameVelocidad) => {

    ctx.anims.create({
        key: 'up',
        repeat: -1,
        frameRate: frameVelocidad,
        frames: ctx.anims.generateFrameNames('skeleton', { start: 1, end: 8, zeroPad: 0 })

    }
    );

    ctx.anims.create({
        key: 'left',
        repeat: -1,
        frameRate: frameVelocidad,
        frames: ctx.anims.generateFrameNames('skeleton', { start: 10, end: 17, zeroPad: 0 })

    }
    );

    ctx.anims.create({
        key: 'down',
        repeat: -1,
        frameRate: frameVelocidad,
        frames: ctx.anims.generateFrameNames('skeleton', { start: 19, end: 26, zeroPad: 0 })

    }
    );

    ctx.anims.create({
        key: 'right',
        repeat: -1,
        frameRate: frameVelocidad,
        frames: ctx.anims.generateFrameNames('skeleton', { start: 27, end: 35, zeroPad: 0 })

    }
    );

    ctx.anims.create({
        key: 'npc_stand',
        repeat: -1,
        frameRate: frameVelocidad,
        frames: ctx.anims.generateFrameNames('human', { start: 23, end: 27, zeroPad: 0 })

    }
    );

}

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

        this.cameras.main.setBounds(0, 0, 1920, 1080);
        this.cameras.main.setZoom(2);
        // this.cameras.main.centerOn(0, 0);

        bg = this.add.image(0, 0, 'background').setOrigin(0);

        boy = this.physics.add.sprite(400, 300, body, 18);
        boy.body.setSize(boy.width - 45, 42);
        console.log(boy, 'Boy');

        boy2 = this.physics.add.sprite(200, 300, 'human', 0);

        cursor = this.input.keyboard.createCursorKeys();

        // boy.scaleX = scale;
        // boy.scaleY = scale;




        this.cameras.main.startFollow(boy, true);

        skeletos = this.add.group({
            defaultKey: 'skeleton',
            maxSize: 5
        });


        this.physics.add.collider(boy, boy2, function (x) {
            z++;
            if (z <= 1) {
                activado = true;
            };


        });


        this.input.on('pointerdown', function (event) {
            // console.log(boy);
            // boy.body.blocked.none = false;
            // boy2.body.blocked.down = true;

        });


        group = this.physics.add.staticGroup({
            key: 'skeleton',
            frameQuantity: 30
        });

        Phaser.Actions.PlaceOnRectangle(group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));
        // boy.setBounce(1, 1).setCollideWorldBounds(true);
        // let collider = this.physics.add.collider(boy, group, null, function ()
        // {
        //     // this.physics.world.removeCollider(collider);
        // }, this);

        // boy.setVelocity(1, 1).setBounce(1, 1).setCollideWorldBounds(true).setGravityY(0);


        group.refresh();

        boy.setCollideWorldBounds(true);

        let collider = this.physics.add.collider(boy, boy2, null, function () {
            console.log("toque");
        }, this);

        animaciones(this, frameVelocidad);
        boy2.anims.play('npc_stand', true);

        boy.setCollideWorldBounds(true);


        this.physics.add.collider(boy, group);
        this.physics.add.collider(boy2, group);
        boy2.setBounce(0.7,0.7);
        boy.body.offset.y = 17;

    };

    update() {
        const speed = 100;

        // if (activado) {

        //     for (let i = 0; i < skeletos.maxSize; i++) {
        //         let qty = i;
        //         x = (i * 100);
        //         skeletos.get(100 + x, 400);
        //     };

        //     skeletos.children.entries.map((element) => {

        //         element.anims.play('down', true);
        //     });
        //     activado = false;
        // };
        if (!cursor || !boy) {

            return;

        }


        if (cursor.left?.isDown) {
            boy.anims.play('left', true);
            boy.setVelocity(-speed, 0);

            // boy.body.offset.x = 22;
        } else if (cursor.right?.isDown) {
            boy.anims.play('right', true);
            boy.setVelocity(speed, 0);
            // boy.body.offset.x = 22;

        } else if (cursor.up?.isDown) {
            boy.anims.play('up', true);
            boy.setVelocity(0, -speed);
        } else if (cursor.down?.isDown) {
            boy.anims.play('down', true);
            boy.setVelocity(0, speed);

        } else {
            boy.setVelocity(0, 0);
            boy.stop();
        }






    };

};