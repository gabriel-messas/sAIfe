// Copyright 2022, Gabriel Esteves Messas, All rights reserved.
// Reproduction is allowed, as long as the source is mentioned.

// Prints text in HTML Canvas element with line breaks and proportional size calculations

function setupAndPrintText(context, text, areaWidth, areaHeight, x, y) {
    let size = areaWidth / 7;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillStyle = '#000000';
    context.font = `${size}px Dosis`;

    let lines = text.split(' ');

    let finalLines = [];
    let curIndex = 0;
    while (true) {
        let tempLine = lines[curIndex];
        let nextWord = curIndex + 1;
        if (nextWord >= lines.length) {
            finalLines.push(tempLine);
            break;
        }
        while (context.measureText(tempLine + lines[nextWord]).width <= areaWidth * 0.9) {
            tempLine += (' ' + lines[nextWord]);
            nextWord++;
            if (nextWord === lines.length) {
                break;
            }
        }
        finalLines.push(tempLine);
        curIndex = nextWord;
        if (curIndex >= lines.length) {
            break;
        }
    }

    lines = finalLines;

    // if (context.measureText(text).width > areaWidth * 0.9) {
    //     size = 10;
    //     context.font = `${size}px Dosis`;
    // }

    // if (context.measureText(text).width > areaWidth * 0.9) {
    //     console.log('Não deu', context.measureText(text).width, areaWidth * 0.9);
    //     size = areaWidth / 7;
    //     context.font = `${size}px Dosis`;
    // } else {
    //     lines = [ text ];
    // }

    let longest = 0;
    let longestLine;
    for (let line of lines) {
        if (context.measureText(line).width > longest) {
            longest = context.measureText(line).width;
            longestLine = line;
        }
    }

    const imgHeight = areaHeight;

    // startY gets set to the text initial y here
    let startY = y;
    startY -= imgHeight / 2;
    startY += 0.1 * imgHeight;

    // finalY gets set to the last line of text's Y
    let finalY = y + (imgHeight / 2) - (0.1 * imgHeight);

    const amountOfLines = lines.length;
    let finalLineHeight = (finalY - startY) / amountOfLines;

    size = 1;
    context.font = `${size}px Dosis`;

    const measure = context.measureText(longestLine);
    const increaseRoom = Math.min( ( (areaWidth * 0.9) / measure.width ), ( (finalLineHeight * 0.9) / (measure.fontBoundingBoxAscent + measure.fontBoundingBoxDescent) ) );
    size *= increaseRoom;
    context.font = `${size}px Dosis`;

    // startY gets set to the text initial y here
    startY = y;
    startY -= imgHeight / 2;
    startY += 0.1 * imgHeight;
    startY += finalLineHeight * 0.5;

    for (let i = 0; i < lines.length; i++)
        context.fillText( lines[i], x, startY + (i * finalLineHeight) );
}