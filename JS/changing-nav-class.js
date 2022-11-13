// Code for changing active nav link
    var btns = 
        $("nav ul li  a");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",
                              function () {
            var current = document
                .getElementsByClassName("active");

            current[0].className = current[0]
                .className.replace(" active", "");

            this.className += " active";
        });
    }

    /* Code for changing active 
    link on Scrolling */
    $(window).scroll(function () {
        var distance = $(window).scrollTop();
        $('.page-section').each(function (i) {

            if ($(this).position().top 
                <= distance + 250) {
                  
                    $('nav ul li a.active')
                        .removeClass('active');

                    $('nav ul li  a').eq(i)
                        .addClass('active');
            }
        });
    }).scroll();