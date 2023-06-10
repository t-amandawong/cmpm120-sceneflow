var soundon = true;

class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }
    buttonAnimation(button, buttontext, nextScene) {
        button.on('pointerover', ()=> {
            button.setScale(1.1);
            buttontext.setScale(1.1);
        })
        .on('pointerout', ()=> {
            button.setScale(1);
            buttontext.setScale(1);
        })
        .on('pointerdown', ()=> {
            this.cameras.main.fadeOut(1000, 51, 38, 40);
            this.time.delayedCall(1000, ()=> {
                this.scene.start(nextScene)
            })
            });
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;

        // title text
        this.add.text(this.w/2, this.h * 0.4, "Day-byrinth")
            .setOrigin(0.5).setFontSize(100);
        
        // rectangle and text for button
        this.button = this.add.rectangle(this.w/2, this.h * 0.6, 400, 100, 0xd9ba4a)
            .setInteractive().setOrigin(0.5);
        this.play = this.add.text(this.w/2, this.h * 0.6, "play")
            .setOrigin(0.5).setFontSize(50);

        this.button2 = this.add.rectangle(this.w/2, this.h * 0.72, 400, 100, 0xd9ba4a)
            .setInteractive().setOrigin(0.5);
        this.credits = this.add.text(this.w/2, this.h * 0.72, "credits")
            .setOrigin(0.5).setFontSize(50);

        this.button3 = this.add.rectangle(this.w/2, this.h * 0.84, 400, 100, 0xd9ba4a)
            .setInteractive().setOrigin(0.5);
        this.settings = this.add.text(this.w/2, this.h * 0.84, "settings")
            .setOrigin(0.5).setFontSize(50);
        
        // button animation on pointerover/pointerout
        this.buttonAnimation(this.button, this.play, 'maze')
        this.buttonAnimation(this.button2, this.credits, 'credits')
        this.buttonAnimation(this.button3, this.settings, 'menu')
    }
}

class Menu extends Phaser.Scene {
    constructor() {
        super('menu')
    }
    buttonAnimation(button, buttontext) {
        button.on('pointerover', ()=> {
            button.setScale(1.1);
            buttontext.setScale(1.1);
        })
        .on('pointerout', ()=> {
            button.setScale(1);
            buttontext.setScale(1);
        })
    }
    preload() {
        this.cameras.main.setBackgroundColor(0xf2e8ac)
    }
    create() {
        this.cameras.main.fadeIn(2000, 51, 38, 40)
        this.w = this.game.config.width;
        this.h = this.game.config.height;

        this.muteButton = this.add.rectangle(this.w/2, this.h * 0.4, 500, 100, 0x59669c)
        .setInteractive().setOrigin(0.5);
        this.muteText = this.add.text(this.w/2, this.h * 0.4, "sound is on")
        .setOrigin(0.5).setFontSize(50);

        this.buttonAnimation(this.muteButton, this.muteText)
        this.muteButton.on('pointerdown', ()=> {
            if (soundon == true) {
                this.muteText.setText('sound is off');
                soundon = false;
            }
            else {
                this.muteText.setText('sound is on');
                soundon = true;
            }
        })

        this.backButton = this.add.rectangle(this.w/2, this.h * 0.8, 500, 100, 0x59669c)
            .setInteractive().setOrigin(0.5);
        this.backtoTitle = this.add.text(this.w/2, this.h * 0.8, "back to title")
            .setOrigin(0.5).setFontSize(50);

        this.buttonAnimation(this.backButton, this.backtoTitle);
        this.backButton.on('pointerdown', ()=> this.scene.start('title'));
    }
}

class Maze extends Phaser.Scene {
    constructor() {
        super('maze')
    }

}

class Puzzle extends Phaser.Scene {
    constructor() {
        super('puzzle')
    }
}

class Credits extends Phaser.Scene {
    constructor() {
        super('credits')
    }
    buttonAnimation(button, buttontext, nextScene) {
        button.on('pointerover', ()=> {
            button.setScale(1.1);
            buttontext.setScale(1.1);
        })
        .on('pointerout', ()=> {
            button.setScale(1);
            buttontext.setScale(1);
        })
        .on('pointerdown', ()=> this.scene.start(nextScene));
    }
    preload() {
        this.cameras.main.setBackgroundColor(0x242436)
    }
    create() {
        this.cameras.main.fadeIn(2000, 51, 38, 40)
        this.w = this.game.config.width;
        this.h = this.game.config.height;

        this.add.text(this.w/2, this.h/2, 
        ['Production lead: Sirapat \'Poom\' Phunjamaneechot',
        'Technology lead: David Markowitz',
        'Testing lead: Thanyared Wong'], {align: 'left'}
        ).setFontSize(40).setOrigin(0.5)

        this.backButton = this.add.rectangle(this.w/2, this.h * 0.8, 500, 100, 0xd9ba4a)
            .setInteractive().setOrigin(0.5);
        this.backtoTitle = this.add.text(this.w/2, this.h * 0.8, "back to title")
            .setOrigin(0.5).setFontSize(50);

        this.buttonAnimation(this.backButton, this.backtoTitle, 'title')
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },
    backgroundColor: 0x2b2a5e,
    scene: [Title, Menu, Credits, Maze, Puzzle],
    title: "scene flow",
});