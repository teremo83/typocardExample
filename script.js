

function changeColor(){

    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    var color = "rgb("+r+","+g+","+b+")";
    var text = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#FFFFFF';

    document.body.style.background = color;
    document.body.style.color = text;

}



document.body.addEventListener("click",changeColor);

setInterval(changeColor,5000);