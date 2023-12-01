//*************************************************************************************************
//**************************************** MOUSE DOWN/UP ******************************************
//*************************************************************************************************

// initialize position as 0,0
var currentMousePosition = { x: 0, y: 0 };
var lastMouseDownPosition = { x: 0, y: 0 };

// new position from mouse events
function mouseDown(e, touch) {
    if (touch) {
        currentMousePosition.x = parseInt(e.touches[0].clientX - offsetX);
        currentMousePosition.y = parseInt(e.touches[0].clientY - offsetY);
    } else {
        currentMousePosition.x = parseInt(e.clientX - offsetX);
        currentMousePosition.y = parseInt(e.clientY - offsetY);
    }
    lastMouseDownPosition.x = currentMousePosition.x;
    lastMouseDownPosition.y = currentMousePosition.y;

    if (methods.isConnectingLine) return handleConnectingLine(e);
}

function mouseUp(e) {
    if (e.clientY < canvas.offsetTop) {
        console.log('Click out of canvas');
    }

    if (methods.isCreatingRectangle) {
        // console.log('Creating a rectangle');
        var width = currentMousePosition.x - lastMouseDownPosition.x;
        var height = currentMousePosition.y - lastMouseDownPosition.y;

        ctx.beginPath();
        ctx.rect(lastMouseDownPosition.x, lastMouseDownPosition.y, width, height);
        ctx.strokeStyle = color;
        ctx.lineWidth = brushthickness;
        ctx.stroke();

        // ctx.font = `${width / 10}px serif`;
        // const textWidth = ctx.measureText(selectedRectangleOption).width;
        // ctx.fillText(selectedRectangleOption,
        //     lastMouseDownPosition.x + (width - textWidth) /2,
        //     lastMouseDownPosition.y - 10
        // );

        setupAndPrintText(
            ctx,
            selectedRectangleOption,
            Math.abs(width),
            Math.abs(height),
            lastMouseDownPosition.x + width / 2,
            lastMouseDownPosition.y + height / 2
        );

        rectangles.push({
            x1: Math.min(lastMouseDownPosition.x, currentMousePosition.x),
            y1: Math.min(lastMouseDownPosition.y, currentMousePosition.y),
            x2: Math.max(lastMouseDownPosition.x, currentMousePosition.x),
            y2: Math.max(lastMouseDownPosition.y, currentMousePosition.y),
            width: Math.abs(width),
            height: Math.abs(height),
            type: selectedRectangleOption,
			typeCount: rectangles.filter(r => r.type === selectedRectangleOption).length + 1,
        });

        ctx.beginPath();
        ctx.rect(rectangles[0].x, rectangles[0].y, width, height);
        ctx.strokeStyle = color;
        ctx.lineWidth = brushthickness;
        ctx.stroke();

        // console.log(rectangles);

        toggleRectangleProcess();
    }
}

//*************************************************************************************************
//********************************************** DRAW / MOUSE MOVE ********************************
//*************************************************************************************************

function mouseMove(e, touch) {
    if (methods.isCreatingRectangle) return createRectangle(e, touch); // if a rectangle is being created, do not go further
    if (e.buttons !== 1 && !touch) return; // if mouse is not clicked, do not go further
    if (!methods.isDrawing && !methods.isErasing) return; // if drawing option is not set, do not go further
  
    ctx.beginPath(); // begin the drawing path
    ctx.lineWidth = brushthickness; // width of line
    ctx.lineCap = "round"; // rounded end cap
    ctx.strokeStyle = color; // hex color of line
    ctx.moveTo(currentMousePosition.x, currentMousePosition.y); // from position
    if (touch) {
        currentMousePosition.x = parseInt(e.touches[0].clientX - offsetX);
        currentMousePosition.y = parseInt(e.touches[0].clientY - offsetY);
    } else {
        currentMousePosition.x = parseInt(e.clientX - offsetX);
        currentMousePosition.y = parseInt(e.clientY - offsetY);
    }
    ctx.lineTo(currentMousePosition.x, currentMousePosition.y); // to position
    ctx.closePath();
    ctx.stroke(); // draw it!
}

//*************************************************************************************************
//********************************************** DRAW RECTANGLE ***********************************
//*************************************************************************************************

function createRectangle(e, touch) {
    // ctx.strokeRect(currentMousePosition.x - 50, currentMousePosition.y - 50, 100, 100);

    if (touch) {
        currentMousePosition.x = parseInt(e.touches[0].clientX - offsetX);
        currentMousePosition.y = parseInt(e.touches[0].clientY - offsetY);
    } else {
        currentMousePosition.x = parseInt(e.clientX - offsetX);
        currentMousePosition.y = parseInt(e.clientY - offsetY);
    }

    if(e.buttons === 1 || touch) { // if mouse button is down
        var width = currentMousePosition.x - lastMouseDownPosition.x;
        var height = currentMousePosition.y - lastMouseDownPosition.y;

        if (ctx2) {
            ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.width); // clear canvas
            ctx2.beginPath();
            ctx2.rect(lastMouseDownPosition.x, lastMouseDownPosition.y, width, height);
            ctx2.strokeStyle = color;
            ctx2.lineWidth = brushthickness;
            ctx2.stroke();
        }
    }
}

//*************************************************************************************************
//************************************** CONNECT LINE *********************************************
//*************************************************************************************************

function handleConnectingLine(e) {
    for (var i = 0; i < rectangles.length; i++) {
        let rect = rectangles[i];
        if (lastMouseDownPosition.x >= rect.x1 && lastMouseDownPosition.x <= rect.x2 &&
            lastMouseDownPosition.y >= rect.y1 && lastMouseDownPosition.y <= rect.y2) {
            // console.log("Found rectangle", selectedRectangle1Index, selectedRectangle2Index);

            if (selectedRectangle1Index != null && selectedRectangle1Index != i) {
                // console.log("Setting rectangle 2");
                selectedRectangle2Index = i;
                break;
            } else if (selectedRectangle1Index == null) {
                // console.log("Setting rectangle 1");
                selectedRectangle1Index = i;
                break;
            }
        }
    }

    if (selectedRectangle2Index != null) {
        createConnectingLine();
    }
}

function createConnectingLine() {
    ctx.beginPath(); // begin the drawing path
    ctx.lineWidth = brushthickness; // width of line
    ctx.lineCap = "round"; // rounded end cap
    ctx.strokeStyle = color; // hex color of line

    const rect1 = rectangles[selectedRectangle1Index];

    const r1_top = { x: rect1.x1 + rect1.width / 2, y: rect1.y1 };
    const r1_right = { x: rect1.x2, y: rect1.y1 + rect1.height / 2 };
    const r1_bottom = { x: rect1.x1 + rect1.width / 2, y: rect1.y2 };
    const r1_left = { x: rect1.x1, y: rect1.y1 + rect1.height / 2 };

    const r1_sides = [ r1_top, r1_right, r1_bottom, r1_left ];

    const rect2 = rectangles[selectedRectangle2Index];

    const r2_top = { x: rect2.x1 + rect2.width / 2, y: rect2.y1 };
    const r2_right = { x: rect2.x2, y: rect2.y1 + rect2.height / 2 };
    const r2_bottom = { x: rect2.x1 + rect2.width / 2, y: rect2.y2 };
    const r2_left = { x: rect2.x1, y: rect2.y1 + rect2.height / 2 };

    const r2_sides = [ r2_top, r2_right, r2_bottom, r2_left ];

    var dist = Infinity;

    let x1 = null;
    let x2 = null;
    let y1 = null;
    let y2 = null;
    
    r1_sides.forEach(side1 => {
        r2_sides.forEach(side2 => {
            if (Math.sqrt( Math.pow((side1.x - side2.x), 2) + Math.pow((side1.y - side2.y), 2) ) < dist) {
                dist = Math.sqrt( Math.pow((side1.x - side2.x), 2) + Math.pow((side1.y - side2.y), 2) );
                x1 = side1.x;
                x2 = side2.x;
                y1 = side1.y;
                y2 = side2.y;
                // console.log('got', x1, x2, y1, y2);
            }
        });
    });

    ctx.moveTo(x1, y1); // from position
    ctx.lineTo(x2, y2); // to position
    lines.push({ x1, y1, x2, y2, rect1: rectangles[selectedRectangle1Index], rect2: rectangles[selectedRectangle2Index] });

    ctx.closePath();
    ctx.stroke(); // draw it!

    selectedRectangle1Index = null;
    selectedRectangle2Index = null;

    toggleConnectionLineProcess();
}