import Phaser from 'phaser'

// import HelloWorldScene from './scenes/HelloWorldScene'
import CollectingStarsScene from './scenes/CollectingStarsScene'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	// scene: [HelloWorldScene]
	scene: [CollectingStarsScene]
}

export default new Phaser.Game(config)
