//*************************************************************************************************
//*************************************** ANALYSE *************************************************
//*************************************************************************************************

baseImg = null;
baseModal = null;
loadBaseElements();
clearLeftovers();

function analyse () {
    toggle('isAnalysing');
    if (methods.isAnalysing) {
        document.getElementById("analysis").style.backgroundColor = "#84ff00";
    } else {
        document.getElementsByClassName('fake-canvas-div')[0].style.display = 'none';
        document.querySelectorAll('[id=danger]').forEach(e => e.remove());
        document.querySelectorAll('[id=explanation-modal]').forEach(e => e.remove());
        return;
    }

    for (const rectangle of rectangles) {
        if (rectangle.type !== 'Element') {
            buildDangerIcon(rectangle);
        }
    }

    document.getElementsByClassName('fake-canvas-div')[0].style.display = 'block';
}

function buildDangerIcon(rectangle) {
	console.log(rectangle);

    let img = baseImg.cloneNode(true);
    img.style.width = `${rectangle.width * 0.3}px`;
    img.style.height = `${rectangle.width * 0.3}px`;
    img.style.top = `${rectangle.y1 - rectangle.width * 0.3 - 10}px`;
    img.style.left = `${rectangle.x1}px`;

    let modal = baseModal.cloneNode(true);
    modal.innerHTML = getStructuredContentForApplicationPart(rectangle.type, rectangle.typeCount);

    img.onclick = function (e) {
        console.log('Danger clicked');
        if (document.getElementById('explanation-modal')) {
            document.getElementById('explanation-modal').remove();
        } else {
            document.getElementsByClassName('fake-canvas-div')[0].appendChild(modal);
        }
    }
    document.getElementsByClassName('fake-canvas-div')[0].appendChild(img);
}

function loadBaseElements() {
    baseImg = new Image();
    baseImg.src = './assets/danger-alert.svg';
    baseImg.id = 'danger';
    baseImg.style.position = 'absolute';
    baseImg.style.width = '30px';
    baseImg.style.height = '30px';
    
    baseModal = document.createElement("div");
    baseModal.id = 'explanation-modal';
    baseModal.style.position = 'absolute';
    baseModal.style.width = '40%';
    baseModal.style.height = '60%';
    baseModal.style.backgroundColor = 'white';
    baseModal.style.bottom = '30px';
    baseModal.style.left = '30px';
    baseModal.style.borderRadius = '10px';
    baseModal.style.border = '3px solid black';
    baseModal.style.padding = '0 0 1% 1%';
	baseModal.style.overflow = 'auto';
}

function clearLeftovers() {
	const ls = { ...localStorage };
	for (const [key, value] of Object.entries(ls)) {
		if (key.includes('-') && !key.includes('saved')) {
			localStorage.removeItem(key);
		}
	}
}