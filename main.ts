let math = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    math = 0
    math += math * 2
    basic.showNumber(0)
})
basic.forever(function () {
	
})
