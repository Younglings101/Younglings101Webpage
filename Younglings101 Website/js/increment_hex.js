$(document).ready(function() {
    var count = 0;
    $(window).resize(function() {

        windowSize = $(window).width();
        if (windowSize < 1251 && windowSize > 1100) {
            console.log(count);
            if (count == 0) {
                while (count < 3) {
                    $("ul").append("<li class='hex'><div class='hexIn'><div class='hexLink'></div</div></li>");
                    count++;
                    console.log(count);
                }
            } else if (count > 3) {
                /*while (count > 3) {
                    $("ul").remove(".hex");
                    count--;
                    console.log(count);
                }*/
            }

        };
        if (windowSize < 1101 && windowSize > 1000) {
            if (count == 3) {
                while (count < 6) {
                    $("ul").append("<li class='hex'><div class='hexIn'><div class='hexLink'></div</div></li>");
                    count++;
                    console.log(count);
                }
            } else if (count == 0) {
                while (count < 6) {
                    $("ul").append("<li class='hex'><div class='hexIn'><div class='hexLink'></div</div></li>");
                    count++;
                    console.log(count);
                }
            }
        };
        if (windowSize < 1001 && windowSize > 900) {
            if (count == 6) {
                while (count < 9) {
                    $("ul").append("<li class='hex'><div class='hexIn'><div class='hexLink'></div</div></li>");
                    count++;
                    console.log(count);
                }
            } else if (count == 0) {
                while (count < 9) {
                    $("ul").append("<li class='hex'><div class='hexIn'><div class='hexLink'></div</div></li>");
                    count++;
                    console.log(count);
                }
            }
        };
        if (windowSize < 901 && windowSize > 800) {
            if (count == 9) {
                while (count < 12) {
                    $("ul").append("<li class='hex'><div class='hexIn'><div class='hexLink'></div</div></li>");
                    count++;
                    console.log(count);
                }
            } else if (count == 0) {
                while (count < 12) {
                    $("ul").append("<li class='hex'><div class='hexIn'><div class='hexLink'></div</div></li>");
                    count++;
                    console.log(count);
                }
            }
        };
    });
});