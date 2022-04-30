const inquirer = require('inquirer')
const Player = require('../lib/Player.js')
const Enemy = require('../lib/Enemy')

function Game ()
{
    this.roundNumber = 0
    this.isPlayerTurn = false
    this.enemies = []
    this.currentEnemy
    this.player
}
Game.prototype.initializeGame = function ()
{
    this.enemies.push(new Enemy('goblin', 'sword'))
    this.enemies.push(new Enemy('orc', 'baseball bat'))
    this.enemies.push(new Enemy('skelton', 'axe'))
    this.currentEnemy = this.enemies[0]

    inquirer.prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        // destruct name from the prompt object
        .then(({ name }) =>
        {
            this.player = new Player(name)
            // test the object creation
            this.startNewBattle()
        })
}

module.exports = Game