// tests go here; this will not be compiled when this package is used as an extension.

// Read the value of the key D in the background.
mJoystick.buttonCallBack(mJoystick.Button.D, function () {
    // Determine whether the key D has been pressed.
    if (mJoystick.buttonIsPressed(mJoystick.Button.D)) {
        // Displays the value of the key D
        basic.showNumber(mJoystick.buttonValue(mJoystick.Button.D))
        basic.pause(1000)
    }
})

// Read the value of the key C in the background.
mJoystick.buttonCallBack(mJoystick.Button.C, function () {
    // Determine whether the key C has been pressed.
    if (mJoystick.buttonIsPressed(mJoystick.Button.C)) {
        // Displays the value of the key C
        basic.showNumber(mJoystick.buttonValue(mJoystick.Button.C))
        basic.pause(1000)
    }
})

// Read the value of the key B in the background.
mJoystick.buttonCallBack(mJoystick.Button.B, function () {
    // Determine whether the key B has been pressed.
    if (mJoystick.buttonIsPressed(mJoystick.Button.B)) {
        // Displays the value of the key B
        basic.showNumber(mJoystick.buttonValue(mJoystick.Button.B))
        basic.pause(1000)
    }
})

// Read the value of the key A in the background.
mJoystick.buttonCallBack(mJoystick.Button.A, function () {
    // Determine whether the key A has been pressed.
    if (mJoystick.buttonIsPressed(mJoystick.Button.A)) {
        // Displays the value of the key A
        basic.showNumber(mJoystick.buttonValue(mJoystick.Button.A))
        basic.pause(1000)
    }
})

basic.forever(function () {
    // Displays the value of the joystick X-axis.
    basic.showNumber(mJoystick.joystickValue(mJoystick.Axle.X))
    basic.pause(1000)

    // Displays the value of the joystick Y-axis.
    basic.showNumber(mJoystick.joystickValue(mJoystick.Axle.Y))
    basic.pause(1000)

    // Read the power level of 4 AA batteries.
    basic.showNumber(mJoystick.batteryLevel())
    basic.pause(1000)

    // Turn on the vibration motor.
    mJoystick.vibrationMotor(mJoystick.MotorState.ON)
    basic.pause(1000)

    // Turn off the vibration motor.
    mJoystick.vibrationMotor(mJoystick.MotorState.OFF)
    basic.pause(1000)

    // Servo 1-- Servo 4 turns to 0 degrees.
    mJoystick.servo(mJoystick.Servo.Servo1, 0)
    mJoystick.servo(mJoystick.Servo.Servo2, 0)
    mJoystick.servo(mJoystick.Servo.Servo3, 0)
    mJoystick.servo(mJoystick.Servo.Servo4, 0)
    basic.pause(1000)

    // Servo 1-- Servo 4 turns to 180 degrees.
    mJoystick.servo(mJoystick.Servo.Servo1, 180)
    mJoystick.servo(mJoystick.Servo.Servo2, 180)
    mJoystick.servo(mJoystick.Servo.Servo3, 180)
    mJoystick.servo(mJoystick.Servo.Servo4, 180)
    basic.pause(1000)
})