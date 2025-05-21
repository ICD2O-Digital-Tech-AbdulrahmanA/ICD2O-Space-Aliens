// Game Scene

import SplashScene from './splashScene.js'

// our game scene
const SplashScene = new SplashScene()

const config = {
    type: Phaser.AUTO,
    width: 1920,
    hegiht: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    // Set Background Color;
    backgroundColor: 0x5f6e7a,
    scale: {
        mode: Phaser.Scale.FIT,
        // We Place It in the middle of the page
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
}

const game = new Phaser.Game(config)

// load scenes
// Note: remember "key" is global and can not be reused.
game.scene.add('splashScene', splashScene)

// start title
game.scene.start('splashScene')