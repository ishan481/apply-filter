function preload(){

}

function setup(){
    canvas= createCanvas(640,480);
    canvas.position(150,150);
    Video=createCapture(Video);
    Video.hide();
    tint_color=""

}

function draw(){
     image(Video,0,0,640,480);
     tint(tint_color);


}

function take_snapshot(){
       save('name.png');
}

function filter_tint(){
    tint_color=document.getElementById("colour_name").value;
}