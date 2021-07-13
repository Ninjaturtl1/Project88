
// Create canvas variable
var canvas=new fabric.Canvas("myCanvas");
//Set initial positions for ball and hole images.

ball_object = "";
ball_y=0;
ball_x=0;
ball_width = 5;
ball_height = 5;

hole_object = "";
hole_y=450;
hole_x=750;
hole_width = 50;
hole_height = 50;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_object = Img;

		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);
		hole_object.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_object);
		new_image();
	});
	
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_object = Img;

		ball_object.scaleToWidth(50);
		ball_object.scaleToHeight(50);
		ball_object.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_object);
		document.getElementById("game_over").innerHTML="You win!";
	}
	else{
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
		if (ball_y >= 0){
			ball_y=ball_y-hole_height;
			console.log("Ball is at X = "+ball_x+" and Y = "+ball_y);
			console.log("Hole height is "+hole_height);
			canvas.remove(ball_object);
			new_image();
		}
	}

	function down()
	{
		if (ball_y <= 450){
			ball_y=ball_y+hole_height;
			console.log("Ball is at X = "+ball_x+" and Y = "+ball_y);
			console.log("Hole height is "+hole_height);
			canvas.remove(ball_object);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >= 0)
		{
			ball_x=ball_x-hole_width;
        console.log("Ball is at X = "+ball_x+" and Y = "+ball_y);
        console.log("Hole width is "+hole_width);
        canvas.remove(ball_object);
        new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+hole_width;
        console.log("Ball is at X = "+ball_x+" and Y = "+ball_y);
        console.log("Hole width is "+hole_width);
        canvas.remove(ball_object);
        new_image();
		}
	}
	
}

