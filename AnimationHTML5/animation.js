var temp = document.getElementById("canvas");
var first = document.getElementById("template");
var canvas = temp.getContext("2d");
var i = 0, j=0;
var value = 0;
var zoom = 1;
var xaxis = 50;
var x = -75;
var word = "Syncfusion";
var caption = "Deliver innovation with ease";

function begin() {
    canvas.fillStyle = "white";
    setInterval(Logo, 100);
}

function Logo() {
    value++;
    switch (value) {
        case 1:
            canvas.fillRect(0, 70, 30, 30);
            first.style.transform = "rotate(-10deg)";
            break;
        case 2:
            canvas.fillRect(0, 35, 30, 30);
            first.style.transform = "rotate(-20deg)";
            break;
        case 3:
            canvas.fillRect(0, 0, 30, 30);
            first.style.transform = "rotate(-30deg)";
            break;
        case 4:
            canvas.fillRect(35, 70, 30, 30);
            first.style.transform = "rotate(-40deg)";
            break;
        case 5:
            canvas.fillRect(35, 35, 30, 30);
            first.style.transform = "rotate(-50deg)";
            break;
        case 6:
            canvas.fillRect(35, 0, 30, 30);
            first.style.transform = "rotate(-60deg)";
            break;
        case 7:
            canvas.fillRect(70, 0, 30, 30);
            first.style.transform = "rotate(-70deg)";
            break;
        case 8:
            canvas.fillRect(70, 35, 30, 30);
            first.style.transform = "rotate(-80deg)";
            break;
        case 9:
            canvas.fillRect(70, 70, 30, 30);
            first.style.transform = "rotate(0deg)";
            break;
        case 10:
            first.style.marginLeft = "200px";
            temp.width = 800;
            temp.height = 200;
            canvas.fillStyle = "white";
            canvas.fillRect(0, 20, 30, 30);
            canvas.fillRect(35, 20, 30, 30);
            canvas.fillRect(70, 20, 30, 30);
            canvas.fillRect(0, 55, 30, 30);
            canvas.fillRect(35, 55, 30, 30);
            canvas.fillRect(70, 55, 30, 30);
            canvas.fillRect(70, 90, 30, 30);
            canvas.fillRect(35, 90, 30, 30);
            canvas.fillRect(0, 90, 30, 30);
            break;
        case 11:
            canvas.clearRect(70, 20, 30, 30);
            canvas.rotate(-44.85);
            canvas.translate(30, 70);
            break;
        case 12:
            canvas.fillStyle = "white";
            canvas.fillRect(-1, 10, 30, 30);
            canvas.rotate(44.85);
            canvas.translate(0, 0);
            break;
        case 13:
            setInterval(companyName, 100);
            break;
    }
}

function companyName() {
    canvas.font = "bold 72px segoe UI emoji";
    canvas.fillStyle = "white";
    if (i < word.length) {
        canvas.fillText(`${word[i]}`, xaxis, 90);
        xaxis += canvas.measureText(word[i]).width + 1;
        i++;
    }
    else {
        canvas.font = "bold 36px Helvetica";
        canvas.fillText('\u00AE', xaxis, 40);
        setInterval(decreaseZoom, 100);
    }
}

function decreaseZoom() {
    if (zoom > 0.6) {
        first.style.zoom = `${zoom}`;
        zoom -= 0.1;
    }
    else {
        setInterval(end, 1000);
    }
}

function end() {
    canvas.font = "28px Helvetica";
    canvas.fillStyle = "white";
    if (j < caption.length) {
        canvas.fillText(`${caption[j]}`, x, 140);
        x += canvas.measureText(caption[j]).width + 1;
        j++;
    }
    else {
        canvas.font = "24px Helvetica";
        canvas.fillText('\u00AE', x, 125);
    }
}

window.addEventListener("load", begin, false);