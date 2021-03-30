

export class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'game' })
    }

    preload() {
        //Fondo
        this.load.image('background', 'img/background.jpg');
        this.load.image('piso', 'img/piso.png');

        //Bomba
        this.load.image('bomba', 'img/bomba.png');

        //piso
        this.load.image('piso', 'img/piso.png');

    }

    create() {
        // this.add.image(0, 400, 'background');
        
        this.bomba = this.physics.add.image(400, 200, 'bomba');
        this.bomba.setScale(0.1, 0.1);
        
        
        this.piso = this.physics.add.image(0, 630, 'piso');
        this.piso.setScale(1, 0.5);
        this.piso.setImmovable();
        
        this.piso.body.allowGravity = false;
        
        this.bomba.setBounce(0.7);
        this.physics.add.collider(this.bomba, this.piso);


    }
}