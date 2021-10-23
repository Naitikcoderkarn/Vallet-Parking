canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

//Give specific height and width to the car image
green_car_width=75;
green_car_height=100;


background_image = "parkingLot.jpg";
green_car_image = "car2.png";

//Set initial position for a car image.
green_car_x=5;
green_car_y=225;

function add() {
	background_imgTag= new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src= background_image;

	green_car_imgTag= new Image();
	green_car_imgTag.onload= uploadgreencar;
	green_car_imgTag.src= green_car_image;

	
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(green_car_imgTag,green_car_x,green_car_y,green_car_width,green_car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(green_car_y>=0){
		green_car_y-=10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(green_car_y<=200){
		green_car_y_+=10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(green_car_x>=0){
		green_car_x-=10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(green_car_x<=500){
		green_car_x+=10;
		uploadBackground();
		uploadgreencar();
	}
}
