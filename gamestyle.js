$(document).ready(function(){
	object.refreshGame();
	$(".test button").mouseover(function(){
		$(this).css({
			"background-color" : "rgba(255, 0, 0, 1)",
			"color" : "#ffffff"
		});
	});
	$(".test button").mouseleave(function(){
		$(this).css({
			"background-color" : "rgba(255, 255, 255, 1)",
			"color" : "#000000"
		});
	});

	$(".start").mouseenter(function(){
		$(this).css({
			"background-color" : "rgba(0, 0, 0, 1)",
			"font-size" : "33px",
			"transition" : "all .2s ease-in .1s"
		})
	})
	$(".start").mouseleave(function(){
		$(this).css({
			"background-color" : "rgba(0, 0, 0, .8)",
			"font-size" : "36px",
			"transition" : "all .2s ease-in"
		})
	})

	$("#closeButton").mouseenter(function(){
		$(this).css({
			"padding" : "8px",
			"font-size" : "24px",
			"background-color" : "rgba(255, 0, 0, 1)",
			"transition" : "all .2s ease-in",
		})
	})

	$("#closeButton").mouseleave(function(){
		$(this).css({
			"padding" : "10px",
			"font-size" : "20px",
			"background-color" : "rgba(255, 0, 0, .8)",
		})
	})

	$(".start").click(function(){
		object.resetGame();
	})

	$(".option button").mouseenter(function(){
		$(this).css({
			"background-color" : "rgba(255, 255, 255, 1)",
			"transition" : "padding .3s ease-in",
			"padding" : "30px 10px"
		})
	})
	$(".option button").mouseleave(function(){
		$(this).css({
			"background-color" : "rgba(230, 230, 230, .8)",
			"transition" : "padding .3s ease-in",
			"padding" : "40px 20px"
		})
	})

	$(".close").mouseenter(function(){
		$(this).css({
			"font-size" : "35px",
			"color" : "rgba(255, 0, 0, 1)",
			"transition" : "all .1s ease-in",
		})
	})

	$(".close").mouseleave(function(){
		$(this).css({
			"font-size" : "36px",
			"padding" : "5px",
			"color" : "rgba(255, 0, 0, .6)",
			"transition" : "all .1s ease-in",
		})
	})

	$(".close, #closeButton").click(function(){
		clearInterval(counter);
		$(".blur").fadeOut(650);
		$(".resultPane").fadeOut(650);
		setTimeout(object.refreshGame, 1500);
	})

	$(".blur").click(function(){
		$(this).css({
			"display" : "none"
		});
		$(".resultPane").css({
			"display" : "none"
		});
		clearInterval(counter);
		object.secondsCounter = 2;
		setTimeout(object.refreshGame, 1000);
	});


	$("#leftPane, #rightPane").click(function(){
		var check = this.innerHTML; 
		if (check == result) {
			object.secondsCounter = 1;
			pickAnswer();
		}
		else {
			clearInterval(counter);
			$(".blur").fadeIn(710);
			$(".resultPane").fadeIn(710);
			returnScore();
			refreshGame();
		}
	})

	$(".strata").css({
		"width" : "100%",
		"height" : "157.4px",
		"margin" : "2px 0px",
		"text-align" : "center",
		"font-family" : "josefin sans",
		"padding" : "",
		"opacity" : ""
	})

	$(".multitask").css({
		"text-align" : "center",
		"font-family" : "josefin sans",
		"padding" : "80px 60px",
		"transition" : "all 1s ease-out 2s",
		"color" : "rgba(255, 255, 255, 1)"
	})

	$("div button").css({
		"width" : "35%",
		"font-size" : "24px",
		"margin-top" : "40px",
		"padding" : "10px",
		"border" : "1px solid #ffffff",
		"background-color" : "rgba(255, 255, 255, 1)",
		"text-align" : "center"
	})

	$(".container").css({
		"width" : "30%",
		"height" : "87%",
		"text-align" : "center",
		"color" : "#ffffff",
		"padding" : "10px",
		"font-family" : "play"
	})

	$(".container1").css({
		"width" : "70%",
		"height" : "87%",
		"text-align" : "center",
		"color" : "#ffffff",
		"font-family" : "play"
	})

	$("div h1").css({
		"padding-top" : "25px",
		"display" : "inline",
	})

	$(".param button").css({
		"padding" : "20px",
		"width" : "25%",
		"margin" : "45px 50px",
		"color" : "rgba(51, 0, 0, 1)",
		"box-shadow" : "5px 5px 20px rgba(0, 0, 0, .3), -2px -2px 20px rgba(0, 0, 0, 0.7)",
		"background-color" : "rgba(255, 255, 255, .9)",
		"font-size" : "36px",
		"font-family" : "josefin sans",
		"font-weight" : "lighter"
	})

	$(".option button").css({
		"padding" : "40px 20px",
		"width" : "30%",
		"margin" : "20px 0px",
		"background-color" : "rgba(230, 230, 230, 1)",
		"text-align" : "center",
		"border" : "0px",
		"box-shadow" : "5px 5px 20px rgba(0, 0, 0, .3), -2px -2px 20px rgba(0, 0, 0, 0.3)",
		"font-family" : "josefin sans",
		"font-size" : "36px",
		"cursor" : "pointer"
	})

	$(".start").css({
		"padding" : "40px",
		"width" : "30%",
		"height" : "156.7px",
		"margin" : "",
		"background-color" : "rgba(0, 0, 0, .8)",
		"text-align" : "center",
		"float" : "right",
		"margin-right" : "0px",
		"color" : "#ffffff",
		"border" : "0px",
		"font-family" : "play, sans-serif",
		"font-size" : "36px",
		"position" : "relative",
		"cursor" : "pointer",
		"transition" : "color 1s ease-in"
	})

	$(".asterisk").css({
		"font-size" : "42px",
		"color" : "#ffffff",
		"padding-top" : "",
		"height" : "auto",
		"font-family" : "play",
	})

	$(".answer").css({
		"font-size" : "42px",
		"color" : "#ffffff",
		"padding-top" : "40px",
		"height" : "auto",
		"font-family" : "play",
	})

	$("#limit").css({
		"transition" : "all .5s ease-out 2s",
		"font-family" : "josefin sans",
		"padding-left" : "100px",
		"color" : "rgba(255, 255, 0 , 1)",
		"font-family" : "play",
		"font-size" : "42px",
		"font-weight" : "bold"
	})

	$("#display").css({
		"padding-left" : "20px",
		"color" : "rgba(191, 150, 0, 1)",
		"font-size" : "64px"
	})

	$(".blur").css({
		"display" : "none",
		"width" : "99%",
		"height" : "100%",
		"background-color" : "rgba(0, 0, 0, .7)",
		"text-align" : "center",
		"position" : "absolute",
		"color" : "#000",
		"font-family" : "play, sans-serif",
		"font-size" : "36px",
		"top" : "0",
	})

	$(".resultPane").css({
		"height" : "auto",
		"width" : "50%",
		"overflow" : "hidden",
		"font-family" : "josefin sans",
		"padding" : "10px 20px",
		"background-color" : "rgba(0, 0, 0, .6)",
		"color" : "rgba(0, 0, 0 , 1)",
		"font-size" : "18px",
		"font-weight" : "lighter",
		"position" : "absolute",
		"top" : "3%",
		"left" : "350px",
		"border-radius" : "10px",
		"display" : "none",
		"text-align" : "center"
	})

	$(".close").css({
		"color" : "rgba(255, 0, 0, .4)",
		"height" : "40px",
		"margin-top" : "1px",
		"margin-right" : "-25px",
		"display" : "inline-block",
		"width" : "100px",
		"font-size" : "36px",
		"padding" : "5px",
		"cursor" : "pointer",
		"position" : "absolute",
		"right" : "0",
		"background-color" : "transparent",
		"border" : "0px"
	})

	$(".hr").css({
		"margin-top" : "60px",
	})

	$(".hr1").css({
		"margin-top" : "-10px",
	})

	$(".showResult").css({
		"height" : "auto",
		"font-size" : "40px",
		"padding" : "5px",
		"text-align" : "center",
		"font-family" : "josefin sans",
		"font-weight" : "lighter",
		"margin-bottom" : "-30px",
		"color" : "rgba(255, 255, 255, .8)",
	})

	$("#closeButton").css({
		"padding" : "10px",
		"color" : "rgba(255, 255, 255, 1)",
		"font-size" : "20px",
		"background-color" : "rgba(255, 0, 0, .7)",
		"border-radius" : "10px",
		"width" : "auto",
		"margin-top" : "",
		"font-family" : "josefin sans",
		"float" : "right",
		"border" : "1px solid transparent",
		"cursor" : "pointer"
	})

	$("img").css({
		"height" : "350px",
		"margin-bottom" : "-30px"
	})

	$("#scoreBlade").css({
		"color" : "rgba(0, 255, 0, 1)",
		"font-size" : "42px",
		"background-color" : "rgba(0, 0, 0, 0)",
		"border-radius" : "10px",
		"width" : "auto",
		"margin-left" : "15px",
		"font-family" : "josefin sans",
		"transition" : "color 1s ease-in"
	})

	$(".yay").css({
		"color" : "rgba(255, 255, 255, .8)",
		"margin" : "10px 0px -55px 0px",
		"font-family" : "josefin sans",
	})
})
