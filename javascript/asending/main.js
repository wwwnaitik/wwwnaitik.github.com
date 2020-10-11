function second() {
    var a =Number(document.getElementById("first").value) ;
    var b =Number(document.getElementById("Second").value) ;
    var c =Number(document.getElementById("third").value) ;

    if(a>b && b>c){
         alert(a + ", " + b + "," + c + ",")
     }else if (a>c && c>b){
        alert(a + ", " + c + "," + b + ",")
     }else if (b >a && a>c){
        alert(b + ", " + a + "," + c + ",")
     }else if (b>c && c>a){
        alert(b + ", " + c + "," + a + ",")
     }else if (c>b && b>a){
        alert(c + ", " + b + "," + a + ",")
     }else {
        alert(c + ", " + a + "," + b + ",")
     }     

  }