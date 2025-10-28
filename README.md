# Siyeenove mJoystick extension

![](/image.png/)

> Open this page at [https://siyeenove.github.io/pxt-mjoystick/](https://siyeenove.github.io/pxt-mjoystick/)    

This library is designed to drive mJoystick, You can get mjoystick:   
   
[SIYEENOVE](https://siyeenove.com/buy/)   

Product Tutorial: 

[SIYEENOVE](https://siyeenove.com/tutorial/)    

## Code Example   

```JavaScript
// Runs the code when button A is pressed.
mJoystick.buttonCallBack(mJoystick.Button.A, function () {
    // Determine whether the key A has been pressed.
    if (mJoystick.buttonIsPressed(mJoystick.Button.A)) {
        // Displays the value of the key A
        basic.showNumber(mJoystick.buttonValue(mJoystick.Button.A))
        basic.pause(1000)
    }
})
```

```JavaScript
// Read the value of the lever x axis.
basic.forever(function () {
    // Displays the value of the joystick X-axis.
    basic.showNumber(mJoystick.joystickValue(mJoystick.Axle.X))
    basic.pause(200)
})
```

```JavaScript
// Read the value of the lever y axis.
basic.forever(function () {
    // Displays the value of the joystick Y-axis.
    basic.showNumber(mJoystick.joystickValue(mJoystick.Axle.Y))
    basic.pause(200)
})
```

```JavaScript
basic.forever(function () {
    // Turn on the vibration motor.
    mJoystick.vibrationMotor(mJoystick.MotorState.ON)
    basic.pause(1000)

    // Turn off the vibration motor.
    mJoystick.vibrationMotor(mJoystick.MotorState.OFF)
    basic.pause(1000)
})
```


```JavaScript
// Read the power level of 4 AA batteries.
basic.forever(function () {
    // Displays the value of 4 AA batteries.
    basic.showNumber(mJoystick.batteryLevel())
    basic.pause(1000)
})
```

```JavaScript
basic.forever(function () {
    // Servo 1-- Servo 4 turns to 0 degrees.
    mJoystick.servo(mJoystick.Servo.AllServo, 0)
    basic.pause(1000)

    // Servo 1-- Servo 4 turns to 180 degrees.
    mJoystick.servo(mJoystick.Servo.AllServo, 180)
    basic.pause(1000)
})
```

## Supported targets   

* for PXT/microbit   

## License

* MIT   