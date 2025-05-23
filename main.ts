namespace SpriteKind {
    export const Coin = SpriteKind.create();
}
/**
 * -- COYOTE TIME SETUP FOR RICKASTLEYMUNCHKIN --
 */
/**
 * Counts down once you leave the ground
 */
// --- COYOTE TIME SNIPPET ---
scene.onOverlapTile(
    SpriteKind.Player,
    assets.tile`myTile0`,
    function (sprite, location) {
        game.gameOver(false);
    }
);
//Stop with B button
setInterval(checkTextCollision, 25); 
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!menuLocked2) {
        game.gameOver(false);
    } else {
        lockedMenuB();
    }
});
//Adds gravity and jump
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (RickAstleyMunchkin.vy == 0) {
        RickAstleyMunchkin.vy = -200;
    }
});
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!menuLocked2) {
        if (RickAstleyMunchkin.vy == 0) {
            RickAstleyMunchkin.vy = -200;
        }
    } else {
        lockedMenuA();
    }
}); 
scene.onOverlapTile(
    SpriteKind.Player,
    assets.tile`myTile16`,
    function (sprite2, location2) {
        scene.setBackgroundImage(img`
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeee2222222eeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeee22222224444422222222222eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeee222222244424444444422244442222eeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeee222222244424444444422244442222eeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee22222222244222244444422224444444222eeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee2222444442222222222245442ee22222444444222efffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeee224442222222222222222242e2ee222222224444442eefffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffee222444222222222e24422222eeeeeeee2222ee2e22444422effffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffe22244442222222222222222eeee22eeeeeeeee2222222244422effffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffee24454422442444442222244222222eeeeeeeee22222244244422eeffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffeee2444444422222222222244222222222eeeeeee22222444444444422eeefffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffeee2244444442222222242222222222422222eeeeeee2222244444444442222eefffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffeee2244444442222222242222222222422222eeeeeee2222244444444442222eefffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffe2244444444422224444222222222442222222eeeee222244444444444442222eeffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffe224442222424222244442222222224422422222eeee2222444222444444444442eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffe244422222222222444442222444424422422222222244222222244444444444442eeffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffeeee244222e222222224422222224444444422222222222222222222444444444444442effffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffe2222442222e222242422222222224444444222222224444222222222444444444444442eefffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffe2222444222e222222242222222222444444422224422222242222244444444444444444422effffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffeee24444422222222222222222222222444442222442424222242222244444444444444445542eefffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffee224444422222222222222222eee22222244444222222222222222224444444444544444445422efffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffee224444422222222222222222eee22222244444222222222222222224444444444544444445422efffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffe22444444222222222224422eeeeee2222224444222e22222222222224444444445544444444542efffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffe224444444222222222222222eeeeee22222222222ee222222222222244444444454444444445422eefffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffe224544424444224442222222eeeee2e42222eeeeeee222222222222222222444444444454444542eeeffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffe24442222244442222222eeeeeeeeee222222eeee22ee22eeee2222222444444224444445444444222effffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffe2444222224444222222eee2ee2222e2fefeeeeee2eeeee22222ee2222444444244445555544445422effffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffe2444222224444222222eee2ee2222e2fefeeeeee2eeeee22222ee2222444444244445555544445422effffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffe2444422224444442442ee2eeee2222eefefee2eeeeeeee2eeee2ee22222444442244555555444444222efffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffe24444222244444222222e22222444eeeeeeee4222eee222eeee2ee22222444442244455544444444442eeffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffe25444444444442222222224224444eeeeee222222e2eeeeeeee2e2222224424224444444444444444422effffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffe25444444444442222222224224444eeeeee222222e2eeeeeeee2e2222224424224444444444444444422effffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffe444424444444424444222454442222222ee22222ee2eeeeeeeeee2e22224442224444444444444444442effffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffee4444422244422424442224455422222222222222ee22e2222222e2222222242244444444244444444442eefffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffe2544442224442222222e224455544442242222222eee2ee22eeeeee2222222222222444442244444444422efffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffe444455555544442242222244555555424222444442e2eeee2eeeeeefe24244422222244444444444444422efffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffee454224444442444444422244545555445222555222e4ee22eeeeeee222424442222244444444444444442eefffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffe45422244444422224422224444455554455245422222eee2eeeeeeee222222222224224444444442444442eefffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffee2454224444444422224442224244444444442454e22eeeeeeeeeeeeee2222222222222244444444444444442efffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffee24542444222224422222222242224444224224522eeeeeeeeeefffeee2222222222422444444224444444542eeffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffee24542444222224422222222242224444224224522eeeeeeeeeefffeee2222222222422444444224444444542eeffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffff2244554444222224222422222222222222224544422ee2ee2eefefffeeee2222222222224444422445544445542effffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffe224555544444422244222222e2e2222222244444422ee22eeefffeeeeeee2222222222242444424445544445442effffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffe22455544444442222222222222e222222244442222e2222222eeeeeee222222222222242422224244444444442efffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffe224555444422222222244222222ee222222442222eeee2222eeeeeeeee22222222222244422222244544444442efffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffe2444555442444422e22244222222eeee2222422eeeeeeee222eeeeeee2e2222222222224442222224444444444eefffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffe2224555444422222e2222422222eeeeeeeeeeeeee2eeeee2222eee22222222222222422444222222e444444444eefffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffe22245554444444422222222222eeee22222eeffeeeeeeee224222e222224242222222242222222ee24444444542efffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffe22245554444444422222222222eeee22222eeffeeeeeeee224222e222224242222222242222222ee24444444542efffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffe24445554444444422222222222e22eeeeeeefffeeeeeeee2254222222244444222222222222222ee2244244454effffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffe24455555444444442222242222222eeeeeefeffeeeeeeee2454244444444544222242222222222222442544454effffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffe2445555544444444222222222222eeeeeeeeeefeeeeeee22454445555544444222222244e22222224222444454effffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffe24455555444444222ee222222242e2eeeeefe22eeee2224455555d555142244222222222222222244222245542effffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffee44455554444442222e22222222222ee2222222222224424544444444442224222222222422444455444445542effffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffe4444555444555442222222224222222444222222244444424444222222222222222222e2245551d5544245542effffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffeee445555444444442222222222222222222222224424444444554222eeee2222eee2222e24555d55544445542effffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffee2445554444444222222222222222222222224422455554455442222222222eee2222ee24555555554555542effffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffee2445554444444222222222222222222222224422455554455442222222222eee2222ee24555555554555542effffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffeee2455544444442222222222222222222222244422445545542222222e222222222222222444555554554442effffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffe2445544444422222222222222222222ee222444222454d442eeee22eee222ee2222222422244555555442eeffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffe2445544444422222222222222222222ee222444222454d442eeee22eee222ee2222222422244555555442eeffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffe24454444444222244222222222eeeeeee22444222244444eeeeeeeeee2222222222222eee44555555442efffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffe2455444444422242222222222efffeee224444222242222eeeeeeee2e22222222222e22224554554222efffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffe2445544444422222222222222eeeeeeee22444444442222eeee2222244444222222422222445554422effffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffe24454444442222222222422eeeeeeeee224444444222e22eeeee222442444222222422224445542eefffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffe245555444424222222222222222eeeee24424444244422eeee2222444442422242222224445422eefffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffe245555442242444222222222222e2ee22222244444222222eee2222222222224424444445442efffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffe245555442242444222222222222e2ee22222244444222222eee2222222222224424444445442efffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffe2455554422244442222e222222222eee2222224442222222ee2222442224244444444445542eefffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffe24445544422222222222222222222e2222ee222222e2eeee2222224224424444444444442eeffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff24444544244222222442222222222e2222ee2e22222222222224444444424444444445422efffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffe22244544444222222222222222e22222222222222222222222244222444444454444422effffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffeee244544442222222222222ee222222eee2e22222222242222224444444444444442eefffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffee445444442244222222222222222e222222222222222222224444444444544422effffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffeee4544444444222222222222222222222222222222222222422424444544442efffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffe244444442222222222222222222222222222222222222244444444544222effffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffe244444442222222222222222222222222222222222222244444444544222effffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffee24554422222222222222222222e2224422222222222444444455422eeefffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffee2444224222222222222222222222244222222222245555545442eeffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffe22244444442222222222222222244442222222244444455422effffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee2454444222222222222222222244422222444444444222eeffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe224444222222222222222224442444424444444222eefffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee224444422224422222e42444244442244444222eeffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee22222242442242222442444444444442222eeefffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee2222222444444444444444444442222eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee2222222444444444444444444442222eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeee2222222222422242222222eeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeee222222222ee2eeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `);
    }
);
sprites.onOverlap(
    SpriteKind.Player,
    SpriteKind.Coin,
    function (sprite3, otherSprite) {
        info.changeScoreBy(1);
        sprites.destroy(otherSprite);
    }
);
scene.onOverlapTile(
    SpriteKind.Player,
    assets.tile`myTile15`,
    function (sprite2, location2) {
        scene.setBackgroundImage(img`
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccbccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbcbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbbbbcbbcbcccbbbbbbbbbcbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbbcbbbbbbbbbbcbbbcbbbcccbbbbbbbbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbcbbbbbbcbbbbcbbbbbbccbbbbbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbccbcbbbccbcbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbcffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccccbbbbcbbbcbcbbcbcccbbbbcccccbbbbbbbbbbbbbbbbbbcffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbccccbbbcbbbbbccbbccbcbbbbbbcbbcbdbbbbbbbbbbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffcbccccccbbbbbbcbbcccbcccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffcbbccccccccbbcccccccbccccccbbbbbbcbbbbbbbbbbcbbbbbbbbbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffcbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbccbbbccbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbccccccccccccccccccccbcccccccbbbbbbccbbbbbbbbbbbbbbbcbbbbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffcbbccccccccccbccbccccbcccbccccbbbbbbbbbbccbbbbbbbbbbbbbcbbbbbbbbbbbcffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffcbcccccbcccccccccccbbcbcbcbcccccbbbcbcbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffcbccccccccccccccccccbcbbbbbcccccbbbbbbbbbcbbbbbccbbbbbbbbbbccbbbbbbbbbbbccfffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffbbcccccccccccccbcccbcbbbccbcbbcbbbbbbbbbbbbccccbbbbbbbbbbbcbccbcbbbbbbbbbcbcffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffcbccccccccccccccccbcbbbbbccccbbbbbbbbbbbcbbbbccbbcbbbbbbbbbbcbccbbccbbbbbbbbbbcfffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffcbcccbcccccccccccccbcbcbbbccbbbbbcbddbbbbbcbbcbbbbcbbbbbbbbbbcccbbbcbbbbbbbbbbccffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffccccccccccccccccccbbbcccbbcbbbbbbbcddbbbbbcbbccbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbccffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffbcccccccccccccccbcbbbbbbbbbbbbbccbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbfffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffcbcccccccccbcccccbcbbbbbbbbbbbbbbcbbbbbbbddbbbbbbbbbbbbbbcbbbcbbbbcbbbbbbbdbbbbbbbbbccfffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffbbcccccccccbcccbcbcbbbbbbbbbbbbbbbbbbbddbddbbbbbbbcbbbbbbbbbbbbdbbbbbbcbbbbbbbbbbcccccfffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffbbbcbbccccccccccbccbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbccccbbcbbbcbbcbbbbbbbbbbbbcbccffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffcbbccbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbcccbcbbbbcbbccbbbbbbbbbbbbbbbbccffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffbbbcccccccccccccccbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbcbcbcccbbbccbbbbcbbbbbbbbbbcbccfffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffcbccccccccccccccccbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbcbbbbbbbbbbcbbbcccbbbcccccbcbbbbbbbbbbbbccfffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffcbcbbcbccccccccccccbbbdbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbcbcbbbbccccbcbcbccccccbbbbbcbbbbbbbbcfffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffbbbbcbbccccccccccccbbbdbbbbbbbbbbbbbcbbbbbbbbbbbbcbccbbbbcccbbbcbccbcbbcbbccccccccbbbcbbbbbbbcfffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffcbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbcbbbcccccccccbbbcbbbbbcccccccccccccbbbbbbbbbbcffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffbbbbccbccbbccccccccbbbbbccbbbbbbbcbcccccbbbbbbbbbbbbcccbcccccbbccbbbbbbbbbbccccccccccbbbcbbbbbbbffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffbbbbccbbccbcccccccccbbbbcbcbbbbbbcbcccccbbbbbbbcbbcbbccbcccccbbcbbbbbbbbbbbccccbccbccbbbbbbbbbbbffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffcbbcbcbbcccccccccccccbbbbcbcbbbbbbcbbccbbbbbbbbbbbbcbcbccbccccccbbbbbbbbbbbbccccbbcbbcbbbbbbbbbbbcfffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffbbbcbbbbcccccccccccccbbbcbcbbccbcbcbcbbbbbbbbbbbbbbcbbbbccccccccbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbcfffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffbbbcbbbbbbcbccccccccccbccbbccccbbccbbbbbbbbbbbbbccbbbccccccccbbcbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbcffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffcbbbbbbbbbbbbccccccccccbccbcccbccbbcbbbbbbbbbbbbbbcbbbccbbcbbbbcbbcbbbbbbbbbbcccccbbbbbbbbbbcbbbbbbbbffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffcbbcbbbbbbbbbccccccccccbccccccbcccccbbbbbbbbbbbbbcbbbbbbbcbbbbbcbbcbbbbbbbbbbccbccbbbbbbbbbbcbbbbbbbbcfffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffbbbbbcbbccbcbcccccccccccccccccbbccbbbbbbbbbbbbbcbbcbcbbbbbbcbbbbbbbbbbbbbbbbbbcbbcbbbbdbbbbcbbbbbbbbbbfffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffbbbbbbbbcbbcccccccccccccccccbccbccbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbfffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffbbbbbbbbbbbbcccccccccccccccbbcccccccbbbbccbcbbbbbbbbbcccbbbbbbbbbbcbbbbbdbbbbbbbbbbbbbbbbbbbcbbbbbbbbbfffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffbbbbbbbbbbbbbccccccccccbcccbcccccbccbcbbbcbbbbbbbbbbbbbbbbbbbbcbbbbccbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbbbbbcffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffbbbbbbbbbbbbbbcbccccccccccccccccccccbccbbcccbbbcbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffbbbbbbbbbbbbbbbcccccccccccccccccccccbbbbccbcccbbbbbbbbbbbbddbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffcbbbbbbbbdbbbbcbbccccccccccccccccccccccbbbcbbccbcbbcbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbccbcbbbbbbffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffcbbbbdbbbddbbbbccbcccccccccbccccccccbcbbcbbbbbbbbcbbbbbbbbbbbbbbbcbbbdbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcfffffffffffffffffffffffff
                ffffffffffffffffffffffffffffcbbbbbbbbbdbbbbbbbcccccccccbccccccccbccbcbbbbcbbcbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcfffffffffffffffffffffffff
                ffffffffffffffffffffffffffffcbbbbbbbbbbbbbcbbbbcbccccccbcccccccccccccbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbcbcfffffffffffffffffffffffff
                ffffffffffffffffffffffffffffbbbbbbbbbbbbbcbbbbbcbcccccbbccccccccccccbbbbbcbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbcbbbbbcbbfffffffffffffffffffffffff
                fffffffffffffffffffffffffffcbbbbbbbbbbbbbbbbbbccccccbbbbccbbbbbbccccccbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbfffffffffffffffffffffffff
                fffffffffffffffffffffffffffcbbbbbbbbbbbbbbbbccccccccbcbccbcbbbbbcbbcccbbcccbcbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbcffffffffffffffffffffffff
                fffffffffffffffffffffffffffcbbbbbbbbbbbbbcbccbcccccccbbccbbbbbbbbbcccbbbcccbbbccbbbbbbbbbbbbbbbbbbbbbbbcbbbbdbbbbbbbbcbcbbbcbbbbbbbbbbcffffffffffffffffffffffff
                fffffffffffffffffffffffffffcbbbbbbbbbcbbbbcbcccccccccccccccbbbbbbbbbccbbcbcbcccbbbbbbbbcbcbbbbbbbbbbbcbbbbbbbbbbcbbbbccbbcbbbbbbbbbbbbcffffffffffffffffffffffff
                fffffffffffffffffffffffffffcccbbbbbbbcbbbbcbcccccccccccccccbbbbbcbcbbccbccbbcccbbbbccbbbbcbbbbbbbbbbbcbbccbbbbbbbcccbcbbbcbbbbbbbbbbbbcffffffffffffffffffffffff
                fffffffffffffffffffffffffffcbccbbbbbbcbbbbcccccccccccccccccccbbbcbbbbbcbcbbbbbbbbbcbbbccbbbbbbbbbbbbbcbcccbbbbbbbcbbbcbbccbbbbbbbbbbbbcffffffffffffffffffffffff
                fffffffffffffffffffffffffffbbccbcbbbbcbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbccbbbbbcbccccbbcbbccbbbbcbbbbbdbbbbbbbbbcffffffffffffffffffffffff
                fffffffffffffffffffffffffffbbbccbcbbbccccbbcccccbccccbcccccccccbbbbbbbbbbbccbbbbbbbbbbbccbbcbcccbbbbcbcbbbcccbbbbbbbbbccbbbbbbbbbbbbbbcffffffffffffffffffffffff
                fffffffffffffffffffffffffffcbbbccbbbbbcbcbbccccccccccbcccccccccbbbbbbbbbcbbbbbbbbbbbbbbbbccccbccbbbbccbccbbbbbbbbbbbbbbccbcccbbbbbbbbbcffffffffffffffffffffffff
                fffffffffffffffffffffffffffcbcccccbbbbcccbbccccccccccbcccccccccbbbbbbbbbbbbbcccccbbbbbbbbcccbbbbbbbbcbbccbbbbbbbbbbbbbbccccccbbbbbbbbbcffffffffffffffffffffffff
                fffffffffffffffffffffffffffcbcccccbbbccccbbcccccccccbcccccccbcccbbbbbbbbbbbbbcbcbbbbbbbbbccccbbbbbbbccbccbbcbbbbbbbbbbbccccccbbbbbbbbbcffffffffffffffffffffffff
                ffffffffffffffffffffffffffffbccbccbbbccccccccccccccccccbbccccccccbbbbbbbbbcccbbbbbccbbcbccccbbccccccccbcccbbbbbbbbbbbbbccccccbbbcbbbbbfffffffffffffffffffffffff
                ffffffffffffffffffffffffffffcccbcbbbbbccbcccccbcccccccccbccccccccbbbbbbbbbbbbbbbbbbccccbbccccbccccccccbccccbbbbcbbbbbccccccbccbbbbbbbbfffffffffffffffffffffffff
                ffffffffffffffffffffffffffffccbbbbbbbbbccccbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbccbcccccccccccccccccbbcbbbbbbbbccbcccbbbcccbbbdbcfffffffffffffffffffffffff
                ffffffffffffffffffffffffffffccbbbbbbbbbcccccbbcccccccccccccccccbbbbbbbbbbbbcbbccccccbbccccccccccccccccccccbccbbbbbcbcbcccccbbcbccbbbbcfffffffffffffffffffffffff
                ffffffffffffffffffffffffffffccbbbbbbbbbbbcccbbcccccccccccccccccbbbbbbbbbbccccbbcccbbbbbccccccccccbcccccccccccbbbbbcbcccccbcccbbbcbbbbcfffffffffffffffffffffffff
                ffffffffffffffffffffffffffffccbbbbbbbbbcbcccccccbccccbcccccccccbbbbcbbbbbbbcccbbcccbbbcccccccccccccccccccbcccbbbbbbbcccccbcbbbbbcbbbbcfffffffffffffffffffffffff
                fffffffffffffffffffffffffffffccbbbbbbbbbbccccbccccbbbbcccccccccbcbbbbbbbbbbcccbbcccccccccccccccccccccccbcccbcbbbbcccbbbccbccccbbbbbbcffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffcccbbbbbbbbbccccbcccccbbbbccccccccbcbbbbbbbcbbccbcbbcbbcbccccccccbbcccccccbccccbbbbbcbcbbbcbbcccccbbbbbcffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffccbccbbbbccccccccccccbbbbbcccccccccbbbbcbbbbcbbcbbbbbbbccccccccbcbbbbcccbccccccbbbcccccbbccbcccccbbcbbbcffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffccbbcbbbbccccccccccccbbbbbccccccccccbbbbbbbbccbcccbbbbbbccccccccbbbbbbccbccccccccbcccccbbcccccbccbbcbbbfffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffcbbbbbbbbbccccccccccbbbccccccccccccbbbbcccbbbcbcccbbbbbbccccbcbbbbbbcbbbbcccccbccbccccbbcccbbccccccbbbfffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffccbbbbbbbbccccccccccccbccccccccccccbcbbbbbbbccbcbbbbbbbbccccccbbccbcccbbbcbcccbbcbcccbbbcbcbbccccbbbbbfffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffccbbbbbbbbbbccccbccccccbcccccccccccbccbbbccccbcccbbbbcbbcccccbbbbbccccbccbbcccbbcbcccbbbcbcbbcbcbcbbbcfffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffcccbbbbbbbbcbccccccccccbccccccccccccccccbcccccbccbbbbbbbbcbccccccccccccccccccccbccccbbcccbbbbbbcbcbbbcfffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffbcbbbbbbbbccccccccccbcbccccccccccccccccccccbbcbbbccbbbbbcbcccccccccccccccccccccccbbbcccbbbbbbccccbbcffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffccbbbbbbbbcccccccccbbccbcccccccccccccccccccbbbbcbbccbcbbbcccccccccccbbccbcccccbbccbbcccbbbbbccccbbbcffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffccbbbbbbbbccccbccccbbbbbccccccccccccccccbcccbcccccccccccbcbcccccccccbcccbbbcccbbbcbbccccbbcbcccbbbbfffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffccbbbbbbbbbccccccbbbbdbcccccccccccccccccccbccbcbbccccbccccccccccccbbccccbccccbbbbbbbcbcbbbcccccbbcfffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffcbbbbbbbbbccccccccbbbbbcccccccccccccccccccbcbbcccccbcccccccccccccccbcccccbccbbbbbbbcbcbbbcccccbbffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffccbbbbbbbbbccbccccbbbbccccccccccccccccccccccccccccbcccccccccccccccbbbcccccbcbbbbbbbbbbcbbcccccbbffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffccbbbbdbbbccccccccbbbbbcccccccccccccccccccccccbcccbbccccccccccccccbbbcccccbbbbbbbbbbbbcbccccccbbffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffccbbbbbbbccccccccccbccbcccccccccbcbcbcccccccccccccbcbcbccccccccccbbcccbcbbcbbbbdbbbbbbbcccccccfffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffccbbbbbbbbccccccccbbbcccccccccccccccccccccccccccbccbbcbbbccccbccccbcccccbbbbbdbbbbbbcccccbccffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffcbbbbbbbbccccccccccccccccccccccccccccbccccccccccbbbcbbbbccbbcccccbccccbbbbbbbbbbccccccbcccfffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffcbbbbbcbccccccbcccccccccccccccccccccccccccccccccbccbcbbbbcbcccbbbbbbccbbbbbbbbbccbccbcccffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffccbbbbccbcbbbccccccccccccccccccccccccccccccccbbbcbcccbbbbccccccbccbcccccdbbbbbcbbcccbcccffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffccbbbbccbcccbccccccccbccccccccccccccccccccccccccbcbccbcbbbbccccbccccbbcbbbbbbbbbccccbcccffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffcbccbbcbbbcccccccccccccccccccccccccccccccbccbcccbcbbbbccccccccccccbbcccbbbcbbccbbbccffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffcbcbbbccbbccccccccccccccccccccccccccccccccccbcccccbcbcccbcccbbcbcbcbbbcccbcbbbcbbbccffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffcccbbbcbbcccccccccccccccccccccccccccccccccccccccccccbcbbccbbbbccbccbbbcbcbbbbbbbbbfffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffccccbccbbcbccccccccccccccccccccccccccccccccccccccbcbccbbbcbbbbcbbbccbbcbbbbbbbbbbcfffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffccccbcccbcbcccccccccccccccccccccccccccccccccccccccbcbbcbccbbbbcbcbbbbbbbdbbbbbbcffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccbccccccccccccccbbbccccbccbbbbcbdbbbbbcbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccbccbcccccbbcccbbccbbbbbbbcbcbbbcbbbbbbbffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffccccccbbbccccccccccccccccccccccccbbcccccbbccbbcccccccbbbbbbbbbbcbbcbbbbbbbcffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccbbccccbcccbbbbcccccbbbbbbbbbcbbbbbbbbbccfffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccbbbccccccccbbbccccccbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffccbccccccccccccccccccccccccccccccbbccccccccbcbccccccbbbcbbccbbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbbccccccccccccccccccccccccbbbbccccbbccccccccccbbbbbbbcbbbbbbbbccfffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffbbccccccccccccccccccccccccccccccbccbccccccccccbbcbbccbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffccbccccccccccccccccccccccccccccccbccccccccccccbccbbccbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffccbcccccccccccccccccccccccccccccbccccccccccccbcbbcbbbbbbbbcffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffccbccccccccccccbcccbcbccbccccccccccccccccbccbbcccbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccbccccccccccccbccccbccbbcbbbbbbbbccffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbcccbbcbccccccccccccbbbbbbbbbbbbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbcccbcccbbbbbcccccccccccbbbbbbbbbbbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbccccccbcccbbccccccccbbbbbbbbbbbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccbbbbbbbbbccccccbbbbbbbbbbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `);
    }
);
scene.onOverlapTile(
    SpriteKind.Player,
    assets.tile`myTile10`,
    function (sprite2, location2) {
        scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbbbbccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbccccccfffffffffffffffffffffffffffffffffffffcfcfcfcccffffcccfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbcccccccfffffffffffffffffffffffffffffffffffccceccccfffffccceccfccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffcfcceccccccffffffffffcccccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddbbbbbbbbbbbbbbbccccccfffffffffffffffffffffffcffcccceeeeffffffffffffffcebeccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddddbbbbbbbbbbbbbbbcccccccffffffffffffffffffffccccebbbccfffffffffffffffffccceecbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddbbbbbbbbbbbbbbbcccccccfffffffffffffffffccceeccccbcfffffffffffffffffffccccebcceccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddbbbbbbbbbbbbbbbbccccccccfffffffffffffffcbbccccbcfffffffffffffffffffffbccccceeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddbddbbbbbbbbbbbbbccccccccffffffffffffffffcccbbbffffffffffffffffffffffecbbccceeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddbbbbbbbbbbbbbcccccccccfffffffffffffffffcbffffffffffffffffffffffffbbbccbccbeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddbbbbbbbbbbbbbbcccccccccffffffffffffffffffffffffffffffffffffffffffbbbcbbccbecccfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddbbbbbbbbbbbbbbbbbccccccccffffffffffffffffffffffffffffffffffffffffffbbbcbbcceececfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbbbbbbbbbbbbbbbbbbbccccccccffffffffffffffffffffffffffffffffffffffccfebbccbcbecccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdddddddddbbbbbbbbbbbbbbbbbbccccccccccfffffffffffffffffffffffffffffffffffffcccfbbbcccceececffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddbbbbbbbbbbbbbbbbbbbbccccccccccfffffffffffffffffffffffffffffffffffccccfbbbcbccecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbbbbbbbbbbbbbbbbbbbbbbbccccccccffffffffffffffffffffffffffffffffffccccfcbbccccbecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffcdddddddddbbbbbbbbbbbbbbbbbbbbbbbccccccccfffffffffffffffffffffffffffffffffcccbcfbcecbccbcecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccfffffffffffffffffffffffffffffffccccccccbbcccceccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffcddddddddbbbbbdbbbbbbbbbbbbbbbbbbbbbcccccccfffffffffffffffffffffffffffffcccccbcfbbcccceeccffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbccccccfffffffffffffffffffffffffffffccccccfbcbbcceeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddbdddbbbbbbbbbbbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffcfccccffbbbccbeccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffccccccfcbcbcbeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddbddbbbbbbbdbbbbbbddbbbbbbbbbbcccccffffffffffffffffffffffffffffccccbcfcbcbcbeccffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddbddbdbdbdddbddddbbbbbbbbbcccccfffffffffffffffffffffffffffccccbcfbbcbcbecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffcdddddddddddddddddddddddddbdddbbbbbbbbccccccffffffffffffffffffffffffffccccbcfcbbccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddbbbbbbbcccccccfffffffffffffffffffffffffccccbcfbbcccececcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff1ddddddddddddddddddddddddddddbbbbbbbbcceccccffffffffffffffffffffffffcccccfcbccccececcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff1dddddddddddddddddddddddddddbbbbbbbbeeeecccccffffffffffffffffffffffcccccfbbcccceccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffc1dddddddddddddddddddddddddddbbbbbbbeeececccccffffffffffffffffffffcfcccccbbcbcbecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffc1ddd11dddddddddddddddddddbbbbbbbbbbeeeeeeecccfffffffffffffffffffccccbcfbbcccecefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffc1dddd1ddddd1ddddddddddddbbbbbbbbbbbbbeeeeeeccffffffffffffffffffcccccfbbcccbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffd1ddd1dd1dd1ddddddddddddbbbbbbbbbbbbbbeeeeccccffffffffffffffffcfccccfbbccceeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffd1ddd1ddddddddddddddddbbbbbbbbbbbbbbbbbbeeeeccfffffffffffffffcccccfccccccbceccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffcd1111d1ddddddddddddbbbbbbbbbbbbbbbbbbbbbeeecccffffffffffffffcccccfbbcbcbecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffcfcedddd1dddddddddddddbbbbbbbbbbbbbbbbbbbbbeeeecccffffffffffffcccccfcbccccececcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffccecbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbeecccccffffffffffcfccbcfbbcbceccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffcfffffffffffffffffccbccbddddddddddddbbbbbbbbbbdddddddbbbbbbbbbbeeecccfffffffffcccccfbbcccbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffccecbbbcdddddddddddbbbbddddddddddddbbbbbbbbbbbbeeccccfffffffccccbcfbbcccecccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffcccbcbbbcbddddddddddddddddddddddddddbbbbbbbbbbbbbeeccccfffffccccbcfbbcbceeccffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffccecbcbfcccddddddddddddddddddddddddddbbbbbbbbbbbbeececccfffccccccfbbcccbbccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffccecbbbfccccbddddddddddddddddddddddddddbbbbbbbbbbbbeecccfffcccccfcbccccecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffcccbccbbfcccffcdddddddddddddddddddddddddbbbbbbbbbbbbeeecccfccccccfbbccceecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffcccccbbbfbcccfffddddddddddddddddddddddddbdbbbbbbbbbbbeeeccccccbcfcbcbceeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffcebccbbcbcccffffdddddddddddddddddddddddddddbbbbbbbbbbeeeccccbcfbbcbceeccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffcfccebccbccbccffffffcdddddddddddddddddddddddddddbbbbbbbbbbbbbbbccbbcbccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffccbcbcbbcbccccffffffddddddddddddddddddddddddddbbbbbbbbbbbbbbccbbcbcbbccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffcbecbcbbfbccccfffffffbdddddddddddddddddddddddddbbbbbbbbbbbbeebbbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffcccecbcbbfcccccfffffffffdddddddddddddddddddddddddbbbbbbbbbbebbbbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffcccbecccbbfccccccfffffffffbdddddddddddddddddddddddddbbbbbbbbbbbbbbbbcecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffccccbccbbbfcbcccccffffffffffddddddddddddddddddddddbbbbbbbbbbbbbbbbbbeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffccbbcccbcfccccccfffffffffffcddddddddddddddddddbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffcceecbcbbfcbcccccffffffffffffdddddddddddddddbbbbbbbbbbbbbbbbbbbbbeecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffcceccbbccfcbccccccfffffffffffcdddddddddddbbbbbbbbbbbbbbbbbbbbbbeccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffcecbccccbbcfccccccfccfffffffffffcddddddbbbbbbbbbbdbbbbbbbbbbbbceccccffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffccebcbbbbbfccbcccccfcccffffffffffcbbbbbbbbbbbbdbbbbbbbbbbbbbbeecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffcccceccbcbbbffcbccccccccfccccccccfccbbbbbbbbbeebbbbbbbbbbbbbeeeecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffccceebcccbbbffccbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbeeeecccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffcecbeccccbbbbffccbbcccccccccccccccbccccbbbbbbbbbbbbbbbbeeeeccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffcccbeccbbbbbbefffccccbbbbbbbcccccfffbbbbbbbbbbbbbbbbbeeeeccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffcfcccbbcccbccbbbbbccfffffcccfffcffbbcbbbcbcbbbbbbbbbebeeebeeeeeeeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffcfffcccbbcccbbccbbbbbbbbbbbbbbbbbbbbbcbcbcccbbbbbbbbbbbbbbbbeeeeeeecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffccceeccccbcbccbbbbbbbbbbbbbccccbccccceeccccbbbbbbbeeeeeeeeeccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffcccccbbcbcccbbcbbbcccccbbccbcccccceebcccccccfcbbbbbeeeeeeeeeecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffccccceebbccccccccccccccccccbbebeccccccffccffffccbbbbeeeeeeeeeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffccfccceccceeeebebbcccccbccbeebeccccccccffffffffffffffcbbbbeeeeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffcfffcccecccccebeebbeeeeccccccecccfffcffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffcffcccceecccccccccceeccccffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffcfcfcfccfcccccccfccfcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffcfffcffffffcffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffcfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `);
    }
);
let COIN: Sprite = null;
let RickAstleyMunchkin: Sprite = null;
// Counts down once you leave the ground
let coyoteCounter = 0;
let my_sprite: Sprite;

scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbbbbccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbccccccfffffffffffffffffffffffffffffffffffffcfcfcfcccffffcccfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbcccccccfffffffffffffffffffffffffffffffffffccceccccfffffccceccfccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffcfcceccccccffffffffffcccccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddbbbbbbbbbbbbbbbccccccfffffffffffffffffffffffcffcccceeeeffffffffffffffcebeccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddddbbbbbbbbbbbbbbbcccccccffffffffffffffffffffccccebbbccfffffffffffffffffccceecbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddbbbbbbbbbbbbbbbcccccccfffffffffffffffffccceeccccbcfffffffffffffffffffccccebcceccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddbbbbbbbbbbbbbbbbccccccccfffffffffffffffcbbccccbcfffffffffffffffffffffbccccceeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddbddbbbbbbbbbbbbbccccccccffffffffffffffffcccbbbffffffffffffffffffffffecbbccceeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddbbbbbbbbbbbbbcccccccccfffffffffffffffffcbffffffffffffffffffffffffbbbccbccbeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddbbbbbbbbbbbbbbcccccccccffffffffffffffffffffffffffffffffffffffffffbbbcbbccbecccfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddbbbbbbbbbbbbbbbbbccccccccffffffffffffffffffffffffffffffffffffffffffbbbcbbcceececfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbbbbbbbbbbbbbbbbbbbccccccccffffffffffffffffffffffffffffffffffffffccfebbccbcbecccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdddddddddbbbbbbbbbbbbbbbbbbccccccccccfffffffffffffffffffffffffffffffffffffcccfbbbcccceececffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddbbbbbbbbbbbbbbbbbbbbccccccccccfffffffffffffffffffffffffffffffffffccccfbbbcbccecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbbbbbbbbbbbbbbbbbbbbbbbccccccccffffffffffffffffffffffffffffffffffccccfcbbccccbecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdddddddddbbbbbbbbbbbbbbbbbbbbbbbccccccccfffffffffffffffffffffffffffffffffcccbcfbcecbccbcecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccfffffffffffffffffffffffffffffffccccccccbbcccceccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddddddddbbbbbdbbbbbbbbbbbbbbbbbbbbbcccccccfffffffffffffffffffffffffffffcccccbcfbbcccceeccffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbccccccfffffffffffffffffffffffffffffccccccfbcbbcceeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddbdddbbbbbbbbbbbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffcfccccffbbbccbeccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbccccccffffffffffffffffffffffffffffccccccfcbcbcbeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddbddbbbbbbbdbbbbbbddbbbbbbbbbbcccccffffffffffffffffffffffffffffccccbcfcbcbcbeccffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddbddbdbdbdddbddddbbbbbbbbbcccccfffffffffffffffffffffffffffccccbcfbbcbcbecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdddddddddddddddddddddddddbdddbbbbbbbbccccccffffffffffffffffffffffffffccccbcfcbbccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddbbbbbbbcccccccfffffffffffffffffffffffffccccbcfbbcccececcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ddddddddddddddddddddddddddddbbbbbbbbcceccccffffffffffffffffffffffffcccccfcbccccececcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1dddddddddddddddddddddddddddbbbbbbbbeeeecccccffffffffffffffffffffffcccccfbbcccceccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1dddddddddddddddddddddddddddbbbbbbbeeececccccffffffffffffffffffffcfcccccbbcbcbecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1ddd11dddddddddddddddddddbbbbbbbbbbeeeeeeecccfffffffffffffffffffccccbcfbbcccecefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1dddd1ddddd1ddddddddddddbbbbbbbbbbbbbeeeeeeccffffffffffffffffffcccccfbbcccbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd1ddd1dd1dd1ddddddddddddbbbbbbbbbbbbbbeeeeccccffffffffffffffffcfccccfbbccceeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd1ddd1ddddddddddddddddbbbbbbbbbbbbbbbbbbeeeeccfffffffffffffffcccccfccccccbceccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcd1111d1ddddddddddddbbbbbbbbbbbbbbbbbbbbbeeecccffffffffffffffcccccfbbcbcbecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcedddd1dddddddddddddbbbbbbbbbbbbbbbbbbbbbeeeecccffffffffffffcccccfcbccccececcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccecbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbeecccccffffffffffcfccbcfbbcbceccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffccbccbddddddddddddbbbbbbbbbbdddddddbbbbbbbbbbeeecccfffffffffcccccfbbcccbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccecbbbcdddddddddddbbbbddddddddddddbbbbbbbbbbbbeeccccfffffffccccbcfbbcccecccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbcbbbcbddddddddddddddddddddddddddbbbbbbbbbbbbbeeccccfffffccccbcfbbcbceeccffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccecbcbfcccddddddddddddddddddddddddddbbbbbbbbbbbbeececccfffccccccfbbcccbbccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccecbbbfccccbddddddddddddddddddddddddddbbbbbbbbbbbbeecccfffcccccfcbccccecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbccbbfcccffcdddddddddddddddddddddddddbbbbbbbbbbbbeeecccfccccccfbbccceecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccbbbfbcccfffddddddddddddddddddddddddbdbbbbbbbbbbbeeeccccccbcfcbcbceeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcebccbbcbcccffffdddddddddddddddddddddddddddbbbbbbbbbbeeeccccbcfbbcbceeccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccebccbccbccffffffcdddddddddddddddddddddddddddbbbbbbbbbbbbbbbccbbcbccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbcbbcbccccffffffddddddddddddddddddddddddddbbbbbbbbbbbbbbccbbcbcbbccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbecbcbbfbccccfffffffbdddddddddddddddddddddddddbbbbbbbbbbbbeebbbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccecbcbbfcccccfffffffffdddddddddddddddddddddddddbbbbbbbbbbebbbbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbecccbbfccccccfffffffffbdddddddddddddddddddddddddbbbbbbbbbbbbbbbbcecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccbccbbbfcbcccccffffffffffddddddddddddddddddddddbbbbbbbbbbbbbbbbbbeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccbcfccccccfffffffffffcddddddddddddddddddbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcceecbcbbfcbcccccffffffffffffdddddddddddddddbbbbbbbbbbbbbbbbbbbbbeecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcceccbbccfcbccccccfffffffffffcdddddddddddbbbbbbbbbbbbbbbbbbbbbbeccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcecbccccbbcfccccccfccfffffffffffcddddddbbbbbbbbbbdbbbbbbbbbbbbceccccffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccebcbbbbbfccbcccccfcccffffffffffcbbbbbbbbbbbbdbbbbbbbbbbbbbbeecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccceccbcbbbffcbccccccccfccccccccfccbbbbbbbbbeebbbbbbbbbbbbbeeeecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccceebcccbbbffccbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbeeeecccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcecbeccccbbbbffccbbcccccccccccccccbccccbbbbbbbbbbbbbbbbeeeeccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbeccbbbbbbefffccccbbbbbbbcccccfffbbbbbbbbbbbbbbbbbeeeeccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcccbbcccbccbbbbbccfffffcccfffcffbbcbbbcbcbbbbbbbbbebeeebeeeeeeeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcccbbcccbbccbbbbbbbbbbbbbbbbbbbbbcbcbcccbbbbbbbbbbbbbbbbeeeeeeecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccceeccccbcbccbbbbbbbbbbbbbccccbccccceeccccbbbbbbbeeeeeeeeeccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccbbcbcccbbcbbbcccccbbccbcccccceebcccccccfcbbbbbeeeeeeeeeecccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccceebbccccccccccccccccccbbebeccccccffccffffccbbbbeeeeeeeeeccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccceccceeeebebbcccccbccbeebeccccccccffffffffffffffcbbbbeeeeccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcccecccccebeebbeeeeccccccecccfffcffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcccceecccccccccceeccccffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfccfcccccccfccfcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffffffcffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `);
RickAstleyMunchkin = sprites.create(assets.image`myImage0`, SpriteKind.Player);
controller.moveSprite(RickAstleyMunchkin, 100, 0);
tiles.setCurrentTilemap(tilemap`level0`); // ADJUST TILE MAP ON BUTTON NEXT TO LINE NUMBER
tiles.placeOnTile(RickAstleyMunchkin, tiles.getTileLocation(2, 246));
RickAstleyMunchkin.ay = 500;
scene.cameraFollowSprite(RickAstleyMunchkin);
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    COIN = sprites.create(
        img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . f f f f f f f . . . . .
                . . . f 5 5 5 5 5 5 5 f . . . .
                . . f 5 5 4 4 4 4 5 5 5 f . . .
                . f 5 5 5 5 5 5 5 5 5 5 5 f . .
                . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                . . f 5 5 4 4 5 5 5 5 5 f . . .
                . . . f 5 5 5 5 5 5 5 f . . . .
                . . . . f f f f f f f . . . . .
                . . . . . . . . . . . . . . . .
        `,
        SpriteKind.Coin
    ); // Runs the coin animation
    animation.runImageAnimation(
        COIN,
        [
            img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f 5 5 5 5 5 5 5 f . . . . 
                . . f 5 4 4 4 4 4 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
                . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
                . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
                . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
                . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
                . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
                . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
                . . f 5 5 4 4 4 5 5 5 5 f . . . 
                . . . f 5 5 5 5 5 5 5 f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 5 5 5 5 5 5 f . . . . . 
                . . f 5 4 4 4 4 4 5 5 f . . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 5 5 5 5 5 5 5 5 5 f . . . 
                . . f 5 5 4 4 4 5 5 5 f . . . . 
                . . . f 5 5 5 5 5 5 f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 5 4 4 5 5 f . . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 5 5 5 5 5 5 f . . . . 
                . . . . f 5 5 4 5 5 f . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . . f f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . f 5 4 5 f . . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 5 5 5 5 f . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 4 f . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 4 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 4 f . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . f 5 4 5 f . . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 4 5 5 5 f . . . . . 
                . . . . f 5 5 5 5 5 f . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . . f 5 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 5 4 4 5 5 f . . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 4 5 5 5 5 5 f . . . . 
                . . . f 5 5 5 5 5 5 5 f . . . . 
                . . . . f 5 5 4 5 5 f . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . . . f f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 5 5 5 5 5 5 f . . . . . 
                . . f 5 4 4 4 4 4 5 5 f . . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 4 5 5 5 5 5 5 5 5 f . . . 
                . f 5 5 5 5 5 5 5 5 5 5 f . . . 
                . . f 5 5 4 4 4 5 5 5 f . . . . 
                . . . f 5 5 5 5 5 5 f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
            img`
                        . . . . . . . . . . . . . . . .
                        . . . . f f f f f f f . . . . .
                        . . . f 5 5 5 5 5 5 5 f . . . .
                        . . f 5 4 4 4 4 4 5 5 5 f . . .
                        . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                        . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                        . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                        . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                        . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                        . f 5 4 5 5 5 5 5 5 5 5 5 f . .
                        . f 5 5 5 5 5 5 5 5 5 5 5 f . .
                        . . f 5 5 4 4 4 5 5 5 5 f . . .
                        . . . f 5 5 5 5 5 5 5 f . . . .
                        . . . . f f f f f f f . . . . .
                        . . . . . . . . . . . . . . . .
                        . . . . . . . . . . . . . . . .
                `,
        ],
        100,
        true
    );
    tiles.placeOnTile(COIN, value);
    tiles.setTileAt(value, assets.tile`transparency16`);
}
game.onUpdate(function () {
    RickAstleyMunchkin.setImage(assets.image`myImage0`);
    if (RickAstleyMunchkin.vx < 0) {
        RickAstleyMunchkin.image.flipX();
    }
});

const collisionBoxWidthDefault: number = 5; // by default forms a 5x5 box around the text element collision.
const collisionBoxHeightDefault: number = 5;
class TextLocation {
    readonly x: int8;
    message: string;
    readonly y: int8;

    _width: number = collisionBoxWidthDefault;
    _height: number = collisionBoxHeightDefault;

    accepted: boolean = false;

    callback: () => void = null;

    tag: string = "";

    constructor(message: string, coordX: number, coordY: number) {
        this.message = message;
        this.x = coordX;
        this.y = coordY;
    }
    get locX() {
        return this.x;
    }
    get locY() {
        return this.y;
    }
    get messageString() {
        return this.message;
    }
    
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }

    execute() {
        console.log(this.callback);
        if (this.callback != null) {
            this.callback();
        }
        switch (this.tag) {
            case "earthExit":
                this.lockEarthExit();
                break;
            case "leaderMessage":
                this.leaderMessage();
                break;
            case "Beginning":
                this.beginningOfGame();
                break;
            default:
                break;
        }
    }
    setCallbackFunc(callback: () => void): TextLocation {
        this.callback = null;
        return this;
    }
    setTag(newTag: string): TextLocation { // deprecated. shouldn't be used.
        this.tag = newTag;
        return this;
    }

    lockEarthExit() {
        controller.moveSprite(RickAstleyMunchkin, -0, 0);
        let optionChosen = false;
        RickAstleyMunchkin.sayText("A: Saturn,       B: Mercury", 2500);
        let textSayingInterval = setInterval(() => {
            if (optionChosen) {
                clearInterval(textSayingInterval);
                controller.moveSprite(RickAstleyMunchkin, 100, 0);
            } else { //Lets the user decide to go between Saturn or Mercury
                RickAstleyMunchkin.sayText("A: Saturn        B: Mercury", 2500);
            }
        }, 2500);
        controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
            if (!optionChosen) { // Teleports to Saturn
                tiles.placeOnTile(RickAstleyMunchkin, tiles.getTileLocation(135, 247));
                optionChosen = true;
                clearInterval(textSayingInterval);
                controller.moveSprite(RickAstleyMunchkin, 100, 0);

            }
        });
        controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
            if (!optionChosen) { // Teleports to Mercury
                tiles.placeOnTile(RickAstleyMunchkin, tiles.getTileLocation(253, 237));
                optionChosen = true;
                clearInterval(textSayingInterval);
                controller.moveSprite(RickAstleyMunchkin, 100, 0);
            }
        });
        levelSelector();
    }

    set width(newWidth: number) {
        // high constraint to prevent them from overlapping.
        if (newWidth <= 0 || newWidth > 200) {
            return;
        }
        this._width = newWidth;
    }
    set height(newHeight: number) {
        // high constraint to prevent them from overlapping.
        if (newHeight <= 0 || newHeight > 200) {
            return;
        }
        this._height = newHeight;
    }

    checkCollision(ix: number, iy: number): boolean {
        return (
            ix <= this.x + this._width &&
            ix >= this.x - this._width &&
            iy <= this.y + this._height &&
            iy >= this.y - this._height
        );
    }
    leaderMessage() {
        controller.moveSprite(RickAstleyMunchkin, -0, 0);
        let optionChosen = false;
        RickAstleyMunchkin.sayText("A: Accept,       B: Reject", 1500);
        let textSayingInterval = setInterval(() => {
            if (optionChosen) {
                clearInterval(textSayingInterval);
                controller.moveSprite(RickAstleyMunchkin, 100, 0);
            } else {
                RickAstleyMunchkin.sayText("A: Accept        B: Reject", 1500);
            }
        }, 2500);
        controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
            if (!optionChosen) { // Added the Riddle in which they can get part of their backstory.
                game.showLongText("Since the birth of our species, the human race has stood like no other. Bound solely"
                    +" by our own technological innovation, our planet and solar system have been fruitful in our necesities. " 
                    + "However, time has run out and our planet can no longer sustain our activity. " 
                    + "However, time has run out and our planet can no longer sustain our activity. "
                    + "                                                                             "
                    + "We must now pay the toll. And in this race, we will survive. We always have."
                    + "[Command-819 RELAY -- CONTACT RECIEVE - 0:00:00 0-0-0. NO CONTACT]"
                    + "                                                                  "
                    + "[RE-ATTEMPTING CONTACT.... LAST KNOWN - TEN DAYS AGO]",


                    DialogLayout.Top)
                optionChosen = true;
                clearInterval(textSayingInterval);
                controller.moveSprite(RickAstleyMunchkin, 100, 0);

            }
        });
        controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
            if (!optionChosen) {
                optionChosen = true;
                clearInterval(textSayingInterval);
                controller.moveSprite(RickAstleyMunchkin, 100, 0);
            }
        });
    }
    riddle() {
        controller.moveSprite(RickAstleyMunchkin, -0, 0);
        let optionChosen = false;
        RickAstleyMunchkin.sayText("A: Earth,       B: Kepler-442b", 1500);
        let textSayingInterval = setInterval(() => {
            if (optionChosen) {
                clearInterval(textSayingInterval);
                controller.moveSprite(RickAstleyMunchkin, 100, 0);
            } else {
                RickAstleyMunchkin.sayText("A: Saturn        B: Mercury", 2500);
            }
        }, 1500);
        controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
            if (!optionChosen) {
                optionChosen = true;
                clearInterval(textSayingInterval);
                controller.moveSprite(RickAstleyMunchkin, 100, 0);
                game.showLongText("Make sure you've picked the right asnwer....", DialogLayout.Bottom)
            }
        });
        controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
            if (!optionChosen) {
                optionChosen = true;
                clearInterval(textSayingInterval);
                controller.moveSprite(RickAstleyMunchkin, 100, 0);
                game.showLongText("Make sure you've picked the right asnwer....", DialogLayout.Bottom)
            }
        });
    }
    beginningOfGame() {
        game.showLongText("Welcome, what is the name you remember?", DialogLayout.Top);
        let nameUV = game.askForString("What's the name you remember?", 15, true); // UV for unverified
        if (nameUV == "") {
            nameUV = "BOB";
        }
        nameUV = nameUV.toUpperCase();
        nameUV = nameUV.trim();

        if (!match(nameUV)) {
            nameUV = "BOB"
        }
        character.name = nameUV;

        // song
        let num123= game.askForNumber("Do you like the song unwritten (1 - yes, 0 - no)",1);
        if (num123 > 1 || num123 < 0) {
            num123 = 1;
            RickAstleyMunchkin.sayText("I must like unwritten and fumbled on my keyboard", 2000);
        }
        const likesOriginalSong = (num123 == 1);
    }
}
function match(str: string): boolean {
    if (str.length>1) {
        return (isAlphaNumeric(str[0])) && match(str.slice(1));
    }
    if (str.length==1) {
        return isAlphaNumeric(str[0]);
    }
    return true;
    
}
function isAlphaNumeric(str: string) {
    return str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 122;
    // 48 is the number 0, 122 is the lowercase z
}
function newtl(
    message: string,
    boundLeft: number,
    boundRight: number,
    boundBottom: number,
    boundTop: number,
    callback: () => {} = null
): TextLocation {
    // first these numbers need to be equalized
    if (boundLeft > boundRight) {
        let temp = boundRight;
        boundRight = boundLeft;
        boundLeft = temp;
    }
    if (boundTop > boundBottom) {
        // for some reason, jumping makes the y number go down.
        let temp = boundBottom;
        boundBottom = boundTop;
        boundTop = temp;
    }
    let x = (boundLeft + boundRight) / 2.0;
    let y = (boundTop + boundBottom) / 2.0;
    let lt = new TextLocation(message, x, y);
    lt.width = Math.abs(boundLeft - boundRight);
    lt.height = Math.abs(boundTop - boundBottom);
    lt.callback = callback;
    return lt;
}
function tltl(
    messgae: string,
    x: number,
    y: number,
    callback: () => {} = null
) {
    // creates new text location using tile location arguments
    x = 16 * x + 8;
    y = 16 * y + 12;
    return new TextLocation(messgae, x, y).setCallbackFunc(callback);
}
// creates bounded version oftextlocation, with tile location numbers
function tltlb(
    message: string,
    lb: number,
    rb: number,
    bb: number,
    tb: number,
    callback: () => {} = null
) {
    lb = lb * 16 + 8;
    rb = rb * 16 + 8;
    tb = tb * 16 + 12;
    bb = bb * 16 + 12;
    return newtl(message, lb, rb, bb, tb, callback);
}
const list: TextLocation[] = [

    tltl("Move forward/back with the WASD keys.", 2, 246),
    tltl("Answer questions with A and B.", 2, 246),
    tltl("Welcome to the beginning.", 2, 246).setTag("Beginning"),
    tltl("Earth. Is this place really suitable?", 23, 246),
    tltl("Find somewhere else to go, you can't stay here!", 37, 244),
    tltl("You have a message from your leader, do you accept? A/B", 65, 244).setTag("leaderMessage"),
    tltl("This place is going to crumble soon!", 93, 248),
    tltl("You must decide between Saturn (A) or Mercury (B)", 125, 244).setTag("earthExit"),
    tltl("I see you have decided on Saturn, is this where you want to finally stay?", 135, 247),
    tltl("You have escaped Earth, but you will not escape me! MWAHAHA!", 147, 246),
    tltl("You have reached the Mercury, maybe this is a better spot.", 253, 237),
    // new TextLocation("Welcome to the Beginning", 3000, 2998),
];

class voidFunctionWrapper {
    public callback: () => void;
}
const textCollisionBurnTime = 5; // this number * 150 (or the interval time), is the amount of time the interval will no longer impact the game.
let textCollisionTriggered: boolean = false;
let textCollisionTriggerCounter: number = 0;
function checkTextCollision() {
    console.logValue("x", RickAstleyMunchkin.x);
    console.logValue("y", RickAstleyMunchkin.y);
    if (textCollisionTriggered) {
        // prevents this function from checking again, which would lock the user through continued dialog boxes.
        if (textCollisionTriggerCounter >= textCollisionBurnTime) {
            textCollisionTriggered = false;
            textCollisionTriggerCounter = 0;
            return;
        } else {
            textCollisionTriggerCounter++;
            return;
        }
        return; // just in case;
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i].checkCollision(RickAstleyMunchkin.x, RickAstleyMunchkin.y)) {
            textCollisionTriggered = true;
            if (!list[i].accepted) {
                list[i].accepted = true;
                game.showLongText(list[i].message, DialogLayout.Top);
                list[i].execute();
            }
        }
    }
}

function SpriteLocToTileLoc(x: number, y: number): tiles.Location {
    return tiles.getTileLocation((y - 12) / 16.0, (x - 8) / 16.0);
}
let allowedLevels: string[] = [
    "Earth"
];
function levelSelector(source: string = null) {
    if(menuLocked) {
        worldMenu.close();
    }
    let menuItems: miniMenu.MenuItem[] = [];
    if (source!=null) {
        menuItems.insertAt(0, miniMenu.createMenuItem("BACK"));
    }
    for (let i = 0; i< allowedLevels.length; i++ ) {
        menuItems.insertAt(0, miniMenu.createMenuItem(allowedLevels[i]));
    }
    let menu = miniMenu.createMenuFromArray(menuItems);
    menu.onButtonEvent(controller.A, (selection) => {
        switch (selection) {
            case "Saturn": 
            case "Venus":
        }
    });
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, triggerMenu);

function unlock() {
    controller.moveSprite(RickAstleyMunchkin, 100, 0);
    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
        if (RickAstleyMunchkin.vy == 0) {
            RickAstleyMunchkin.vy = -200;
        }
    });
    menuLocked2 = false;
}
function triggerMenu() {
    console.log("hello");
    if (!menuLocked) {
        menuLocked = true;
        worldMenu = miniMenu.createMenu(
            miniMenu.createMenuItem("Levels"),
            miniMenu.createMenuItem("escape"),
        );

        worldMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            console.log("hey");
            switch (selection) {
                case "levels":
                    levelSelector();
                    break;
                case "escape":
                    worldMenu.close();
                    break;
            }
            worldMenu.close()
            menuLocked = false;
        })
    } else {
        menuLocked = false;
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(menuIsVisible)) {
        menuIsVisible = true
        myMenu = miniMenu.createMenu(
            miniMenu.createMenuItem("Party"),
            miniMenu.createMenuItem("Equipment"),
            miniMenu.createMenuItem("Items"),
            miniMenu.createMenuItem("Skills"),
            miniMenu.createMenuItem("Option")
        )
        myMenu.z = 999;
        myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            myMenu.close()
            menuIsVisible = false
        })
    }
})
let location2394 = "125, 244";
let myMenu: miniMenu.MenuSprite = null
let menuIsVisible = false
let menuLocked= false;
let worldMenu: miniMenu.MenuSprite;

let menuLocked2 = false;
let lockedMenuA = () => {

}
let lockedMenuB = () => {

}
let character = {
    name: "BOB",
    favoriteSong: "Unwritten - Natasha Bedingfield",
    likesFavoriteSong: true,

    achievements: [] as string[], // necesssary to make it claim its a string array
    easterEggs: [] as any[],        // no more to say
    
    lastLocation: "Beginning",
    choices: [] as any[],
    inventory: [] as string[],           


    serializedDataStore: "",
    serializedDataStoreSet: false,
}
