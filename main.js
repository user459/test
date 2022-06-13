function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function clearcanvas(){
background("white");
}
function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}
function classifyCanvas(){
classifier.classify(canvas.gotresult);
}
function draw(){
strokeWeight(10);
    stroke(0);
    if(mouseIsPressed){
line(pmouseX,pmouseY, mouseX, mouseY);
    }
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    document.getElementById("label").innerHTML="label="+results[0].label;
    document.getElementById("confidence").innerHTML="confidence="+Math.round(results[0].confidence*100)+"%";
    utterthis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterthis);
}