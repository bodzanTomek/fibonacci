window.addEventListener('load', () => {



    var rgb, r = 0,
        g, b, i = 1;
    var $color = $("#colorPicker");
    var $div;
    var $suwak = $("#r");
    rysuj();
    $suwak.on("change", function() {
        r = $suwak.val();
        rysuj1();
    });

    function rysuj() {
        for (g = 0; g < 260; g += 10) {
            for (b = 0; b < 260; b += 10) {
                $div = $('<div id=' + i + '>');
                $color.append($div);
                rgb = "rgb(" + r + "," + g + "," + b + ")";
                $div.css("background-color", rgb);
                $div.css('width', 10 + "px");
                $div.css('height', 10 + "px");
                $div.css("float", "left");
                i++;
            }

        }
    }

    function rysuj1() {
        i = 1;
        for (g = 0; g < 260; g += 10) {
            for (b = 0; b < 260; b += 10) {
                $div = $('#' + i);
                rgb = "rgb(" + r + "," + g + "," + b + ")";
                $div.css("background-color", rgb);
                i++;
            }

        }
    }





});