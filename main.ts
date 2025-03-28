/*
* This extension library was developed by the SIYEENOVE team.
* Date: March 28, 2022  
*/
//% weight=11 color=#008C8C block="mJoystick" blockId="mJoystick" icon="\uf085"
namespace mJoystick {
    export enum Axle{
        //%block="X-axle(P0)"
        X = 0,
        //%block="Y-axle(P1)"
        Y = 1
    }

    export enum Button {
        //%block="A(P5)"
        A = 0,
        //%block="B(P11)"
        B = 1,
        //%block="C(P12)"
        C = 2,
        //%block="D(P8)"
        D = 3
    }

    export enum MotorState {
        //%block="ON"
        ON = 1,
        //%block="OFF"
        OFF = 0
    }

    /**
      * This function runs in the background all the time to read the value 
      * of button
      */
    //% group="mJoystick"
    //% weight=140
    //% block="on button %button pressed"
    export function buttonCallBack(button: Button, handler: () => void) {
        //handler is the functional argument to the buttonCallback function and is the block
        //to be executed inside the buttonCallback function generation block.
        
        let isPressedA = false;
        let isPressedB = false;
        let isPressedC = false;
        let isPressedD = false;

        //A trigger event is registered, and handler is the function to execute to trigger the event.
        if (button == Button.A)
            control.onEvent(98, 3500, handler)
        if (button == Button.B)
            control.onEvent(97, 3500, handler)
        if (button == Button.C){
            control.onEvent(96, 3500, handler)
            pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
        }
        if (button == Button.D){
            control.onEvent(95, 3500, handler)
            pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
        }

        control.inBackground(() => {
            while (true) {
                if (button == Button.A) {
                    if ((pins.digitalReadPin(DigitalPin.P5) == 0) && (isPressedA == false)){
                        //Fires the event registered above（control.onEvent（））
                        control.raiseEvent(98, 3500, EventCreationMode.CreateAndFire)
                        isPressedA = true;
                    }
                    if (pins.digitalReadPin(DigitalPin.P5) == 1) {
                        isPressedA = false;
                    }
                }
                if (button == Button.B) {
                    if ((pins.digitalReadPin(DigitalPin.P11) == 0) && (isPressedB == false)) {
                        //Fires the event registered above（control.onEvent（））
                        control.raiseEvent(97, 3500, EventCreationMode.CreateAndFire)
                        isPressedB = true;
                    }
                    if (pins.digitalReadPin(DigitalPin.P11) == 1) {
                        isPressedB = false;
                    }
                }
                if (button == Button.C) {
                    if ((pins.digitalReadPin(DigitalPin.P12) == 0) && (isPressedC == false)) {
                        //Fires the event registered above（control.onEvent（））
                        control.raiseEvent(96, 3500, EventCreationMode.CreateAndFire)
                        isPressedC = true;
                    }
                    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
                        isPressedC = false;
                    }
                }
                if (button == Button.D) {
                    if ((pins.digitalReadPin(DigitalPin.P8) == 0) && (isPressedD == false)) {
                        //Fires the event registered above（control.onEvent（））
                        control.raiseEvent(95, 3500, EventCreationMode.CreateAndFire)
                        isPressedD = true;
                    }
                    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
                        isPressedD = false;
                    }
                }
                basic.pause(20)
            }
        })
    }

    /**
     * Read mJoystick button values.
     * Return value: -100 -- +100
     */
    //% group="mJoystick"
    //% block="digital read button %button"
    //% weight=130
    export function buttonValue(button: Button): number {
        let value = 0;
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
     * Return value: -100 -- +100
     */
    //% group="mJoystick"
    //% block="button %button is pressed"
    //% weight=130
    export function buttonIsPressed(button: Button): boolean {
        let value = 0;
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
     * Read mJoystick X and Y axis values.
     * Return value: -100 -- +100
     */
    //% group="mJoystick"
    //% block="read %axle"
    //% weight=120
    export function joystickValue(axle: Axle): number {
        let value = 0;
        if(axle = Axle.X){
            value = pins.analogReadPin(AnalogPin.P0);
        }else{
            value = pins.analogReadPin(AnalogPin.P1);
        }
        value = Math.map(value, -100, 100, 0, 1023)
        return value;
    }

    /**
     * Turn on or off the vibration motor.
     * @param state - ON or OFF.
     */
    //% group="mJoystick"
    //% weight=110
    //% block="vibration motor(P2) %state"
    export function vibrationMotor(state: MotorState): void {
        if(state == MotorState.ON){
            pins.digitalWritePin(DigitalPin.P2, 1)
        }else{
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }

    /**
     * Read the battery voltage level.
     * Return 0--100
     */
    //% group="mJoystick"
    //% weight=100
    //% block="read 4 AA batteries(P2)"
    export function batteryLevel(): number {
        let batLevel = pins.analogReadPin(AnalogPin.P2);
        if (batLevel > 310) {  // 310=6V/6/0.0032226, 100%
            batLevel = 310;  
        }
        if (batLevel < 232) {  // 232=4.5V/6/0.0032226, 0%
            batLevel = 232;  
        }
        batLevel = Math.map(batLevel, 0, 100, 232, 310)
        return batLevel;
    }
}