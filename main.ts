bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    Data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(Data)
    if (Data == "f") {
        wuKong.setAllMotor(-18, -18)
    } else {
        wuKong.stopAllMotor()
    }
})
let Data = ""
bluetooth.startUartService()
basic.forever(function () {
	
})
