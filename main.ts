input.onButtonPressed(Button.A, function () {
    katakana.showString("ﾏｴ")
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    katakana.showString("ﾃｲｼ")
    radio.sendString("C")
})
input.onButtonPressed(Button.B, function () {
    katakana.showString("ｳｼﾛ")
    radio.sendString("B")
})
radio.setGroup(1)
