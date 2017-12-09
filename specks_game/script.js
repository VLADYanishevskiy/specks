var objects = $("td");
for (var i = 0; i < 15; i++) {



    var curr_elem_index = ~~(Math.random() * (16 - 0) + 0);
    var cur_obj = objects[curr_elem_index];

    if (jQuery.attr(cur_obj, "data-free") === "0") {
        jQuery.attr(cur_obj, "data-free", "1")
        //console.log(cur_obj);
        //console.log(jQuery.attr( cur_obj , "data-free"));
        $(cur_obj).html(i).css("text-align", "center");
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
            alert(Number(index) - 4);
        }
    }
    catch(err){
        console.log("error catched");
    }
    try {
        if (jQuery.attr(objects[Number(index) + 4], "data-free") === "0") {
            alert(Number(index) + 4);
        }
    }
    catch(err){
        console.log("error catched");
    }
    try {
        if (jQuery.attr(objects[Number(index) + 1], "data-free") === "0") {
            alert(Number(index) + 1);
        }
    }
    catch(err){
        console.log("error catched");
    }
    try {
        if (jQuery.attr(objects[Number(index) - 1], "data-free") === "0") {
            alert(Number(index) - 1);
        }
    }
    catch(err){
        console.log("error catched");
    }



});
