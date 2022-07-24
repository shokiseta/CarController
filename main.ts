input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("C")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(1)
