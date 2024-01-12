let body = document.body;

let redColor, greenColor, blueColor;

setInterval(() => {
    redColor = Math.floor(Math.random() * 255) ;
    greenColor = Math.floor(Math.random() * 255) ;
    blueColor = Math.floor(Math.random() * 255) ;

    let rgbColor = `rgb(${redColor},${greenColor},${blueColor})`
    //console.log(rgbColor);

    body.style.backgroundColor = rgbColor;
}, 2000);
