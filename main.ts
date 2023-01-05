bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    Data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(Data)
    if (Data == "f") {
        wuKong.setAllMotor(-18, -18)
    }
    if (Data == "b") {
        wuKong.setAllMotor(20, 20)
    }
    if (Data == "r") {
        wuKong.stopAllMotor()
    }
})
let Data = ""
bluetooth.startUartService()
wuKong.stopAllMotor()
basic.forever(function () {
	
})
