function CopiereN() {
	setTimeout(function() {
        document.getElementById("A-i0").style.border = "2px solid red";
        document.getElementById("I-i0").src = "ImagesSiruri/A-i0.png";
            setTimeout(function() {
                document.getElementById("t-i1").style.border = "2px solid red";
                document.getElementById("n-i1").src = "ImagesSiruri/t-i1.png";
                    setTimeout(function() {
                        document.getElementById("e-i2").style.border = "2px solid red";
                        document.getElementById("f-i2").src = "ImagesSiruri/e-i2.png";
                            setTimeout(function() {
                                document.getElementById("s-i3").style.border = "2px solid red";
                                document.getElementById("o-i3").src = "ImagesSiruri/s-i3.png";
                                    setTimeout(function() {
                                        document.getElementById("t-i4").style.border = "2px solid red";
                                        document.getElementById("r-i4").src = "ImagesSiruri/t-i4.png";
                                            setTimeout(function() {
                                                document.getElementById("A-i0").style.border = "";
                                                document.getElementById("t-i1").style.border = "";
                                                document.getElementById("e-i2").style.border = "";
                                                document.getElementById("s-i3").style.border = "";
                                                document.getElementById("t-i4").style.border = "";
                                                document.getElementById("I-i0").src = "ImagesSiruri/I-i0.png";
                                                document.getElementById("n-i1").src = "ImagesSiruri/n-i1.png";
                                                document.getElementById("f-i2").src = "ImagesSiruri/f-i2.png";
                                                document.getElementById("o-i3").src = "ImagesSiruri/o-i3.png";
                                                document.getElementById("r-i4").src = "ImagesSiruri/r-i4.png";
                                            },3000);
                                    },1500);
                            },1500);
                    },1500);
            },1500);
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