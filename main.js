var shade = "black";
var slider = document.getElementById("my_slider");
var output = document.getElementById("slider_valuetext");
slider.oninput= function(){
    output.innerHTML = this.value;
}



function preload(){

    classifier = ml5.imageClassifier('DoodleNet');
};

function setup(){
    canvas = createCanvas(500 ,500);
    canvas.center();
    background("white");
    canvas.mouseReleased( classifyCanvas);
    synth = window.speechSynthesis;
}
function draw(){

    strokeWeight(output.innerHTML);
    stroke(shade);

    if(mouseIsPressed){
        line( pmouseX , pmouseY , mouseX , mouseY);

    }

};

function clearCanvas(){

    background("white");
}

function classifyCanvas(){

    classifier.classify( canvas , gotResults);
}

function gotResults( error , results){

    if (error){
        console.error(error);

    }

    console.log(results);
    document.getElementById("prediction").innerHTML = " I think it is a " + results[0].label;
    utterThis = new SpeechSynthesisUtterance( results[0].label);
    synth.speak(utterThis);

}


function redcol(){
    shade = "red";
}

function yellowcol(){
    shade = "yellow";
}

function greencol(){
    shade = "green";
}

function bluecol(){
    shade = "blue";
}

function blackcol(){
    shade = "black";
}

function purplecol(){
    shade = "purple";
}

function orangecol(){
    shade = "orange";
}

function pinkcol(){
    shade = "pink";
}

function browncol(){
    shade = "brown";
}


