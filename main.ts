radio.onReceivedString(function (receivedString) {
    basic.showString("adios")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(":)")
})
radio.setGroup(1)
basic.forever(function () {
	
})
