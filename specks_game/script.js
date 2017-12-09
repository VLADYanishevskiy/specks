var objects = $("td");
var quantity_of_moves = 0 ;
for (var i = 0; i < 15; i++) {



    var curr_elem_index = ~~(Math.random() * (16 - 0) + 0);
    var cur_obj = objects[curr_elem_index];

    if (jQuery.attr(cur_obj, "data-free") === "0") {
        jQuery.attr(cur_obj, "data-free", "1")
        //console.log(cur_obj);
        //console.log(jQuery.attr( cur_obj , "data-free"));
        $(cur_obj).html(i + 1);
    } else {

        // console.log(cur_obj);
        // console.log(jQuery.attr( cur_obj , "data-free"));
        i--;
        continue;
    }


}


$("td").click(function () {
    var index = jQuery.attr(this, "data-index");

    try {
        if (jQuery.attr(objects[Number(index) - 4], "data-free") === "0") {
            jQuery.attr(this, "data-free" , "0");
            jQuery.attr(objects[Number(index) - 4], "data-free" , "1");
            var save_value = $(objects[Number(index)]).html();
            $(objects[Number(index)]).html(" ");
            $(objects[Number(index) - 4]).html(save_value);
            check();
        }
    }
    catch(err){
        
    }
    try {
        if (jQuery.attr(objects[Number(index) + 4], "data-free") === "0") {
            jQuery.attr(this, "data-free" , "0");
            jQuery.attr(objects[Number(index) + 4], "data-free" , "1");
            var save_value = $(objects[Number(index)]).html();
            $(objects[Number(index)]).html(" ");
            $(objects[Number(index) + 4]).html(save_value);
            check();
        }
    }
    catch(err){
        
    }
    try {
        if (jQuery.attr(objects[Number(index) + 1], "data-free") === "0") {
           jQuery.attr(this, "data-free" , "0");
            jQuery.attr(objects[Number(index) + 1], "data-free" , "1");
            var save_value = $(objects[Number(index)]).html();
            $(objects[Number(index)]).html(" ");
            $(objects[Number(index) +  1]).html(save_value);
            check();
        }
    }
    catch(err){
        
    }
    try {
        if (jQuery.attr(objects[Number(index) - 1], "data-free") === "0") {
            jQuery.attr(this, "data-free" , "0");
            jQuery.attr(objects[Number(index) - 1], "data-free" , "1");
            var save_value = $(objects[Number(index)]).html();
            $(objects[Number(index)]).html(" ");
            $(objects[Number(index) - 1]).html(save_value);
            check();
        }
    }
    catch(err){
        
    }



});


function check(){
    $("div").html("Количество ходов : " + ++quantity_of_moves);
    var win = true ;
    for(var i = 0 ; i < 15 ;  i++){
        console.log(i + 1);
        console.log($(objects[i]).html());
        if( String(i + 1) === $(objects[i]).html()){
            continue;
        }
        else{
            win = false ;
            break;
        }
    }
    if(win) 
    {
        alert("You win !!!!!");
    }
    return win;
}