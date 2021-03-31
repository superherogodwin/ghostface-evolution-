sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    sprite.startEffect(effects.fire)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let enemySprite: Sprite = null
let projectile: Sprite = null
let sprite: Sprite = null
scene.setBackgroundColor(9)
sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f 1 1 1 f f . . . . 
    . . . . f f 1 1 1 1 1 f f . . . 
    . . . f f 1 1 f 1 f 1 1 f f . . 
    . . . f 1 1 f f 1 f f 1 1 f . . 
    . . . f 1 f f 1 1 1 f f 1 f . . 
    . . . f f 1 1 1 f 1 1 1 f f . . 
    . . . . f 1 1 1 1 1 1 1 f . . . 
    . . . . f 1 1 f f f 1 1 f . . . 
    . . . . f f 1 f f f 1 f f . . . 
    . . . . f f 1 f f f 1 f f . . . 
    . . . . f f f 1 f 1 f f f . . . 
    . . . f f f f 1 1 1 f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(sprite)
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff........
        .....fbfbffffffff.......
        ......fffffffffff.ff....
        ...........ffffffff.....
        ........f1b1bffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    enemySprite.setPosition(randint(0, 160), randint(0, 120))
})
