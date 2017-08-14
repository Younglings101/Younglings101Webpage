$(document).ready(function() {
    var count = 0;
    while (count < 8) {
        $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
        count++;
        console.log(count);
    }
    $(window).resize(function() {

        windowSize = $(window).width();
        if (windowSize > 1471) {
            console.log(count);
            if (count > 8) {

                $(".BAYhex").remove();
                count = 0;
                while (count < 8) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };

        if (windowSize < 1470 && windowSize > 1351) {
            console.log(count);
            if (count < 9 || count > 9) {
                $(".BAYhex").remove();
                count = 0;
                while (count < 9) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };

        if (windowSize < 1320 && windowSize > 1201) {
            console.log(count);
            if (count < 11 || count > 11) {
                $(".BAYhex").remove();
                count = 0;
                while (count < 11) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };

        if (windowSize < 1200 && windowSize > 1101) {
            console.log(count);
            if (count < 12 || count > 12) {
                $(".BAYhex").remove();
                count = 0;
                while (count < 12) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };
        if (windowSize < 1100 && windowSize > 1051) {
            console.log(count);
            if (count < 14 || count > 14) {
                $(".BAYhex").remove();
                count = 0;
                while (count < 14) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };
        if (windowSize < 1050 && windowSize > 981) {
            console.log(count);
            if (count < 15 || count > 15) {
                $(".BAYhex").remove();
                count = 0;
                while (count < 15) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };
        if (windowSize < 980 && windowSize > 931) {
            console.log(count);
            if (count < 17 || count > 17) {
                $(".BAYhex").remove();
                count = 0;
                while (count < 17) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };
        if (windowSize < 930 && windowSize > 891) {
            console.log(count);
            if (count < 18 || count > 18) {
                $(".BAYhex").remove();
                count = 0;
                while (count < 18) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };
        if (windowSize < 880 && windowSize > 851) {
            console.log(count);
            if (count < 20 || count > 20) {
                $(".BAYhex").remove();
                count = 0;
                while (count < 20) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };
        if (windowSize < 850 && windowSize > 811) {
            console.log(count);
            if (count < 21 || count > 21) {
                $(".BAYhex").remove();
                count = 0;
                while (count < 21) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };
        if (windowSize < 810 && windowSize > 800) {
            console.log(count);
            if (count < 23 || count > 23) {
                $(".BAYhex").remove();
                count = 0;
                while (count < 23) {
                    $(".BAYhexGrid").append("<li class='BAYhex '><div class = 'BAYhexIn' ><div class = 'BAYhexLink' ></div> </div> </li>");
                    count++;
                    console.log(count);
                }
            }
        };

    });
});