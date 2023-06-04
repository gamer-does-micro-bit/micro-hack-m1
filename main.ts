basic.forever(function () {
    turtle.setSpeed(100)
    turtle.forward(3)
    turtle.back(3)
    input.buttonIsPressed(Button.A)
    basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    # # # # .
    `)
})
