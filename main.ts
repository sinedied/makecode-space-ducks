controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, plane, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(10, 500)
    info.changeLifeBy(-1)
})
let duck: Sprite = null
let projectile: Sprite = null
let plane: Sprite = null
plane = sprites.create(img`
    ..ccc.........ffffff....
    ..f4cc.......fcc22ff....
    ..f44cc...fffccccff.....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf2222222222222b999c..
    .c22c222222222b11199b2c.
    f22ccccccc222299111b222c
    fffffcc222c222222222222f
    .....f2222442222222222f.
    ....f222244fc2222222ff..
    ...c222244ffffffffff....
    ...c2222cfffc2f.........
    ...ffffffff2ccf.........
    .......ffff2cf..........
    ........fffff...........
    `, SpriteKind.Player)
controller.moveSprite(plane, 200, 200)
plane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    duck = sprites.create(img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . f d 5 5 f 1 d 5 b b . . . . 
        . . c 4 d 5 f f 1 5 5 b . . . . 
        . . 4 4 d d b f d 5 5 b . . . . 
        b 4 4 4 4 4 5 5 5 5 5 d b b b . 
        . b 4 4 4 4 4 5 5 d b b d d d b 
        . . b 5 5 5 5 5 5 b 5 5 5 d b b 
        . b 5 5 5 5 5 5 d 5 5 5 5 c d c 
        . b 5 5 5 5 5 5 b 5 5 d c d b c 
        . b d 5 5 5 5 5 d b c c d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    duck.setVelocity(-100, 0)
    duck.setPosition(160, randint(5, 115))
    duck.setFlag(SpriteFlag.AutoDestroy, true)
})
