# Siyeenove mJoystick Package

![](/image.jpg/)

> Open this page at [https://siyeenove.github.io/pxt-mjoystick/](https://siyeenove.github.io/pxt-mjoystick/)    

This library is designed to drive mJoystick, You can get mjoystick:   
   
[SIYEENOVE](https://siyeenove.com/buy/)   

Product Tutorial: 

[SIYEENOVE](https://siyeenove.com/tutorial/)    

## Code Example   

```JavaScript
mJoystick.buttonCallBack(mJoystick.Button.D, function () {
    if (mJoystick.buttonIsPressed(mJoystick.Button.D)) {
        basic.showNumber(mJoystick.buttonValue(mJoystick.Button.D))
        basic.pause(1000)
    }
})
mJoystick.buttonCallBack(mJoystick.Button.C, function () {
    if (mJoystick.buttonIsPressed(mJoystick.Button.C)) {
        basic.showNumber(mJoystick.buttonValue(mJoystick.Button.C))
        basic.pause(1000)
    }
})
mJoystick.buttonCallBack(mJoystick.Button.B, function () {
    if (mJoystick.buttonIsPressed(mJoystick.Button.B)) {
        basic.showNumber(mJoystick.buttonValue(mJoystick.Button.B))
        basic.pause(1000)
    }
})
mJoystick.buttonCallBack(mJoystick.Button.A, function () {
    if (mJoystick.buttonIsPressed(mJoystick.Button.A)) {
        basic.showNumber(mJoystick.buttonValue(mJoystick.Button.A))
        basic.pause(1000)
    }
})
basic.forever(function () {
    basic.showNumber(mJoystick.joystickValue(mJoystick.Axle.X))
    basic.pause(1000)
    basic.showNumber(mJoystick.joystickValue(mJoystick.Axle.Y))
    basic.pause(1000)
    basic.showNumber(mJoystick.batteryLevel())
    basic.pause(1000)
    mJoystick.vibrationMotor(mJoystick.MotorState.ON)
    basic.pause(1000)
    mJoystick.vibrationMotor(mJoystick.MotorState.OFF)
    basic.pause(1000)
    mJoystick.servo(mJoystick.Servo.Servo1, 0)
    mJoystick.servo(mJoystick.Servo.Servo2, 0)
    mJoystick.servo(mJoystick.Servo.Servo3, 0)
    mJoystick.servo(mJoystick.Servo.Servo4, 0)
    basic.pause(1000)
    mJoystick.servo(mJoystick.Servo.Servo1, 180)
    mJoystick.servo(mJoystick.Servo.Servo2, 180)
    mJoystick.servo(mJoystick.Servo.Servo3, 180)
    mJoystick.servo(mJoystick.Servo.Servo4, 180)
    basic.pause(1000)
})
```

## Supported targets   

* for PXT/microbit   

## License

* MIT   