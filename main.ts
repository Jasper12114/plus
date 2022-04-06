basic.forever(function () {
    if (input.acceleration(Dimension.Strength) < 1000) {
        basic.showString("I am on the moon!!")
    } else if (input.acceleration(Dimension.Strength) <= 2000) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (input.acceleration(Dimension.Strength) <= 3000) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            `)
    } else if (input.acceleration(Dimension.Strength) <= 4000) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            # # # . .
            `)
    } else if (input.acceleration(Dimension.Strength) <= 5000) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            # # # # .
            `)
    } else {
        basic.showString("Ik word misselijk!")
    }
})
