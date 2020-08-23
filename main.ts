scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    lube = 1
    tiles.setTileAt(location, myTiles.transparency16)
    if (lube == 1 && condom == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . . 
            . . 1 9 9 9 9 9 9 9 9 9 9 . . . 
            . . 1 d d d d d d d d d d 9 . . 
            . . 1 d d d d d d d d d d d 9 . 
            . . 1 d d d d d d d d d d d 9 . 
            . . 1 d d d d d d d d d d 9 . . 
            . . 1 9 9 9 9 9 9 9 9 9 9 . . . 
            . . 1 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        music.pewPew.play()
        mySprite2 = 1
    } else {
        music.powerUp.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    condom = 1
    tiles.setTileAt(location, myTiles.transparency16)
    if (condom == 1 && lube == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . . . 
            . . 1 9 9 9 9 9 9 9 9 9 9 . . . 
            . . 1 d d d d d d d d d d 9 . . 
            . . 1 d d d d d d d d d d d 9 . 
            . . 1 d d d d d d d d d d d 9 . 
            . . 1 d d d d d d d d d d 9 . . 
            . . 1 9 9 9 9 9 9 9 9 9 9 . . . 
            . . 1 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        music.pewPew.play()
        mySprite2 = 1
    } else {
        music.powerUp.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    music.powerDown.play()
    info.changeLifeBy(-1)
    info.changeScoreBy(-5)
    tiles.setTileAt(location, myTiles.transparency16)
})
info.onCountdownEnd(function () {
    game.splash("You took too long and now she's seeing another client!", "Game Over")
    game.over(false)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    if (mySprite2 == 1 && info.score() >= 40) {
        music.pewPew.play()
        game.over(true)
    } else {
        game.splash("I must have forgotten something! :(")
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(3)
    tiles.setTileAt(location, myTiles.transparency16)
})
info.onLifeZero(function () {
    game.splash("Too much beer and coke keeps one soft!", "Game Over")
    game.over(false)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    music.powerDown.play()
    info.changeLifeBy(-1)
    info.changeScoreBy(-10)
    tiles.setTileAt(location, myTiles.transparency16)
})
let mySprite2 = 0
let lube = 0
let condom = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . . d d 8 8 8 8 d d . . . . 
    . . . . d d 8 8 8 8 d d . . . . 
    . . . . d d 8 8 8 8 d d . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(10)
tiles.setTilemap(tiles.createTilemap(hex`1000100001050001000006000000000006000501010600010001010101010001010101010101000100000000010100060606000701010001010101000101010101010101010000000000060000000000000600010100010101010101010001010101000101060101010101010100000001030001010000000000000001010606010605010100010101010000010101010101010104000101010106040100000000000001010001060601010101000101010605010100010606010101010001010101010101000000000102040100000000060001010001010101000000000101010100010100010105010101010101010601000108000000000000060000000000000001`, img`
    2 . . 2 . . . . . . . . . . . 2 
    2 . . 2 . 2 2 2 2 2 . 2 2 2 2 2 
    2 2 . 2 . . . . 2 2 . . . . . . 
    2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . 2 2 2 2 2 2 2 . 2 2 2 2 . 2 
    2 . 2 2 2 2 2 2 2 . . . 2 . . 2 
    2 . . . . . . . 2 2 . . 2 . . 2 
    2 . 2 2 2 2 . . 2 2 2 2 2 2 2 2 
    . . 2 2 2 2 . . 2 . . . . . . 2 
    2 . 2 . . 2 2 2 2 . 2 2 2 . . 2 
    2 . 2 . . 2 2 2 2 . 2 2 2 2 2 2 
    2 . . . . 2 . . 2 . . . . . . 2 
    2 . 2 2 2 2 . . . . 2 2 2 2 . 2 
    2 . 2 2 . 2 2 2 2 2 2 2 . 2 . 2 
    . . . . . . . . . . . . . . . 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, myTiles.tile8)
scene.cameraFollowSprite(mySprite)
info.startCountdown(100)
info.setScore(0)
info.setLife(3)
condom = 0
lube = 0
mySprite2 = 0
game.splash("I can't wait to see the hooker")
