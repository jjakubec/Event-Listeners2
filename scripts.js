/*$('.fun').on('click', () => {
  $('.fun').css("background-color", "red");
});*/

clicked = true;
    $(document).ready(function(){
        $("input").click(function(){
            if(clicked){
                $(this).css('background-color', 'red');
                clicked  = false;
            } else {
                $(this).css('background-color', 'blue');
                clicked  = true;
            }   
        });
    });