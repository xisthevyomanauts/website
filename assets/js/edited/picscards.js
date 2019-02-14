function doit(i){
    if(document.getElementById('open_card'+i).style.display != "block"){
            document.getElementById('open_card'+i).style.display = "block";
        }
    else{
        document.getElementById('open_card'+i).style.display = "none";
    }
}