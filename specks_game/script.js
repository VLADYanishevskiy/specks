
var objects = $("td");
for(var i = 0 ; i < 15 ; i++){
    
    
        
    var curr_elem_index = ~~(Math.random() * (16 - 0) + 0);
    var cur_obj = objects[curr_elem_index];
    
    if(jQuery.attr( cur_obj , "data-free") === "0"){
        jQuery.attr( cur_obj , "data-free" , "1")
        console.log(cur_obj);
        console.log(jQuery.attr( cur_obj , "data-free"));
        $(cur_obj).html(i).css("text-align" , "center");
    }
    else{
          
        console.log(cur_obj);
        console.log(jQuery.attr( cur_obj , "data-free"));
        i--;
        continue;
    }
    
    
}


$("td").click(function(){
    
    var index = jQuery.attr( this , "data-index" );
    
    var obj = objects[Number(index) - 5];
    console.log(obj);
    if( jQuery.attr( obj, "data-free" ) === "0"    )
    {
        alert(index);
    }
    else{
        alert("no");
    }
        
});