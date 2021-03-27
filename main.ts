input.onButtonPressed(Button.A, function () {
    basic.showString("" + (COZIR.Co2()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature()))
})
COZIR.calibrateCo2()
let strip = neopixel.create(DigitalPin.P3, 24, NeoPixelMode.RGB)
basic.showString("Hello!")
basic.showString("Press A to know the co2 and press B to know the temperature.")
radio.setGroup(1)
basic.forever(function () {
    radio.setGroup(1)
    radio.sendNumber(COZIR.Co2())
})
basic.forever(function () {
    radio.setGroup(1)
    if (35 < 35) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (0 < 54) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
