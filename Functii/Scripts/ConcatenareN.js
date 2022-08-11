function ConcatenareN() {
	setTimeout(function() {
		document.getElementById("I-i0").style.border = "2px solid red";
		unfade(document.getElementById("2-i7z"));
			setTimeout(function() {
				document.getElementById("n-i1").style.border = "2px solid red";
				unfade(document.getElementById("0-i8z"));
					setTimeout(function() {
						document.getElementById("f-i2").style.border = "2px solid red";
						unfade(document.getElementById("2-i9z"));
							setTimeout(function() {
								document.getElementById("o-i3").style.border = "2px solid red";
								unfade(document.getElementById("2-i10z"));
									setTimeout(function() {
										document.getElementById("2-i7z").style.opacity = 0;
										document.getElementById("0-i8z").style.opacity = 0;
										document.getElementById("2-i9z").style.opacity = 0;
										document.getElementById("2-i10z").style.opacity = 0;
										document.getElementById("I-i0").style.border = "";
										document.getElementById("n-i1").style.border = "";
										document.getElementById("f-i2").style.border = "";
										document.getElementById("o-i3").style.border = "";
									},5000);
							},1000);
					},1000);
			},1000);
	},1000);
}


function fade(element) {
    var op = 1; 
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}