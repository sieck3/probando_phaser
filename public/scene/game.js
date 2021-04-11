let velocidad = 4;
let frameVelocidad = 15;
let scale = 1;

let cursor;
let boy;
let boy2;
let bg;
let bola_fuego;
let bodySwitch = true;
let sword_boy;
var light;

let activado = false;
let z = 0;
let skeletos;
let body = 'skeleton';
let container;
let x = 60;

let group;
var offsets = [];
let layer;



let hitBoxGeneral = (obj) => {
    obj.body.setSize(boy.width - 40, 40);
    obj.body.offset.y = 22;

}

let animaciones = (ctx, frameVelocidad, name, personajes) => {

    ctx.anims.create({
        key: 'up',
        repeat: -1,
        frameRate: frameVelocidad,
        frames: ctx.anims.generateFrameNames(name, { start: 1, end: 8, zeroPad: 0 })

    }
    );

    ctx.anims.create({
        key: 'left',
        repeat: -1,
        frameRate: frameVelocidad,
        frames: ctx.anims.generateFrameNames(name, { start: 10, end: 17, zeroPad: 0 })

    }
    );

    ctx.anims.create({
        key: 'down',
        repeat: -1,
        frameRate: frameVelocidad,
        frames: ctx.anims.generateFrameNames(name, { start: 19, end: 26, zeroPad: 0 })

    }
    );

    ctx.anims.create({
        key: 'right',
        repeat: -1,
        frameRate: frameVelocidad,
        frames: ctx.anims.generateFrameNames(name, { start: 27, end: 35, zeroPad: 0 })

    }
    );

    ctx.anims.create({
        key: 'npc_stand',
        repeat: -1,
        frameRate: 8,
        frames: ctx.anims.generateFrameNames('human', { start: 23, end: 27, zeroPad: 0 })

    }
    );

    ctx.anims.create({
        key: 'sword_right',
        repeat: 2,
        frameRate: frameVelocidad,
        frames: ctx.anims.generateFrameNames('sword_skeleton', { start: 18, end: 23, zeroPad: 0 })

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
        this.load.spritesheet('sword_skeleton', 'img/sword_skeleton.png', { frameWidth: 64, frameHeight: 64 }, 8);
        this.load.spritesheet('texture_stone', 'img/textureStone.png', { frameWidth: 64, frameHeight: 64 }, 8);
        this.load.image('tiles', 'img/sheet.png');
        this.load.tilemapCSV('pared', 'img/bg._pared.csv');
        this.load.tilemapCSV('piso', 'img/bg._piso.csv');
    }

    create() {



        let pared = this.make.tilemap({ key: 'pared', tileWidth: 32, tileHeight: 32 });
        let piso = this.make.tilemap({ key: 'piso', tileWidth: 32, tileHeight: 32 });

        const tileset = pared.addTilesetImage('tiles', null, 32, 32, 0, 0);

        piso.createLayer(0, tileset, 0, 0);
        pared.createLayer(0, tileset, 0, 0).setVisible(false);


        this.cameras.main.setBounds(0, 0, 1920, 1080);
        this.cameras.main.setZoom(3);
        // let container = this.add.container(0, 0).setName('conty');
        // // ts = this.add.tileSprite(0, 0, 1920, 1080, 'background');
        // this.cameras.main.centerOn(0, 0);
        boy = this.physics.add.sprite(400, 300, body, 18);
        boy.body.setSize(boy.width - 45, 42);
        boy2 = this.physics.add.sprite(200, 300, 'human', 0);
        // console.log(boy, 'Boy');
        // sword_boy = this.physics.add.sprite(400, 400, 'sword_skeleton', 12);
        cursor = this.input.keyboard.createCursorKeys();
        boy.scaleX = scale;
        boy.scaleY = scale;
        this.cameras.main.startFollow(boy, true);
        // skeletos = this.add.group({
        //     defaultKey: 'skeleton',
        //     maxSize: 5
        // });
        this.physics.add.collider(boy, boy2, function (x) {
            console.log('touch');
            if(cursor.space?.isDown){
                console.log('hola');
            }

        });

        this.input.on('pointerdown', function (event) {

        });

        // Phaser.Actions.PlaceOnRectangle(group.getChildren(), new Phaser.Geom.Rectangle(100, 100, 400, 400));
        // boy.setBounce(1, 1).setCollideWorldBounds(true);
        // let collider = this.physics.add.collider(boy, group, null, function ()
        // {
        //     // this.physics.world.removeCollider(collider);
        // }, this);
        // boy.setVelocity(1, 1).setBounce(1, 1).setCollideWorldBounds(true).setGravityY(0);
        // group.refresh();

        animaciones(this, frameVelocidad, 'skeleton');
        boy2.anims.play('npc_stand', true);
        boy.setCollideWorldBounds(true);

        this.physics.add.collider(boy,pared,function(){
            console.log('OLOCO');
        });
        // boy2.setBounce(0.5, 0.5);
        boy.body.offset.y = 17;

        boy2.body.setImmovable(true);
        hitBoxGeneral(boy2);

    };

    update() {
        const speed = 200;
        if (activado) {

            // for (let i = 0; i < skeletos.maxSize; i++) {
            //     let qty = i;
            //     x = (i * 100);
            //     skeletos.get(100 + x, 400);
            // };

            // skeletos.children.entries.map((element) => {

            //     element.anims.play('down', true);
            // });
            // activado = false;
            // console.log(
            //     'Son tocados jaimito'
            // );
        };
        if (!cursor || !boy) {
            return;
        }
        if (cursor.right?.isDown && cursor.down?.isDown) {
            boy.setVelocity((speed - (speed / 3)), (speed - (speed / 3)));
            boy.anims.play('right', true);

        } else if (cursor.right?.isDown && cursor.up?.isDown) {
            boy.setVelocity((speed - (speed / 3)), -(speed - (speed / 3)));
            boy.anims.play('right', true);
        } else if (cursor.left?.isDown && cursor.up?.isDown) {
            boy.setVelocity(-(speed - (speed / 3)), -(speed - (speed / 3)));
            boy.anims.play('left', true);
        } else if (cursor.left?.isDown && cursor.down?.isDown) {
            boy.setVelocity(-(speed - (speed / 3)), (speed - (speed / 3)));
            boy.anims.play('left', true);
        } else if (cursor.left?.isDown) {
            boy.anims.play('left', true);
            boy.setVelocity(-speed, 0);

        } else if (cursor.right?.isDown) {
            boy.anims.play('right', true);
            boy.setVelocity(speed, 0);
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