/**
 * bootstrap-navbar-mobile - v1.0.0 - 2019-02-06
 * https://github.com/chigozieorunta/bootstrap-navbar-mobile
 *
 * Copyright (c) 2019 Chigozie Orunta
 * Licensed MIT <https://github.com/chigozieorunta/bootstrap-navbar-mobile/blob/master/LICENSE>
**/

(function($) {	
    $(document).ready(function() { 
        var navbarMobileBtn = document.getElementById("navbar-mobile-btn");
        navbarMobileBtn.onclick = function() {
            if($(".navbar-mobile").css("left") == '-480px') {
                $(".navbar-mobile").css("left", "0px");
            } else {
                $(".navbar-mobile").css("left", "-480px");
            }
        }
    });
})( jQuery ); 
