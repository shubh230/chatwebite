//shows #form_part{n} and hides the other parts
function shows_form_part(n){

    var i = 1, p = $("#form_part"+(i).toString());
    while (p.length != 0){
  
        if (i == n){
            p.show("slow");
        }
        else{
            p.hide("slow");        
        }
        i++;
        p = $("#form_part"+(i).toString());
    }
  
  }
  
  