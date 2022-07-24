input.onButtonPressed(Button.A, function () {
    katakana.showString("マエ")
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    katakana.showString("テイシ")
    radio.sendString("C")
})
input.onButtonPressed(Button.B, function () {
    katakana.showString("ウシロ")
    radio.sendString("B")
})
radio.setGroup(1)
