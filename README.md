<!-- short description about the code flow in canvas.js -->
# 1) getContext('2d') :
    Provides the 2D rendering context for the drawing surface of a <canvas> element 
# 2) loadImages function:
    loadImages  function used to make image's object, also have a (callback function) which is used to  draw images through context using drawImage function.   
    Note: This can be done with the help of loop and also with the dynamic values of drawImage function, but for now, I have done this without loop in callback function.
# 3)  Drag images section :
    In this section mouse events are used to make images draggable.
    i) mousedown event is used to calculate  X coordinate of the mouse pointer also maintain the pressed state(variable).  
    ii) mouseup event  is used to set  pressed state and cursor.
    iii) mousemove event check the X coordinat's range (min and max) and allow to drag images.
<!-- short description about the code flow -->

# Instructions to run this Project 
    Open index.htlm on any latest browser(Chrome, Firefox, Safari)
