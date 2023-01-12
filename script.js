const canvas = (function() {
    document.addEventListener("DOMContentLoaded", init);


    // Global variables
    let canvas;   
    let ctx;


    // Initializing global variables
    function init() {
        canvas = document.getElementById("myCanvas"); 
        ctx = canvas.getContext("2d");
        canvas.width = 1920;
        canvas.height = 1080;
        canvas.style.width = "100%";
        canvas.style.height= "100%";



        drawBackground();
        drawClouds();
        drawTree();

        drawHouse();

    }

    function drawBackground() {
        ctx.fillStyle = "green";
        ctx.fillRect(0, 800, 1920, 400);
    }

    function drawClouds() {

        ctx.fillStyle = "white";

        // Left cloud
        ctx.beginPath();
        ctx.arc(200, 200, 50, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(300, 200, 75, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(400, 200, 75, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(490, 180, 60, 0, 2 * Math.PI, false);
        ctx.fill();


        // Right cloud
        ctx.beginPath();
        ctx.arc(1200, 200, 70, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1300, 200, 90, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1400, 220, 70, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1425, 180, 70, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1500, 220, 70, 0, 2 * Math.PI, false);
        ctx.fill();


    }


    function drawTree() {
        ctx.fillStyle = "brown";
        ctx.fillRect(1375, 450, 75, 450);

       

        // Leaves
        ctx.fillStyle = "green";

        ctx.beginPath();
        ctx.arc(1300, 450, 80, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1325, 350, 70, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1400, 320, 70, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1475, 350, 70, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1525, 430, 50, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1400, 450, 100, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1480, 480, 60, 0, 2 * Math.PI, false);
        ctx.fill();

        // Apples 
        ctx.fillStyle = "red";

        ctx.beginPath();
        ctx.arc(1260, 450, 20, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1370, 470, 10, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1350, 350, 15, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1470, 320, 10, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1440, 420, 15, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(1490, 490, 10, 0, 2 * Math.PI, false);
        ctx.fill();


    }

    function drawHouse() {
        // House
        ctx.fillStyle = "red";
        ctx.fillRect(400, 400, 700, 500);

        ctx.beginPath();
        ctx.moveTo(400, 400);
        ctx.lineTo(1100, 400);
        ctx.lineTo(750, 100);
        ctx.fill();

        // Windows
        ctx.fillStyle = "lightblue";
        ctx.fillRect(500, 500, 125, 125);
        ctx.fillRect(875, 500, 125, 125);

        ctx.fillStyle = "brown";
        ctx.fillRect(560, 500, 5, 125);
        ctx.fillRect(500, 560, 125, 5);

        ctx.fillRect(935, 500, 5, 125);
        ctx.fillRect(875, 560, 125, 5);


        // Door
        ctx.fillStyle = "lightbrown";
        ctx.fillRect(700, 725, 100, 175);

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(715, 805, 5, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.fillRect(715, 802.5, 15, 5);


        // Outline
        ctx.strokeStyle = "white";
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(1095, 410);
        ctx.lineTo(745, 100);
        ctx.stroke();
        ctx.moveTo(405, 410);
        ctx.lineTo(755, 100);
        ctx.stroke();

        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(1098, 405);
        ctx.lineTo(745, 90);
        ctx.stroke();
        ctx.moveTo(402, 405);
        ctx.lineTo(755, 90);
        ctx.stroke();

        ctx.fillStyle = "white";
        ctx.rotate(0 * Math.PI / 180);
        ctx.fillRect(400, 400, 20, 500);
        ctx.fillRect(1080, 400, 20, 500);



    }




})()