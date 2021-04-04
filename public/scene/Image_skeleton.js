

export class Skeleton extends Phaser.GameObjects.Sprite{


    constructor(scene,x,y,height){
        super(scene,x,y,'skeleton');

        this.startX = x;
        this.startY = y;
        this.displayHeight = height;
        
    }

}