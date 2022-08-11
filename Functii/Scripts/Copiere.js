function Copiere() {
	setTimeout(function() {
			fade(document.getElementById("2-i0"));
			fade(document.getElementById("0-i1"));
			fade(document.getElementById("2-i2"));
			fade(document.getElementById("2-i3"));
				setTimeout(function() {
                    document.getElementById("A-i0").style.border = "2px solid red";
                    unfade(document.getElementById("A-i0z"));
                        setTimeout(function() {
                            document.getElementById("t-i1").style.border = "2px solid red";
                            unfade(document.getElementById("t-i1z"));
                                setTimeout(function() {
                                    document.getElementById("e-i2").style.border = "2px solid red";
                                    unfade(document.getElementById("e-i2z"));
                                        setTimeout(function() {
                                            document.getElementById("s-i3").style.border = "2px solid red";
                                            unfade(document.getElementById("s-i3z"));
                                                setTimeout(function() {
                                                    document.getElementById("t-i4").style.border = "2px solid red";
                                                    unfade(document.getElementById("t-i4z"));
                                                        setTimeout(function() {
                                                            document.getElementById("a-i5").style.border = "2px solid red";
                                                            unfade(document.getElementById("a-i5z"));
                                                                setTimeout(function() {
                                                                    document.getElementById("t-i6").style.border = "2px solid red";
                                                                    unfade(document.getElementById("t-i6z"));
                                                                        setTimeout(function() {
                                                                            document.getElementById("A-i0").style.border = "";
                                                                            document.getElementById("t-i1").style.border = "";
                                                                            document.getElementById("e-i2").style.border = "";
                                                                            document.getElementById("s-i3").style.border = "";
                                                                            document.getElementById("t-i4").style.border = "";
                                                                            document.getElementById("a-i5").style.border = "";
                                                                            document.getElementById("t-i6").style.border = "";
                                                                            document.getElementById("A-i0z").style.opacity = 0;
                                                                            document.getElementById("t-i1z").style.opacity = 0;
                                                                            document.getElementById("e-i2z").style.opacity = 0;
                                                                            document.getElementById("s-i3z").style.opacity = 0;
                                                                            document.getElementById("t-i4z").style.opacity = 0;
                                                                            document.getElementById("a-i5z").style.opacity = 0;
                                                                            document.getElementById("t-i6z").style.opacity = 0;
                                                                            document.getElementById("2-i0").style.opacity = 1;
                                                                            document.getElementById("0-i1").style.opacity = 1;
                                                                            document.getElementById("2-i2").style.opacity = 1;
                                                                            document.getElementById("2-i3").style.opacity = 1;
                                                                            document.getElementById("2-i0").style.display = "";
                                                                            document.getElementById("0-i1").style.display = "";
                                                                            document.getElementById("2-i2").style.display = "";
                                                                            document.getElementById("2-i3").style.display = "";
                                                                        },3000);
                                                                },1000);
                                                        },1000);
                                                },1000);
                                        },1000);
                                },1000);
                        },1000);
				},1000);
		},1500);
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