def dotFunc():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    list2.append(0)

def on_button_pressed_a():
    dotFunc()
input.on_button_pressed(Button.A, on_button_pressed_a)

def lineFunc():
    basic.show_leds("""
        . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
    """)
    list2.append(1)
def Translate():

    line = 0
    dot = 0
    "" + str(list2)
    if dot == 1 and line == 1:
        basic.show_string("A")
    elif dot == 3 and line == 1:
        basic.show_string("B")

def on_button_pressed_b():
    lineFunc()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    Translate()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

list2: List[number] = []

def on_forever():
    pass
basic.forever(on_forever)
