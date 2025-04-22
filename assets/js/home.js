//CALL 'package' USING package("package_name", "package_type", "message if applicable");
$(document).ready(function(){

    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    window.addEventListener("resize", function(){
        owl_carousel();
    });
    
    function owl_carousel(){
        if (isMobileDevice()) {
            $(".section_3 .cards").addClass("owl-carousel-active");
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    }
                }
            });
        } 
    }
});
