canvas = document.getElementById("canvas_name");
ctx = canvas.getContext("2d");
/*
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.stroke();
*/
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.rect(260 , 155 , 500 , 250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 10;
ctx.arc(380 , 250 , 60 , 0 , 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.arc(515 , 250 , 60 , 0 , 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 10;
ctx.arc(650 , 250 , 60 , 0 , 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 10;
ctx.arc(445 , 310 , 60 , 0 , 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.arc(580 , 310 , 60 , 0 , 360);
ctx.stroke();