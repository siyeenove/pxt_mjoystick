/*
* This extension library was developed by the SIYEENOVE team.
* Date: March 28, 2022  
*/
//% weight=11 color=#00B0FF block="mJoystick" blockId="mJoystick" icon="\uf085"
namespace mJoystick {
    export enum Axle{
        //%block="x-axle"
        X = 0,
        //%block="y-axle"
        Y = 1
    }

    export enum Button {
        //%block="A"
        A = 0,
        //%block="B"
        B = 1,
        //%block="C"
        C = 2,
        //%block="D"
        D = 3
    }

    export enum MotorState {
        //%block="ON"
        ON = 1,
        //%block="OFF"
        OFF = 0
    }

    export enum Servo {
        //%block="servo-1"
        Servo1 = 1,
        //%block="servo-2"
        Servo2 = 2,
        //%block="servo-3"
        Servo3 = 3,
        //%block="servo-4"
        Servo4 = 4
    }

    function buttonPullUp(){
        pins.setPull(DigitalPin.P5, PinPullMode.PullUp);    // A
        pins.setPull(DigitalPin.P11, PinPullMode.PullUp);   // B
        pins.setPull(DigitalPin.P12, PinPullMode.PullUp);   // C
        pins.setPull(DigitalPin.P8, PinPullMode.PullUp);    // D
    }

    /**
     * This function runs in the background all the time to read the value 
     * of button. 
     * P5 is used for button A.  P11 is used for button B.
     * P12 is used for button C. P8 is used for button D.
     */
    //% group="Button"
    //% weight=140
    //% block="on button %button pressed"
    export function buttonCallBack(button: Button, handler: () => void) {
        //handler is the functional argument to the buttonCallback function and is the block
        //to be executed inside the buttonCallback function generation block.
        
        let isPressedA = false;
        let isPressedB = false;
        let isPressedC = false;
        let isPressedD = false;

        buttonPullUp();

        //A trigger event is registered, and handler is the function to execute to trigger the event.
        if (button == Button.A)
            control.onEvent(98, 3500, handler);
        if (button == Button.B)
            control.onEvent(97, 3500, handler);
        if (button == Button.C)
            control.onEvent(96, 3500, handler);
        if (button == Button.D)
            control.onEvent(95, 3500, handler);
        
        control.inBackground(() => {
            while (true) {
                if (button == Button.A) {
                    if ((pins.digitalReadPin(DigitalPin.P5) == 0) && (isPressedA == false)){
                        //Fires the event registered above（control.onEvent（））
                        control.raiseEvent(98, 3500, EventCreationMode.CreateAndFire);
                        isPressedA = true;
                    }
                    if (pins.digitalReadPin(DigitalPin.P5) == 1) {
                        isPressedA = false;
                    }
                }
                if (button == Button.B) {
                    if ((pins.digitalReadPin(DigitalPin.P11) == 0) && (isPressedB == false)) {
                        //Fires the event registered above（control.onEvent（））
                        control.raiseEvent(97, 3500, EventCreationMode.CreateAndFire);
                        isPressedB = true;
                    }
                    if (pins.digitalReadPin(DigitalPin.P11) == 1) {
                        isPressedB = false;
                    }
                }
                if (button == Button.C) {
                    if ((pins.digitalReadPin(DigitalPin.P12) == 0) && (isPressedC == false)) {
                        //Fires the event registered above（control.onEvent（））
                        control.raiseEvent(96, 3500, EventCreationMode.CreateAndFire);
                        isPressedC = true;
                    }
                    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
                        isPressedC = false;
                    }
                }
                if (button == Button.D) {
                    if ((pins.digitalReadPin(DigitalPin.P8) == 0) && (isPressedD == false)) {
                        //Fires the event registered above（control.onEvent（））
                        control.raiseEvent(95, 3500, EventCreationMode.CreateAndFire);
                        isPressedD = true;
                    }
                    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
                        isPressedD = false;
                    }
                }
                basic.pause(20);
            }
        })
    }

    /**
     * Read mJoystick button values.
     * P5 is used for button A.  P11 is used for button B.
     * P12 is used for button C. P8 is used for button D.
     * Return 0 or 1
     */
    //% group="Button"
    //% block="digital read button %button"
    //% weight=130
    export function buttonValue(button: Button): number {
        let value = 0;
        buttonPullUp();
        if (button == Button.A) {
            value = pins.digitalReadPin(DigitalPin.P5);
        } 
        if (button == Button.B) {
            value = pins.digitalReadPin(DigitalPin.P11);
        }
        if (button == Button.C) {
            value = pins.digitalReadPin(DigitalPin.P12);
        }
        if (button == Button.D) {
            value = pins.digitalReadPin(DigitalPin.P8);
        }
        return value;
    }

    /**
     * Determine whether a button is pressed.
     * P5 is used for button A.  P11 is used for button B.
     * P12 is used for button C. P8 is used for button D.
     * Return true or false
     */
    //% group="Button"
    //% block="button %button is pressed"
    //% weight=130
    export function buttonIsPressed(button: Button): boolean {
        let value = 0;
        buttonPullUp();
        if (button == Button.A) {
            value = pins.digitalReadPin(DigitalPin.P5);
        }
        if (button == Button.B) {
            value = pins.digitalReadPin(DigitalPin.P11);
        }
        if (button == Button.C) {
            value = pins.digitalReadPin(DigitalPin.P12);
        }
        if (button == Button.D) {
            value = pins.digitalReadPin(DigitalPin.P8);
        }
        return value == 0;
    }

    /**
     * Read the X-axis and Y-axis values of the joystick. 
     * P0 is used for X-axis.  P1 is used for Y-axis.
     * Return value: -100 -- +100
     */
    //% group="Joystick"
    //% block="read %axle"
    //% weight=120
    export function joystickValue(axle: Axle): number {
        let value = 0;
        if (axle == Axle.X){
            value = pins.analogReadPin(AnalogPin.P1);
            value = Math.map(value, 0, 1023, 100, -100);
        }
        if (axle == Axle.Y){
            value = pins.analogReadPin(AnalogPin.P0);
            value = Math.map(value, 0, 1023, 100, -100);
        }
        return Math.round(value);
    }
 
    /**
     * Turn on or off the vibration motor, which uses P2.
     * @param state - ON or OFF.
     */
    //% group="Vibration motor"
    //% weight=110
    //% block="set vibration motor %state"
    export function vibrationMotor(state: MotorState): void {
        if(state == MotorState.ON){
            pins.digitalWritePin(DigitalPin.P2, 1);
        }else{
            pins.digitalWritePin(DigitalPin.P2, 0);
        }
    }

    /**
     * To read the battery voltage level, it uses P2.
     * Return 0--100%
     */
    //% group="Battery"
    //% weight=100
    //% block="read 4 AA batteries"
    export function batteryLevel(): number {
        let batLevel = Math.round(pins.analogReadPin(AnalogPin.P2));
        if (batLevel > 310) {  // 310=6V/6/0.0032226, 100%
            batLevel = 310;  
        }
        if (batLevel < 232) {  // 232=4.5V/6/0.0032226, 0%
            batLevel = 232;  
        }
        batLevel = Math.map(batLevel, 232, 310, 0, 100);
        return Math.round(batLevel);
    }

    /**
     * Set the steering gear Angle.
     * P13 is used for servo1. P14 is used for servo2.
     * P15 is used for servo3. P16 is used for servo4.
     */
    //% group="Servo"
    //% weight=100
    //% block="set %servo to %angle °"
    //% angle.min=0 angle.max=180
    //% angle.defl=0
    export function servo(servo : Servo, angle : number): void {
        if(servo == Servo.Servo1){
            pins.servoWritePin(AnalogPin.P13, angle)
        }
        if (servo == Servo.Servo2) {
            pins.servoWritePin(AnalogPin.P14, angle)
        }
        if (servo == Servo.Servo3) {
            pins.servoWritePin(AnalogPin.P15, angle)
        }
        if (servo == Servo.Servo4) {
            pins.servoWritePin(AnalogPin.P16, angle)
        }
    }
}