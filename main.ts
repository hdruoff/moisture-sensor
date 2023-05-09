let x = 0
let maximum = 1000
let minimum = 370
let differenz = maximum - minimum
basic.forever(function () {
    led.enable(true)
    if (true) {
        x = pins.analogReadPin(AnalogPin.C16) - 736
        x = x / 100
        if (x >= 3) {
            basic.setLedColor(0xff0000)
        } else {
            basic.setLedColor(0x00ff00)
        }
    }
    led.plotBarGraph(
    Math.round(x),
    0
    )
})
