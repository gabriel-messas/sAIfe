var canvas = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var ctx = canvas.getContext("2d");
var ctx2 = canvas2?.getContext("2d");
let color = "#000";
let offsetX = canvas.offsetLeft;
let offsetY = canvas.offsetTop;
let brushthickness = 7;

const methods = {
    isDrawing: false,
    isErasing: false,
    isCreatingRectangle: false,
    isConnectingLine: false,
    isAnalysing: false
};

var selectedRectangleOption = null;

var selectedRectangle1Index = null;
var selectedRectangle2Index = null;

let rectangles = [];
const lines = [];

// set current color
document.querySelector(".color-btn div").style.backgroundColor = color;

//*************************************************************************************************
//*************************************** TOGGLE SIZE LIST ****************************************
//*************************************************************************************************

function sizeList() {
    document.querySelector(".size-list").classList.toggle("show-list");
}

//*************************************************************************************************
//*************************************** SET BRUSH SIZE ******************************************
//*************************************************************************************************

function brushSize() {
    var brushSet = document.getElementsByClassName("size");
    Array.prototype.forEach.call(brushSet, function (element) {
        element.addEventListener("click", function () {
            brushthickness = element.getAttribute("style").substr(11, 2);
        });
    });
}

//*************************************************************************************************
//*************************************** TOGGLE RECTANGLE LIST ***********************************
//*************************************************************************************************

function rectangleList() {
    document.querySelector(".rectangle-list").classList.toggle("show-list");
}

//*************************************************************************************************
//*************************************** SET RECTANGLE TYPE **************************************
//*************************************************************************************************

function rectangleOption() {
    var rectangleOptions = document.getElementsByClassName("rectangleOption");
    Array.prototype.forEach.call(rectangleOptions, function (element) {
        element.addEventListener("click", function () {
            element.style.backgroundColor === "#84ff00";
            toggleRectangleProcess();
            selectedRectangleOption = element.innerHTML.replace(/<wbr>/g, '');
        });
    });
}

//*************************************************************************************************
//**************************************** SET COLOR TO PALETTE ***********************************
//*************************************************************************************************

function setActiveColor() {
    document.querySelector(".color-btn div").style.backgroundColor = color;
    ctx.strokeStyle = color;
    ctx.globalCompositeOperation = "source-over";
}

//*************************************************************************************************
//**************************************** SET COLOR TO BRUSH *************************************
//*************************************************************************************************

function setColor() {
    var palette = document.getElementsByClassName("color");
    Array.prototype.forEach.call(palette, function (element) {
        element.addEventListener("click", function () {
            color = element.getAttribute("style").split("--set-color:")[1];
            setActiveColor();
        });
    });
}

//*************************************************************************************************
//****************************************** COLOR PICKER *****************************************
//*************************************************************************************************

function colorPick() {
    color = document.getElementById("color-picker").value;
    setActiveColor();
}

//*************************************************************************************************
//******************************************* RESIZE CANVAS ***************************************
//*************************************************************************************************

function resize() {
    var imgD = ctx.getImageData(0, 0, canvas.width - 1, canvas.height - 1);
    
    // ctx.canvas.style.width = `${window.innerWidth}px`;
    // ctx.canvas.style.height = `${window.innerHeight * 0.9}px`;
    // if (ctx2) {
    //     ctx2.canvas.style.width = `${window.innerWidth}px`;
    //     ctx2.canvas.style.height = `${window.innerHeight * 0.9}px`;
    // }

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight * 0.9;
    if (ctx2) {
        ctx2.canvas.width = window.innerWidth;
        ctx2.canvas.height = window.innerHeight * 0.9;
    }

    ctx.putImageData(imgD, 0, 0);
}

//*************************************************************************************************
//********************************************** FREE DRAW ****************************************
//*************************************************************************************************

function toggleDrawingProcess() {
    toggle('isDrawing');
    if (methods.isDrawing) {
        document.getElementById("draw").style.backgroundColor = "#84ff00";
    }
}

//*************************************************************************************************
//*************************************** ERASE ***************************************************
//*************************************************************************************************

function erase () {
    toggle('isErasing');
    if (methods.isErasing) {
        ctx.globalCompositeOperation = "destination-out";
        document.getElementById("eraser").style.backgroundColor = "#84ff00";
    } else {
        ctx.globalCompositeOperation = "source-over";
    }
}

//*************************************************************************************************
//********************************************** DRAW RECTANGLE ***********************************
//*************************************************************************************************

function toggleRectangleProcess() {
    toggle('isCreatingRectangle');
    if (methods.isCreatingRectangle) {
        document.getElementById("rectangle").style.backgroundColor = "#84ff00";
    } else {
        selectedRectangleOption = null;
    }
}

//*************************************************************************************************
//************************************** CONNECT LINE *********************************************
//*************************************************************************************************

function toggleConnectionLineProcess() {
    toggle('isConnectingLine');
    if (methods.isConnectingLine) {
        document.getElementById("line").style.backgroundColor = "#84ff00";
    }
}

//*************************************************************************************************
//************************************** ENABLE A METHOD **************************************
//*************************************************************************************************

function toggle(method) {
    Object.keys(methods).forEach(met => {
        if (met == method) {
            methods[met] = !methods[met];
        } else {
            methods[met] = false;
        }
    });
    
    selectedRectangle1Index = null;
    selectedRectangle2Index = null;

    selectedRectangleOption = null;

    ctx.globalCompositeOperation = "source-over";

    document.getElementById("draw").style.backgroundColor = "#ffffff";
    document.getElementById("eraser").style.backgroundColor = "#ffffff";
    document.getElementById("rectangle").style.backgroundColor = "#ffffff";
    document.getElementById("line").style.backgroundColor = "#ffffff";
    document.getElementById("analysis").style.backgroundColor = "#ffffff";

    document.getElementsByClassName('fake-canvas-div')[0].style.display = 'none';
    document.querySelectorAll('[id=danger]').forEach(e => e.remove());
    document.querySelectorAll('[id=explanation-modal]').forEach(e => e.remove());
}

//*************************************************************************************************
//************************************** DOWNLOAD/SAVE CANVAS *************************************
//*************************************************************************************************

function onDownload() {
    const link = document.createElement('a');
    link.download = 'sketch.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
}

function onSave() {
	localStorage.setItem('canvas', canvas.toDataURL());
	localStorage.setItem('rectangles', JSON.stringify(rectangles));

	const ls = { ...localStorage };
	for (const [key, value] of Object.entries(ls)) {
		if (key.includes('-') && !key.includes('saved')) {
			localStorage.setItem(`saved-${key}`, value);
			localStorage.removeItem(key);
		}
		if (key.includes('saved') && !Object.keys(ls).includes(key.replace('saved-', ''))) {
			localStorage.removeItem(key);
		}
	}
}

function onLoad() {
	console.log(1);
	const savedCanvas = localStorage.getItem('canvas');
	let savedCanvasImg = new Image();
    savedCanvasImg.src = savedCanvas;
	savedCanvasImg.onload = () => ctx.drawImage(savedCanvasImg, 0, 0);
	rectangles = JSON.parse(localStorage.getItem('rectangles'));

	console.log(2);

	const ls = { ...localStorage };
	for (const [key, value] of Object.entries(ls)) {
		if (key.includes('saved')) {
			localStorage.setItem(`${key.replace('saved-', '')}`, value);
			// localStorage.removeItem(key);
		}
	}

	console.log(3);
}

//*************************************************************************************************
//***************************************** EVENT LISTENERS ***************************************
//*************************************************************************************************

// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
canvas2.addEventListener("mousedown", mouseDown);
canvas2.addEventListener("mouseenter", mouseDown);
canvas2.addEventListener("mousemove", mouseMove);
canvas2.addEventListener("mouseup", mouseUp);

canvas2.addEventListener("touchstart",(event) => mouseDown(event, true));
canvas2.addEventListener("touchmove", (event) => mouseMove(event, true));
canvas2.addEventListener("touchend", mouseUp);

document.getElementById("color-picker").addEventListener("change", colorPick);

//*************************************************************************************************
//***************************************** METHOD CALLS ******************************************
//*************************************************************************************************

setColor();
resize();
rectangleOption();
brushSize();

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight * 0.9;
if (ctx2) {
    ctx2.canvas.width = window.innerWidth;
    ctx2.canvas.height = window.innerHeight * 0.9;
}