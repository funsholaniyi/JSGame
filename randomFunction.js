var counter, second, interval, count, tab, counterResult, result, operate, min, max;
var hint = "Pick the right option!";
var limit = "In 2 Seconds";

var operator = new Array("+", "-", "*");
var size = operator.length - 1;

document.getElementById("leftPane").disabled = true;
document.getElementById("rightPane").disabled = true;

function getRandom(min, max){
	var range = max - min;
	var rand = 1 + Math.random() * range + min;
	return (Math.floor(rand));
}

var object = {
	secondsCounter : 2,
	highScore : 0,
	refreshGame : function(){
		object.secondsCounter = 2;
		clearInterval(counter);
		document.getElementById("display").innerHTML = object.highScore;
		document.getElementById("starter").innerHTML = "Start Game";
		document.getElementById("x").innerHTML = "Parameter X";
		document.getElementById("z").innerHTML = "Parameter Z";
		document.getElementById("y").innerHTML = "Parameter Y";
		document.getElementById("leftPane").innerHTML = "Option 1"; 
		document.getElementById("rightPane").innerHTML = "Option 2";
		document.getElementById("leftPane").disabled = "true"; 
		document.getElementById("rightPane").disabled = "true";
		document.getElementById("limit").innerHTML = "In " + object.secondsCounter + " Seconds";
	},

	resetGame : function(){
		clearInterval(counter);
		this.startGame();
		object.secondsCounter = 1;
		highScore = 0;
		document.getElementById("display").innerHTML = highScore;
	},

	countDown : function (){
		if (object.secondsCounter == -1) {
			$(".blur").fadeIn(1000);
			$(".resultPane").fadeIn(1000);
			clearInterval(counter);
			returnScore();
		}
		document.getElementById("limit").innerHTML = "In " + object.secondsCounter + " Seconds";
		object.secondsCounter --;
	},

	startGame : function(){
		document.getElementById("leftPane").disabled = false;
		document.getElementById("rightPane").disabled = false;
		counter = setInterval(this.countDown, 1000);
		var operand1 = getRandom(0, 11); 
		var operand2 = getRandom(0, 11);
		var sign = operator[getRandom(0, size)];
		
		if (sign == "+") {
			result = operand1 + operand2;
		}
		else if (sign == "-") {
			result = operand1 - operand2; 
		}
		else if (sign == "*") {
			result = operand1 * operand2;
		}

		counterResult = Math.floor(result * 3 / 2 + 5) ;

		var panes = new Array("leftPane", "rightPane");
		
		var even = getRandom(1, 1001);

		if (even % 2 == 0) {
			count = 0;
			tab = 1;
		}
		else{
			count = 1;
			tab = 0;
		}

		document.getElementById("starter").innerHTML = "Restart Game";
		document.getElementById("x").innerHTML = operand1;
		document.getElementById("z").innerHTML = operand2;
		document.getElementById("y").innerHTML = sign;
		document.getElementById("notice").innerHTML = hint; 
		document.getElementById("limit").innerHTML = limit;
		document.getElementById(panes[count]).innerHTML = result;
		document.getElementById(panes[tab]).innerHTML = counterResult;
	}
}

function pickAnswer(){
	clearInterval(counter);
	highScore = highScore + 5;
	document.getElementById("display").innerHTML = highScore;
	object.startGame();
}

function returnScore(){
	var images = new Array();
	for (var i = 1; i < 25; i++) {
		images[i] = "images/" + i + ".jpg";
	};
	var index = getRandom(0, 26);
	document.getElementById("scoreBlade").innerHTML = highScore + " Points";
	document.getElementsByTagName("img")[0].src = images[index];
	object.secondsCounter = 2;
}

function refreshGame(){
	document.getElementById("display").innerHTML = object.highScore;
	document.getElementById("starter").innerHTML = "Start Game";
	document.getElementById("x").innerHTML = "Parameter X";
	document.getElementById("z").innerHTML = "Parameter Z";
	document.getElementById("y").innerHTML = "Parameter Y";
	document.getElementById("leftPane").innerHTML = "Option 1"; 
	document.getElementById("rightPane").innerHTML = "Option 2";
}

function countDown(){
	for (var i = 0; i < 5; i++) {
		seconds ++;
	};
}


