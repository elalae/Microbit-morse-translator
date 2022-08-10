function dotFunc () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    list2.push(0)
}
input.onButtonPressed(Button.A, function () {
    dotFunc()
})
function lineFunc () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    list2.push(1)
}
function Translate () {
    let code = list2.join('');
switch (code) {
        case "01":
            basic.showString("A");
            break;
        case "1000":
            basic.showString("B");
            break;
        case "1010":
            basic.showString("C");
            break;
        case "100":
            basic.showString("D");
            break;
        case "0":
            basic.showString("E");
            break;
        case "0010":
            basic.showString("F");
            break; 
        case "110":
            basic.showString("G");
            break;  
        case "0000":
            basic.showString("H");
            break; 
        case "00":
            basic.showString("I");
            break;
        case "0111":
            basic.showString("J");
            break;
        case "101":
            basic.showString("K");
            break;
        case "0100":
            basic.showString("L");
            break;    
        case "11":
            basic.showString("M");
            break;
        case "10":
            basic.showString("N");
            break;  
        case "111":
            basic.showString("O");
            break;    
        case "0110":
            basic.showString("P");
            break; 
        case "1101":
            basic.showString("Q");
            break;
        case "010":
            basic.showString("R");
            break;
        case "000":
            basic.showString("S");
            break;
        case "1":
            basic.showString("T");
            break;
        case "001":
            basic.showString("U");
            break;
        case "0001":
            basic.showString("V");
            break;
        case "011":
            basic.showString("W");
            break;
        case "1001":
            basic.showString("X");
            break; 
        case "1011":
            basic.showString("Y");
            break;     
        case "1100":
            basic.showString("Z");
            break; 
        default:
        basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
             
    }
}
input.onButtonPressed(Button.B, function () {
    lineFunc()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index <= list2.length; index++) {
        list2.pop()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Translate()
})
let list2: number[] = []
basic.forever(function () {
	
})
